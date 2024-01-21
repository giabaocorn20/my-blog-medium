// PageTemplate.js
import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import { HiLink } from "react-icons/hi"
import CustomTabs from "../../components/CustomTabs"
import Container from "@mui/material/Container"

const PageTemplate = ({ children, location, pageTitle, pageSeo, tabIndex }) => {

  return (
    <Layout
      location={location}
      title={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "0.5rem" // Add padding here as needed
          }}
        >
          <IconButton
            size="small"
            sx={{
              mr: 1,
              backgroundColor: "action.selected",
              color: "text.primary"
            }}
          >
            <HiLink fontSize={20} />
          </IconButton>
          {pageTitle}
        </Box>
      }
    >
      <Seo title={pageSeo} />
      <Box sx={{ flexGrow: 1, overflow: "hidden" }}>    {/* prolly works */}
        <Container
          maxWidth="string"
          disableGutters
          sx={{
            maxWidth: "692px",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",

            "@media (max-width: 600px)": {
              gap: "1.5rem",
              px: "1.5rem"
            }
          }}
        >
          <CustomTabs currentPath={location.pathname} activeTabIndex={tabIndex} sx={{ padding: "1rem" }} />
          {children}
        </Container>
      </Box>
    </Layout>
  )
}

export default PageTemplate
