export default function LoveLetter() {
  return (
    <div className="relative w-full max-w-4xl px-4 md:px-0">
      {/* Textured background paper */}
      <div
        className="relative bg-card rounded-none py-12 px-10 sm:p-10 md:p-16 shadow-2xl"
        style={{
          clipPath: `polygon(
            0% 1.5%, 5% 0%, 10% 1%, 15% 0%, 20% 1.5%, 25% 0%, 30% 1%, 35% 0%, 40% 1.5%, 45% 0%, 50% 1%, 55% 0%, 60% 1.5%, 65% 0%, 70% 1%, 75% 0%, 80% 1.5%, 85% 0%, 90% 1%, 95% 0%, 100% 1.5%,
            99% 5%, 100% 10%, 99% 15%, 100% 20%, 99% 25%, 100% 30%, 99% 35%, 100% 40%, 99% 45%, 100% 50%, 99% 55%, 100% 60%, 99% 65%, 100% 70%, 99% 75%, 100% 80%, 99% 85%, 100% 90%, 99% 95%, 100% 98.5%,
            99% 100%, 95% 99%, 90% 100%, 85% 99%, 80% 100%, 75% 99%, 70% 100%, 65% 99%, 60% 100%, 55% 99%, 50% 100%, 45% 99%, 40% 100%, 35% 99%, 30% 100%, 25% 99%, 20% 100%, 15% 99%, 10% 100%, 5% 99%, 0% 98.5%,
            1% 95%, 0% 90%, 1% 85%, 0% 80%, 1% 75%, 0% 70%, 1% 65%, 0% 60%, 1% 55%, 0% 50%, 1% 45%, 0% 40%, 1% 35%, 0% 30%, 1% 25%, 0% 20%, 1% 15%, 0% 10%, 1% 5%, 0% 1.5%
          )`,
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
