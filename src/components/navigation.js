import React from 'react'
import {useStaticQuery, graphql, Link} from "gatsby"

const Navigation = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        wpMenu(name: {eq: "main"}) {
          menuItems {
            nodes {
              url
              label
              id
            }
          }
        }
      }
      
    `)
    console.log(data)
    const menuItems = data.wpMenu.menuItems.nodes
    console.log(menuItems)
    return (
        <nav>
            <ul>
                {menuItems.map(el => {
                    return (
                        <li key={el.id}>
                            <Link to={el.url}>{el.label}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Navigation