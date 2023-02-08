import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { OneColumnReverse } from '@/components/OneColumnReverse'
import { TwoColumnsNormal } from '@/components/TwoColumnsNormal'
import { TwoColumnsReverse } from '@/components/TwoColumnsReverse'
import { QuoteNormal } from '@/components/QuoteNormal'
import { Team } from '@/components/Team'
import { Timeline } from '@/components/Timeline'
import Pie from '@/components/Charts/Pie'
import Bar from '@/components/Charts/Bar'
import SmallPie from '@/components/Charts/SmallPie'

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
          id="progetto-agata"
          left={<div className='text-left sm:mt-28'>
            <h1 className='font-display text-4xl'>Un gioco da ragazzi</h1>
            <h2 className='font-sans text-xl'>Gender Gap e materie STEM: un problema dei giovani</h2>
            <p className='mt-4'>Quello del divario di genere nello studio delle materie scientifiche è ormai un punto consolidato del dibattito contemporaneo più ampio sui temi del gender gap.</p>
            <p className='mt-2'>Nonostante ci siano stati diversi progressi rispetto agli ultimi 10 anni, le donne restano ancora ampiamente sotto rappresentate, soprattutto quando si parla di educazione scientifica.</p>
          </div>}
          right={<>
            <img src='https://tinypic.host/images/2023/02/08/cover.png' />
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
            <img src='https://tinypic.host/images/2023/02/08/progetto-agata.png' />
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
            right={
              <TwoColumnsNormal left={<>
                <div className='text-2xl'>Donne</div>
                <SmallPie
                  stat="13,3"
                    subtitle="Media EU: 14,9" 
                  data={[
                    {
                      "id": "Resto",
                      "label": "Resto",
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
              </>} right={<>
                <div className='text-2xl'>Uomini</div>
                <SmallPie
                  stat="19,4"
                  subtitle="Media EU: 27,9" 
                  data={[
                    {
                      "id": "Resto",
                      "label": "Resto",
                      "value": 980.6,
                      "color": "#63576E"
                    },
                    {
                      "id": "Uomini",
                      "label": "Uomini",
                      "value": 19.4,
                      "color": "#ECE8E2"
                    }
                  ]} />
              </>} />}
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
          left={<div className='text-left'>
            <h2 className='font-display text-3xl mb-4'>Tuttavia...</h2>
            <p className='mb-2'>Va segnalato come all'interno di ciascuna facoltà la presenza delle donne può variare sensibilmente: se ad esempio nel campo delle Scienze Naturali o delle professioni sanitarie parlare di gender gap sembra quasi anacronistico, guardando i dati relativi al settore ICT ed alle facoltà di ingegneria la situazione cambia sensibilmente: 73,5% dei laureati in ingegneria nel 2019 è uomo.</p>
            <p>Ed è proprio questo uno dei dati più critici, considerato che parliamo dei settori chiave dell’economia di oggi e soprattutto di domani, traino dell’innovazione e della transizione tecnologica. Le discipline STEM solitamente sono infatti quelle che offrono i percorsi di carriera più retribuiti e con maggiore stabilità. Una tendenza che è destinata a rafforzarsi in un mondo sempre più dipendente dalle tecnologie.</p>
          </div>}
          right={<div className=''>
            <h1 className='font-display' style={{ fontSize: '10em'}}>73,5%</h1>
            <div className='text-4xl'>sono uomini</div>
          </div>}
        />

        <TwoColumnsReverse
          left={<div className='text-left sm:mt-20'>
            <div className='text-3xl mx-16'><span className='font-display text-8xl'>“</span>Ciò fa comprendere come anche tante battaglie contro i divari di genere, tra cui quelle per la parità salariale, passino anche dal potenziamento delle STEM in tutti i livelli di istruzione.</div>
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

        <TwoColumnsReverse
          id="i-fondi-del-pnrr"
          left={<div className='text-left sm:mt-20'>
            <div className='text-5xl mb-4'>I fondi del PNRR</div>
            <p className='mb-2'>Sono oltre 38,5 miliardi di euro i fondi del PNRR destinati alle misure per la parità di genere. Di questi, la maggior parte sono risorse indirette, con un effetto potenziale solo collaterale sulle condizioni delle donne in Italia.</p>
            <p>L’8% dei fondi Pnrr per la parità di genere sono considerati a impatto diretto: una quota che corrisponde a poco più di 3 miliardi e che non è indirizzata a tutti gli ambiti di valutazione delle misure. Alcuni dei quali, quindi, vedranno potenzialmente dei benefici solo collaterali.</p>

            <div className='bg-backgroundNormal text-foregroundNormal p-4 mt-12 rounded-md'>
              <h2 className='font-display text-2xl mb-4'>Cos'è l'impatto diretto?</h2>
              <p>Lorem ipsum dolor...</p>
            </div>
          </div>}
          right={<div className=''>
                   <Pie
                    isReverse
                    stat="38.5"
                    subtitle="miliardi di euro" 
                    data={[
                      {
                        "id": "Impatto Diretto",
                        "label": "Impatto Diretto",
                        "value": 8,
                        "color": "#63576E"
                      },
                      {
                        "id": "Altre Iniziative",
                        "label": "Altre Iniziative",
                        "value": 92,
                        "color": "#ECE8E2"
                      }
                    ]} />
          </div>}
        />

        <OneColumnReverse>
          <div className='mt-8 mb-8'>
            <div className='text-3xl mb-4'>Nuove borse di studio per l'accesso equo all'educazione</div>
            <p className='mb-2'>Assicurare un accesso equo all'educazione aumentando l'iscrizione agli studi universitari dei giovani in situazioni socio-economiche difficili e che tendono a subire un alto costo opportunità dalla scelta di proseguire gli studi piuttosto che trovare un lavoro dopo il diploma.</p>
            <p className='mb-6'>Verrà incrementato il valore in denaro delle borse di studio nuove e già esistenti, e saranno fornite a una percentuale maggiore di studenti, così da ridurre il gap con la media europea in questo ambito. L'investimento totale sull'obiettivo specifico è di 500 milioni. Come si evince dal prospetto del piano, non si tratta di una misura solo al lavoro per la riduzione della disparità di genere negli studi, ma anche di ammortizzazione sociale per supportare l'accesso delle frange più “deboli” alla carriera universitaria.</p>
            <h2 className='text-2xl font-bold mb-2'>Come farlo?</h2>
            <img style={{ maxWidth: '48px', margin: '0px auto' }} src='https://tinypic.host/images/2023/01/28/arrow-down.png' />
          </div>
        </OneColumnReverse>

        <Timeline />

        <TwoColumnsReverse
          left={<div className='sm:mt-20 rounded-full' style={{ backgroundColor: '#E7D5D5', height: '600px'}}>
            <h1 className='font-display text-6xl' style={{ paddingTop: '250px' }}>250 Milioni</h1>
            <div className='text-2xl'>investimento totale sull'obiettivo specifico</div>
          </div>}
            right={<div className='text-left sm:mt-40 sm:ml-10'>
            <h2 className='font-display text-3xl mb-4'>Un orientamento attivo nella transizione scuola - università</h2>
            <p className='mb-2'>Aumentare il numero di laureati, incoraggiando il passaggio dalla scuola secondaria superiore all'università, così da ridurre allo stesso tempo il tasso di abbandono degli studi universitari. Lo scopo è migliorare  i tassi di frequenza,  i livelli di apprendimento e il numero di ammessi ai successivi anni accademici, nonchè ridurre il gap di genere sia nel campo educativo che lavorativo. Verranno svolti corsi di orientamento per gli studenti dal terzo anno delle superiori in poi per aiutarli nella scelta della facoltà a cui iscriversi.</p>
            <h2 className='text-2xl font-bold mb-8'>Come farlo?</h2>
            <img style={{ maxWidth: '48px', margin: '0px auto' }} src='https://tinypic.host/images/2023/01/28/arrow-down.png' />
          </div>}
          />

        <TwoColumnsReverse
          left={<div className='text-left'>
          <h2 className='font-display text-3xl mb-4'>Se non sai come farlo, fai un corso!</h2>
          <p className='mb-2'>Saranno erogati dei corsi a tutti gli studenti delle scuole superiori, a partire dal terzo anno, per sostenerli nella scelta dell'istruzione terziaria, favorendo un miglior adattamento tra preparazione e percorso professionale, e aiutando gli studenti ad orientarsi nella transizione scuola-università.</p>
          <p className='mb-2'>L'obiettivo è che almeno 1.000.000 di studenti negli ultimi due anni del liceo abbiano frequentato corsi di transizione scuola-università.*</p>
          <p className='italic'>(Obiettivo per giugno 2026, ma il progetto è ancora da avviare.)</p>
          <p className='mt-20 text-sm'>*Si tratta di una stima media degli studenti italiani iscritti al 3°, 4° e 5° anno delle superiori durante gli anni di investimento. Il numero di studenti iscritti all'Orientamento Attivo sarà monitorato dal MUR.
L'investimento è collegato con la Riforma 1.4 della stessa missione e componente che riguarda proprio il sistema di orientamento degli studenti che mira all'introduzione di moduli nelle scuole di almeno 30 ore all'anno.</p>
        </div>}
            right={<div className='text-center'>
            <div>
              <img style={{ width: '100px', height: '100px', margin: '0px auto'}} src='https://tinypic.host/images/2023/02/08/icona-1.png' />
            </div>
            <p className='ml-16 mr-16 mt-8'>Le lezioni sono tenute da docenti di istruzione superiore agli studenti del terzo, quarto e quinto anno della scuola secondaria superiore.</p>
            <div className='mt-8 mb-8'>
              <img style={{ width: '100px', height: '100px', margin: '0px auto'}} src='https://tinypic.host/images/2023/02/08/icona-2.png' />
            </div>
            <p className='ml-16 mr-16 mt-8'>La sostenibilità si ottiene estendendo la formazione ai docenti delle scuole superiori in modo che, a seguito di questo programma triennale, sia disponibile un orientamento con il personale interno delle scuole superiori.</p>
          </div>}
          />

        <Team />
      </main>
      <Footer />
    </div>
  )
}
