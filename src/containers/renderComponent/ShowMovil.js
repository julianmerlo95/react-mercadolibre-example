import React from 'react';

import RecommendationsProducts from '../../components/Home/RecommendationsProducts/RecommendationsProducts';
import Discovery from '../../components/Home/Discovery/Discovery';
import Collections from '../../components/Home/Collections/Collections';
import Categories from '../../components/Home/Categories/Categories';

const ShowMovil = () => {
  return (
    <>
      <RecommendationsProducts
        products="samsung"
        leyend="Basado en tu última visita"
        leyendAdici="Ver historial" />

      <Discovery
        leyend="Descubrí" />

      <RecommendationsProducts
        products="macbook pro"
        leyend="Las mejores tiendas te esperan"
        leyendAdici="Ver tiendas" />

      <RecommendationsProducts
        products="inodoros"
        leyend="Ofertas"
        leyendAdici="Ver todas" />

      <Discovery
        leyend="Te puede interesar" />

      <RecommendationsProducts
        products="audi"
        leyend="Relacionado con tus visitas en Autos, Motos y Otros"
        leyendAdici="Ver historial" />

      <Collections />

      <Categories />

      <RecommendationsProducts
        products="iphone"
        leyend="Inspirado en tus favoritos "
        leyendAdici="Ver favoritos" />
    </>
  )
}

export default ShowMovil;