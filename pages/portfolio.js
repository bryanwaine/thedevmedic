/* eslint-disable @next/next/no-img-element */
import { Button, Card, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ImageCarousel from '../components/Carousel';

const Portfolio = () => {
  const router = useRouter();

  function revealPortfolioImg1() {
    var reveals = document.querySelectorAll('.revealPortfolioImg1');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 250;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } 
    }
  }

  function revealPortfolioDesc1() {
    var reveals = document.querySelectorAll('.revealPortfolioDesc1');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 250;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } 
    }
  }

  function revealPortfolioImg2() {
    var reveals = document.querySelectorAll('.revealPortfolioImg2');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 250;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } 
    }
  }

  function revealPortfolioDesc2() {
    var reveals = document.querySelectorAll('.revealPortfolioDesc2');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 250;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } 
    }
  }

  function revealPortfolioImg3() {
    var reveals = document.querySelectorAll('.revealPortfolioImg3');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 250;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } 
    }
  }

  function revealPortfolioDesc3() {
    var reveals = document.querySelectorAll('.revealPortfolioDesc3');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 250;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } 
    }
  }

  function revealPortfolioImg4() {
    var reveals = document.querySelectorAll('.revealPortfolioImg4');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 250;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } 
    }
  }

  function revealPortfolioDesc4() {
    var reveals = document.querySelectorAll('.revealPortfolioDesc4');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 250;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } 
    }
  }

  function revealPortfolioImg5() {
    var reveals = document.querySelectorAll('.revealPortfolioImg5');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 250;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } 
    }
  }

  function revealPortfolioDesc5() {
    var reveals = document.querySelectorAll('.revealPortfolioDesc5');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 250;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } 
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      revealPortfolioImg1();
      revealPortfolioDesc1();
      revealPortfolioImg2();
      revealPortfolioDesc2();
      revealPortfolioImg3();
      revealPortfolioDesc3();
      revealPortfolioImg4();
      revealPortfolioDesc4();
      revealPortfolioImg5();
      revealPortfolioDesc5();
    });
  }, []);

  return (
    <Layout selectedPortfolio title='My Portfolio'>
      <Box>
        <Grid container spacing={0}>
          {/* Carousel */}

          <Grid
            item
            xs={12}
            md={12}
            sx={{
              height: '30rem',
              background: '#1d2124',
              margin: '5rem 0 0 0',
              padding: '3rem 0 0 0',
            }}
          >
            <ImageCarousel />
          </Grid>

          {/* Columns */}

          <Grid container spacing={0}>
            {/* Left Column */}

            <Grid
              item
              xs={2}
              md={5.5}
              sx={{
                background: '#ffffff',
                display: { xs: 'none', lg: 'flex' },
                flexDirection: 'column',
                alignItems: 'center',
                padding: '4rem 0',
              }}
            >
              {/* Telemedicine Screen Section */}

              <Box
                sx={{ height: '50rem', width: '80%' }}
                className='revealPortfolioImg2'
              >
                <Typography
                  variant='h3'
                  sx={{
                    width: '100%',
                    height: '8rem',
                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'start',
                    padding: '0',
                    fontWeight: 700,
                    color: '#666666',
                  }}
                >
                  June, 2022
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flex: 'center',
                    flexDirection: 'column',
                    alignItems: 'end',
                  }}
                >
                  <img
                    src='/whatsup-doc_screen.png'
                    alt='Whatsup Doc!'
                    style={{ width: '15rem', height: '30rem' }}
                  />
                  <Box
                    sx={{
                      boxShadow:
                        '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
                      width: '10rem',
                      height: '0px',
                      margin: '2rem 2.5rem 0 0',
                    }}
                  />
                </Box>
              </Box>

              {/* Ahia Marketplace Description Section */}

              <Box
                sx={{ height: '50rem', width: '80%' }}
                className='revealPortfolioDesc1'
              >
                <Card
                  raised={true}
                  sx={{
                    width: '100%',
                    minHeight: '25rem',
                    borderLeft: '5px solid #ff0000',
                    borderRadius: 2,
                    margin: '10rem 0 0 0',
                    padding: '2rem',
                  }}
                >
                  <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
                    Ahia Marketplace
                  </Typography>
                  <Typography variant='h5' sx={{ margin: '0' }}>
                    A food order application
                  </Typography>
                  <Box
                    sx={{
                      height: '.3rem',
                      width: { xs: '50%', lg: '30%' },
                      borderRadius: 20,
                      backgroundImage:
                        'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      marginTop: 1,
                    }}
                  />

                  <Typography variant='h6' sx={{}}>
                    Ahia Market place is an e-commerce food order website built
                    using <strong>Next.js</strong> with{' '}
                    <strong>React.js</strong> powering the front end,&nbsp;
                    <strong>Node.js</strong>&nbsp; serving the backend and{' '}
                    <strong>MongoDB</strong> providing the database storage.{' '}
                    <strong>Material UI</strong> was used to create a beautiful
                    and responsive user interface for a seamless user
                    experience.
                    <br />
                    <br />
                    The application offers customers a beautiful shopping
                    experience with light and dark screen modes, user
                    authentication and authorization, secure online payment via
                    debit cards, and the ability to track orders. The admin area
                    offers a beautiful dashboard showing useful statistics on
                    sales, orders, users, and products, with the ability to
                    manage products and update order tracking.
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a
                      href='https://ahia.vercel.app'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        sx={{
                          backgroundImage:
                            'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                        }}
                      >
                        VISIT WEBSITE
                      </Button>
                    </a>
                  </div>
                </Card>
              </Box>

              {/* LMS Screen Section */}

              <Box
                sx={{ height: '50rem', width: '80%' }}
                className='revealPortfolioImg2'
              >
                <Typography
                  variant='h3'
                  sx={{
                    width: '100%',
                    height: '8rem',
                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'start',
                    padding: '0',
                    fontWeight: 700,
                    color: '#666666',
                  }}
                >
                  Feb, 2022
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flex: 'center',
                    flexDirection: 'column',
                    alignItems: 'end',
                  }}
                >
                  <img
                    src='/lms_screen.png'
                    alt='PHS LMS'
                    style={{ width: '15rem', height: '30rem' }}
                  />
                  <Box
                    sx={{
                      boxShadow:
                        '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
                      width: '10rem',
                      height: '0px',
                      margin: '2rem 2.5rem 0 0',
                    }}
                  />
                </Box>
              </Box>

              {/* PHS Website Description Section  */}

              <Box
                sx={{ height: '50rem', width: '80%' }}
                className='revealPortfolioDesc3'
              >
                <Card
                  raised={true}
                  sx={{
                    width: '100%',
                    minHeight: '20rem',
                    borderLeft: '5px solid #358163',
                    borderRadius: 2,
                    margin: '10rem 0 0 0',
                    padding: '2rem',
                  }}
                >
                  <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
                    PHS Website
                  </Typography>
                  <Typography variant='h5' sx={{ margin: '0' }}>
                    An official website
                  </Typography>
                  <Box
                    sx={{
                      height: '.3rem',
                      width: { xs: '50%', lg: '30%' },
                      borderRadius: 20,
                      backgroundImage:
                        'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      marginTop: 1,
                    }}
                  />

                  <Typography variant='h6' sx={{}}>
                    PHS website is an official website for an institution built
                    using <strong>Next.js</strong> with{' '}
                    <strong>React.js</strong> powering the front end,&nbsp;
                    <strong>Node.js</strong>&nbsp; serving the backend and{' '}
                    <strong>MongoDB</strong> providing the database storage.{' '}
                    <strong>Material UI</strong> was used to create a beautiful
                    and responsive user interface for a seamless user
                    experience.
                    <br />
                    <br />
                    The application offers a beautiful homepage and ease of
                    navigation with a responsive layout.
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a
                      href='https://phs-website.vercel.app'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        sx={{
                          backgroundImage:
                            'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                        }}
                      >
                        VISIT WEBSITE
                      </Button>
                    </a>
                  </div>
                </Card>
              </Box>

            </Grid>

            {/* Middle column */}

            <Grid
              item
              xs={3}
              md={1}
              sx={{
                background: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                margin: '0 0 -5rem 0',
              }}
            >
              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      background: '#1d2124',
                      height: '4rem',
                      width: '3%',
                    }}
                  />
                  <img
                    src='/w-d_logo_thumb.png'
                    alt='Whatsup Doc!'
                    style={{
                      width: '4rem',
                      height: '4rem',
                      background: '#ffa500',
                      border: '5px solid #1d2124',
                      borderRadius: 15,
                      padding: 5,
                    }}
                  />
                  <Box
                    sx={{
                      background: '#1d2124',
                      height: '46rem',
                      width: '3%',
                    }}
                  />
                  <Box
                    sx={{
                      display: { xs: 'initial', lg: 'none' },
                      background: '#1d2124',
                      height: '41rem',
                      width: '3%',
                    }}
                  />
                  <img
                    src='/ahia.png'
                    alt='ahia'
                    style={{
                      width: '4rem',
                      height: '4rem',
                      background: '#ff0000',
                      border: '5px solid #1d2124',
                      borderRadius: 15,
                      padding: 5,
                    }}
                  />
                  <Box
                    sx={{
                      background: '#1d2124',
                      height: '46rem',
                      width: '3%',
                    }}
                  />
                  <Box
                    sx={{
                      display: { xs: 'initial', lg: 'none' },
                      background: '#1d2124',
                      height: '44rem',
                      width: '3%',
                    }}
                  />
                  <img
                    src='/phs.png'
                    alt='PHS LMS'
                    style={{
                      width: '4rem',
                      height: '4rem',
                      background: '#358163',
                      border: '5px solid #1d2124',
                      borderRadius: 15,
                      padding: 5,
                    }}
                  />
                  <Box
                    sx={{
                      background: '#1d2124',
                      height: '46rem',
                      width: '3%',
                    }}
                  />
                  <Box
                    sx={{
                      display: { xs: 'initial', lg: 'none' },
                      background: '#1d2124',
                      height: '32rem',
                      width: '3%',
                    }}
                  />
                  <img
                    src='/phs.png'
                    alt='PHS Website'
                    style={{
                      width: '4rem',
                      height: '4rem',
                      background: '#358163',
                      border: '5px solid #1d2124',
                      borderRadius: 15,
                      padding: 5,
                    }}
                  />
                  <Box
                    sx={{
                      background: '#1d2124',
                      height: '46rem',
                      width: '3%',
                    }}
                  />
                  <Box
                    sx={{
                      display: { xs: 'initial', lg: 'none' },
                      background: '#1d2124',
                      height: '28rem',
                      width: '3%',
                    }}
                  />
                  
                </Grid>
              </Grid>

              {/* Right Column */}
            </Grid>
            <Grid
              item
              xs={9}
              md={5.5}
              sx={{
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '4rem 0',
              }}
            >
              {/* Telemedicine Screen on XS */}

              <Box
                sx={{
                  height: { xs: '40rem', lg: '50rem' },
                  width: '80%',
                  display: { xs: 'initial', lg: 'none' },
                }}
                className='revealPortfolioImg2'
              >
                <Typography
                  variant='h3'
                  sx={{
                    width: '100%',
                    height: '8rem',
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'start',
                    padding: '0',
                    fontWeight: 700,
                    color: '#666666',
                  }}
                >
                  June, 2022
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flex: 'center',
                    flexDirection: 'column',
                    alignItems: 'end',
                    margin: { xs: '-5rem 0 0 0', lg: 0 },
                  }}
                >
                  <img
                    src='/whatsup-doc_screen.png'
                    alt='Whatsup Doc!'
                    style={{ width: '15rem', height: '30rem' }}
                  />
                  <Box
                    sx={{
                      boxShadow:
                        '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
                      width: '10rem',
                      height: '0px',
                      margin: '2rem 2.5rem 0 0',
                    }}
                  />
                </Box>
              </Box>

              {/* Telemedicine Description Section */}

              <Box
                sx={{ height: { xs: '42rem', lg: '50rem' }, width: '80%' }}
                className='revealPortfolioDesc2'
              >
                <Card
                  raised={true}
                  sx={{
                    width: '100%',
                    minHeight: '20rem',
                    borderLeft: '5px solid #ffa500',
                    borderRadius: 2,
                    background: '#eeeeee',
                    margin: { xs: '0', lg: '10rem 0 0 0' },
                    padding: '2rem',
                  }}
                >
                  <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
                    Whatsup Doc&#33;&#8482;
                  </Typography>
                  <Typography variant='h5' sx={{ margin: '0' }}>
                    A Telemedicine Web Application
                  </Typography>
                  <Box
                    sx={{
                      height: '.3rem',
                      width: { xs: '50%', lg: '30%' },
                      borderRadius: 20,
                      backgroundImage:
                        'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      marginTop: 1,
                    }}
                  />
                  <Typography variant='h6' sx={{}}>
                    Whatsup Doc&#33;&#8482; is a telemedicine, medical
                    consultation and online pharmacy application built
                    using&nbsp;
                    <strong>Next.js</strong> with{' '}
                    <strong>React.js &amp; Material UI</strong>&nbsp; powering
                    the front end user interface and{' '}
                    <strong>Node.js &amp; MongoDB</strong> serving the backend
                    and database. It sports a user-friendly interface with
                    seamless responsiveness and ease of navigation.
                    <br />
                    <br />
                    The application features a patient dashboard with user
                    authentication and authorization, doctor appointment
                    bookings, subscription plans, video, audio and chat
                    consultation, among other features. The doctor dashboard
                    features patient management, digital prescription, and a
                    forum for discussion with other doctors, among other
                    features.
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a
                      href='https://whatsup-doc.vercel.app'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        sx={{
                          backgroundImage:
                            'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                        }}
                      >
                        VISIT WEBSITE
                      </Button>
                    </a>
                  </div>
                </Card>
              </Box>

              {/*Ahia Screen Section */}

              <Box
                sx={{ height: { xs: '40rem', lg: '50rem' }, width: '80%', margin: {xs: '9rem 0 0 0', lg: '0'} }}
                className='revealPortfolioImg1'
              >
                <Typography
                  variant='h3'
                  sx={{
                    width: '100%',
                    height: '8rem',
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'start',
                    padding: '0',
                    fontWeight: 700,
                    color: '#666666',
                  }}
                >
                  May, 2022
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flex: 'center',
                    flexDirection: 'column',
                    alignItems: 'start',
                    margin: { xs: '-5rem 0 0 0', lg: 0 },
                  }}
                >
                  <img
                    src='/ahia_screen.png'
                    alt='ahia_marketplace'
                    style={{ width: '15rem', height: '30rem' }}
                  />
                  <Box
                    sx={{
                      boxShadow:
                        '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
                      width: '10rem',
                      height: '0px',
                      margin: '2rem 0 0 2.5rem',
                    }}
                  />
                </Box>
              </Box>

              {/* Ahia Description on XS  */}

              <Box
                sx={{
                  height: '50rem',
                  width: '80%',
                  display: { xs: 'initial', lg: 'none' },
                  margin: '0 0 4rem 0',
                }}
                className='revealPortfolioDesc1'
              >
                <Card
                  raised={true}
                  sx={{
                    width: '100%',
                    minHeight: '25rem',
                    borderLeft: '5px solid #ff0000',
                    borderRadius: 2,
                    margin: '0',
                    padding: '2rem',
                  }}
                >
                  <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
                    Ahia Marketplace
                  </Typography>
                  <Typography variant='h5' sx={{ margin: '0' }}>
                    A food order application
                  </Typography>
                  <Box
                    sx={{
                      height: '.3rem',
                      width: { xs: '50%', lg: '30%' },
                      borderRadius: 20,
                      backgroundImage:
                        'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      marginTop: 1,
                    }}
                  />

                  <Typography variant='h6' sx={{}}>
                    Ahia Market place is an e-commerce food order website built
                    using <strong>Next.js</strong> with{' '}
                    <strong>React.js</strong> powering the front end,&nbsp;
                    <strong>Node.js</strong>&nbsp; serving the backend and{' '}
                    <strong>MongoDB</strong> providing the database storage.{' '}
                    <strong>Material UI</strong> was used to create a beautiful
                    and responsive user interface for a seamless user
                    experience.
                    <br />
                    <br />
                    The application offers customers a beautiful shopping
                    experience with light and dark screen modes, user
                    authentication and authorization, secure online payment via
                    debit cards, and the ability to track orders. The admin area
                    offers a beautiful dashboard showing useful statistics on
                    sales, orders, users, and products, with the ability to
                    manage products and update order tracking.
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a
                      href='https://ahia.vercel.app'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        sx={{
                          backgroundImage:
                            'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                        }}
                      >
                        VISIT WEBSITE
                      </Button>
                    </a>
                  </div>
                </Card>
              </Box>

              {/* LMS Screen on XS */}

              <Box
                sx={{
                  height: { xs: '40rem', lg: '50rem' },
                  width: '80%',
                  display: { xs: 'initial', lg: 'none' },
                }}
                className='revealPortfolioImg2'
              >
                <Typography
                  variant='h3'
                  sx={{
                    width: '100%',
                    height: '8rem',
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'start',
                    padding: '0',
                    fontWeight: 700,
                    color: '#666666',
                  }}
                >
                  Feb, 2022
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flex: 'center',
                    flexDirection: 'column',
                    alignItems: 'end',
                    margin: { xs: '-5rem 0 0 0', lg: 0 },
                  }}
                >
                  <img
                    src='/lms_screen.png'
                    alt='PHS LMS'
                    style={{ width: '15rem', height: '30rem' }}
                  />
                  <Box
                    sx={{
                      boxShadow:
                        '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
                      width: '10rem',
                      height: '0px',
                      margin: '2rem 2.5rem 0 0',
                    }}
                  />
                </Box>
              </Box>

              {/* LMS Description Section */}

              <Box
                sx={{ height: { xs: '42rem', lg: '50rem' }, width: '80%' }}
                className='revealPortfolioDesc2'
              >
                <Card
                  raised={true}
                  sx={{
                    width: '100%',
                    minHeight: '20rem',
                    borderLeft: '5px solid #358163',
                    borderRadius: 2,
                    background: '#eeeeee',
                    margin: { xs: '0', lg: '10rem 0 0 0' },
                    padding: '2rem',
                  }}
                >
                  <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
                    PHS Learn
                  </Typography>
                  <Typography variant='h5' sx={{ margin: '0' }}>
                    A Learning Management System
                  </Typography>
                  <Box
                    sx={{
                      height: '.3rem',
                      width: { xs: '50%', lg: '30%' },
                      borderRadius: 20,
                      backgroundImage:
                        'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      marginTop: 1,
                    }}
                  />
                  <Typography variant='h6' sx={{}}>
                    Port Health Services LMS is an online learning management
                    system built upon the <strong>WordPress</strong> platform.
                    It sports a user-friendly interface with seamless
                    responsiveness and ease of navigation.
                    <br />
                    <br />
                    The application features user authentication and
                    authorization, free and paid course enrollment, quizzes,
                    surveys, and certificate of completion. The admin area
                    offers an intuititive dashboard showing useful statistics on
                    courses, users, and sales.
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a
                      href='https://phslearn.com'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        sx={{
                          backgroundImage:
                            'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                        }}
                      >
                        VISIT WEBSITE
                      </Button>
                    </a>
                  </div>
                </Card>
              </Box>

              {/* PHS Website Screen */}

              <Box
                sx={{ height: { xs: '40rem', lg: '50rem' }, width: '80%' }}
                className='revealPortfolioImg3'
              >
                <Typography
                  variant='h3'
                  sx={{
                    width: '100%',
                    height: '8rem',
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'start',
                    padding: '0',
                    fontWeight: 700,
                    color: '#666666',
                  }}
                >
                  Jan, 2022
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flex: 'center',
                    flexDirection: 'column',
                    alignItems: 'start',
                    margin: { xs: '-5rem 0 0 0', lg: 0 },
                  }}
                >
                  <img
                    src='/phs_screen.png'
                    alt='PHS Website'
                    style={{ width: '15rem', height: '30rem' }}
                  />
                  <Box
                    sx={{
                      boxShadow:
                        '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
                      width: '10rem',
                      height: '0px',
                      margin: '2rem 0 0 2.5rem',
                    }}
                  />
                </Box>
              </Box>

              {/* PHS Website Description Section on XS  */}

              <Box
                sx={{
                  height: { xs: '38rem', lg: '50rem' },
                  width: '80%',
                  display: { xs: 'initial', lg: 'none' },
                }}
                className='revealPortfolioDesc3'
              >
                <Card
                  raised={true}
                  sx={{
                    width: '100%',
                    minHeight: '20rem',
                    borderLeft: '5px solid #358163',
                    borderRadius: 2,
                    margin: { xs: 0, lg: '10rem 0 0 0' },
                    padding: '2rem',
                  }}
                >
                  <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
                    PHS Website
                  </Typography>
                  <Typography variant='h5' sx={{ margin: '0' }}>
                    An official website
                  </Typography>
                  <Box
                    sx={{
                      height: '.3rem',
                      width: { xs: '50%', lg: '30%' },
                      borderRadius: 20,
                      backgroundImage:
                        'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      marginTop: 1,
                    }}
                  />

                  <Typography variant='h6' sx={{}}>
                    PHS website is an official website for an institution built
                    using <strong>Next.js</strong> with{' '}
                    <strong>React.js</strong> powering the front end,&nbsp;
                    <strong>Node.js</strong>&nbsp; serving the backend and{' '}
                    <strong>MongoDB</strong> providing the database storage.{' '}
                    <strong>Material UI</strong> was used to create a beautiful
                    and responsive user interface for a seamless user
                    experience.
                    <br />
                    <br />
                    The application offers a beautiful homepage and ease of
                    navigation with a responsive layout.
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a
                      href='https://phs-website.vercel.app'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        sx={{
                          backgroundImage:
                            'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                        }}
                      >
                        VISIT WEBSITE
                      </Button>
                    </a>
                  </div>
                </Card>
              </Box>

              
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Portfolio;
