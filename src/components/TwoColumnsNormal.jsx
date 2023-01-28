import { Container } from '@/components/Container'

export function TwoColumnsNormal() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-backgroundNormal text-foregroundNormal pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <div className='grid grid-cols-2'>
            <div className="mr-4">
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                Sezione 2 Colonne - 1
              </h2>
              <p className="mt-6 text-lg tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dolor lectus, efficitur vitae augue a, scelerisque finibus nibh. Duis a fringilla nibh. Etiam sit amet placerat orci. Fusce ut tincidunt eros. Nulla vel quam vestibulum, rhoncus risus venenatis, cursus dolor. Pellentesque feugiat risus et arcu euismod dignissim. Proin at sapien ac diam porta cursus.
              </p>
            </div>
            <div className="ml-4">
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                Sezione 2 Colonne - 2
              </h2>
              <div>
                <img className="mx-auto mt-5 h-40 w-40 rounded-full xl:h-56 xl:w-56" src="https://magal.li/i/400/400" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
