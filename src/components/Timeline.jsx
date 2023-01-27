import { useEffect, useState } from 'react'

import { Container } from '@/components/Container'

export function Timeline() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-backgroundNormal text-foregroundNormal"
    >
      <Container className="relative">
        <div className="pt-20 pb-10 max-w-2xl md:mx-auto md:text-center xl:max-w-none border-l border-foregroundNormal">
          <ol className="relative">                  
            <li className="mb-20 ml-10 text-left">
                <div className="absolute w-3 h-3 bg-foregroundNormal rounded-full mt-1.5 -left-1.5 border border-foregroundNormal"></div>
                <time className="mb-1 text-sm font-normal leading-none text-foregroundNormal">Gennaio 2023</time>
                <h3 className="text-3xl mb-2 font-display text-foregroundNormal">Più borse di studio per tutti!</h3>
                <p className="mb-4 text-base font-normal text-foregroundNormal">Adozione del decreto ministeriale per garantire più borse di studio e migliorare l’accesso all’istruzione terziaria per gli studenti di talento in difficoltà socio-economiche.</p>
            </li>
            <li className="mb-20 ml-10 text-left">
                <div className="absolute w-3 h-3 bg-foregroundNormal rounded-full mt-1.5 -left-1.5 border border-foregroundNormal"></div>
                <time className="mb-1 text-sm font-normal leading-none text-foregroundNormal">Gennaio 2023</time>
                <h3 className="text-3xl mb-2 font-display text-foregroundNormal">Più borse di studio per tutti!</h3>
                <p className="mb-4 text-base font-normal text-foregroundNormal">Adozione del decreto ministeriale per garantire più borse di studio e migliorare l’accesso all’istruzione terziaria per gli studenti di talento in difficoltà socio-economiche.</p>
            </li>
            <li className="ml-10 text-left">
                <div className="absolute w-3 h-3 bg-foregroundNormal rounded-full mt-1.5 -left-1.5 border border-foregroundNormal"></div>
                <time className="mb-1 text-sm font-normal leading-none text-foregroundNormal">Gennaio 2023</time>
                <h3 className="text-3xl mb-2 font-display text-foregroundNormal">Più borse di studio per tutti!</h3>
                <p className="mb-4 text-base font-normal text-foregroundNormal">Adozione del decreto ministeriale per garantire più borse di studio e migliorare l’accesso all’istruzione terziaria per gli studenti di talento in difficoltà socio-economiche.</p>
            </li>
        </ol>
        </div>
      </Container>
    </section>
  )
}
