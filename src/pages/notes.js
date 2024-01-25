import * as React from "react"
import { graphql } from "gatsby"

import PageTemplate from "./page-templates/pageTemplate"

const Notes = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <PageTemplate
      location={location}
      pageTitle={"University Notes"}
      pageSeo={"Notes"}
      tabIndex={4}
    >
      <div>
        This is where I will upload my university notes after every semester. Stay tuned!
      </div>
    </PageTemplate>
  )
}

export default Notes

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

