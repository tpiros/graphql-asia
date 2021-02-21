import React from "react"
import { StaticQuery, graphql } from "gatsby"

const sortByVolume = (a, b) => {
  return b.totalCount - a.totalCount
}

const Authors = ({ data }) => {
  const authors = data.allMarkdownRemark.group
  const sortedAuthors = authors.sort(sortByVolume)
  return (
    <div className="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
      <ul className="-mx-4">
        {sortedAuthors.map((author, index) => {
          return (
            <li key={index} className="flex items-center">
              <p>
                <span className="text-gray-700 font-bold mx-1">
                  {author.fieldValue}
                </span>
                <span className="text-gray-700 text-sm font-light">
                  Wrote {author.totalCount} articles
                </span>
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function AuthorList() {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark {
            group(field: frontmatter___author) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={data => <Authors data={data} />}
    />
  )
}
