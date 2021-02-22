import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Helm from "../components/helm"

const BlogTemplate = ({ data }) => {
  return (
    <Layout>
      <Helm
        title={`${data.markdownRemark.frontmatter.title} - ${data.site.siteMetadata.title}`}
      ></Helm>
      <div className="">
        <div className="flex justify-between container mx-auto">
          <div className="w-full">
            <div className="mt-6">
              <div className="px-10 mb-5 py-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <span className="font-light text-gray-600">
                    {data.markdownRemark.frontmatter.date}
                  </span>
                </div>
                <div className="mt-2">
                  <Link
                    to={data.markdownRemark.fields.slug}
                    className="text-2xl text-gray-700 font-bold"
                  >
                    {data.markdownRemark.frontmatter.title}
                  </Link>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data.markdownRemark.html,
                    }}
                    className="mt-2 text-gray-600"
                  />
                  <img
                    src={data.markdownRemark.frontmatter.blogPhoto.fixed.src}
                    alt="GraphQL Asia"
                  />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <img
                      src={
                        data.markdownRemark.frontmatter.authorPhoto.fixed.src
                      }
                      alt="avatar"
                      class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                    />
                    <h1 className="text-gray-700 font-bold">
                      {data.markdownRemark.frontmatter.author}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query blogPosts($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        intro
        author
        authorPhoto {
          fixed(transformations: "f_auto,q_auto,c_thumb,g_face,w_50,h_50") {
            src
          }
        }
        blogPhoto {
          fixed(
            transformations: "f_auto,q_auto,g_auto:refrigerator,h_800,w_400,c_crop"
          ) {
            src
          }
        }
      }
    }
  }
`
