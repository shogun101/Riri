export default function LoveLetter() {
  return (
    <div className="relative w-full max-w-4xl px-4 md:px-0">
      {/* SVG Border Mask */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="stamp-border" clipPathUnits="objectBoundingBox">
            <path d="M0.0357 0.0007 H0 V0.0250 C0.000476 0.0250 0.000952 0.0250 0.00143 0.0250 C0.0211 0.0250 0.0371 0.0367 0.0371 0.0513 C0.0371 0.0658 0.0211 0.0775 0.00143 0.0775 C0.000952 0.0775 0.000476 0.0775 0 0.0775 V0.0997 C0.0197 0.0997 0.0357 0.111 0.0357 0.126 C0.0357 0.140 0.0197 0.152 0 0.152 V0.174 C0.0197 0.174 0.0357 0.186 0.0357 0.201 C0.0357 0.215 0.0197 0.227 0 0.227 V0.249 C0.0197 0.249 0.0357 0.261 0.0357 0.275 C0.0357 0.290 0.0197 0.302 0 0.302 V0.324 C0.0197 0.324 0.0357 0.335 0.0357 0.350 C0.0357 0.364 0.0197 0.376 0 0.376 V0.398 C0.0197 0.398 0.0357 0.410 0.0357 0.425 C0.0357 0.439 0.0197 0.451 0 0.451 V0.473 C0.0197 0.473 0.0357 0.485 0.0357 0.499 C0.0357 0.514 0.0197 0.526 0 0.526 V0.548 C0.0197 0.548 0.0357 0.559 0.0357 0.574 C0.0357 0.588 0.0197 0.600 0 0.600 V0.622 C0.0197 0.622 0.0357 0.634 0.0357 0.649 C0.0357 0.663 0.0197 0.675 0 0.675 V0.697 C0.0197 0.697 0.0357 0.709 0.0357 0.723 C0.0357 0.738 0.0197 0.750 0 0.750 V0.772 C0.0197 0.772 0.0357 0.783 0.0357 0.798 C0.0357 0.812 0.0197 0.824 0 0.824 V0.846 C0.0197 0.846 0.0357 0.858 0.0357 0.873 C0.0357 0.887 0.0197 0.899 0 0.899 V0.921 C0.0197 0.921 0.0357 0.933 0.0357 0.947 C0.0357 0.962 0.0197 0.974 0 0.974 V1 H0.0357 C0.0357 0.999 0.0357 0.999 0.0357 0.999 C0.0357 0.985 0.0517 0.973 0.0714 0.973 C0.0911 0.973 0.107 0.985 0.107 0.999 C0.107 0.999 0.107 0.999 0.107 1 H0.143 C0.143 0.999 0.143 0.999 0.143 0.999 C0.143 0.985 0.159 0.973 0.179 0.973 C0.198 0.973 0.214 0.985 0.214 0.999 C0.214 0.999 0.214 0.999 0.214 1 H0.250 C0.250 0.999 0.250 0.999 0.250 0.999 C0.250 0.985 0.266 0.973 0.286 0.973 C0.305 0.973 0.321 0.985 0.322 0.999 C0.322 0.999 0.322 0.999 0.322 1 H0.357 C0.357 0.999 0.357 0.999 0.357 0.999 C0.357 0.985 0.373 0.973 0.393 0.973 C0.412 0.973 0.428 0.985 0.429 0.999 C0.429 0.999 0.429 0.999 0.429 1 H0.464 C0.464 0.999 0.464 0.999 0.464 0.999 C0.464 0.985 0.480 0.973 0.500 0.973 C0.519 0.973 0.535 0.985 0.536 0.999 C0.536 0.999 0.536 0.999 0.536 1 H0.571 C0.571 0.999 0.571 0.999 0.571 0.999 C0.571 0.985 0.587 0.973 0.607 0.973 C0.626 0.973 0.642 0.985 0.643 0.999 C0.643 0.999 0.643 0.999 0.643 1 H0.679 C0.679 0.999 0.679 0.999 0.679 0.999 C0.679 0.985 0.695 0.973 0.714 0.973 C0.734 0.973 0.750 0.985 0.750 0.999 C0.750 0.999 0.750 0.999 0.750 1 H0.786 C0.786 0.999 0.786 0.999 0.786 0.999 C0.786 0.985 0.802 0.973 0.821 0.973 C0.841 0.973 0.857 0.985 0.857 0.999 C0.857 0.999 0.857 0.999 0.857 1 H0.893 C0.893 0.999 0.893 0.999 0.893 0.999 C0.893 0.985 0.909 0.973 0.929 0.973 C0.948 0.973 0.964 0.985 0.964 0.999 C0.964 0.999 0.964 0.999 0.964 1 H0.964 C0.981 0.958 1.000 0.928 1.000 0.895 C1.000 0.862 0.981 0.832 0.964 0.790 V0.790 C0.964 0.790 0.964 0.790 0.964 0.790 C0.964 0.776 0.980 0.764 1.000 0.764 V0.739 C0.999 0.739 0.999 0.739 0.999 0.739 C0.980 0.739 0.964 0.727 0.964 0.713 C0.964 0.698 0.980 0.686 0.999 0.686 C0.999 0.686 0.999 0.686 1.000 0.686 V0.661 C0.999 0.661 0.999 0.661 0.999 0.661 C0.980 0.661 0.964 0.649 0.964 0.635 C0.964 0.620 0.980 0.608 0.999 0.608 C0.999 0.608 0.999 0.608 1.000 0.608 V0.583 C0.999 0.583 0.999 0.583 0.999 0.583 C0.980 0.583 0.964 0.571 0.964 0.556 C0.964 0.542 0.980 0.530 0.999 0.530 C0.999 0.530 0.999 0.530 1.000 0.530 V0.505 C0.999 0.505 0.999 0.505 0.999 0.505 C0.980 0.505 0.964 0.493 0.964 0.478 C0.964 0.464 0.980 0.452 0.999 0.452 C0.999 0.452 0.999 0.452 1.000 0.452 V0.427 C0.999 0.427 0.999 0.427 0.999 0.427 C0.980 0.427 0.964 0.415 0.964 0.400 C0.964 0.386 0.980 0.374 0.999 0.374 C0.999 0.374 0.999 0.374 1.000 0.374 V0.348 C0.999 0.348 0.999 0.348 0.999 0.348 C0.980 0.348 0.964 0.336 0.964 0.322 C0.964 0.307 0.980 0.295 0.999 0.295 C0.999 0.295 0.999 0.295 1.000 0.295 V0.270 C0.999 0.270 0.999 0.270 0.999 0.270 C0.980 0.270 0.964 0.258 0.964 0.244 C0.964 0.229 0.980 0.217 0.999 0.217 C0.999 0.217 0.999 0.217 1.000 0.217 V0.192 C0.999 0.192 0.999 0.192 0.999 0.192 C0.980 0.192 0.964 0.180 0.964 0.166 C0.964 0.151 0.980 0.139 0.999 0.139 C0.999 0.139 0.999 0.139 1.000 0.139 V0.114 C0.999 0.114 0.999 0.114 0.999 0.114 C0.980 0.114 0.964 0.102 0.964 0.0876 C0.964 0.0732 0.980 0.0613 0.999 0.0613 C0.999 0.0613 0.999 0.0613 1.000 0.0613 V0.0356 C0.999 0.0356 0.999 0.0356 0.999 0.0356 C0.980 0.0356 0.964 0.0237 0.964 0.00932 C0.964 -0.00506 0.980 -0.0170 0.999 -0.0170 C0.999 -0.0170 0.999 -0.0170 1.000 -0.0170 V0 H0.964 C0.964 0.0243 0.948 0.0441 0.928 0.0441 C0.909 0.0441 0.892 0.0243 0.892 0 H0.857 C0.857 0.0243 0.841 0.0441 0.821 0.0441 C0.802 0.0441 0.785 0.0243 0.785 0 H0.750 C0.750 0.0243 0.733 0.0441 0.714 0.0441 C0.694 0.0441 0.678 0.0243 0.678 0 H0.643 C0.642 0.0243 0.626 0.0441 0.607 0.0441 C0.587 0.0441 0.571 0.0243 0.571 0 H0.536 C0.535 0.0243 0.519 0.0441 0.500 0.0441 C0.480 0.0441 0.464 0.0243 0.464 0 H0.429 C0.428 0.0243 0.412 0.0441 0.393 0.0441 C0.373 0.0441 0.357 0.0243 0.357 0 H0.321 C0.321 0.0243 0.305 0.0441 0.286 0.0441 C0.266 0.0441 0.250 0.0243 0.250 0 H0.214 C0.214 0.0243 0.198 0.0441 0.179 0.0441 C0.159 0.0441 0.143 0.0243 0.143 0 H0.107 C0.107 0.0243 0.0911 0.0441 0.0714 0.0441 C0.0517 0.0441 0.0357 0.0243 0.0357 0 V0.0007 Z M0.928 0.0533 V0.947 H0.0714 V0.0533 H0.928 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Textured background paper */}
      <div
        className="relative bg-card rounded-none py-12 px-10 sm:p-10 md:p-16 shadow-2xl"
        style={{
          clipPath: 'url(#stamp-border)',
        }}
      >
        {/* Header */}
        <h1 className="text-primary text-center text-5xl md:text-7xl font-serif tracking-wider mb-12">A LOVE LETTER</h1>

        {/* TO and FROM fields with stamps */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          {/* Left side - TO and FROM */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <div className="flex items-baseline gap-3">
              <span className="text-primary font-serif text-base tracking-widest">TO:</span>
              <div className="flex-1 border-b-2 border-primary pb-1">
                <span className="text-primary font-script text-3xl">Batman</span>
              </div>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-primary font-serif text-base tracking-widest">FROM:</span>
              <div className="flex-1 border-b-2 border-primary pb-1">
                <span className="text-primary font-script text-3xl">Riri</span>
              </div>
            </div>
          </div>

          {/* Right side - Stamps */}
          <div className="flex gap-4 items-center justify-center md:justify-start">
            {/* First Stamp */}
            <div
              className="relative w-32 h-36 overflow-hidden flex items-center justify-center"
              style={{
                clipPath: `polygon(
                  0% 3%, 3% 0%, 6% 3%, 9% 0%, 12% 3%, 15% 0%, 18% 3%, 21% 0%, 24% 3%, 27% 0%, 30% 3%, 33% 0%, 36% 3%, 39% 0%, 42% 3%, 45% 0%, 48% 3%, 51% 0%, 54% 3%, 57% 0%, 60% 3%, 63% 0%, 66% 3%, 69% 0%, 72% 3%, 75% 0%, 78% 3%, 81% 0%, 84% 3%, 87% 0%, 90% 3%, 93% 0%, 96% 3%, 99% 0%, 100% 3%,
                  100% 6%, 97% 9%, 100% 12%, 97% 15%, 100% 18%, 97% 21%, 100% 24%, 97% 27%, 100% 30%, 97% 33%, 100% 36%, 97% 39%, 100% 42%, 97% 45%, 100% 48%, 97% 51%, 100% 54%, 97% 57%, 100% 60%, 97% 63%, 100% 66%, 97% 69%, 100% 72%, 97% 75%, 100% 78%, 97% 81%, 100% 84%, 97% 87%, 100% 90%, 97% 93%, 100% 96%, 97% 99%, 100% 97%,
                  97% 100%, 94% 97%, 91% 100%, 88% 97%, 85% 100%, 82% 97%, 79% 100%, 76% 97%, 73% 100%, 70% 97%, 67% 100%, 64% 97%, 61% 100%, 58% 97%, 55% 100%, 52% 97%, 49% 100%, 46% 97%, 43% 100%, 40% 97%, 37% 100%, 34% 97%, 31% 100%, 28% 97%, 25% 100%, 22% 97%, 19% 100%, 16% 97%, 13% 100%, 10% 97%, 7% 100%, 4% 97%, 1% 100%, 3% 97%,
                  0% 94%, 3% 91%, 0% 88%, 3% 85%, 0% 82%, 3% 79%, 0% 76%, 3% 73%, 0% 70%, 3% 67%, 0% 64%, 3% 61%, 0% 58%, 3% 55%, 0% 52%, 3% 49%, 0% 46%, 3% 43%, 0% 40%, 3% 37%, 0% 34%, 3% 31%, 0% 28%, 3% 25%, 0% 22%, 3% 19%, 0% 16%, 3% 13%, 0% 10%, 3% 7%, 0% 4%, 3% 3%
                )`,
              }}
            >
              <img src="/images/postagw1.png" alt="Vintage postage stamp" className="w-full h-full object-cover" />
            </div>

            {/* Second Stamp */}
            <div
              className="relative w-32 h-36 overflow-hidden flex items-center justify-center"
              style={{
                clipPath: `polygon(
                  0% 3%, 3% 0%, 6% 3%, 9% 0%, 12% 3%, 15% 0%, 18% 3%, 21% 0%, 24% 3%, 27% 0%, 30% 3%, 33% 0%, 36% 3%, 39% 0%, 42% 3%, 45% 0%, 48% 3%, 51% 0%, 54% 3%, 57% 0%, 60% 3%, 63% 0%, 66% 3%, 69% 0%, 72% 3%, 75% 0%, 78% 3%, 81% 0%, 84% 3%, 87% 0%, 90% 3%, 93% 0%, 96% 3%, 99% 0%, 100% 3%,
                  100% 6%, 97% 9%, 100% 12%, 97% 15%, 100% 18%, 97% 21%, 100% 24%, 97% 27%, 100% 30%, 97% 33%, 100% 36%, 97% 39%, 100% 42%, 97% 45%, 100% 48%, 97% 51%, 100% 54%, 97% 57%, 100% 60%, 97% 63%, 100% 66%, 97% 69%, 100% 72%, 97% 75%, 100% 78%, 97% 81%, 100% 84%, 97% 87%, 100% 90%, 97% 93%, 100% 96%, 97% 99%, 100% 97%,
                  97% 100%, 94% 97%, 91% 100%, 88% 97%, 85% 100%, 82% 97%, 79% 100%, 76% 97%, 73% 100%, 70% 97%, 67% 100%, 64% 97%, 61% 100%, 58% 97%, 55% 100%, 52% 97%, 49% 100%, 46% 97%, 43% 100%, 40% 97%, 37% 100%, 34% 97%, 31% 100%, 28% 97%, 25% 100%, 22% 97%, 19% 100%, 16% 97%, 13% 100%, 10% 97%, 7% 100%, 4% 97%, 1% 100%, 3% 97%,
                  0% 94%, 3% 91%, 0% 88%, 3% 85%, 0% 82%, 3% 79%, 0% 76%, 3% 73%, 0% 70%, 3% 67%, 0% 64%, 3% 61%, 0% 58%, 3% 55%, 0% 52%, 3% 49%, 0% 46%, 3% 43%, 0% 40%, 3% 37%, 0% 34%, 3% 31%, 0% 28%, 3% 25%, 0% 22%, 3% 19%, 0% 16%, 3% 13%, 0% 10%, 3% 7%, 0% 4%, 3% 3%
                )`,
              }}
            >
              <img src="/images/postage-202.png" alt="Vintage postage stamp" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Greeting */}
        <h2 className="text-primary font-script text-5xl md:text-6xl mb-12 text-center">My Love, Riri</h2>

        {/* Letter Body */}
        <div className="text-primary font-script text-xl md:text-2xl leading-relaxed space-y-6 mb-16 px-4 md:px-0">
          <p>
            Mi amor you've been the most colorful addition in my life and bombarded me with all those kisses, you
            introduced me to a new world, held my hand building the bond that we have right now. I have started to
            optimize my actions for "will this make riri smile?", seeing your lips go cheek to cheek makes me feel like
            I'm in a strawberry fram in spring.
          </p>
          <p>
            And I realise I haven't been my best self and have hurt you at times along the way but I promise you I've
            been working hard to overcome them shortcomings and continue building this foundation for our future
            together.
          </p>
          <p>
            I have never been excited about the future more now that you're in it. Grateful to call you mine, I love you
            more than I did yesterday, but less than I will tomorrow.
          </p>
          <p>Buckle up babe. next adventure soon.</p>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0 px-4 md:px-0">
          {/* Date */}
          <div className="text-primary font-script text-4xl md:text-5xl">18/12</div>

          {/* Valentine's text */}
          <div className="text-center">
            <p className="text-primary font-script text-3xl md:text-4xl">Did I tell you?</p>
            <p className="text-primary font-serif text-sm md:text-base tracking-widest">I lub juuu</p>
          </div>

          {/* Postal mark */}
          <div className="relative w-24 h-24">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              {/* Outer circle */}
              <circle cx="50" cy="50" r="40" stroke="#C84B58" strokeWidth="2" fill="none" strokeDasharray="3 2" />
              {/* Inner circle */}
              <circle cx="50" cy="50" r="32" stroke="#C84B58" strokeWidth="2" fill="none" strokeDasharray="3 2" />

              {/* Wavy cancellation lines */}
              <path d="M 55 25 Q 60 20, 65 25 T 75 25 T 85 25" stroke="#C84B58" strokeWidth="2" fill="none" />
              <path d="M 55 32 Q 60 27, 65 32 T 75 32 T 85 32" stroke="#C84B58" strokeWidth="2" fill="none" />
              <path d="M 55 39 Q 60 34, 65 39 T 75 39 T 85 39" stroke="#C84B58" strokeWidth="2" fill="none" />
              <path d="M 55 46 Q 60 41, 65 46 T 75 46 T 85 46" stroke="#C84B58" strokeWidth="2" fill="none" />
              <path d="M 55 53 Q 60 48, 65 53 T 75 53 T 85 53" stroke="#C84B58" strokeWidth="2" fill="none" />
              <path d="M 55 60 Q 60 55, 65 60 T 75 60 T 85 60" stroke="#C84B58" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
