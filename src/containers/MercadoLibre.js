import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import SliderPrimary from '../components/Home/SliderPrimary/SliderPrimary';
import RecommendationsProducts from '../components/Home/RecommendationsProducts/RecommendationsProducts';
import Discovery from '../components/Home/Discovery/Discovery';
import Collections from '../components/Home/Collections/Collections';
import Categories from '../components/Home/Categories/Categories';
import Footer from '../components/Home/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { discovery1, discovery2, discovery3, discovery4 } from '../components/Home/Discovery/data';
import './MercadoLibre.css';

class MercadoLibre extends Component {

  render() {

    return (
      <>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
        <SliderPrimary />
        <RecommendationsProducts products="samsung"
          leyend="Basado en tu última visita Ver historial"
          cantidadProduct="5"
        />
        <section className="hidden-section-movil">
          <RecommendationsProducts products="iphone"
            leyend="Relacionado con tus visitas en Computación Ver historial"
            cantidadProduct="5"
          />
        </section>
        <RecommendationsProducts products="iphone"
          leyend="Ofertas Ver historial Ver todas"
          cantidadProduct="5"
        />
        <Discovery leyend="Descubrí" imgLeft={discovery1} imgRight={discovery2} />

        <RecommendationsProducts products="iphone"
          leyend="Relacionado con tus visitas en Autos, Motos y Otros Ver historial"
          cantidadProduct="5"
        />
        <section className="hidden-section-movil">
          <RecommendationsProducts products="iphone"
            leyend="Inspirado en tus favoritos Ver favoritos"
            cantidadProduct="5"
          />
        </section>
        <RecommendationsProducts products="iphone"
          leyend="Las mejores tiendas te esperan Ver tiendas"
          cantidadProduct="4"
        />
        <RecommendationsProducts products="iphone"
          leyend="Inspirado en tus favoritos Ver favoritos"
          cantidadProduct="5"
        />
        <Discovery leyend="Te puede interesar" imgLeft={discovery3} imgRight={discovery4} />
        <Collections />
        <Categories />
        <RecommendationsProducts products="iphone"
          leyend="Inspirado en tus favoritos Ver favoritos"
          cantidadProduct="5"
        />
        <Footer />
      </>
    )
  }
}

export default MercadoLibre;