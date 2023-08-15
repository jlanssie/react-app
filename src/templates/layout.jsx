import React from 'react'
import { Header, Footer } from '../components'
import './layout.scss'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
