const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const axios = require('axios');
const crypto = require('crypto');


// Create the reviews.co.uk graphQl query
exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  // fetch raw data from the reviewscouk api
  const fetchRandomUser = () => axios.get(`http://api.reviews.co.uk/merchant/reviews?per_page=100&order=desc&store=adtrak-llp`);
  // await for results
  const res = await fetchRandomUser();

  // Map over the 'reviews' object
  res.data.reviews.map((review, i) => {
    const userNode = {
      // Required fields https://www.gatsbyjs.org/docs/node-apis/#sourceNodes
      id: createNodeId(`${i}`),
      parent: `__SOURCE__`,
      internal: {
        type: `Reviews`, // name of the graphQL query --> allReviews {}
      },
      children: [],

      // Pass the data we want from the reviews api here...
      comments: review.comments,
      date: review.date_created,
      rating: review.rating,
      reviewer: {
        firstName: review.reviewer.first_name,
        lastName: review.reviewer.last_name,
      }
    }

    // Get content digest of node. (Required field) using crypto as json is encrypted
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    // add it to the userNode above
    userNode.internal.contentDigest = contentDigest;

    // Create the node with the gatsby createNode() API
    createNode(userNode);
  });

  return;
}


// Loop over and create pages from dato instance
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