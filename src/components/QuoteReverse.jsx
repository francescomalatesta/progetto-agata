import { Container } from '@/components/Container'

export function QuoteReverse({ quote, source }) {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-backgroundReverse text-foregroundReverse pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-3xl tracking-tight font-sans sm:text-4xl md:text-5xl">
          <span className='font-display text-9xl'>“</span>
          {quote}</h2>
          <p><span className='font-display text-right text-9xl'>”</span></p>
          <p className='mt-4 text-right'>{source}</p>
        </div>
      </Container>
    </section>
  )
}
