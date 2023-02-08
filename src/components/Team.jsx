import { Container } from '@/components/Container'

export function Team() {
  return (
    <section
      id="about-us"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-backgroundReverse text-foregroundReverse py-16"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
        <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 className="font-display text-3xl text-left tracking-tight sm:text-4xl">About us</h2>
                <p className="text-left">Il Progetto Agata è stato ideato e realizzato da un team speciale. Eccoci.</p>
            </div>
            <ul role="list" className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3">
                <li>
                    <div className="space-y-6">
                        <img className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56" src="https://tinypic.host/images/2023/02/06/domiziana.png" alt="" />
                        <div className="space-y-2">
                        <div className="space-y-1 text-lg font-medium leading-6">
                            <h3 className='font-display text-center'>Domiziana Ferrari</h3>
                            <p className='text-center text-sm'>Specializzata in cyber security e data protection, lavora nella social data analysis e community management per un'agenzia internazionale. Collabora, inoltre, con Privacy Network, un'associazione italiana non-profit.</p>
                        </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="space-y-6">
                        <img className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56" src="https://tinypic.host/images/2023/02/08/martina.png" alt="" />
                        <div className="space-y-2">
                        <div className="space-y-1 text-lg font-medium leading-6">
                            <h3 className='font-display text-center'>Martina Zunica</h3>
                            <p className='text-center text-sm'>Visual e Information designer, raccoglie dati per raccontare storie; li visualizza per lavoro e per passione. @ta_daaata</p>
                        </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="space-y-6">
                        <img className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56" src="https://tinypic.host/images/2023/02/06/francesco.png" alt="" />
                        <div className="space-y-2">
                        <div className="space-y-1 text-lg font-medium leading-6">
                            <h3 className='font-display text-center'>Francesco Malatesta</h3>
                            <p className='text-center text-sm'>Senior Software Developer presso Hootsuite. Appassionato di tecnologia e informatica da quando aveva 6 anni, anno in cui ha ricevuto il suo primo computer. Lavora per Hootsuite dal 2015 e ha una sua azienda di consulenza, In Crescendo.</p>
                        </div>
                        </div>
                    </div>
                </li>
            </ul>
            </div>
        </div>
      </Container>
    </section>
  )
}
