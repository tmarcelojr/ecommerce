import React from 'react'
// css
import { Container } from 'react-bootstrap'
// components
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container><h1>WELCOME</h1></Container>
      </main>
      <Footer />
    </div>
  )
}
