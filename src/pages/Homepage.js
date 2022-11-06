import React from "react"
import { Row, Col } from "react-bootstrap"
import Product from '../components/Product'
import products from "../utilities/products"

export default function Homepage() {
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
