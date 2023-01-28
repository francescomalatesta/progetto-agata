import { Container } from '@/components/Container'

export function QuoteNormal() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-backgroundNormal text-foregroundNormal pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-3xl tracking-tight font-sans sm:text-4xl md:text-5xl">
          <span className='font-display text-9xl'>“</span>
          Le diseguaglianze di genere hanno radici profonde, che riguardano il contesto familiare e della formazione, prima ancora di quello lavorativo. Molti studi mostrano che sono poche le donne iscritte alle materie STEM, nonostante ci siano più donne laureate che uomini.</h2>
          <p><span className='font-display text-right text-9xl'>”</span></p>
          <p className='mt-4 text-right'>Piano nazionale di ripresa e resilienza (2021)</p>
        </div>
      </Container>
    </section>
  )
}
