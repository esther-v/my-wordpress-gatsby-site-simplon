import React from 'react'
import '../css/style-components/footer.css';

const Footer = () => {
    return (
        <footer>
        © {new Date().getFullYear()}, Built with 💙 by Esther-
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby </a>
        {` `}
        And <a href="https://wordpress.org/"> WordPress</a>
      </footer>
    )
}

export default Footer