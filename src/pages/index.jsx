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
import Bar from '@/components/Charts/Bar'

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

      <TwoColumnsReverse
        left={<div>
          <img src='https://tinypic.host/images/2023/01/28/graduation.png' />
        </div>}
        right={<div className='text-left sm:mt-20'>
          <h2 className='font-display text-3xl'>Chi si laurea di più?</h2>
          <p className='mt-4'>Sono le donne a laurearsi molto di più e in tempi più brevi rispetto agli uomini, con un rapporto che si attesta intorno al 60 a 40, ma le laureate restano in netta minoranza nelle lauree STEM.</p>
          <Bar
            stat1="60%"
            subtitle1="dei laureati è donna"
            stat2="40%"
            subtitle2="dei laureati è uomo" 
            isReverse 
            data={[
                {
                  "country": "Laurea",
                  "Donne": 60,
                  "DonneColor": "hsl(100, 70%, 50%)",
                  "Uomini": 40,
                  "UominiColor": "hsl(64, 70%, 50%)"
                }
            ]} 
          />
        </div>}
      />

      <TwoColumnsReverse
        left={<div className='text-left sm:mt-20'>
          <h2 className='font-display text-3xl mb-4'>Tuttavia...</h2>
          <p className='mb-2'>Va segnalato come all’interno di ciascuna facoltà la presenza delle donne può variare sensibilmente: se ad esempio nel campo delle Scienze Naturali o delle professioni sanitarie parlare di gender gap sembra quasi anacronistico, guardando i dati relativi al settore ICT ed alle facoltà di ingegneria la situazione cambia sensibilmente: 73,5% dei laureati in ingegneria nel 2019 è uomo.</p>
          <p>Ed è proprio questo uno dei dati più critici, considerato che parliamo dei settori chiave dell’economia di oggi e soprattutto di domani, traino dell’innovazione e della transizione tecnologica. Le discipline STEM solitamente sono infatti quelle che offrono i percorsi di carriera più retribuiti e con maggiore stabilità. Una tendenza che è destinata a rafforzarsi in un mondo sempre più dipendente dalle tecnologie.</p>
        </div>}
        right={<div className='sm:mt-20'>
          <h1 className='font-display' style={{ fontSize: '10em'}}>73,5%</h1>
          <div className='text-4xl'>sono uomini</div>
        </div>}
      />

      <TwoColumnsReverse
        left={<div className='text-left sm:mt-20'>
          <div className='text-5xl'><span className='font-display text-8xl'>“</span>Ciò fa comprendere come anche tante battaglie contro i divari di genere, tra cui quelle per la parità salariale, passino anche dal potenziamento delle STEM in tutti i livelli di istruzione.</div>
        </div>}
        right={<div className='sm:mt-20 text-left'>
          <h1 className='font-display text-3xl mb-4'>Un punto di partenza</h1>
          <p className='mb-2'>Il quadro che abbiamo esplorato con una prima introduzione ci ha restituito la fotografia di un Paese ancora al chiodo per quanto riguarda stereotipi di genere anche nell'educazione delle ragazze sulle materie STEM.</p>
          <p className='mb-2'>Nonostante questo, la situazione sembra essere entrata ormai di fatto nelle agende politiche italiane, tanto che il PNRR, una delle misure più importanti e fondamentali per il futuro del nostro Paese, ha individuato proprio nel potenziamento dell'insegnamento STEM tra le ragazze uno dei suoi asset principali in tema di parità di genere.</p>
          <p>Attraverso il nostro progetto Agata di analisi, andremo ad approfondire la sezione del PNRR dedicata a questi temi, cercando di capire quanti fondi sono stati effettivamente messi a disposizioni, a copertura di quali aree e con quale efficacia.</p>
        </div>}
      />

      <QuoteNormal
          quote="Le diseguaglianze di genere hanno radici profonde, che riguardano il contesto familiare e della formazione, prima ancora di quello lavorativo. Molti studi mostrano che sono poche le donne iscritte alle materie STEM, nonostante ci siano più donne laureate che uomini."
          source="Piano nazionale di ripresa e resilienza (2021)"
      />

        <Timeline />
        
        <Team />
      </main>
      <Footer />
    </div>
  )
}
