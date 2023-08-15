import React, { ReactNode } from 'react'
import { Header, Footer } from '../components'
import './layout.scss'

interface Props {
  children?: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
