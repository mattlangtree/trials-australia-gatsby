import React from "react"

import { graphql } from 'gatsby'
import Layout from "../components/layout"

import { getPrettyDate, getStandardDate } from "../utils/dates"

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    entry: craftPostsPostsEntry(slug: { eq: $slug }) {
      id
      title
      postDate
      postBody
      url
      author {
          fullName
      }
    }
  }
`

const BlogPostPage = ({ data: { entry } }) => {
  return (
    <Layout>
      <h1 className="text-4xl text-black font-display my-4">{entry.title}</h1>

      <div className="text-2xl text-black font-display my-4">{entry.author.fullName}</div>

      <time
        className="text-sm block pb-4"
        dateTime={getStandardDate(entry.postDate)}
      >
        {getPrettyDate(entry.postDate)}
      </time>

      <div
          dangerouslySetInnerHTML={{
            __html: entry.postBody,
          }}
        ></div>

      {/* {% include "_private/matrix" with {blocks: entry.bodyContent.all()} %} */}
    </Layout>
  )
}

export default BlogPostPage
