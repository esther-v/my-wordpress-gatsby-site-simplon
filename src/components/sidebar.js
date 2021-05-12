import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import '../css/style-components/sidebar.css';

const Sidebar = () => {
    const data = useStaticQuery(graphql`
    query Aside {
        allWpTag {
          nodes {
            uri
            name
          }
        }
        allWpPost(filter: {date: {gt: "2019-12-01"}}, limit: 10) {
          nodes {
            id
            title
            uri
            date(formatString: "")
          }
        }
        allWpCategory {
          nodes {
            uri
            name
          }
        }
      }
    `)
    console.log(data)
    const categories = data.allWpCategory.nodes
    console.log(categories)
    return (
        <aside>
            <h4>Recent posts</h4>
                
            <h4>Widgets</h4>
            <h4>Categories</h4>
                <ul className="cat">
                    {categories.map(el => {
                        return (
                            <li key={el.id}>
                                <a href={el.uri}>{el.name}</a>
                            </li>
                        )
                    })}
                </ul>
        </aside>
    );
};

export default Sidebar;