import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import CarrouselPrimary from '../components/Home/CarrouselPrimary/CarrouselPrimary';
import RecommendationsProducts from '../components/Home/RecommendationsProducts/RecommendationsProducts';
import Discovery from '../components/Home/Discovery/Discovery';
import Collections from '../components/Home/Collections/Collections';
import Categories from '../components/Home/Categories/Categories';
import Footer from '../components/Home/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { discovery1, discovery2, discovery3, discovery4 } from '../components/Home/Discovery/data';


class MercadoLibre extends Component {

  render() {

    return (
      <div>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
        <CarrouselPrimary />
        <RecommendationsProducts products="iphone"
          leyend="Basado en tu última visita Ver historial"
          cantidadProduct="5"
        />
        <RecommendationsProducts products="iphone"
          leyend="Relacionado con tus visitas en Computación Ver historial"
          cantidadProduct="5"
        />
        <RecommendationsProducts products="iphone"
          leyend="Ofertas Ver historial Ver todas"
          cantidadProduct="5"
        />
        <Discovery leyend="Descubrí" imgLeft={discovery1} imgRight={discovery2} />
        <RecommendationsProducts products="iphone"
          leyend="Relacionado con tus visitas en Autos, Motos y Otros Ver historial"
          cantidadProduct="5"
        />
        <RecommendationsProducts products="iphone"
          leyend="Inspirado en tus favoritos Ver favoritos"
          cantidadProduct="5"
        />
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
      </div>
    )
  }
}

export default MercadoLibre;