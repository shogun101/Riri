const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const params = new URLSearchParams(location.search);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

const isEmpty = (v) =>
  v == null ||
  (typeof v === "string" && (v.trim() === "" || v.startsWith("[EMPTY"))) ||
  (Array.isArray(v) && v.every(isEmpty));

const get = (obj, path) => path.split(".").reduce((o, k) => o?.[k], obj);
const esc = (s) => s.replace(/[<>&]/g, (m) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[m]);

const toast = (() => {
  const el = $(".toast");
  let t;
  return (msg) => {
    el.textContent = msg;
    el.classList.add("is-on");
    clearTimeout(t);
    t = setTimeout(() => el.classList.remove("is-on"), 2600);
  };
})();

// Photos on the clothesline, in the order they were taken
const TIMELINE = [
  ["9301", "6 sep"],
  ["9523", "24 sep"],
  ["9826", "25 sep"],
  ["0036", "27 sep"],
  ["0220", "28 sep"],
  ["0508", "29 sep"],
  ["0953", "7 oct"],
  ["1226", "18 oct"],
];

/* ---------- ransom note letters ---------- */

// Deterministic so every load cuts the same letters
function rng(seed) {
  let s = seed % 2147483647 || 1;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

const CUTS = [
  { bg: "#151112", fg: "#fbf6ee", ff: "Anton", up: true },
  { bg: "#fffdf8", fg: "#151112", ff: "Bodoni Moda", w: 700 },
  { bg: "#f3c7d2", fg: "#6b1628", ff: "Abril Fatface" },
  { bg: "#efe7d4", fg: "#151112", ff: "Courier Prime", w: 700, paper: true },
  { bg: "#6b1628", fg: "#fbe3e8", ff: "DM Serif Display", it: true },
  { bg: "#fffdf8", fg: "#c0283f", ff: "Archivo Black", up: true },
  { bg: "#e9dfcb", fg: "#151112", ff: "Playfair Display", w: 900, it: true, paper: true },
  { bg: "#d2304f", fg: "#fff", ff: "Bodoni Moda", w: 700, it: true },
];

function roughEdge(r) {
  const j = () => (r() * 9).toFixed(1);
  return `polygon(${j()}% ${j()}%, ${100 - j()}% ${j()}%, 100% ${50 + (r() * 10 - 5).toFixed(1)}%, ${100 - j()}% ${100 - j()}%, ${j()}% 100%, 0 ${50 + (r() * 10 - 5).toFixed(1)}%)`;
}

function ransom(el, seed = 7) {
  const text = el.textContent.trim();
  const r = rng(seed * 97 + text.length * 13);
  el.textContent = "";
  el.setAttribute("aria-label", text);
  let i = 0;
  text.split(/\s+/).forEach((word) => {
    const w = document.createElement("span");
    w.className = "rw";
    w.setAttribute("aria-hidden", "true");
    [...word].forEach((ch) => {
      const c = CUTS[Math.floor(r() * CUTS.length)];
      const l = document.createElement("span");
      l.className = "rl";
      l.textContent = c.up || r() > 0.55 ? ch.toUpperCase() : ch.toLowerCase();
      l.style.cssText = [
        `background:${c.bg}${c.paper ? ' url("assets/deco/newsprint.webp") center / 240px' : ""}`,
        `color:${c.fg}`,
        `font-family:"${c.ff}",serif`,
        `font-weight:${c.w || 400}`,
        c.it ? "font-style:italic" : "",
        `--rr:${(r() * 12 - 6).toFixed(1)}deg`,
        `--ry:${(r() * 0.16 - 0.08).toFixed(2)}em`,
        `--rs:${(0.86 + r() * 0.3).toFixed(2)}`,
        `--cp:${roughEdge(r)}`,
        `--ri:${i++}`,
      ].join(";");
      w.append(l);
    });
    el.append(w);
  });
}

/* ---------- content ---------- */

function fill(c) {
  $$("[data-k]").forEach((el) => {
    const v = get(c, el.dataset.k);
    if (!isEmpty(v)) el.textContent = v;
  });

  const ex = $('[data-list="excerpts"]');
  (c.letterExcerpts || []).forEach((e, i) => {
    const q = document.createElement("blockquote");
    q.className = `ex ex--${e.style}`;
    q.style.setProperty("--r", [-3, 2.5, -1.5, 1, -2.5][i % 5] + "deg");
    q.innerHTML = `${i % 2 ? '<img class="ex__tape" src="assets/deco/washi.webp" alt="">' : ""}<p></p>`;
    q.querySelector("p").textContent = e.text;
    ex.append(q);
  });
  if (!isEmpty(c.letterLink)) $(".excerpts__link").href = c.letterLink;

  const pc = $('[data-list="postcard"]');
  (c.postcard || []).forEach((line) => {
    const s = document.createElement("span");
    s.textContent = line;
    pc.append(s);
  });

  const words = ["Supreme Lord Princess", "Riri", "my favourite person", "my favourite designer"];
  $(".marquee__track").innerHTML = Array(4)
    .fill(words.map((w) => `<span>${esc(w)}</span><b>and</b>`).join(""))
    .join("");

  $$("[data-ransom]").forEach((el, i) => ransom(el, i + 3));
}

/* ---------- home: envelope + gate ---------- */

function intro(c, onDone) {
  const root = $("#intro");
  const form = $("#gate");
  const input = $("#gate-input");
  const msg = $(".gate__msg");
  const norm = (s) => s.toLowerCase().replace(/[^a-z]/g, "");
  const accepted = [c.gate.answer, ...(c.gate.acceptedVariants || [])].map(norm);
  let tries = 0;

  requestAnimationFrame(() => $(".intro__title").classList.add("in"));

  $("#open-env").addEventListener("click", () => {
    if (root.classList.contains("is-opening")) return;
    if (!c.gate?.enabled) return leave();
    root.classList.add("is-opening");
    form.setAttribute("aria-hidden", "false");
    $$("input, button", form).forEach((el) => el.removeAttribute("tabindex"));
    setTimeout(() => input.focus({ preventScroll: true }), 1100);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (accepted.includes(norm(input.value))) {
      input.blur();
      msg.textContent = "correct, obviously";
      form.classList.add("is-open");
      setTimeout(leave, 1200);
      return;
    }
    tries++;
    form.classList.remove("is-wrong");
    void form.offsetWidth;
    form.classList.add("is-wrong");
    msg.textContent = tries >= 2 ? `hint: it starts with ${c.gate.answer[0].toUpperCase()}` : "hmm, try again";
  });

  function leave() {
    onDone();
    root.classList.add("is-leaving");
    setTimeout(() => {
      root.hidden = true;
      document.body.classList.remove("is-locked");
    }, 1200);
  }
}

function openBook() {
  $("#book").hidden = false;
  window.scrollTo(0, 0);
  reveal();
  parallax();
}

/* ---------- sections ---------- */

function timeline() {
  const track = $(".line__track");
  TIMELINE.forEach(([id, date], i) => {
    const card = document.createElement("div");
    card.className = "peg-card";
    card.style.setProperty("--r", (i % 2 ? 2.5 : -2.5) + "deg");
    card.style.setProperty("--d", -i * 0.7 + "s");
    card.style.setProperty("--n", i % 3);
    card.innerHTML = `
      <img class="peg" src="assets/deco/peg.webp" alt="">
      <figure class="pola">
        <img src="assets/us/photo/${id}.webp" alt="Photo from ${date}" loading="lazy" width="800" height="1000">
        <figcaption class="hand">${date}</figcaption>
      </figure>`;
    track.append(card);
  });
}

function postcard() {
  const pc = $(".pc");
  pc.addEventListener("click", () => pc.classList.toggle("is-flipped"));
}

function voiceEgg(c) {
  const audio = $("#voice");
  const src = c.voiceNote?.audioUrl;
  const hasAudio = !isEmpty(src);
  if (hasAudio) audio.src = src;

  $$(".egg-voice").forEach((btn) =>
    btn.addEventListener("click", () => {
      if (!hasAudio) return toast("voice note coming soon");
      audio.currentTime = 0;
      audio.play().catch(() => {});
      $$(".egg-voice").forEach((b) => b.classList.add("is-playing"));
    })
  );
  audio.addEventListener("ended", () => $$(".egg-voice").forEach((b) => b.classList.remove("is-playing")));
}

function stickers() {
  $$(".cut").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.remove("pop");
      void el.offsetWidth;
      el.classList.add("pop");
    })
  );
}

function sparkle() {
  const box = $(".universe__sparkle");
  for (let i = 0; i < 26; i++) {
    const s = document.createElement("i");
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = -Math.random() * 3.2 + "s";
    s.style.animationDuration = 2 + Math.random() * 3 + "s";
    box.append(s);
  }
  const hearts = $(".hearts");
  for (let i = 0; i < 12; i++) {
    const h = document.createElement("i");
    h.style.left = Math.random() * 100 + "%";
    h.style.animationDelay = Math.random() * 7 + "s";
    h.style.scale = (0.5 + Math.random() * 0.8).toFixed(2);
    hearts.append(h);
  }
  $("[data-top]").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- motion ---------- */

function reveal() {
  $$(".board").forEach((b) => $$(".it", b).forEach((el, i) => el.style.setProperty("--i", i % 7)));
  $$(".ex, .excerpts__link, .excerpts__pin, .news, .pc, .ps, .postcard-hint").forEach((el) => el.classList.add("up"));
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        io.unobserve(e.target);
      }),
    { rootMargin: "0px 0px -10% 0px" }
  );
  $$(".it, .up, .peg-card, .book .ransom").forEach((el) => io.observe(el));
}

// Stickers with data-depth drift against the scroll, a little
function parallax() {
  if (reduced) return;
  const els = $$("[data-depth]").map((el) => ({ el, d: parseFloat(el.dataset.depth) }));
  let ticking = false;
  const update = () => {
    const mid = innerHeight / 2;
    els.forEach(({ el, d }) => {
      const r = el.getBoundingClientRect();
      const off = r.top + r.height / 2 - mid;
      el.style.transform = `translate3d(0, ${(off * d).toFixed(1)}px, 0)`;
    });
    ticking = false;
  };
  addEventListener("scroll", () => {
    if (!ticking) requestAnimationFrame(update);
    ticking = true;
  }, { passive: true });
  update();
}

async function main() {
  const c = await fetch("content.json", { cache: "no-store" }).then((r) => r.json());
  fill(c);
  timeline();
  postcard();
  voiceEgg(c);
  stickers();
  sparkle();

  // ?skip jumps straight to the scrapbook while building
  if (params.has("skip")) {
    $("#intro").hidden = true;
    document.body.classList.remove("is-locked");
    openBook();
    return;
  }
  intro(c, openBook);
}

main();
