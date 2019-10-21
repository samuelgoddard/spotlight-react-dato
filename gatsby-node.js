const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsLocation(filter: { active: { eq: true } }) {
          edges {
            node {        
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsLocation.edges.map(({ node: location }) => {
        createPage({
          path: `/${location.slug}`,
          component: path.resolve(`./src/templates/location.js`),
          context: {
            slug: location.slug,
          },
        })
      })
      resolve()
    })
  })
}