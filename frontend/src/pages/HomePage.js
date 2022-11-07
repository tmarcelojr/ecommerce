import { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import Product from '../components/Product'
import axios from 'axios'

export default function Homepage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    try {
      async function fetchProducts() {
        const { data } = await axios.get('api/products/')
        setProducts(data)
      }
      fetchProducts()
    } catch (error) {
      console.log(error)
    }
  },[])
  
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {
            products && products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))
        }
      </Row>
    </div>
  )
}
