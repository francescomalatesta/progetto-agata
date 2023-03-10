import { Container } from '@/components/Container'

export function QuoteNormal({ quote, source}) {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-backgroundNormal text-foregroundNormal py-16"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-3xl tracking-tight font-sans sm:text-4xl md:text-5xl">
          <span className='font-display text-9xl'>“</span>
          {quote}<span style={{ position: 'absolute', right: '15px' }} className='font-display text-right text-9xl'>”</span></h2>
          <p></p>
          <p className='mt-8 text-right'>{source}</p>
        </div>
      </Container>
    </section>
  )
}
