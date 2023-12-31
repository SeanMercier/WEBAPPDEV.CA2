import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AuthContext } from "../../contexts/authContext";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Login", path: "/login" },
    { label: "Signup", path: "/signup" },
    { label: "Movie Favorites", path: "/movies/favorites" },
    { label: "Upcoming Movies", path: "/movies/upcoming" },
    { label: "Trending Movies", path: "/movies/trending"},
    { label: "Now Playing Movies", path:"/movies/nowPlaying"},
    { label: "Top Rated Movies", path:"/movies/topRated"},
    { label: "Actors", path: "/actors" },
    { label: "Actor Favourites", path: "/actors/favorites"},
    { label: "TV Shows", path: "/tv" },
    { label: "Now Airing", path: "/tv/now_airing" },
    { label: "Regions", path: "/regions" },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
          {authContext.isAuthenticated ? (
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Welcome {authContext.userName}!
            </Typography>
          ) : null}
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {authContext.isAuthenticated ? (
                <Button color="inherit" onClick={() => authContext.signout()}>
                  Sign out
                </Button>
              ) : (
                <Button color="inherit" onClick={() => navigate('/login')}>
                  Login
                </Button>
              )}
              {menuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}

export default SiteHeader;