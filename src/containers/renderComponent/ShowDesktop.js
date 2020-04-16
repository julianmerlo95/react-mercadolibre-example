import React from 'react';

import RecommendationsProducts from '../../components/Home/RecommendationsProducts/RecommendationsProducts';
import Discovery from '../../components/Home/Discovery/Discovery';
import Collections from '../../components/Home/Collections/Collections';
import Categories from '../../components/Home/Categories/Categories';

const ShowDesktop = () => {
  return (
    <>
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
    </>
  )
}

export default ShowDesktop;