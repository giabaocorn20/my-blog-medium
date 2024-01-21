import * as React from "react"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import data from "../data/data.json"

const profiles = data.socials;
const github_api = data.configs.websiteInfo.user_github_api;
const Socials = () => {
  const [gitFollowers, setGitFollowers] = React.useState(0)
  React.useEffect(() => {
    fetch(github_api)
      .then(res => res.json())
      .then(data => {
        setGitFollowers(data.followers)
      }
      )
  }, [])
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "text.primary",
          fontSize: "16px !important",
          letterSpacing: 0,
          fontWeight: "500",
          lineHeight: "20px",
        }}
      >
        Social media
      </Typography>
      <Stack spacing={2}>
        {Object.keys(profiles).map(key => {
          const profile = profiles[key]
          return (
            <Box
              key={profile.name}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1.5rem",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Avatar
                    variant="square"
                    alt="avatar"
                    src={profile.icon}
                    sx={{ width: 20, height: 20 }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 500 }}>
                    {profile.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {profile.followers}
                    {profile.name === "GitHub" && gitFollowers}
                    {" "}
                    {profile.name === "YouTube" ? "subscribers" : "followers"}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "text.primary",
                  borderColor: "divider",
                  fontWeight: 400,
                  height: "fit-content",
                  borderRadius: "99em",
                  textTransform: "capitalize",
                }}
                href={profile.url}
              >
                Follow
              </Button>
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}

//export const Profiles = profiles
export default Socials
