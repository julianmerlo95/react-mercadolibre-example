# Proyecto creado con React (react-creat-app)

## Este es un proyecto que simula el HOME de mercadolibre, tiene ciertas diferencias en cuanto a estilos e iconos, el mismo no maneja datos sencibles que puedan perjudicar a la pagina original. Ademas no cuenta con ningun link que te redireccione a ninguna pagina externa.

#### Esta totalmente adaptada a celulares y escritorio. (Por el momento no esta adaptada a tablet)

## Esta app esta consumiendo una app Node para las llamadas con Axios.

Estructura de la pagina 

    - src/
    - ---assets
    - ---------img
    - ---axios
    - ---components
    - -------------home  
    - -----------------Categories
    - -----------------Collections
    - -----------------Discovery
    - -----------------Footer
    - -----------------Payments
    - -----------------SliderPrimary
    - -----------------CategoriesCircle
    - -----------------Navbar
    - -----------------------MenuNavbar
    - -----------------------Shop
    - -----------------RecommendationsProducts
    - --------------------------------------- Product
    - ---containers
    - -------------Layout
    - ---contex
    - ---hoc

Conceptos que se implementaron en el proyecto
```
- props
- state
- eventos
- axios
- routas
- propsType
- context
- sass
- metodologia en estilos css: bem
- los componentes que modifican el renderizado de la app, estan creados con Class (PureComponent)
- ciclos de renderizado: componentDidMount
- componentes: stateful component, componentes stateless, pure component, componentes de orden superior (hoc).
- metodologia en la implementacion de la pagina: mobile first
```

#### Si clona el repositorio, no se olvide de ejecutar npm install, para instalar las dependencias
```
npm install o npm i
``
