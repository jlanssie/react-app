import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../templates'
import { Home, Example, Error404 } from '../pages'

export const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="example" element={<Example />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </>
  )
}
