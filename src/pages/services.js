import React from "react"
// Importamos el layout principal
import Layout from "../components/layout"

// Esta pagina la creamos nosotros, notar que no ponemos el return dentro de la funcion, simplemente parentesis
const ServicesPage = () => (
  // Wrapeamos todo en el componente layout que es el que tiene el header, el footer, etc
  <Layout>
    <h1>Our Services</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sapiente
      consectetur, consequuntur, ipsa tenetur eos facilis quos quis aut modi
      dolore repudiandae corrupti, laudantium vero tempore expedita. Deleniti,
      tempora quod?
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt atque
      officiis quo tenetur eveniet consequatur alias provident facere repellat
      quidem distinctio animi voluptates dicta quia vitae, illo doloribus.
      Laudantium, commodi.
    </p>
  </Layout>
)

export default ServicesPage
