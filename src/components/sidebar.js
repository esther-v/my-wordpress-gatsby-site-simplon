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
            id
          }
        }
        allWpPost(filter: {date: {gt: "2019-12-01"}}, sort: {fields: date, order: DESC}) {
          nodes {
            id
            title
            uri
            date(formatString: "MMMM DD, YYYY")
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
    const tags = data.allWpTag.nodes
    const posts = data.allWpPost.nodes
    return (
        <aside>
            <h4>Recent posts</h4>
                {posts.map(el => {
                    return (
                        
                            <article key={el.id}>
                                <a href={el.uri}>
                                    <h6>{el.title}</h6>
                                    <p>{el.date}</p>
                                </a>
                            </article>
                        
                    )
                })}
                
            <h4>Widgets</h4>
                <ul className="cat">
                    {tags.map(el => {
                        return (
                            <li key={el.id}>
                                <a href={el.uri}>#{el.name}</a>
                            </li>
                        )
                    })}
                </ul>
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