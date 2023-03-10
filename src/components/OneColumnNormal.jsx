import { Container } from '@/components/Container'

export function OneColumnNormal({children}) {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-backgroundNormal text-foregroundNormal py-16"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          {children}
        </div>
      </Container>
    </section>
  )
}
