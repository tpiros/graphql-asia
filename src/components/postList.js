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
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.nodes
  return posts.map((post, idx) => {
    return (
      <div className="mt-6" key={idx}>
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
            <div>
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
