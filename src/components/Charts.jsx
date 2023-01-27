import { Container } from '@/components/Container'
import Pie from './Charts/Pie'

export function ChartNormal() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-backgroundNormal text-foregroundNormal pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Grafici / Esempi
          </h2>
          <p className="mt-6 text-lg tracking-tight">
            Pie Chart (Normal)
          </p>
          <div>
            <Pie data={[
              {
                "id": "Totale",
                "label": "Totale",
                "value": 800,
                "color": "#63576E"
              },
              {
                "id": "Media",
                "label": "Media",
                "value": 200,
                "color": "#ECE8E2"
              }
            ]} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export function ChartReverse() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-backgroundReverse text-foregroundReverse pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Grafici / Esempi
          </h2>
          <p className="mt-6 text-lg tracking-tight">
            Pie Chart (Reverse)
          </p>
          <div>
            <Pie isReverse data={[
              {
                "id": "Totale",
                "label": "Totale",
                "value": 800,
                "color": "#63576E"
              },
              {
                "id": "Media",
                "label": "Media",
                "value": 200,
                "color": "#ECE8E2"
              }
            ]} />
          </div>
        </div>
      </Container>
    </section>
  )
}
