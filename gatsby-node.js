const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

///

///

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for a post
  const postTemplate = path.resolve(`./src/templates/post-detail.js`)

  // Define a template for tags
  const tagTemplate = path.resolve("src/templates/tags.js")

  // Get all markdown posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 200
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
        tagsGroup: allMdx(limit: 200) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes

  // Create posts pages
  // But only if there's at least one markdown file found at "content/posts" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: postTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
     // Extract tag data from query
    const tags = result.data.tagsGroup.group
    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tag/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })
  }
}
// const algoliasearch = require('algoliasearch');
// const tagCounts = {};
// exports.onCreateNode = async ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;
//
//   if (node.internal.type === `Mdx`) {
//     // Your existing logic for creating the slug
//     const value = createFilePath({ node, getNode });
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     });
//
//     // Your additional logic for Algolia indexing
//     if (node.fileAbsolutePath && node.fileAbsolutePath.includes('/posts/')) {
//       console.log('Node found:', node.fileAbsolutePath);
//
//       const isTag = node.frontmatter?.tags && node.frontmatter.tags.length > 0;
//
//
//       const dataToUpload = {
//         objectID: node.id,
//         title: node.frontmatter?.title || '',
//         description: node.frontmatter?.description || '',
//         date: node.frontmatter?.date || '',
//         slug: node.fields?.slug || '',
//       };
//
//
//       // Check if the script is explicitly run (not during Gatsby build).
//       if (process.env.NODE_ENV === 'development') {
//
//         await pushToAlgolia(dataToUpload, "Stories");
//
//         // Upload tags separately to the "Tags" index
//         if (isTag) {
//           // Count occurrences of each tag
//           node.frontmatter.tags.forEach(tag => {
//             tagCounts[tag] = (tagCounts[tag] || 0) + 1;
//           });
//
//
//           // Create an array of tag objects for Algolia
//           const tagsToUpload = Object.entries(tagCounts).map(([tag, count]) => ({
//             objectID: tag,
//             fieldValue: tag,
//             totalCount: count,
//           }));
//
//           // Upload tag data to Algolia
//           await Promise.all(tagsToUpload.map(tagData => pushToAlgolia(tagData, "Tags")));
//         }
//
//       }
//     }
//   }
// };
//
// const pushToAlgolia = async (data, indexName) => {
//   try {
//     const client = algoliasearch(
//       process.env.GATSBY_ALGOLIA_APP_ID || '',
//       process.env.ALGOLIA_ADMIN_KEY || ''
//     );
//     console.log('Algolia App ID:', process.env.GATSBY_ALGOLIA_APP_ID);
//     console.log('Algolia Admin Key:', process.env.ALGOLIA_ADMIN_KEY);
//
//     const index = client.initIndex(indexName);
//
//     // Push data to Algolia index.
//     const { objectID } = await index.saveObject(data); // Use objectID instead of objectIDs
//     console.log('Algolia object saved:', objectID);
//   } catch (error) {
//     console.error('Error uploading record to Algolia:', error.message);
//     console.error('Data to upload:', data);
//   }
// };



exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // posts are stored inside "content/posts" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}

