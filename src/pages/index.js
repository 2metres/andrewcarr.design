import React from "react"
import {
  useStaticQuery,
  graphql,
  Link
} from 'gatsby'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id
          title
          subtitle
          description
          background

          subProject {
            id
            title
            description
          }
        }
      }
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(query)

  const projects = data.allProjectsJson.edges.map(e => e.node)

  return (
    <Layout>
      <SEO title="Home" />
      {
        projects.map(p => {
          const {
            id,
            background,
            title,
            subtitle,
            description,
            projectLink,
            subProject,
          } = p

          return (
            <section
              key={id}
              className="px-12 py-24"
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
                    <Link
                      rel="external noopener noreferrer"
                      className="btn btn-blue my-8 font-display"
                      href={projectLink}
                      target="_blank"
                    >
                      Project Link
                    </Link>
                  )
                }
                {
                  !!subProject && subProject.map(s => (
                    <div key={s.id} className="mb-12">
                      <h4 className="text-2xl font-display">{ s.title }</h4>
                      {!!s.description && <p className="mt-2 text-lg font-body font-light">{s.description}</p>}
                    </div>
                  ))
                }
              </div>
            </section>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage
