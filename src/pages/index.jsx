import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { OneColumnNormal } from '@/components/OneColumnNormal'
import { OneColumnReverse } from '@/components/OneColumnReverse'
import { TwoColumnsNormal } from '@/components/TwoColumnsNormal'
import { TwoColumnsReverse } from '@/components/TwoColumnsReverse'
import { QuoteNormal } from '@/components/QuoteNormal'
import { QuoteReverse } from '@/components/QuoteReverse'
import { Team } from '@/components/Team'
import { ChartNormal, ChartReverse } from '@/components/Charts'
import { Timeline } from '@/components/Timeline'

export default function Home() {
  return (
    <>
      <Head>
        <title>Progetto Agata</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main>
        <OneColumnNormal>
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Sezione 1 Colonna
          </h2>
          <p className="mt-6 text-lg tracking-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dolor lectus, efficitur vitae augue a, scelerisque finibus nibh. Duis a fringilla nibh. Etiam sit amet placerat orci. Fusce ut tincidunt eros. Nulla vel quam vestibulum, rhoncus risus venenatis, cursus dolor. Pellentesque feugiat risus et arcu euismod dignissim. Proin at sapien ac diam porta cursus.
          </p>
        </OneColumnNormal>
        
        <OneColumnReverse>
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Sezione 1 Colonna
          </h2>
          <p className="mt-6 text-lg tracking-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dolor lectus, efficitur vitae augue a, scelerisque finibus nibh. Duis a fringilla nibh. Etiam sit amet placerat orci. Fusce ut tincidunt eros. Nulla vel quam vestibulum, rhoncus risus venenatis, cursus dolor. Pellentesque feugiat risus et arcu euismod dignissim. Proin at sapien ac diam porta cursus.
          </p>
        </OneColumnReverse>

        <TwoColumnsNormal />
        <TwoColumnsReverse />
        <QuoteNormal />
        <QuoteReverse />
        <ChartNormal />
        <ChartReverse />
        <Timeline />
        <Team />
      </main>
      <Footer />
    </>
  )
}
