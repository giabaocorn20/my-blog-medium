// CustomTabs.js
import * as React from "react";
import { navigate } from "gatsby";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import data from "../data/data.json";

const CustomTabs = ({ currentPath, activeTabIndex, onTabChange }) => {
  const tabs = data.configs.websiteInfo.tabs;

  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const selectedIndex = tabs.findIndex((tab) => tab.path === currentPath);
    setValue(selectedIndex !== -1 ? selectedIndex : 0);
  }, [currentPath, tabs]);

  React.useEffect(() => {
    setValue(activeTabIndex); // Set the value based on the prop
  }, [activeTabIndex]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onTabChange) {
      onTabChange(tabs[newValue].path); // Pass the path instead of the index
    }

    // Use navigate function for smooth navigation
    navigate(tabs[newValue].path);
  };

  return (
    <Box
      sx={{ width: "100%", borderBottom: 1, borderColor: "divider", align: "center" }}
    >
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        aria-label="nav tabs example"
        value={value}
        onChange={handleChange}
        sx={{
          "& .MuiTabs-flexContainer": {
            gap: "1rem",
            width: "auto", // Allow the container to expand
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "text.primary",
            height: "1px",
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            // Use a simple button for tab labels
            onClick={() => handleChange(null, index)}
            sx={{
              textTransform: "capitalize",
              fontWeight: 400,
              minWidth: "60px",
              color: currentPath === tab.path ? "text.primary" : "text.secondary",
              borderBottom: currentPath === tab.path ? "2px solid" : "none",
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default CustomTabs;
