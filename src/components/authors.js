import React from "react"

export default function Authors({ data }) {
  return (
    <div className="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
      <ul className="-mx-4">
        <li className="flex items-center">
          <p className="text-gray-700 font-bold mx-1 hover:underline">
            Alex John
            <span className="text-gray-700 text-sm font-light p-1">
              Created 23 Posts
            </span>
          </p>
        </li>
        <li className="flex items-center mt-6">
          <p className="text-gray-700 font-bold mx-1 hover:underline">
            Jane Doe
            <span className="text-gray-700 text-sm font-light p-1">
              Created 52 Posts
            </span>
          </p>
        </li>
        <li className="flex items-center mt-6">
          <p className="text-gray-700 font-bold mx-1 hover:underline">
            Lisa Way
            <span className="text-gray-700 text-sm font-light p-1">
              Created 73 Posts
            </span>
          </p>
        </li>
      </ul>
    </div>
  )
}
