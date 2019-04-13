import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// Esto de poner el css de cada componente en su propio archivo esta bueno porque queda todo mas organizado y reutilizable
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      // marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        {/* Usa el mismo concepto de links que react */}
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
