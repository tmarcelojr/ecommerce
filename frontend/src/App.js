import React from "react";
// css
import { Container } from "react-bootstrap";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// pages
import Homepage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
// router
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}
