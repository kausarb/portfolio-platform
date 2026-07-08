'use client';
import { useState } from 'react';
import { actionItems, navItems } from '../../config/header';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };
  return (
    <>
      <AppBar position='sticky' color='inherit' elevation={1}>
        <Toolbar sx={{ px: 4 }}>
          {/* Mobile Menu */}
          <IconButton
            edge='start'
            color='inherit'
            onClick={toggleDrawer}
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },
              mr: 2,
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography variant='h6' sx={{ fontWeight: 700 }}>
            PortfolioHub
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              gap: 1,
            }}
          >
            {navItems.map((item) => (
              <Button key={item.href} component={Link} href={item.href} color='inherit'>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Desktop Actions */}
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              gap: 2,
              ml: 2,
            }}
          >
            {actionItems.map((item) => (
              <Button key={item.href} component={Link} href={item.href} variant={item.variant}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor='left' open={mobileOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 280 }} role='presentation' onClick={toggleDrawer}>
          <Box sx={{ p: 3 }}>
            <Typography variant='h6' sx={{ fontWeight: 700 }}>
              PortfolioHub
            </Typography>

            <Typography variant='body2' color='text.secondary'>
              Build. Publish. Share.
            </Typography>
          </Box>

          <List>
            {navItems.map((item) => (
              <ListItemButton key={item.href} component={Link} href={item.href}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>

          <Box
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {actionItems.map((item) => (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                variant={item.variant}
                fullWidth
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
