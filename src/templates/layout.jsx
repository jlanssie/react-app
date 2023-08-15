import React from 'react'
import { Header, Footer } from '../components'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
