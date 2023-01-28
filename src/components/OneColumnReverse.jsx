import { Container } from '@/components/Container'

export function OneColumnReverse({ children }) {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-backgroundReverse text-foregroundReverse pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          {children}
        </div>
      </Container>
    </section>
  )
}
