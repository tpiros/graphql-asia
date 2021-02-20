import React from "react"

export default function PostList({ data }) {
  console.log(data)
  return (
    <div className="mt-6">
      <img
        className="object-cover h-48 w-full rounded-t-lg"
        src="https://res.cloudinary.com/tamas-demo/image/upload/colombia-flag.jpg"
      ></img>
      <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <span className="font-light text-gray-600">Jun 1, 2020</span>
        </div>
        <div className="mt-2">
          <a
            href="#"
            className="text-2xl text-gray-700 font-bold hover:underline"
          >
            {data.title}
          </a>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Read more
          </a>
          <div>
            <a href="#" className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                alt="avatar"
                className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
              />
              <h1 className="text-gray-700 font-bold hover:underline">
                Alex John
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
