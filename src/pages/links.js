import * as React from "react"
import { graphql } from "gatsby"


import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

import Typography from "@mui/material/Typography"

//import icons
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

import { GiWeightLiftingUp } from "react-icons/gi"
import PageTemplate from "./page-templates/pageTemplate"
import data from "../data/data.json"

const profiles = data.links

const iconMapping = {
  FaInstagram: FaInstagram,
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaYoutube: FaYoutube,
  GiWeightLiftingUp: GiWeightLiftingUp
}


const Link = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <PageTemplate
      location={location}
      pageTitle={"Jason's Links"}
      pageSeo={"Links"}
      tabIndex={2}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {Object.keys(profiles).map(key => {
            const profile = profiles[key]
            const IconComponent = iconMapping[profile.icon]
            return (
              <Button
                key={profile.name}
                href={profile.url}
                target="_blank"
                variant="outlined"
                fullWidth
                size="large"
                endIcon={IconComponent && <IconComponent />}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderColor: "text.disabled",
                  borderRadius: 6,
                  color: "text.primary"
                }}
              >
                {profile.name}
                {profile.desc && (
                  <Typography
                    variant="caption"
                    sx={{ textTransform: "none", color: "text.disabled" }}
                  >
                    {profile.desc}
                  </Typography>
                )}
              </Button>
            )
          }
        )
        }
      </Box>
    </PageTemplate>
  )
}

export default Link

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
