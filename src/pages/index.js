import React from "react"
import Layout from "../components/layout"
import PostList from "../components/postList"
import Authors from "../components/authors"
import Footer from "../components/footer"
import Helm from "../components/helm"

const IndexPage = () => {
  return (
    <Layout>
      <Helm />
      <div className="px-6 py-8">
        <div className="flex justify-between container mx-auto">
          <div className="w-full lg:w-8/12">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
                Post
              </h1>
            </div>
            <PostList />
          </div>
          <div className="-mx-8 w-4/12 hidden lg:block">
            <div className="px-8">
              <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>
              <Authors />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default IndexPage
