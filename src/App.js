import React from 'react'
// css
import { Container } from 'react-bootstrap'
// components
import Header from './components/Header'
import Footer from './components/Footer'
// pages/
import Homepage from './pages/Homepage'

export default function App() {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <Homepage />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
