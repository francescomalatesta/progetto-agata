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
import Pie from '@/components/Charts/Pie'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Progetto Agata</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main>
        <TwoColumnsNormal 
          left={<div className='text-left sm:mt-28'>
            <h1 className='font-display text-4xl'>Un gioco da ragazzi</h1>
            <h2 className='font-sans text-xl'>Gender Gap e materie STEM: un problema dei giovani</h2>
            <p className='mt-4'>Quello del divario di genere nello studio delle materie scientifiche è ormai un punto consolidato del dibattito contemporaneo più ampio sui temi del gender gap.</p>
            <p className='mt-2'>Nonostante ci siano stati diversi progressi rispetto agli ultimi 10 anni, le donne restano ancora ampiamente sotto rappresentate, soprattutto quando si parla di educazione scientifica.</p>
          </div>}
          right={<>
            <img src='https://tinypic.host/images/2023/01/28/education.png' />
          </>} 
        />

        <TwoColumnsReverse
          left={<div className='text-left'>
            <h1 className='font-display text-4xl'>Progetto Agata</h1>
            <p className='mt-4'>Il progetto di analisi è frutto di un’attività di monitoraggio civico, resa possibile grazie al concorso per progetti di monitoraggio del PNRR, realizzato nel contesto della campagna DatiBeneComune.</p>
            <p className='mt-2'>L’obiettivo è quello di indagare il divario di genere nell’accesso allo studio delle materie STEM in Italia, con uno sguardo al contesto europeo.</p>
            <p className='mt-2'>Al momento del nostro studio, i dati si rivelano ancora complessi da reperire e probabilmente potremo avere nei prossimi anni l’effettiva misura dell’efficacia di queste misure e soprattutto di dati puliti ed obiettivi; intanto vogliamo condividere uno strumento aperto e collaborativo per osservare il lavoro che è stato iniziato e fatto finora. Nei prossimi mesi contiamo di insistere per richiedere l’accesso a dati più accurati e per seguire con maggiore rigore l’andamento della distribuzione dei fondi.</p>
          </div>}
          right={<>
            <img src='https://tinypic.host/images/2023/01/28/education.png' />
          </>} 
        />

        <TwoColumnsNormal
          left={<div>
            <Pie
            stat="16,4"
            subtitle="su 1000 giovani" 
            data={[
              {
                "id": "Non-STEM",
                "label": "Non-STEM",
                "value": 983.6,
                "color": "#63576E"
              },
              {
                "id": "STEM",
                "label": "STEM",
                "value": 16.4,
                "color": "#ECE8E2"
              }
            ]} />
          </div>}
          right={<div className='text-left sm:mt-20'>
            <h2 className='font-display text-3xl mb-4'>I giovani laureati nelle materie STEM</h2>
            <p>Il panorama italiano ed europeo sono al momento diversi, dimostrando l'effettiva presenza di una disparità. Se infatti consideriamo il target dei giovani tra 20 e 29 anni, la media EU dei laureati STEM è di circa 21 ogni 1.000 giovani, mentre  l'Italia si colloca a metà classifica nel contesto europeo con un numero che si attesta intorno a 16,4.</p>
          </div>}
       />

      <TwoColumnsNormal
          left={<div className='text-left sm:mt-20'>
            <h2 className='font-display text-3xl mb-4'>Gender gap: fin dall'iscrizione ai corsi è visibile una differenza.</h2>
            <p className='mb-2'>In Europa, le laureate sono solo 14,9 mentre i laureati sono 27,9 ovvero quasi il doppio.</p>
            <p className='mb-2'>La quota italiana è di 19,4 per gli studenti di sesso maschile, mentre scende di 6 punti se consideriamo le studentesse, quindi 13,3.</p>
            <p className='mb-2'>L’Italia si colloca, dunque, sotto di 1,6 punti percentuali rispetto alla media continentale, a 4 punti dalla Francia e in linea con il dato tedesco (paradossalmente uno dei paesi con più ampie disparità).</p>
          </div>}
          right={<div>
            <div className='text-2xl'>Donne</div>
            <Pie
            stat="13,3"
            subtitle="media Europa: 14,9" 
            data={[
              {
                "id": "",
                "label": "",
                "value": 986.7,
                "color": "#63576E"
              },
              {
                "id": "Donne",
                "label": "Donne",
                "value": 13.3,
                "color": "#ECE8E2"
              }
            ]} />
            <div className='text-2xl mt-8'>Uomini</div>
            <Pie
            stat="19,4"
            subtitle="media Europa: 27,9" 
            data={[
              {
                "id": "",
                "label": "",
                "value": 980.6,
                "color": "#63576E"
              },
              {
                "id": "Donne",
                "label": "Donne",
                "value": 19.4,
                "color": "#ECE8E2"
              }
            ]} />
          </div>}
       />

        <QuoteNormal
            quote="Le diseguaglianze di genere hanno radici profonde, che riguardano il contesto familiare e della formazione, prima ancora di quello lavorativo. Molti studi mostrano che sono poche le donne iscritte alle materie STEM, nonostante ci siano più donne laureate che uomini."
            source="Piano nazionale di ripresa e resilienza (2021)"
        />

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

        <TwoColumnsReverse />
        <QuoteNormal />
        <QuoteReverse />
        <ChartNormal />
        <ChartReverse />
        <Timeline />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
