import { Container } from '@/components/Container'

export function Team() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-backgroundReverse text-foregroundReverse pt-20 pb-28 sm:py-32"
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
                        <img className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56" src="https://magal.li/i/500/500" alt="" />
                        <div className="space-y-2">
                        <div className="space-y-1 text-lg font-medium leading-6">
                            <h3 className='font-display text-center'>Giancarlo Magalli</h3>
                            <p className='text-center text-sm'>Regnante</p>
                        </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="space-y-6">
                        <img className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56" src="https://magal.li/i/500/500" alt="" />
                        <div className="space-y-2">
                        <div className="space-y-1 text-lg font-medium leading-6">
                            <h3 className='font-display text-center'>Giancarlo Magalli</h3>
                            <p className='text-center text-sm'>Regnante</p>
                        </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="space-y-6">
                        <img className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56" src="https://magal.li/i/500/500" alt="" />
                        <div className="space-y-2">
                        <div className="space-y-1 text-lg font-medium leading-6">
                            <h3 className='font-display text-center'>Giancarlo Magalli</h3>
                            <p className='text-center text-sm'>Regnante</p>
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
