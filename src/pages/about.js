import React from "react"
// Importamos el layout principal
import Layout from "../components/layout"

// Esta pagina la creamos nosotros, notar que no usamos el return en la arrow function
const AboutPage = () => (
  // Wrapeamos todo en el componente layout que es el que tiene el header, el footer, etc
  <Layout>
    <h1>About Us</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sapiente
      consectetur, consequuntur, ipsa tenetur eos facilis quos quis aut modi
      dolore repudiandae corrupti, laudantium vero tempore expedita. Deleniti,
      tempora quod?
    </p>
  </Layout>
)

export default AboutPage
