import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"

const IndexPage = ({ data: { locations } }) => {
  return (
    <div>
      <SEO title="Home" />
      <h3>Currently Active Locations:</h3>
      {locations.edges.map(({ node }, index) => (
        <div key={index}>
          <Link to={`/${node.slug}`} className="text-red-500 underline">{node.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    locations: allDatoCmsLocation(filter: { active: { eq: true } }) {
      edges {
        node {        
          active
          name
          slug
        }
      }
    }
  }
`
