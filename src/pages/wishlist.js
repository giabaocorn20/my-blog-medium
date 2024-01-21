import * as React from "react"
import { graphql } from "gatsby"


import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Alert from "@mui/material/Alert"
import Chip from "@mui/material/Chip"
import MuiLink from "@mui/material/Link"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import PageTemplate from "./page-templates/pageTemplate"

import data from "../data/data.json"

const wishlist = data.wishlist
const description = data.wishlist_desc
const WishlistPage = ({ data, location }) => {
  const categories = Object.keys(wishlist).reduce((acc, key) => {
    const category = wishlist[key].category
    if (!acc.includes(category)) {
      acc.push(category)
    }
    return acc
  }, [])

  return (
    <PageTemplate
      location={location}
      pageTitle={"Jason's wishlist"}
      pageSeo={"wishlist"}
      tabIndex={1}
    >
      <Alert
        severity="info"
        sx={{
          backgroundColor: "primary.light",
          color: "primary.dark",
          "& .MuiSvgIcon-root": { color: "primary.dark" },
        }}
        icon={"🧐"}
      >
        {description}
      </Alert>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {categories.map(category => (
          <Accordion
            key = {category}
            defaultExpanded
            elevation={0}
            sx={{
              "& .MuiButtonBase-root.MuiAccordionSummary-root, .MuiAccordionDetails-root":
                { padding: 1 } //prolly 0-1

            }}
          >
            <AccordionSummary
              id={category + "-header"}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              sx={{
                "& .MuiAccordionSummary-content": {
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                },
              }}
            >
              <MuiLink
                variant="h6"
                underline="none"
                sx={{
                  color: "text.primary",
                  fontWeight: "500",
                }}
                component="a"
                href={"#" + category}
              >
                {category}
              </MuiLink>
              <Chip
                disabled
                size="small"
                label={
                  Object.keys(wishlist).filter(
                    key => wishlist[key].category === category
                  ).length > 1
                    ? `${
                      Object.keys(wishlist).filter(
                        key => wishlist[key].category === category
                      ).length
                    } items`
                    : `${
                      Object.keys(wishlist).filter(
                        key => wishlist[key].category === category
                      ).length
                    } item`
                }
              />)
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {Object.keys(wishlist).map(key => {
                  const item = wishlist[key]
                  if (item.category === category) {
                    return (
                      <Grid item xs={12} sm={6} md={4} key={key}>
                        <Card
                          variant="outlined"
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            "@media (max-width: 600px)": {
                              flexDirection: "row",
                            },
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={item.image}
                            alt="green iguana"
                            height={160}
                            width={160}
                            sx={{
                              objectFit: "contain",
                              padding: 1,
                              height: "160px !important",
                              width: "160px !important",
                              "@media (max-width: 600px)": {
                                height: "120px !important",
                                width: "120px !important",
                              },
                            }}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              sx={{
                                fontWeight: "700",
                                lineHeight: "22px",
                                fontSize: "18px !important",
                                letterSpacing: "0",
                                color: "text.primary",
                                transition: "color 0.2s ease-in-out",
                                "@media (max-width: 600px)": {
                                  fontSize: "16px !important",
                                },
                              }}
                            >
                              {key}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                            >
                              {item.desc}
                            </Typography>
                            <Box sx={{ textAlign: "center", mt: 2 }}>
                              <Typography
                                variant="caption"
                                color="text.disabled"
                              >
                                Buy it on
                              </Typography>
                            </Box>
                            <CardActions
                              sx={{
                                p: 0,
                                justifyContent: "center",
                                flexWrap: "wrap",
                                rowGap: "6px",
                              }}
                            >
                              {Object.keys(item.stores).map(key => {
                                const store = item.stores[key]
                                return (
                                  <Button
                                    key={key}
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                      height: "28px",
                                      borderColor: "divider",
                                    }}
                                    href={store.affiliateLink}
                                    target="_blank"
                                  >
                                    <img
                                      src={store.icon}
                                      alt={key}
                                      style={{
                                        objectFit: "contain",
                                        backgroundPosition: "center center",
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                        height: "100%",
                                      }}
                                    />
                                  </Button>
                                )
                              })}
                            </CardActions>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  }
                })}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </PageTemplate>
  )
}

export default WishlistPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
