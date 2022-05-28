import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import Image from 'next/image';
import devMedic from '/public/devMedic_white.png';
import NextLink from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';

const Layout = ({
  description,
  title,
  children,
  selectedAbout,
  selectedPortfolio,
  selectedContact,
}) => {
  let theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 500,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 300,
        margin: '1rem 0',
      },
      h3: {
        fontSize: '1.2rem',
        fontWeight: 300,
        margin: '1rem 0',
      },
      h4: {
        fontSize: '1.1rem',
        fontWeight: 300,
        margin: '1rem 0',
      },
      h5: {
        fontSize: '1rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h6: {
        fontSize: '0.7rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      primary: {
        main: '#101010',
      },
      secondary: {
        main: '#01464a',
      },
      tertiary: {
        main: '#111111',
      },
    },
  });
  theme = responsiveFontSizes(theme);

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen);
    setMenuVisible(!menuVisible);
  };

  return (
    <Box>
      <Head>
        <title>{title ? `The Dev Medic | ${title}  ` : `DevMedic`}</title>
        <link rel='icon' type='image/x-icon' href='/devMd_black.png' />
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <AppBar
            position='fixed'
            sx={{
              height: `5rem`,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: `1rem`,
            }}
          >
            <Toolbar
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'fixed',
                top: 0,
              }}
            >
              <Box
                sx={{
                  flex: 2,
                  display: 'flex',
                  justifyContent: { xs: 'start', lg: 'center' },
                  alignItems: 'center',
                  mt: 2,
                }}
              >
                <NextLink href='/' passHref>
                  <Image
                    src={devMedic}
                    width={200}
                    height={50}
                    alt='devMedic'
                    style={{ cursor: 'pointer' }}
                  />
                </NextLink>
              </Box>
              <IconButton
                sx={{
                  flex: 0.5,
                  display: { xs: 'flex', lg: 'none' },
                  justifyContent: 'center',
                  alignItems: 'start',
                  color: '#FFFFFF',
                  marginTop: 1,
                }}
                onClick={menuOpenHandler}
                aria-label='open menu'
              >
                {menuOpen ? (
                  <CloseIcon sx={{ fontSize: 30 }} />
                ) : (
                  <MenuIcon sx={{ fontSize: 30 }} />
                )}
              </IconButton>
              <Box
                sx={{
                  flex: 2,
                  display: { xs: 'none', lg: 'flex' },
                  justifyContent: 'space-around',
                }}
              >
                <NextLink href='/about' passHref>
                  <Typography
                    variant='h5'
                    sx={{
                      cursor: 'pointer',
                      color: selectedAbout ? '#ffffff' : '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  >
                    about
                  </Typography>
                </NextLink>
                <NextLink href='/portfolio' passHref>
                  <Typography
                    variant='h5'
                    sx={{
                      cursor: 'pointer',
                      color: selectedPortfolio ? '#ffffff' : '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  >
                    portfolio
                  </Typography>
                </NextLink>
                <NextLink href='/#contact' passHref>
                  <Typography
                    variant='h5'
                    sx={{
                      cursor: 'pointer',
                      color:
                        selectedContact === 'selectedContact'
                          ? '#ffffff'
                          : '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  >
                    contact
                  </Typography>
                </NextLink>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: { xs: 'none', lg: 'flex' },
                  justifyContent: 'start',
                }}
              >
                <a
                  href='https://github.com/bryanwaine'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GitHubIcon
                    sx={{
                      fontSize: 30,
                      mr: 2,
                      cursor: 'pointer',
                      color: '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/nwanne-ezeaka-mbbs-a45bb475/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LinkedInIcon
                    sx={{
                      fontSize: 30,
                      mr: 2,
                      cursor: 'pointer',
                      color: '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://twitter.com/bryanwaine_MD'
                  target='_blank'
                  rel='noreferrer'
                >
                  <TwitterIcon
                    sx={{
                      fontSize: 30,
                      mr: 2,
                      cursor: 'pointer',
                      color: '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://instagram.com/bryanwaine_MD'
                  target='_blank'
                  rel='noreferrer'
                >
                  <InstagramIcon
                    sx={{
                      fontSize: 30,
                      mr: 2,
                      cursor: 'pointer',
                      color: '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  />
                </a>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor='top'
            open={menuVisible}
            onClose={menuOpenHandler}
            sx={{ zIndex: 0 }}
          >
            <List
              sx={{
                display: { xs: menuOpen ? 'flex' : 'none', lg: 'none' },
                flexDirection: 'column',
                marginTop: '5rem',
                background: '#101010',
                opacity: 1,
                color: '#FFFFFF',
              }}
            >
              <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                <NextLink href='/about' passHref>
                  <Typography
                    variant='h5'
                    sx={{
                      cursor: 'pointer',
                      color: selectedAbout ? '#ffffff' : '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                    onClick={() => menuOpenHandler()}
                  >
                    about
                  </Typography>
                </NextLink>
              </ListItem>
              <ListItem
                sx={{ display: 'flex', justifyContent: 'center' }}
                onClick={() => menuOpenHandler()}
              >
                <NextLink href='/portfolio' passHref>
                  <Typography
                    variant='h5'
                    sx={{
                      cursor: 'pointer',
                      color: selectedPortfolio ? '#ffffff' : '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                    onClick={() => menuOpenHandler()}
                  >
                    portfolio
                  </Typography>
                </NextLink>
              </ListItem>
              <ListItem
                sx={{ display: 'flex', justifyContent: 'center' }}
                onClick={() => menuOpenHandler()}
              >
                <NextLink href='/#contact' passHref>
                  <Typography
                    variant='h5'
                    sx={{
                      cursor: 'pointer',
                      color: selectedContact ? '#ffffff' : '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  >
                    contact
                  </Typography>
                </NextLink>
              </ListItem>
            </List>
          </Drawer>
          <div style={{ minHeight: '80vh' }}>{children}</div>
          <div style={{ height: '5rem' }} />
          <AppBar
            position='static'
            color='primary'
            sx={{
              top: 'auto',
              bottom: 0,
              height: '10rem',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: '1rem',
            }}
          >
            <Toolbar
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: { xs: 'column', lg: 'row' },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  color: '#aaaaaa',
                  ':hover': {
                    color: '#ffffff',
                  },
                }}
              >
                <DownloadIcon />
                <a
                  href='https://pdfhost.io/v/EZjfiyptP_Nwannes_Resume'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Typography variant='h5'>DOWNLOAD MY RESUME&nbsp;</Typography>
                </a>
              </Box>
              <Box>
                <Typography variant='h6'>
                  Created by Nwanne Bryan Ezeaka, MD. &nbsp; &copy;{' '}
                  {new Date().getFullYear()}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                }}
              >
                <a
                  href='https://github.com/bryanwaine'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GitHubIcon
                    sx={{
                      fontSize: 30,
                      mr: 2,
                      cursor: 'pointer',
                      color: '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/nwanne-ezeaka-mbbs-a45bb475/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LinkedInIcon
                    sx={{
                      fontSize: 30,
                      mr: 2,
                      cursor: 'pointer',
                      color: '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://twitter.com/bryanwaine_MD'
                  target='_blank'
                  rel='noreferrer'
                >
                  <TwitterIcon
                    sx={{
                      fontSize: 30,
                      mr: 2,
                      cursor: 'pointer',
                      color: '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://instagram.com/bryanwaine_MD'
                  target='_blank'
                  rel='noreferrer'
                >
                  <InstagramIcon
                    sx={{
                      fontSize: 30,
                      mr: 2,
                      cursor: 'pointer',
                      color: '#666666',
                      ':hover': {
                        color: '#ffffff',
                      },
                    }}
                  />
                </a>
              </Box>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </CssBaseline>
    </Box>
  );
};

export default Layout;
