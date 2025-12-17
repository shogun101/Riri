export default function LoveLetter() {
  return (
    <div className="relative w-full max-w-4xl px-4 md:px-0">
      {/* Textured background paper */}
      <div
        className="relative bg-card rounded-none py-12 px-10 sm:p-10 md:p-16 shadow-2xl"
        style={{
          clipPath: `polygon(
            0% 2%, 2% 0%, 4% 2%, 6% 0%, 8% 2%, 10% 0%, 12% 2%, 14% 0%, 16% 2%, 18% 0%, 20% 2%, 22% 0%, 24% 2%, 26% 0%, 28% 2%, 30% 0%, 32% 2%, 34% 0%, 36% 2%, 38% 0%, 40% 2%, 42% 0%, 44% 2%, 46% 0%, 48% 2%, 50% 0%, 52% 2%, 54% 0%, 56% 2%, 58% 0%, 60% 2%, 62% 0%, 64% 2%, 66% 0%, 68% 2%, 70% 0%, 72% 2%, 74% 0%, 76% 2%, 78% 0%, 80% 2%, 82% 0%, 84% 2%, 86% 0%, 88% 2%, 90% 0%, 92% 2%, 94% 0%, 96% 2%, 98% 0%, 100% 2%,
            98% 4%, 100% 6%, 98% 8%, 100% 10%, 98% 12%, 100% 14%, 98% 16%, 100% 18%, 98% 20%, 100% 22%, 98% 24%, 100% 26%, 98% 28%, 100% 30%, 98% 32%, 100% 34%, 98% 36%, 100% 38%, 98% 40%, 100% 42%, 98% 44%, 100% 46%, 98% 48%, 100% 50%, 98% 52%, 100% 54%, 98% 56%, 100% 58%, 98% 60%, 100% 62%, 98% 64%, 100% 66%, 98% 68%, 100% 70%, 98% 72%, 100% 74%, 98% 76%, 100% 78%, 98% 80%, 100% 82%, 98% 84%, 100% 86%, 98% 88%, 100% 90%, 98% 92%, 100% 94%, 98% 96%, 100% 98%,
            98% 100%, 96% 98%, 94% 100%, 92% 100%, 90% 100%, 88% 100%, 86% 100%, 84% 100%, 82% 100%, 80% 100%, 78% 100%, 76% 100%, 74% 100%, 72% 100%, 70% 100%, 68% 100%, 66% 100%, 64% 100%, 62% 100%, 60% 100%, 58% 100%, 56% 100%, 54% 100%, 52% 100%, 50% 100%, 48% 100%, 46% 100%, 44% 100%, 42% 100%, 40% 100%, 38% 100%, 36% 100%, 34% 100%, 32% 100%, 30% 100%, 28% 100%, 26% 100%, 24% 100%, 22% 100%, 20% 100%, 18% 100%, 16% 100%, 14% 100%, 12% 100%, 10% 100%, 8% 100%, 6% 100%, 4% 100%, 2% 100%,
            0% 98%, 2% 96%, 0% 94%, 2% 92%, 0% 90%, 2% 88%, 0% 86%, 2% 84%, 0% 82%, 2% 80%, 0% 78%, 2% 76%, 0% 74%, 2% 72%, 0% 70%, 2% 68%, 0% 66%, 2% 64%, 0% 62%, 2% 60%, 0% 58%, 2% 56%, 0% 54%, 2% 52%, 0% 50%, 2% 48%, 0% 46%, 2% 44%, 0% 42%, 2% 40%, 0% 38%, 2% 36%, 0% 34%, 2% 32%, 0% 30%, 2% 28%, 0% 26%, 2% 24%, 0% 22%, 2% 20%, 0% 18%, 2% 16%, 0% 14%, 2% 12%, 0% 10%, 2% 8%, 0% 6%, 2% 4%, 0% 2%
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
