import { Container } from '@/components/Container'

export function TwoColumnsReverse({ left, right }) {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-backgroundReverse text-foregroundReverse py-16"
    >
      <Container className="relative">
      <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className="md:mr-4">
              {left}
            </div>
            <div className="md:ml-4 mt-8 md:mt-0">
              {right}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
