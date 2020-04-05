const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/BlogTemplate.js');

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { ne: "page" }, path: { ne: null } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // error handling
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query');
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // place additional data here
    });
  });
};
