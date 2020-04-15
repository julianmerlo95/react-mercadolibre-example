
import React from 'react';
import imgCarrouselPrimary1 from '../../../assets/img/imgCarrouselPrimary1.webp';
import imgCarrouselPrimary2 from '../../../assets/img/imgCarrouselPrimary2.webp';
import imgCarrouselPrimary3 from '../../../assets/img/imgCarrouselPrimary3.webp';
import imgCarrouselPrimary4 from '../../../assets/img/imgCarrouselPrimary4.webp';
import imgCarrouselPrimary5 from '../../../assets/img/imgCarrouselPrimary5.webp';
import creditCard from '../../../assets/img/credit-card.svg';
import debitCard from '../../../assets/img/debit-card.svg';
import efect from '../../../assets/img/efect.svg';
import viewMore from '../../../assets/img/view-more.svg';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,


};

const arrayImg = [imgCarrouselPrimary1, imgCarrouselPrimary2,
  imgCarrouselPrimary3, imgCarrouselPrimary4, imgCarrouselPrimary5];

const arrayPayments = [
  {
    img: creditCard,
    name: 'Tarjeta de crédito',
    description: 'Ver promociones bancarias'
  },
  {
    img: debitCard,
    name: 'Tarjeta de débito',
    description: 'Ver mas'
  },
  {
    img: efect,
    name: 'Efectivo',
    description: 'Ver mas'
  },
  {
    img: viewMore,
    name: 'Más medios de pago',
    description: 'Ver todos'
  }

]


export { settings, arrayImg, arrayPayments };