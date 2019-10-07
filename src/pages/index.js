import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const { allMdx: { nodes }} = useStaticQuery(graphql`
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
        nodes.map((project, idx) => {
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
            <section
              className="px-12 py-24 min-h-screen flex items-center"
              style={{
                background,
              }}
            >
              <div className="container mx-auto">
                <h2 className="text-4xl font-display uppercase font-black">{ title }</h2>
                { !!subtitle && <h4 className="text-xl font-display">{ subtitle }</h4> }
                { !!description && <p className="mt-2 text-lg font-body font-light">{ description }</p> }
                {
                  !!projectLink && (
                    <a
                      className="btn btn-blue my-8 font-display"
                      href={projectLink}
                      rel="external"
                      target="_blank"
                    >
                      Project Link
                    </a>
                  )
                }
                {/* {
                  !!subProject && subProject.map(s => (
                    <div key={s.id} className="mb-12">
                      <h4 className="text-2xl font-display">{ s.title }</h4>
                      {!!s.description && <p className="mt-2 text-lg font-body font-light">{s.description}</p>}
                    </div>
                  ))
                } */}
              </div>
            </section>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage
