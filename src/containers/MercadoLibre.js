import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './MercadoLibre.css';
import {
  RecommendationsProducts, Discovery,
  Collections, Categories, Navbar,
  SliderPrimary, Payments, Footer
} from './data';

class MercadoLibre extends Component {

  render() {

    return (
      <main className="mercadolibre">
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>

        <SliderPrimary />

        <Payments />

        <RecommendationsProducts
          products="macbook pro"
          leyend="Basado en tu última visita"
          leyendAdici="Ver historial" />

        <RecommendationsProducts
          products="pen drive"
          leyend="Relacionado con tus visitas en computacion"
          leyendAdici="Computación Ver historial" />

        <RecommendationsProducts
          products="samsung"
          leyend="Ofertas"
          leyendAdici="Ver todas" />
        <Discovery
          leyend="Descubrí" />

        <RecommendationsProducts
          products="iphone"
          leyend="Relacionado con tus visitas en Autos, Motos y Otros"
          leyendAdici="Ver historial" />

        <RecommendationsProducts
          products="iphone"
          leyend="Inspirado en tus favoritos"
          leyendAdici="Ver favoritos" />

        <Discovery
          leyend="Te puede interesar" />

        <Collections />

        <Categories />

        <RecommendationsProducts
          products="iphone"
          leyend="Inspirado en tus favoritos"
          leyendAdici="Ver favoritos" />

        <Footer />
      </main>
    )
  }
}

export default MercadoLibre;