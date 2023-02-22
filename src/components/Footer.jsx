import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-backgroundNormal text-foregroundNormal">
      <Container>
        <div className="py-16 text-center">
          <Logo className="mx-auto h-10 w-auto" />
          <p className='text-sm'>2023</p>
        </div>
      </Container>
    </footer>
  )
}
