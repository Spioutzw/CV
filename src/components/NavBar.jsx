'use client'

import React from 'react';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';
import imageProfil from '../../public/images/1627459720791.jpg';

export default function NavBar() {

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [menuOpen, setMenuOpen] = React.useState(false);
  const refNavBar = React.useRef(null);
  const open = Boolean(anchorEl);

  const handleClick = () => {
    setAnchorEl(refNavBar);
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(!menuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          component="nav"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div style={{ position: 'relative', display: 'flex' }}>
            <Image
              src={imageProfil}
              style={{
                maxWidth: '50px',
                maxHeight: '50px',
                borderRadius: '50%',
                marginRight: '1rem',
              }}
              alt="Image de Roquigny Matthieu"
            />
            <Typography variant="h6" component="div" sx={{ alignSelf: 'center' }}>
              Roquigny Matthieu
            </Typography>
          </div>

          <div>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '2rem' }}>
              <Link href="#accueil">
                <Typography variant="h6" component="div">
                  Accueil
                </Typography>
              </Link>
              <Link href="#presentation">
                <Typography variant="h6" component="div">
                  Présentation
                </Typography>
              </Link>
              <Link href="#projet">
                <Typography variant="h6" component="div">
                  Projet
                </Typography>
              </Link>
              <Link href="#contact">
                <Typography variant="h6" component="div">
                  Contact
                </Typography>
              </Link>
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Menu sx={{ display: { xs: 'block', md: 'none' } }} MenuListProps={{sx: {paddingTop: '0', paddingBottom:"0"}}} id="long-menu" anchorEl={anchorEl} marginThreshold={0.1} open={open} onClose={handleClose} slotProps={{
                paper: {
                  style:
                  {
                    width: '500%',
                    maxWidth: 'unset',
                    borderRadius: '0 0 4px 4px',
                  }
                },
                
              }}>
                {['Accueil', 'Présentation', 'Projet', 'Contact'].map((option) => (
                  <MenuItem sx={{border:'1px solid #eee',padding : '1rem' , '&:hover': {
                    color: '#1976d2',
                  },}} key={option} onClick={handleClose}>
                    <Link href={`#${option.toLocaleLowerCase()}`}>{option}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
