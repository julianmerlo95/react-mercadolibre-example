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
      <>
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
          products="bases notebok"
          leyend="Relacionado con tus visitas en computacion"
          leyendAdici="Computación Ver historial" />

        <RecommendationsProducts
          products="televisores"
          leyend="Ofertas"
          leyendAdici="Ver todas" />
        <Discovery
          leyend="Descubrí" />

        <RecommendationsProducts
          products="iphone"
          leyend="Los mejores productos te esperan"
          leyendAdici="Ver historial" />

        <RecommendationsProducts
          products="fox"
          leyend="Relacionado con tus visitas en Autos, Motos y Otros"
          leyendAdici="Ver favoritos" />

        <Discovery
          leyend="Te puede interesar" />

        <Collections />

        <Categories />

        <RecommendationsProducts
          products="iphone"
          leyend="Tu historial"
          leyendAdici="Ver historial completo" />

        <Footer />
      </>
    )
  }
}

export default MercadoLibre;