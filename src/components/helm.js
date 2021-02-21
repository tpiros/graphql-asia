import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Helm = ({ title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author {
              name
            }
          }
        }
      }
    `
  )

  const pageTitle = title || site.siteMetadata.title

  return (
    <Helmet
      title={pageTitle}
      meta={[
        {
          name: "author",
          content: site.siteMetadata.author.name,
        },
      ]}
    />
  )
}

export default Helm
