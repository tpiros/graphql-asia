import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function PostList() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            intro
            author
            authorPhoto {
              fixed(transformations: "f_auto,q_auto,c_thumb,g_face,w_50,h_50") {
                src
              }
            }
            coverPhoto {
              fixed(transformations: "f_auto,q_auto,c_fit,w_800") {
                src
              }
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.nodes
  return posts.map((post, idx) => {
    return (
      <div className="mt-6">
        {post.frontmatter.coverPhoto ? (
          <img
            className="object-cover h-40 w-full rounded-t-lg"
            src={post.frontmatter.coverPhoto.fixed.src}
            alt="GraphQL Asia"
          />
        ) : (
          <></>
        )}

        <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <span className="font-light text-gray-600">
              {post.frontmatter.date}
            </span>
          </div>
          <div className="mt-2">
            <Link
              to={post.fields.slug}
              className="text-2xl text-gray-700 font-bold hover:underline"
            >
              {post.frontmatter.title}
            </Link>
            <p className="mt-2 text-gray-600">{post.frontmatter.intro}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <Link
              to={post.fields.slug}
              className="text-blue-500 hover:underline"
            >
              Read more
            </Link>
            <div class="flex items-center">
              <img
                src={post.frontmatter.authorPhoto.fixed.src}
                alt="avatar"
                class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
              />
              <h1 className="text-gray-700 font-bold">
                {post.frontmatter.author}
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  })
}
