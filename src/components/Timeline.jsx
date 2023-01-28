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
                <time className="mb-1 text-sm font-normal leading-none text-foregroundNormal">Obiettivo conseguito entro Dicembre 2021</time>
                <h3 className="text-3xl mb-2 font-display text-foregroundNormal">Più borse di studio per tutti!</h3>
                <p className="mb-4 text-base font-normal text-foregroundNormal">Adozione del decreto ministeriale per garantire più borse di studio e migliorare l'accesso all'istruzione terziaria per gli studenti di talento in difficoltà socio-economiche.</p>
            </li>
            <li className="mb-20 ml-10 text-left">
                <div className="absolute w-3 h-3 bg-foregroundNormal rounded-full mt-1.5 -left-1.5 border border-foregroundNormal"></div>
                <time className="mb-1 text-sm font-normal leading-none text-foregroundNormal">Obiettivo per il 2023, ma l'azione è ancora da attivare.</time>
                <h3 className="text-3xl mb-2 font-display text-foregroundNormal">Almeno 300.000 borse di studio.</h3>
                <p className="mb-4 text-base font-normal text-foregroundNormal">Garantire borse di studio ad almeno 300.000 studenti attraverso il programma GOL (Guaranteed Employability of Workers).</p>
            </li>
            <li className="ml-10 text-left">
                <div className="absolute w-3 h-3 bg-foregroundNormal rounded-full mt-1.5 -left-1.5 border border-foregroundNormal"></div>
                <time className="mb-1 text-sm font-normal leading-none text-foregroundNormal">Obiettivo per il 2024. Le borse sono state già erogate.</time>
                <h3 className="text-3xl mb-2 font-display text-foregroundNormal">Borse di studio più vantaggiose.</h3>
                <p className="mb-4 text-base font-normal text-foregroundNormal">Garantire borse di studio, incrementate mediamente di 700 euro, ad almeno 336.000 studenti.</p>
            </li>
        </ol>
        </div>
      </Container>
    </section>
  )
}
