import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// Aca pasamos como parametro la data que va a venir de la peticion graphql de abajo
const BlogPage = ({ data }) => (
  <Layout>
    <h1>Latest Posts</h1>
    {/* Loopeamos los post de markdown */}
    {data.allMarkdownRemark.edges.map(post => (
      // Recuperamos los datos del frontmatter que nos interesan
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{" "}
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </Layout>
)

// Query para recuperar los posts hechos con markdown (ver tutorial de graphql). Desde http://localhost:8000/___graphql podemos probar hacer consultas y ver los resultados
export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
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
`

export default BlogPage
