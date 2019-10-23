import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "nuka-carousel"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      mdx: allMdx {
        nodes {
          frontmatter {
            title
            subtitle
            description
            background
            color
            projectLink
            imagePrefix
            areas
            subProject {
              title
              description
            }
          }
        }
      }
      images: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid(
                maxWidth: 1024,
                maxHeight: 768,
                fit: CONTAIN,
                background: "transparent"
              ) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Andrew Carr – Designer/Developer and All-around friendly giant" />
      {
        data.mdx.nodes.map((project, idx) => {
          const {
            frontmatter: {
              title,
              subtitle,
              description,
              background,
              color,
              projectLink,
              imagePrefix,
              subProject,
              /* areas, */
            }
          } = project

          const images = data.images.edges
            .filter(edge => edge.node.base.includes(imagePrefix))
            .map(edge => edge.node.childImageSharp)

          return (
            <section
              className="px-12 py-24 min-h-screen flex items-center"
              style={{
                background,
                color: color || 'black',
              }}
              key={idx}
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
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Project Link
                    </a>
                  )
                }
                {
                  images.length > 1 && (
                    <Carousel
                      renderCenterLeftControls={() => {}}
                      renderCenterRightControls={() => {}}
                    >
                    {
                      images.map(i => (
                        <Img fluid={[i.fluid]} key={i.fluid.src} />
                      ))
                    }
                    </Carousel>
                  )
                }
                {
                  (!!images && images.length === 1) && images.map(i => (
                    <Img fluid={[i.fluid]} key={i.fluid.src} />
                  ))
                }
                {
                  !!subProject && subProject.map(s => (
                    <div className="mb-12" key={s.title+s.description}>
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
