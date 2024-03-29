import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

export default ({ data }) => {
  return (
  <Layout>
    <SEO title="Will's Blog" />
    <div>
      <h1>Brolo's Thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount} {data.allMarkdownRemark.totalCount === 1 ?  'Post' : 'Posts'}</h4>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle> {node.frontmatter.title} - {node.frontmatter.date} </BlogTitle>
            </BlogLink>
            <p> {node.excerpt} </p>

          </div>
        ))
      }
    </div>
  </Layout>
)}

export const query = graphql`
  query {
    allMarkdownRemark( sort: { fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
