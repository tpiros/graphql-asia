import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Helm from "../components/helm"
import { graphql } from "gatsby"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Helm title={`About ${data.site.siteMetadata.title}`}></Helm>
      <div className="px-6 py-8">
        <div className="flex justify-between container mx-auto">
          <div className="w-full">
            <div className="mt-6">
              <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                <p>This is the about page</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
