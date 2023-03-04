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
import Image from 'next/image'

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
            <p className='mt-4'>Quello del divario di genere nello studio delle materie scientifiche è un punto ormai consolidato del più ampio dibattito contemporaneo sui temi del gender gap.</p>
            <p className='mt-2'>Nonostante ci siano stati indubbi e considerevoli progressi rispetto agli ultimi 10 anni, le donne restano ancora sottorappresentate quando si parla di educazione scientifica.</p>
          </div>}
          right={<>
            <img src='/cover.png' />
          </>} 
        />

        <TwoColumnsReverse
          left={<div className='text-left sm:mr-2'>
            <h1 className='font-display text-4xl'>Progetto Agata</h1>
            <p className='mt-4'>Il progetto di analisi è frutto di un'attività di monitoraggio civico del PNRR, reso possibile grazie al supporto dell'associazione onData e dell'organizzazione internazionale indipendente ActionAid.</p>
            <p className='mt-2'>L'obiettivo della ricerca è quello di indagare il divario di genere nell'accesso allo studio delle materie STEM in Italia e di come i fondi del PNRR stiano effettivamente producendo valore per colmare questo gap.</p>
            <p className='mt-2'>Al momento del nostro studio, i dati si sono rivelati complessi da reperire e probabilmente potremo avere solo nei prossimi mesi, se non addirittura anni, l'effettiva misura dell'efficacia della distribuzione dei fondi. Intanto vogliamo condividere uno strumento aperto e collaborativo per osservare il lavoro che è stato iniziato e fatto finora. Nel prossimo periodo contiamo di insistere per richiedere l'accesso a dati più accurati e per seguire con maggiore rigore l'andamento delle riforme e delle azioni messe in campo.</p>
            <p className='mt-2'>I dati della prima sezione di analisi sono un'elaborazione dal report “Stem, una sfida per l'Italia” a cura dell'Osservatorio Povertà Educativa Con i Bambini (anno 2019).</p>
          </div>}
          right={<>
            <img src='/gender-gap.png' />
          </>} 
        />

        <TwoColumnsNormal
          left={<div>
            <div className='hidden lg:block'>
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
                ]} 
              />
            </div>
            <div className='block lg:hidden'>
              <SmallPie
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
                ]} 
              />
            </div>
          </div>}
          right={<div className='text-left sm:mt-40'>
            <h2 className='font-display text-3xl mb-4'>I giovani laureati nelle materie STEM</h2>
            <p>Il panorama italiano si dimostra sostanzialmente diverso da quello europeo ed emerge l'effettiva presenza di una disparità. Se infatti consideriamo il target dei giovani tra 20 e 29 anni, la media EU dei laureati STEM è di circa 21 ogni 1.000 giovani, mentre l'Italia si attesta intorno al 16,4.</p>
          </div>}
       />

        <TwoColumnsNormal
            py='py-4'
            left={<div className='text-left'>
              <h2 className='font-display text-3xl mb-4'>Gender gap: fin dall'iscrizione ai corsi <br/>è visibile una differenza</h2>
              <p className='mb-2 mr-1'>In Europa, le laureate sono solo 14,9 mentre i laureati sono 27,9, ovvero quasi il doppio.</p>
              <p className='mb-2'>La quota italiana è di 19,4 per gli studenti di sesso maschile, mentre scende di 6 punti se consideriamo le studentesse, quindi 13,3.</p>
              <p className='mb-2'>L'Italia si colloca, dunque, sotto di 1,6 punti percentuali rispetto alla <br className='hidden sm:block' />media continentale.</p>
            </div>}
            right={
              <TwoColumnsNormal
                py="py-0"
                left={<>
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
                </>} 
                right={<>
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
                  <div className='mb-16'></div>
              </>} />}
        />

        <TwoColumnsReverse
          left={<div>
            <img src='/graduation.png' />
          </div>}
          right={<div className='text-left sm:mt-32 mb-3'>
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
            <h2 className='font-display text-3xl mb-4'>Tuttavia</h2>
            <p className='mb-2'>Va segnalato come all'interno di ciascuna facoltà la presenza delle donne può variare sensibilmente: se ad esempio nel campo delle Scienze Naturali o delle professioni sanitarie parlare di gender gap sembra quasi anacronistico, guardando i dati relativi al settore ICT ed alle facoltà di ingegneria la situazione cambia sensibilmente: basti pensare che il 73,5% dei laureati in Ingegneria nel 2019 è uomo.</p>
            <p>Ed è proprio questo uno dei dati più critici, considerato che parliamo dei settori chiave dell'economia di oggi e soprattutto di domani, traino dell'innovazione e della transizione tecnologica.</p>
          </div>}
          right={<>
            <div className='hidden lg:block'>
              <h1 className='font-display' style={{ fontSize: '10em'}}>73,5%</h1>
              <div className='text-4xl'>sono uomini</div>
            </div>
            <div className='block lg:hidden text-center mt-8 sm:mt-0'>
              <h1 className='font-display text-9xl'>73,5%</h1>
              <div className='text-2xl mt-2'>sono uomini</div>
            </div>
          </>}
        />

        <TwoColumnsReverse
          py={'sm:py-16 pb-16'}
          left={<div className='text-center sm:text-left sm:mt-16'>
            <div className='text-2xl text-center sm:text-left sm:text-3xl mx-8'><span className='font-display text-8xl'>“</span>Ciò fa comprendere come anche tante battaglie contro i divari di genere, tra cui quelle per la parità salariale, passino anche dal potenziamento delle STEM in tutti i livelli di istruzione.<span className='font-display text-8xl absolute ml-2'>”</span></div>
          </div>}
          right={<div className='sm:mt-12 text-left mt-4'>
            <h1 className='font-display text-3xl mb-4'>Un punto di partenza</h1>
            <p className='mb-2'>Il quadro che abbiamo esplorato in questa prima introduzione ci ha restituito la fotografia di un Paese in cui il divario di genere nello studio delle materie scientifiche è ancora forte e sentito.</p>
            <p className='mb-2'>Nonostante questo, il tema sembra essere entrato ormai di fatto nelle agende politiche italiane, tanto che il PNRR, una delle misure più importanti e fondamentali per il futuro del Paese, ha individuato proprio nel potenziamento dell'accesso delle ragazze allo studio delle STEM uno dei suoi asset principali in tema di parità di genere.</p>
            <p>Attraverso il progetto di analisi Agata, andremo ad approfondire la sezione del Piano dedicata a questi topic, cercando di capire quanti fondi sono stati effettivamente messi a disposizione, a copertura di quali aree e con <br className='hidden sm:block'/>quale efficacia.</p>
          </div>}
        />

        <QuoteNormal
            quote="Le diseguaglianze di genere hanno radici profonde, che riguardano il contesto familiare e della formazione, prima ancora di quello lavorativo. Molti studi mostrano che sono poche le donne iscritte alle materie STEM, nonostante ci siano più donne laureate che uomini."
            source="Piano nazionale di ripresa e resilienza (2021)"
        />

        <TwoColumnsReverse
          id="i-fondi-del-pnrr"
          left={<div className='text-left sm:mt-28'>
            <div className='text-5xl mb-4'>I fondi del PNRR</div>
            <p className='mb-2'>I fondi del PNRR destinati alle misure per la parità di genere in Italia valgono 38,5 miliardi di euro. Tuttavia di questa cifra, la stragrande maggioranza confluisce in risorse ed iniziative indirette, ossia misure che hanno obiettivi più ampi ed articolati e che avranno un effetto positivo, ma solo potenziale e collaterale sulla condizione delle donne in Italia.</p>
            <p>Ad esempio i fondi a supporto delle ragazze nello studio delle materie STEM rientrano in un più generico “sostegno per favorire l'accesso di tutti all'università”.</p>
          </div>}
          right={<div>
            <div className='hidden lg:block'>
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
            </div>
            <div className='block lg:hidden'>
              <SmallPie
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
            </div>
          </div>}
        />

        <OneColumnReverse>
          <div className='mt-8 mb-8 text-left'>
            <div className='text-3xl mb-4'>Nuove borse di studio per l'accesso equo all'educazione</div>
            <p className='mb-2'>Assicurare un accesso equo all'educazione aumentando l'iscrizione agli studi universitari dei giovani in situazioni socio-economiche difficili e che tendono a subire un alto costo opportunità della scelta di proseguire gli studi piuttosto che trovare un lavoro dopo il diploma.</p>
            <p className='mb-2'>Verrà incrementato il valore in denaro delle borse di studio nuove e già esistenti, e saranno fornite a una percentuale maggiore di studenti, così da ridurre il gap con la media europea in questo ambito. L'investimento totale sull'obiettivo specifico è di 500 milioni.</p>
            <p className='mb-2 font-bold'>Fonte: Italia Domani, il Piano Nazionale di Ripresa e Resilienza</p>
            <p className='mb-6'>Come si evince dal prospetto del piano, non si tratta di una misura specifica per la riduzione della disparità di genere negli studi, ma è principalmente un ammortizzazione sociale per supportare l'accesso alla carriera universitaria delle frange più “deboli” di studenti.</p>
            <h2 className='text-2xl font-bold mb-2'>Come farlo?</h2>
            <img style={{ maxWidth: '48px', marginLeft: '45px' }} src='/arrow-down.png' />
          </div>
        </OneColumnReverse>

        <Timeline />

        <TwoColumnsReverse
          left={<>
            <div className='hidden lg:block'>
              <div className='sm:mt-20 rounded-full' style={{ backgroundColor: '#E7D5D5', height: '600px'}}>
                <h1 className='font-display text-6xl' style={{ paddingTop: '250px' }}>250 Milioni</h1>
                <div className='text-2xl'>investimento totale sull'obiettivo specifico</div>
              </div>
            </div>
            <div className='block lg:hidden text-center'>
              <div className='rounded-full pt-24' style={{ backgroundColor: '#E7D5D5', height: '350px'}}>
                <h1 className='font-display text-4xl'>250 Milioni</h1>
                <div className='text-xl'>investimento totale sull'obiettivo specifico</div>
              </div>
            </div>
          </>}
            right={<div className='text-left sm:mt-40 sm:ml-10'>
            <h2 className='font-display text-3xl mb-4'>Un orientamento attivo nella transizione scuola - università</h2>
            <p className='mb-2'>Aumentare il numero di laureati, incoraggiando il passaggio dalla scuola secondaria superiore all'università, così da ridurre allo stesso tempo il tasso di abbandono degli studi universitari. Lo scopo è migliorare i tassi di frequenza, i livelli di apprendimento e il numero di ammessi ai successivi anni accademici, nonché ridurre il gap di genere sia nel campo educativo che lavorativo. Verranno svolti corsi di orientamento per gli studenti dal terzo anno delle superiori in poi per aiutarli nella scelta della facoltà a cui iscriversi.</p>
            <p className='mb-2 font-bold'>Fonte: Italia Domani, il Piano Nazionale di Ripresa e Resilienza</p>
            <p className='mb-2'>Anche in questo caso si tratta di una misura più generale e complessiva, non c’è un tratto specifico sui temi del gender gap nelle STEM.</p>
            <h2 className='text-2xl font-bold mb-4'>Come farlo?</h2>
            <img style={{ maxWidth: '36px', marginLeft: '50px' }} src='/arrow-down.png' />
          </div>}
          />

        <TwoColumnsReverse
          left={<div className='text-left sm:mt-6'>
          <h2 className='font-display text-3xl mb-4'>Se non sai come farlo, fai un corso!</h2>
          <p className='mb-2'>Saranno erogati dei corsi a tutti gli studenti delle scuole superiori, a partire dal terzo anno, per sostenerli nella scelta dell'istruzione terziaria, favorendo un miglior adattamento tra preparazione e percorso professionale, e aiutando gli studenti ad orientarsi nella transizione scuola-università.</p>
          <p className='mb-2'>L'obiettivo è che almeno 1.000.000 di studenti negli ultimi due anni del liceo abbiano frequentato corsi di transizione scuola-università.*</p>
          <p className='italic'>(Obiettivo per giugno 2026, ma il progetto è ancora da avviare.)</p>
          <p className='mt-20 text-sm hidden sm:block'>*Si tratta di una stima media degli studenti italiani iscritti al 3°, 4° e 5° anno delle superiori durante gli anni di investimento. Il numero di studenti iscritti all'Orientamento Attivo sarà monitorato dal MUR.
L'investimento è collegato con la Riforma 1.4 della stessa missione e componente che riguarda proprio il sistema di orientamento degli studenti che mira all'introduzione di moduli nelle scuole di almeno 30 ore all'anno.</p>
        </div>}
            right={<div className='text-left'>
            <div>
              <img style={{ width: '100px', height: '100px', margin: '0px auto'}} src='/icona1.png' />
            </div>
            <p className='ml-16 mr-16 mt-8'>Le lezioni sono tenute da docenti di istruzione superiore agli studenti del terzo, quarto e quinto anno della scuola secondaria superiore.</p>
            <div className='mt-8 mb-8'>
              <img style={{ width: '100px', height: '100px', margin: '0px auto'}} src='/icona2.png' />
            </div>
            <p className='ml-16 mr-16 mt-8'>La sostenibilità si ottiene estendendo la formazione ai docenti delle scuole superiori in modo che, a seguito di questo programma triennale, sia disponibile un orientamento con il personale interno delle scuole superiori.</p>
            <p className='mt-8 text-sm block sm:hidden'>*Si tratta di una stima media degli studenti italiani iscritti al 3°, 4° e 5° anno delle superiori durante gli anni di investimento. Il numero di studenti iscritti all'Orientamento Attivo sarà monitorato dal MUR.
L'investimento è collegato con la Riforma 1.4 della stessa missione e componente che riguarda proprio il sistema di orientamento degli studenti che mira all'introduzione di moduli nelle scuole di almeno 30 ore all'anno.</p>
          </div>}
          />

        <TwoColumnsNormal 
          id="progetto-agata"
          left={<div className='text-left'>
            <h1 className='font-display text-4xl'>Incoerenze e soffitti di cristallo</h1>
            <p className='mt-4'>Ai margini della ricerca, è fondamentale sottolineare come l'importanza di una rivendicazione di genere nello studio delle materie e delle competenze STEM sia assolutamente imprescindibile, soprattutto in un contesto storico come quello attuale in cui in particolare la competente tech sta diventando ormai proprietà intrinseca di quasi ogni settore.</p>
            <p className='mt-2'>Tuttavia, chiedere e sostenere le ragazze nella scelta e nei percorsi scientifici diventa praticamente inutile se poi nelle posizioni apicali continuiamo a trovare sempre e solo esclusivamente uomini. È necessario che i temi e le discussioni intorno al gender gap (dallo studio, all'accesso al lavoro,  al supporto della maternità etc..) vadano tutte di pari passi per ottenere risultati visibili e concreti tanto per le donne e per tutta la comunità.</p>
          </div>}
          right={<>
            <img src='/cristallo.png' />
          </>} 
        />

        <Team />
      </main>
      <Footer />
    </div>
  )
}
