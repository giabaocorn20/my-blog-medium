import * as React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

// local imports
import Post from "../templates/post"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tags from "../components/tagsPanel"
import PageTemplate from "./page-templates/pageTemplate"
import TabPanel from "./page-templates/TabPanel"
// MUI components

import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"




TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Portfolio" />
        <p>
          No blog posts found. Add markdown posts to "content/posts" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <PageTemplate
      location={location}
      pageTitle={"Jason Nguyen"}
      pageSeo={"Portfolio"}
      tabIndex={0}
    >
      <Tags />
      <TabPanel value={value} index={0} key={"all"}>
        {posts.map(post => (
          <Grid
            item
            xs={12}
            key={post.id}
            sx={{
              "&:last-child": { "& > hr": { display: "none" } },
            }}
          >
            <Post data={post} />
            <Divider
              sx={{ pt: 4, "@media (max-width: 600px)": { pt: "1.5rem" } }}
            />
          </Grid>
        ))}
      </TabPanel>

      {/* categories panels */}
      {data.allMdx.group.map((category, index) => (
        <TabPanel value={value} index={index + 1} key={category.fieldValue}>
          {posts.map(post => {
            if (post.frontmatter.category === category.fieldValue) {
              return (
                <Grid
                  item
                  xs={12}
                  key={post.id}
                  sx={{
                    "&:last-child": { "& > hr": { display: "none" } },
                  }}
                >
                  <Post data={post} />
                  <Divider
                    sx={{
                      pt: 4,
                      "@media (max-width: 600px)": { pt: "1.5rem" },
                    }}
                  />
                </Grid>
              )
            }
            return null; // Added to explicitly return null when no post matches the category
          })}
        </TabPanel>
      ))}
    </PageTemplate>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 200) {
      group(field: frontmatter___category) {
        fieldValue
      }
      nodes {
        id
        excerpt
        fields {
          slug
        }
        timeToRead
        frontmatter {
          category
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          featuredImage {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1)
            }
            name
          }
        }
      }
    }
  }
`
