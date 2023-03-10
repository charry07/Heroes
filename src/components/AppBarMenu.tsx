import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';

export const AppBarMenu = (props: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleProfile = () => {
    setAnchorEl(null);
    navigate('/Profile');
  };
  const handleAboutMe = () => {
    setAnchorEl(null);
    navigate('/AboutMe');
  };
  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.clear();
    navigate('/Login');
  };

  const onClickMarvel = () => {
    props.isMarvel(true);
    navigate('/Marvel');
  };
  const onClickDC = () => {
    props.isMarvel(false);
    navigate('/DC');
  };
  const onClickDev = () => {
    props.isMarvel(true);
    navigate('/Marvel');
  };



  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleAboutMe}>About Me</MenuItem>
      <MenuItem onClick={handleProfile}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Log Out</MenuItem>
    </Menu>
  );

  return location.pathname !== '/Login' ? (
    <Box sx={{ flexGrow: 1, background: 'yellow' }}>
      <AppBar position='static' color='secondary'>
        <Toolbar>
          {location.pathname === '/AboutMe' || location.pathname === '/Profile' ? (
            <IconButton size='large' edge='start' color='inherit' aria-label='open drawer' onClick={onClickDev} sx={{ mr: 2 }}>
              <ArrowBackIcon />
            </IconButton>
          ) : null}
          <Typography variant='h6' onClick={onClickDev} sx={{ display: { xs: 'none', sm: 'flex' }, cursor: 'pointer', mr: 1 }}>
            ACharryDev
          </Typography>

          {location.pathname === '/' || location.pathname === '/Marvel' || location.pathname === '/DC' ? (
            <>
              <MenuItem onClick={onClickMarvel}>
                <Typography textAlign='center'>Marvel</Typography>
              </MenuItem>
              <MenuItem onClick={onClickDC}>
                <Typography textAlign='center'>DC</Typography>
              </MenuItem>
            </>
          ) : null}

          <SearchBar inputSearch={(e: string) => props.inputSearch(e)} />
          <Box sx={{ mr: 1 }} />
          <Box sx={{ display: 'flex' }}>
            <IconButton size='large' edge='end' aria-label='account of current user' aria-controls={menuId} aria-haspopup='true' onClick={handleProfileMenuOpen} color='inherit'>
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  ) : null;
};
