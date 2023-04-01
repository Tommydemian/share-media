import { useState } from 'react'
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery
} from '@mui/material'

import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close
} from '@mui/icons-material'

import { useDispatch, useSelector } from 'react-redux'
import { setMode, setLogout } from '../store'
import { useNavigate } from 'react-router-dom'
import FlexBetween from '../components/FlexBetween'
import themeSettings, { CustomPalette } from '../theme'

import { InitialState, ThemeSettings } from '../types'


const Navbar = () => {

  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state: InitialState) => state.user)
  const isNotMobileScreen = useMediaQuery("(min-width: 1100px)")

  const myTheme = themeSettings('dark');

  const theme = useTheme<CustomPalette>()

  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullname = `${user.firstname} ${user.lastname}`;

  return (
    <FlexBetween padding="1rem 6%" bgcolor={alt}  >
      <FlexBetween gap="1.75rem" >
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer"
            },
          }}
          onClick={() => navigate('/home')}
        >
          ShareMedia
        </Typography>
        {isNotMobileScreen && (
          <FlexBetween
            bgcolor={neutralLight}
            borderRadius=".5em"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder='Search...' />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>
      {/* Desktop nav */}
      {isNotMobileScreen ?
        (<FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode == "dark" ? (
              <DarkMode sx={{ color: dark, fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <FormControl variant='standard'>
            <Select value={fullname}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />} >
              <MenuItem value={fullname}>
                <Typography>{fullname}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout)}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
        ) : (
        <IconButton
           onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
        )}
           {/* MOBILE NAV */}
      {!isNotMobileScreen && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          bgcolor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard">
              <Select
                value={fullname}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullname}>
                  <Typography>{fullname}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout)}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  )
}

export default Navbar