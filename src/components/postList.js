import React from "react"
import { Link } from "gatsby"

export default function PostList({ data }) {
  return (
    <div className="mt-6">
      {data.frontmatter.coverPhoto ? (
        <img
          className="object-cover h-40 w-full rounded-t-lg"
          src={data.frontmatter.coverPhoto.fixed.src}
          alt="GraphQL Asia"
        />
      ) : (
        <></>
      )}

      <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <span className="font-light text-gray-600">
            {data.frontmatter.date}
          </span>
        </div>
        <div className="mt-2">
          <Link
            to={data.fields.slug}
            className="text-2xl text-gray-700 font-bold hover:underline"
          >
            {data.frontmatter.title}
          </Link>
          <p className="mt-2 text-gray-600">{data.frontmatter.intro}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Link to={data.fields.slug} className="text-blue-500 hover:underline">
            Read more
          </Link>
          <div class="flex items-center">
            <img
              src={data.frontmatter.authorPhoto.fixed.src}
              alt="avatar"
              class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            />
            <h1 className="text-gray-700 font-bold">
              {data.frontmatter.author}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
