const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/posts.js")
  const res = await graphql(`
    query {
      allContentfulToursData {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulToursData.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/tours/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
