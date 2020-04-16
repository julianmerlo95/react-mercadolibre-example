
const settings = {
  arrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

export default settings;