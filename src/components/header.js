import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from './navigation'

const Header = (props) => {
    const {isHomePage} = props
    const data = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  const title = data.wp.generalSettings.title
  const description = data.wp.generalSettings.description
    return (
        <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{title}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
        <p>{description}</p>
        <Navigation/>
      </header>
    )
}

export default Header