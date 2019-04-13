// Aca vamos a crear las paginas para poder ver nuestros archivos markdown en html usando el template de blog-post.js

const path = require("path")

// Brad dice que esto es confuso y ni el lo entiende, tiene algo que ver con redux que es usado por gatsby
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // Guardamos el template que vamos a usar para estos archivos
  const postTemplate = path.resolve("src/templates/blog-post.js")

  // Usandolo de esta forma nos va a devolver una promise
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      // Si hay errores, rechazamos la peticion mostrando el error
      throw res.errors
    }

    // Creamos una pagina para cada nodo (post) que tengamos. Node lo estamos destructurando de edge
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        // La url de la pagina
        path: node.frontmatter.path,
        // A partir de que template crearla
        component: postTemplate,
      })
    })
  })
}
