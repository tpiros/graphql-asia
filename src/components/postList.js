import React from "react"

export default function PostList() {
  const posts = [
    {
      id: 1,
      title: "Hello",
    },
    { id: 2, title: "Yo" },
  ]
  return posts.map(post => {
    return (
      <div className="mt-6">
        <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <span className="font-light text-gray-600">Jun 1, 2020</span>
          </div>
          <div className="mt-2">
            <a className="text-2xl text-gray-700 font-bold hover:underline">
              {post.title}
            </a>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto
              eos enim reprehenderit nisi, accusamus delectus nihil quis facere
              in modi ratione libero!
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <a className="text-blue-500 hover:underline">Read more</a>
            <div>
              <h1 className="flex items-center text-gray-700 font-bold">
                Alex John
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  })
}
