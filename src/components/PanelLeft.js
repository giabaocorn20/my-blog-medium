import * as React from "react"
import { Link } from "gatsby"

import ContactDrawer from "./ContactDrawer"
import SearchDialog from "./search/search-dialog"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"
import HomeIcon from "@mui/icons-material/Home"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import SearchIcon from "@mui/icons-material/Search"

import data from "../data/data.json"

const avatar = data.configs.websiteInfo.avatar
export default function RightDrawer({ isRootPath, ThemeButton }) {
  const [state, setState] = React.useState({
    bottom: false
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        width: "80px",
        borderRight: "1px solid",
        borderColor: "divider",
        padding: "2.5rem 0",
        position: "sticky",
        top: 0,
        "@media (max-width: 1080px)": {
          display: "none"
        }
      }}
    >
      <Box>
        <IconButton
          sx={{ color: "text.primary" }}
          size="small"
          component={Link}
          to="/"
        >
          <svg //always includes this svg tag
               xmlns="http://www.w3.org/2000/svg"
               width="60" //change the width and height to change the size of the icon
               height="60"
               viewBox="-37.5 -37.5 345 345" //change the viewBox to change the position of the icon
               version="1.2">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path fill="currentColor"
                        d="M224.981,89.059c5.173-11.027,9.046-24.691,10.901-41.679c-4.821-0.525-9.338-0.776-13.724-0.895 c-0.173,15.09-2.685,28.474-7.53,40.079C218.071,87.197,221.508,87.979,224.981,89.059z"></path>
                  <path fill="currentColor"
                        d="M178.075,50.56c0.167,1.002,0.28,2.005,0.418,3.001c1.128,8.276,1.122,16.445-0.37,24.452 c-0.746,4.04-1.862,7.829-3.151,11.468c7.536-2.661,15.902-4.35,25.144-4.35c2.846,0,5.698,0.173,8.568,0.495 c4.583-10.448,7.411-23.354,7.59-39.196c0.012-0.985,0.024-1.963,0.018-2.966c-0.012-0.973-0.066-1.987-0.095-2.983 c-0.131-4.356-0.388-8.855-0.925-13.646c-16.409,1.832-29.709,5.543-40.521,10.478c1.146,3.425,2.094,6.826,2.816,10.215 C177.771,48.543,177.884,49.552,178.075,50.56z"></path>
                  <path fill="currentColor"
                        d="M89.479,37.469c-10.818-4.905-24.112-8.574-40.509-10.37c-0.525,4.791-0.776,9.296-0.895,13.658 c14.47,0.161,27.364,2.488,38.624,6.934C87.409,44.301,88.34,40.894,89.479,37.469z"></path>
                  <path fill="currentColor"
                        d="M49.638,86.582c1.02-0.191,2.035-0.334,3.043-0.483c0.967-0.143,1.939-0.352,2.906-0.459 c2.906-0.322,5.794-0.507,8.664-0.507c9.225,0,17.578,1.683,25.103,4.338c-1.277-3.598-2.387-7.345-3.139-11.331 c-1.51-7.99-1.545-16.14-0.436-24.399c-10.197-4.231-22.614-6.862-37.764-7.029c-0.525-0.006-1.008-0.048-1.539-0.048 c-0.442,0-0.925,0.036-1.372,0.042c-0.967,0.006-1.981,0.054-2.977,0.084c-4.374,0.125-8.891,0.388-13.7,0.925 c1.88,16.839,5.734,30.413,10.866,41.374C42.759,88.002,46.207,87.221,49.638,86.582z"></path>
                  <path fill="currentColor"
                        d="M39.161,175.608c-5.09,10.955-8.897,24.518-10.734,41.327c4.821,0.525,9.344,0.776,13.724,0.895 c0.167-14.929,2.619-28.193,7.357-39.704C46.076,177.488,42.627,176.694,39.161,175.608z"></path>
                  <path fill="currentColor"
                        d="M86.233,213.766c-0.173-1.002-0.286-1.999-0.424-3.001c-1.134-8.282-1.122-16.445,0.37-24.458 c0.728-3.872,1.79-7.518,3.007-11.015c-7.494,2.631-15.812,4.29-24.989,4.29c-2.894,0-5.8-0.185-8.73-0.513 c-4.487,10.376-7.256,23.169-7.435,38.82c-0.012,0.979-0.024,1.957-0.018,2.971c0.012,0.967,0.066,1.981,0.095,2.983 c0.131,4.35,0.388,8.849,0.925,13.646c16.409-1.838,29.709-5.549,40.521-10.478c-1.152-3.425-2.088-6.832-2.81-10.215 C86.532,215.789,86.412,214.78,86.233,213.766z"></path>
                  <path fill="currentColor"
                        d="M174.835,226.84c10.812,4.905,24.112,8.58,40.509,10.37c0.525-4.791,0.77-9.296,0.889-13.658 c-14.47-0.155-27.364-2.482-38.63-6.934C176.894,220.013,175.969,223.42,174.835,226.84z"></path>
                  <path fill="currentColor"
                        d="M214.831,178.102c-1.02,0.197-2.029,0.34-3.043,0.489c-0.973,0.137-1.951,0.352-2.912,0.465 c-2.96,0.334-5.895,0.525-8.819,0.525c-9.165,0-17.465-1.647-24.947-4.278c1.199,3.461,2.261,7.053,2.983,10.872 c1.504,7.99,1.539,16.14,0.43,24.399c10.191,4.231,22.614,6.856,37.764,7.035c0.531,0,1.008,0.048,1.545,0.048 c0.436,0,0.919-0.036,1.366-0.048c0.973-0.012,1.987-0.06,2.977-0.089c4.368-0.125,8.891-0.388,13.7-0.925 c-1.862-16.654-5.651-30.127-10.705-41.022C221.711,176.664,218.262,177.464,214.831,178.102z"></path>
                  <path fill="currentColor"
                        d="M159.321,42.732c0.382,0.943,0.722,1.897,1.074,2.846c1.14,3.091,2.076,6.2,2.81,9.344 c0.245,1.05,0.555,2.094,0.746,3.151c0.209,1.08,0.37,2.16,0.531,3.246c0.376,2.649,0.716,5.305,0.817,7.99 c0.346,9.541-1.169,18.378-3.64,26.314c1.808-1.05,3.705-2.017,5.651-2.954c4.583-10.293,7.232-22.495,5.633-36.523 c-0.125-1.032-0.322-2.094-0.483-3.145c-0.161-1.02-0.28-2.023-0.483-3.061c-0.632-3.21-1.569-6.528-2.661-9.911 c-0.31-0.955-0.573-1.897-0.919-2.864c-0.34-0.925-0.758-1.874-1.122-2.804c-4.231-10.651-10.818-22.083-20.627-34.304 c-3.783,3.037-7.154,6.062-10.335,9.082c9.666,9.881,17.047,20.12,21.869,30.711C158.605,40.804,158.928,41.771,159.321,42.732z"></path>
                  <path fill="currentColor"
                        d="M102.726,95.616c1.372,0.788,2.703,1.599,3.992,2.44c1.533,0.996,2.983,2.023,4.41,3.067 c0.31,0.227,0.644,0.453,0.949,0.68c3.747-2.488,7.978-4.302,12.518-5.263c0.489-0.101,0.985-0.167,1.48-0.251 c0.531-0.09,1.056-0.179,1.593-0.245c0.483-0.06,0.967-0.113,1.456-0.155c0.537-0.048,1.086-0.06,1.629-0.084 c0.465-0.018,0.925-0.072,1.396-0.072c0.006,0,0.012,0,0.012,0c0.018,0,0.036,0,0.054,0c0.477,0,0.943,0.054,1.414,0.072 c0.543,0.024,1.092,0.036,1.629,0.084c0.495,0.042,0.979,0.101,1.468,0.161c0.531,0.066,1.05,0.149,1.575,0.239 c0.501,0.084,1.014,0.155,1.504,0.263c4.523,0.973,8.741,2.781,12.471,5.263c0.316-0.239,0.662-0.471,0.979-0.71 c4.242-10.12,7.053-22.215,5.794-35.574c-0.119-1.175-0.274-2.369-0.448-3.562c-0.155-1.08-0.37-2.172-0.579-3.264 c-0.609-3.079-1.384-6.2-2.476-9.386c-0.334-0.967-0.752-1.945-1.134-2.918c-0.37-0.961-0.698-1.915-1.128-2.882 c-4.266-9.786-11.063-19.971-21.188-30.318c-0.656-0.674-1.378-1.349-2.065-2.017c-0.698-0.68-1.432-1.366-2.16-2.053 c-3.186-3.007-6.558-6.021-10.341-9.046c-9.798,12.262-16.361,23.718-20.568,34.393c-0.37,0.937-0.782,1.886-1.116,2.81 c-0.346,0.973-0.609,1.915-0.919,2.87c-1.092,3.389-2.017,6.719-2.637,9.929c-0.203,1.032-0.31,2.029-0.465,3.043 c-0.161,1.056-0.364,2.124-0.477,3.156c-1.545,13.962,1.11,26.099,5.68,36.35C98.99,93.593,100.9,94.572,102.726,95.616z"></path>
                  <path fill="currentColor"
                        d="M104.981,221.589c-0.388-0.943-0.722-1.892-1.074-2.846c-1.14-3.091-2.076-6.2-2.81-9.332 c-0.245-1.056-0.549-2.1-0.752-3.151c-0.203-1.08-0.364-2.16-0.525-3.246c-0.382-2.649-0.722-5.316-0.817-7.996 c-0.334-9.35,1.122-18.026,3.514-25.837c-1.82,1.056-3.747,2.035-5.728,2.972c-4.445,10.197-6.993,22.227-5.424,36.022 c0.119,1.026,0.316,2.1,0.483,3.145c0.161,1.026,0.274,2.029,0.483,3.067c0.632,3.204,1.563,6.528,2.661,9.905 c0.31,0.949,0.573,1.891,0.925,2.858c0.334,0.925,0.752,1.868,1.122,2.81c4.231,10.651,10.818,22.083,20.627,34.304 c3.783-3.037,7.154-6.062,10.335-9.076c-9.66-9.881-17.047-20.126-21.869-30.711C105.697,223.516,105.381,222.555,104.981,221.589 z"></path>
                  <path fill="currentColor"
                        d="M161.72,169.176c-1.36-0.782-2.667-1.587-3.944-2.405c-1.51-0.973-2.936-1.975-4.332-2.995 c-0.501-0.37-1.026-0.716-1.516-1.092c-3.67,2.387-7.793,4.147-12.22,5.09c-0.489,0.101-0.985,0.167-1.48,0.251 c-0.525,0.095-1.056,0.179-1.587,0.245c-0.483,0.06-0.973,0.119-1.462,0.149c-0.537,0.054-1.086,0.066-1.629,0.09 c-0.465,0.018-0.925,0.078-1.396,0.078c-0.006,0-0.006,0-0.012,0c-0.018,0-0.042,0-0.06,0c-0.477,0-0.937-0.06-1.408-0.078 c-0.543-0.024-1.092-0.036-1.629-0.09c-0.489-0.036-0.979-0.101-1.462-0.155c-0.531-0.066-1.05-0.143-1.575-0.239 c-0.501-0.084-1.008-0.149-1.504-0.263c-4.404-0.949-8.509-2.697-12.166-5.078c-0.495,0.37-1.032,0.734-1.539,1.11 c-4.099,9.995-6.772,21.892-5.531,34.99c0.113,1.169,0.274,2.369,0.448,3.562c0.161,1.086,0.364,2.172,0.579,3.27 c0.609,3.085,1.384,6.2,2.476,9.38c0.328,0.967,0.752,1.945,1.134,2.918c0.376,0.955,0.704,1.909,1.128,2.876 c4.266,9.792,11.069,19.977,21.194,30.318c0.656,0.674,1.378,1.349,2.059,2.023c0.698,0.674,1.432,1.366,2.16,2.053 c3.186,3.007,6.558,6.021,10.341,9.046c9.798-12.262,16.361-23.718,20.568-34.393c0.37-0.937,0.782-1.886,1.116-2.81 c0.346-0.979,0.615-1.921,0.913-2.87c1.098-3.389,2.017-6.719,2.637-9.929c0.203-1.032,0.31-2.035,0.465-3.037 c0.155-1.062,0.37-2.124,0.477-3.162c1.522-13.736-1.032-25.705-5.466-35.843C165.503,171.228,163.57,170.238,161.72,169.176z"></path>
                  <path fill="currentColor"
                        d="M41.714,105.455c0.979-0.418,1.963-0.776,2.948-1.152c0.973-0.37,1.945-0.74,2.924-1.068 c3.145-1.062,6.313-1.927,9.505-2.572c1.092-0.221,2.184-0.394,3.282-0.567c1.104-0.173,2.208-0.31,3.312-0.436 c2.727-0.298,5.472-0.495,8.234-0.495h0.006c8.527,0,16.427,1.486,23.617,3.735c1.51,0.471,2.983,0.973,4.427,1.51 c1.695,0.632,3.341,1.289,4.941,1.987c0.364,0.161,0.722,0.322,1.08,0.489c0.263-0.269,0.525-0.543,0.794-0.806 c0.131-0.131,0.28-0.251,0.412-0.376c-0.286-0.209-0.561-0.418-0.853-0.627c-1.325-0.943-2.715-1.838-4.141-2.733 c-1.659-1.032-3.377-2.017-5.161-2.954c-1.468-0.77-2.954-1.528-4.511-2.22c-8.228-3.652-17.65-6.086-28.265-6.086 c-1.897,0-3.861,0.125-5.83,0.286c-1.044,0.084-2.112,0.221-3.18,0.358c-1.038,0.131-2.082,0.28-3.139,0.459 c-3.264,0.549-6.605,1.265-10.054,2.297c-0.943,0.28-1.927,0.668-2.882,0.991c-0.973,0.328-1.939,0.638-2.93,1.008 C25.049,100.658,12.972,107.46,0,117.867c2.995,3.729,5.985,7.136,8.956,10.281C19.464,117.855,30.407,110.277,41.714,105.455z"></path>
                  <path fill="currentColor"
                        d="M38.999,169.211c0.961,0.322,1.945,0.71,2.894,0.99c3.455,1.038,6.796,1.766,10.06,2.315 c1.044,0.173,2.082,0.322,3.109,0.453c1.062,0.131,2.13,0.28,3.168,0.37c2.017,0.161,4.016,0.292,5.955,0.292 c10.549,0,19.905-2.411,28.086-6.027c1.528-0.674,2.983-1.396,4.427-2.154c1.742-0.907,3.425-1.862,5.042-2.858 c1.456-0.895,2.888-1.808,4.242-2.763c0.483-0.34,0.931-0.686,1.402-1.032c-0.227-0.209-0.465-0.4-0.686-0.621 c-0.179-0.167-0.358-0.346-0.531-0.525c-0.221-0.221-0.418-0.465-0.632-0.686c-0.495-0.537-1.002-1.05-1.468-1.617 c-0.197-0.239-0.364-0.495-0.555-0.734c-0.448-0.567-0.889-1.134-1.301-1.736c-0.179-0.263-0.358-0.525-0.531-0.788 c-2.345-3.58-4.069-7.584-5.048-11.88c-0.155-0.68-0.28-1.39-0.394-2.088c-0.048-0.286-0.09-0.579-0.131-0.871 c-0.101-0.734-0.191-1.468-0.251-2.202c-0.024-0.28-0.03-0.573-0.042-0.859c-0.03-0.579-0.084-1.134-0.09-1.718 c0-0.101-0.018-0.203-0.018-0.31c0-0.054,0.006-0.107,0.006-0.161c0.036-0.615,0.089-1.205,0.119-1.796 c0.012-0.263,0.018-0.525,0.042-0.788c0.06-0.764,0.143-1.522,0.245-2.273c0.036-0.269,0.078-0.531,0.119-0.8 c0.119-0.722,0.239-1.444,0.394-2.154c0.973-4.344,2.715-8.395,5.09-12.005c0.113-0.167,0.215-0.34,0.328-0.507 c-0.34-0.149-0.674-0.292-1.02-0.436c-8.467-3.538-18.306-6.104-29.124-6.104c-1.181,0-2.381,0.042-3.592,0.107 c-1.217,0.066-2.446,0.173-3.682,0.304c-1.128,0.119-2.273,0.28-3.419,0.465c-3.162,0.501-6.379,1.223-9.654,2.226 c-1.026,0.316-2.059,0.674-3.091,1.044c-1.002,0.358-2.011,0.728-3.019,1.14c-10.388,4.195-21.248,11.2-32.293,22.006 c-0.68,0.656-1.354,1.349-2.035,2.041c-0.722,0.734-1.444,1.462-2.166,2.232c-2.966,3.151-5.943,6.564-8.926,10.293 c12.894,10.305,24.906,17.047,36.046,21.212C37.06,168.585,38.027,168.883,38.999,169.211z"></path>
                  <path fill="currentColor"
                        d="M162.532,162.606c1.617,1.002,3.306,1.945,5.048,2.858c1.444,0.752,2.9,1.48,4.427,2.154 c8.181,3.598,17.525,6.003,28.056,6.003c1.975,0,4.004-0.125,6.056-0.304c1.044-0.09,2.112-0.245,3.174-0.37 c1.02-0.125,2.041-0.28,3.079-0.453c3.276-0.555,6.617-1.295,10.072-2.345c0.949-0.28,1.927-0.662,2.882-0.99 c0.979-0.328,1.945-0.638,2.936-1.014c11.14-4.183,23.157-10.967,36.058-21.314c-2.995-3.729-5.991-7.136-8.962-10.281 c-10.454,10.245-21.314,17.787-32.549,22.608c-0.967,0.418-1.957,0.782-2.936,1.164c-0.967,0.37-1.933,0.752-2.906,1.086 c-3.15,1.08-6.325,1.957-9.529,2.613c-1.062,0.221-2.136,0.382-3.216,0.555c-1.11,0.179-2.214,0.334-3.335,0.453 c-2.81,0.322-5.639,0.519-8.491,0.519c-8.425,0-16.242-1.456-23.366-3.658c-1.48-0.453-2.93-0.931-4.35-1.456 c-1.647-0.615-3.264-1.247-4.833-1.915c-0.603-0.263-1.181-0.531-1.772-0.811c-0.167,0.179-0.358,0.352-0.537,0.525 c-0.215,0.209-0.442,0.388-0.656,0.597c0.453,0.328,0.889,0.662,1.354,0.991C159.608,160.774,161.052,161.693,162.532,162.606z"></path>
                  <path fill="currentColor"
                        d="M225.13,95.461c-0.961-0.322-1.945-0.71-2.894-0.991c-3.449-1.026-6.778-1.736-10.042-2.279 c-1.062-0.179-2.118-0.334-3.162-0.459c-1.068-0.131-2.124-0.263-3.174-0.346c-1.933-0.155-3.855-0.28-5.728-0.28 c-10.633,0-20.061,2.44-28.301,6.104c-1.557,0.692-3.043,1.45-4.517,2.226c-1.79,0.943-3.509,1.927-5.167,2.966 c-1.396,0.877-2.769,1.76-4.075,2.685c-0.31,0.221-0.603,0.442-0.901,0.662c0.143,0.137,0.304,0.263,0.442,0.4 c0.268,0.263,0.525,0.537,0.794,0.811c0.125,0.131,0.245,0.274,0.37,0.406c0.579,0.621,1.158,1.247,1.695,1.909 c0.113,0.143,0.209,0.292,0.328,0.436c0.525,0.668,1.044,1.337,1.522,2.035c0.113,0.161,0.203,0.328,0.304,0.489 c2.351,3.574,4.075,7.584,5.054,11.88c0.149,0.686,0.28,1.39,0.388,2.088c0.054,0.286,0.089,0.579,0.131,0.865 c0.101,0.734,0.185,1.468,0.245,2.214c0.03,0.28,0.036,0.567,0.048,0.847c0.03,0.573,0.084,1.14,0.089,1.718 c0,0.101,0.018,0.203,0.018,0.31c0,0.054-0.006,0.107-0.006,0.161c0,0.603-0.06,1.193-0.09,1.778 c-0.012,0.268-0.018,0.525-0.048,0.794c-0.06,0.764-0.137,1.522-0.245,2.273c-0.036,0.268-0.072,0.531-0.125,0.8 c-0.119,0.722-0.239,1.444-0.388,2.154c-0.979,4.344-2.715,8.395-5.096,12.005c-0.173,0.274-0.364,0.537-0.549,0.812 c0.543,0.233,1.098,0.459,1.641,0.692c8.36,3.455,18.05,5.949,28.707,5.949c1.307,0,2.619-0.042,3.956-0.119 c1.193-0.072,2.393-0.185,3.604-0.316c1.128-0.125,2.261-0.298,3.407-0.477c3.162-0.513,6.379-1.247,9.66-2.261 c1.014-0.322,2.035-0.686,3.061-1.056c1.002-0.358,2.005-0.74,3.019-1.146c10.317-4.207,21.081-11.188,32.048-21.904 c0.674-0.662,1.36-1.349,2.041-2.041c0.722-0.734,1.444-1.462,2.166-2.232c2.966-3.151,5.943-6.558,8.926-10.287 c-12.972-10.364-25.043-17.125-36.231-21.272C227.075,96.099,226.097,95.783,225.13,95.461z"></path>
                  <path fill="currentColor"
                        d="M101.729,132.748c0.018,0.853,0.167,1.659,0.251,2.482c0.018,0.179,0.03,0.364,0.054,0.537 c0.095,0.817,0.09,1.665,0.251,2.458c0.042,0.191,0.113,0.37,0.161,0.561c0.656,2.971,1.826,5.71,3.276,8.282 c0.519,0.913,1.014,1.838,1.623,2.685c0.119,0.167,0.269,0.31,0.388,0.477c0.489,0.656,1.026,1.271,1.563,1.892 c0.084,0.101,0.155,0.197,0.239,0.286c0.06,0.072,0.107,0.137,0.167,0.203c0.644,0.71,1.319,1.366,2.029,2.017 c0.06,0.066,0.131,0.113,0.197,0.161c0.09,0.078,0.185,0.143,0.274,0.227c0.621,0.543,1.247,1.086,1.909,1.575 c0.173,0.125,0.322,0.286,0.501,0.406c0.853,0.609,1.784,1.098,2.703,1.611c2.071,1.164,4.266,2.088,6.599,2.739 c0.991,0.28,1.975,0.561,3.007,0.74c0.328,0.066,0.668,0.054,0.996,0.101c0.686,0.101,1.378,0.161,2.076,0.209 c0.024,0,0.048,0.012,0.066,0.012c0.304,0.024,0.603,0.078,0.913,0.09c0.394,0.018,0.764,0.125,1.158,0.125 c0.364,0,0.698-0.101,1.056-0.113c0.31-0.012,0.603-0.078,0.907-0.089c0.024,0,0.048-0.012,0.072-0.012 c0.704-0.048,1.396-0.113,2.082-0.209c0.328-0.048,0.668-0.048,0.996-0.101c1.032-0.167,2.011-0.436,2.995-0.716 c2.363-0.65,4.577-1.581,6.665-2.739c0.919-0.519,1.862-1.002,2.715-1.611c0.167-0.119,0.31-0.268,0.471-0.382 c0.674-0.501,1.307-1.056,1.933-1.605c0.084-0.078,0.173-0.131,0.245-0.203c0.072-0.06,0.137-0.107,0.197-0.161 c0.71-0.638,1.39-1.301,2.041-2.005c0.066-0.066,0.113-0.131,0.161-0.197c0.095-0.107,0.173-0.221,0.269-0.328 c0.525-0.609,1.05-1.211,1.539-1.862c0.125-0.173,0.28-0.328,0.406-0.501c0.632-0.859,1.128-1.772,1.647-2.679 c1.492-2.619,2.685-5.43,3.353-8.467c0.036-0.167,0.084-0.334,0.119-0.501c0.161-0.823,0.149-1.683,0.257-2.524 c0.018-0.149,0.03-0.316,0.048-0.465c0.084-0.853,0.245-1.683,0.257-2.554c0-0.149,0.042-0.28,0.042-0.43 c0-0.012-0.006-0.024-0.006-0.036c0-0.006,0-0.006,0-0.012c0-0.185-0.048-0.352-0.054-0.531c-0.018-0.847-0.167-1.653-0.251-2.482 c-0.018-0.179-0.03-0.358-0.06-0.537c-0.095-0.817-0.084-1.665-0.245-2.464c-0.048-0.191-0.119-0.37-0.161-0.561 c-0.65-2.966-1.832-5.71-3.276-8.276c-0.519-0.919-1.014-1.838-1.617-2.691c-0.054-0.066-0.113-0.125-0.155-0.191 c-0.555-0.764-1.175-1.468-1.802-2.172c-0.06-0.066-0.113-0.143-0.167-0.209c-0.03-0.024-0.042-0.054-0.066-0.078 c-0.668-0.746-1.36-1.462-2.1-2.136c-0.036-0.03-0.072-0.054-0.107-0.084c-0.072-0.066-0.149-0.125-0.227-0.191 c-0.692-0.621-1.402-1.223-2.148-1.772c-0.089-0.066-0.161-0.149-0.257-0.215c-0.853-0.609-1.748-1.122-2.655-1.647 c-2.142-1.241-4.451-2.208-6.886-2.894c-0.99-0.28-1.975-0.561-3.007-0.74c-0.328-0.054-0.662-0.054-0.996-0.101 c-0.686-0.095-1.378-0.161-2.082-0.209c-0.024,0-0.048-0.006-0.072-0.006c-0.304-0.024-0.603-0.078-0.913-0.09 c-0.394-0.018-0.758-0.119-1.158-0.119c-0.364,0-0.698,0.095-1.056,0.107c-0.31,0.012-0.603,0.072-0.907,0.09 c-0.024,0-0.048,0.006-0.072,0.006c-0.704,0.048-1.396,0.113-2.082,0.209c-0.328,0.048-0.668,0.048-0.991,0.101 c-1.026,0.173-2.011,0.442-3.001,0.716c-2.464,0.686-4.785,1.659-6.957,2.906c-0.907,0.519-1.814,1.032-2.661,1.641 c-0.084,0.06-0.149,0.131-0.233,0.191c-0.758,0.561-1.474,1.17-2.178,1.796c-0.066,0.06-0.137,0.107-0.203,0.167 c-0.03,0.03-0.066,0.054-0.095,0.078c-0.74,0.674-1.432,1.384-2.106,2.124c-0.024,0.03-0.048,0.06-0.072,0.084 c-0.066,0.078-0.125,0.161-0.197,0.239c-0.615,0.698-1.223,1.396-1.772,2.148c-0.054,0.078-0.125,0.143-0.185,0.221 c-0.609,0.853-1.104,1.766-1.623,2.679c-1.492,2.625-2.691,5.43-3.347,8.467c-0.036,0.167-0.09,0.334-0.119,0.501 c-0.161,0.817-0.161,1.683-0.257,2.518c-0.018,0.155-0.03,0.316-0.048,0.471c-0.084,0.853-0.245,1.683-0.257,2.554 c0,0.149-0.042,0.28-0.042,0.43c0,0.012,0.006,0.024,0.006,0.036c0,0.006,0,0.006,0,0.012 C101.675,132.396,101.723,132.563,101.729,132.748z"></path>
                </g>
              </g>
            </g>
          </svg>
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}
      >
        <Tooltip title="Home" placement="right" arrow>
          <IconButton component={Link} to="/">
            {isRootPath ? (
              <HomeIcon sx={{ color: "text.primary" }} />
            ) : (
              <HomeOutlinedIcon />
            )}
          </IconButton>
        </Tooltip>
        <React.Fragment>
          <Tooltip title="Search" placement="right" arrow>
            <IconButton onClick={handleClickOpen}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <SearchDialog
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
          />
        </React.Fragment>
        <React.Fragment>
          <Tooltip title="Contact" placement="right" arrow>
            <IconButton onClick={toggleDrawer("bottom", true)}>
              <AlternateEmailOutlinedIcon />
            </IconButton>
          </Tooltip>
          <ContactDrawer
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
          />
        </React.Fragment>
        {ThemeButton}
      </Box>
      <Box>
        <Avatar
          alt={avatar.alt}
          src={avatar.url}
          sx={{ width: 32, height: 32, backgroundColor: "divider" }}
        >
          {avatar.words}
        </Avatar>
      </Box>
    </Box>
  )
}
