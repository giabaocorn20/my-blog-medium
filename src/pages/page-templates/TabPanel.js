import * as React from "react"
import Grid from "@mui/material/Grid"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid
          container
          sx={{ gap: "2rem", "@media (max-width: 600px)": { gap: "1.5rem" } }}
        >
          {children}
        </Grid>
      )}
    </div>
  )
}

export default TabPanel