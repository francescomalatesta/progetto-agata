import { useEffect, useState } from 'react'

import { Container } from '@/components/Container'

export function OneColumnNormal() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-backgroundNormal text-foregroundNormal pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Sezione 1 Colonna
          </h2>
          <p className="mt-6 text-lg tracking-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dolor lectus, efficitur vitae augue a, scelerisque finibus nibh. Duis a fringilla nibh. Etiam sit amet placerat orci. Fusce ut tincidunt eros. Nulla vel quam vestibulum, rhoncus risus venenatis, cursus dolor. Pellentesque feugiat risus et arcu euismod dignissim. Proin at sapien ac diam porta cursus.
          </p>
        </div>
      </Container>
    </section>
  )
}
