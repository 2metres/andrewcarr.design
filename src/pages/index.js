import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteProjectQuery {
      allMdx {
        nodes {
          frontmatter {
            title
            subtitle
            description
            background
            projectLink
            areas
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Andrew Carr – Designer/Developer and All-around friendly giant" />
      {
        data.allMdx.nodes.map(project => {
          const {
            frontmatter: {
              title,
              subtitle,
              description,
              background,
              projectLink,
              areas,
            }
          } = project

          return (
            <section key={title}>
              <h3>{title}</h3>
            </section>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage
