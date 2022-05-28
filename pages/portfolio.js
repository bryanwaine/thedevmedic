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
      } else {
        reveals[i].classList.remove('active');
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
      } else {
        reveals[i].classList.remove('active');
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
      } else {
        reveals[i].classList.remove('active');
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
      } else {
        reveals[i].classList.remove('active');
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
      } else {
        reveals[i].classList.remove('active');
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
      } else {
        reveals[i].classList.remove('active');
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
      } else {
        reveals[i].classList.remove('active');
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
      } else {
        reveals[i].classList.remove('active');
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
      } else {
        reveals[i].classList.remove('active');
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
      } else {
        reveals[i].classList.remove('active');
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
                    <Button
                      variant='contained'
                      color='primary'
                      type='submit'
                      sx={{
                        backgroundImage:
                          'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      }}
                      onClick={() => router.push('https://ahia.vercel.app')}
                    >
                      VISIT WEBSITE
                    </Button>
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
                    A official website
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
                    <Button
                      variant='contained'
                      color='primary'
                      type='submit'
                      sx={{
                        backgroundImage:
                          'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      }}
                      onClick={() => router.push('https://ahia.vercel.app')}
                    >
                      VISIT WEBSITE
                    </Button>
                  </div>
                </Card>
              </Box>

              {/* Quick Weather Screen Section*/}

              <Box
                sx={{ height: '50rem', width: '80%' }}
                className='revealPortfolioImg4'
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
                  Sep, 2021
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
                    src='/weather_screen.png'
                    alt='Quick Weather'
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

              {/* Chat Rooms Description Section  */}

              <Box
                sx={{ height: '50rem', width: '80%' }}
                className='revealPortfolioDesc5'
              >
                <Card
                  raised={true}
                  sx={{
                    width: '100%',
                    minHeight: '20rem',
                    borderLeft: '5px solid #333744',
                    borderRadius: 2,
                    margin: '10rem 0 0 0',
                    padding: '2rem',
                  }}
                >
                  <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
                    Chat Rooms
                  </Typography>
                  <Typography variant='h5' sx={{ margin: '0' }}>
                    A Real-Time Chat Application
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
                    Chat Rooms is an instant messaging application built using
                    vanilla <strong>JavaScript</strong> for the front end and{' '}
                    <strong>Node.js</strong> and <strong>Express</strong> for
                    the backend server. It utilizes&nbsp;
                    <strong>Socket.io</strong> to provide a connection for
                    sending real-time messages between connected users.
                    <br />
                    <br />
                    The application allows users to enter any chat room of thier
                    choice and send messages to other users in the same room as
                    they are. This messages are delivered in real-time.
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      variant='contained'
                      color='primary'
                      type='submit'
                      sx={{
                        backgroundImage:
                          'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      }}
                      onClick={() =>
                        router.push('http://bryan-chat-rooms.herokuapp.com')
                      }
                    >
                      VISIT WEBSITE
                    </Button>
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
                  <img
                    src='/weather.png'
                    alt='Quick Weather'
                    style={{
                      width: '4rem',
                      height: '4rem',
                      background: '#cccccc',
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
                    src='/chat.png'
                    alt='Chat Rooms'
                    style={{
                      width: '4rem',
                      height: '4rem',
                      background: '#333744',
                      border: '5px solid #1d2124',
                      borderRadius: 15,
                      padding: 5,
                    }}
                  />
                  <Box
                    sx={{
                      background: '#1d2124',
                      height: '55rem',
                      width: '3%',
                    }}
                  />
                  <Box
                    sx={{
                      display: { xs: 'initial', lg: 'none' },
                      background: '#1d2124',
                      height: '30rem',
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
              {/*Ahia Screen Section */}

              <Box
                sx={{ height: { xs: '40rem', lg: '50rem' }, width: '80%' }}
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
                    <Button
                      variant='contained'
                      color='primary'
                      type='submit'
                      sx={{
                        backgroundImage:
                          'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      }}
                      onClick={() => router.push('https://ahia.vercel.app')}
                    >
                      VISIT WEBSITE
                    </Button>
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
                    system built upon the <strong>WordPresss</strong> platform.
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
                    <Button
                      variant='contained'
                      color='primary'
                      type='submit'
                      sx={{
                        backgroundImage:
                          'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      }}
                      onClick={() => router.push('https://phslearn.com')}
                    >
                      VISIT WEBSITE
                    </Button>
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
                    A official website
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
                    <Button
                      variant='contained'
                      color='primary'
                      type='submit'
                      sx={{
                        backgroundImage:
                          'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      }}
                      onClick={() => router.push('https://ahia.vercel.app')}
                    >
                      VISIT WEBSITE
                    </Button>
                  </div>
                </Card>
              </Box>

              {/* Quick Weather Screen Section on XS*/}

              <Box
                sx={{
                  height: { xs: '30rem', lg: '50rem' },
                  width: '80%',
                  display: { xs: 'initial', lg: 'none' },
                }}
                className='revealPortfolioImg4'
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
                  Sep, 2021
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flex: 'center',
                    flexDirection: 'column',
                    alignItems: 'end',
                    margin: { xs: '-5rem 0 0 0', lg: 'none' },
                  }}
                >
                  <img
                    src='/weather_screen.png'
                    alt='Quick Weather'
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

              {/* Quick Weather Description Section */}

              <Box
                sx={{ height: { xs: '52rem', lg: '50rem' }, width: '80%' }}
                className='revealPortfolioDesc4'
              >
                <Card
                  raised={true}
                  sx={{
                    width: '100%',
                    minHeight: '20rem',
                    borderLeft: '5px solid #cccccc',
                    borderRadius: 2,
                    background: '#eeeeee',
                    margin: '10rem 0 0 0',
                    padding: '2rem',
                  }}
                >
                  <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
                    Quick Weather
                  </Typography>
                  <Typography variant='h5' sx={{ margin: '0' }}>
                    A Weather Foreast Website
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
                    Quick weather is a weather forcast web application built
                    using vanilla <strong>JavaScript</strong> for the front end
                    and <strong>Node.js</strong> and <strong>Express</strong>{' '}
                    for the backend server. It utilizes Weather and Mapbox{' '}
                    <strong>APIs</strong> to provide the current weather forcast
                    for any location around the world
                    <br />
                    <br />
                    The application allows users to enter any location of their
                    choice and view the current weather forcast for that
                    location including temperature and chance of rain.
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      variant='contained'
                      color='primary'
                      type='submit'
                      sx={{
                        backgroundImage:
                          'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      }}
                      onClick={() =>
                        router.push('http://bryan-quick-weather.herokuapp.com')
                      }
                    >
                      VISIT WEBSITE
                    </Button>
                  </div>
                </Card>
              </Box>

              {/* Chat Rooms Screen Section */}

              <Box
                sx={{ height: { xs: '40rem', lg: '50rem' }, width: '80%' }}
                className='revealPortfolioImg5'
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
                  Aug, 2021
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
                    src='/chatrooms_screen.png'
                    alt='Chat Rooms'
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

              {/* Chat Rooms Description Section on XS */}

              <Box
                sx={{
                  height: { xs: '40rem', lg: '50rem' },
                  width: '80%',
                  display: { xs: 'initial', lg: 'none' },
                }}
                className='revealPortfolioDesc5'
              >
                <Card
                  raised={true}
                  sx={{
                    width: '100%',
                    minHeight: '20rem',
                    borderLeft: '5px solid #333744',
                    borderRadius: 2,
                    margin: { xs: 0, lg: '10rem 0 0 0' },
                    padding: '2rem',
                  }}
                >
                  <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
                    Chat Rooms
                  </Typography>
                  <Typography variant='h5' sx={{ margin: '0' }}>
                    A Real-Time Chat Application
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
                    Chat Rooms is an instant messaging application built using
                    vanilla <strong>JavaScript</strong> for the front end and{' '}
                    <strong>Node.js</strong> and <strong>Express</strong> for
                    the backend server. It utilizes&nbsp;
                    <strong>Socket.io</strong> to provide a connection for
                    sending real-time messages between connected users.
                    <br />
                    <br />
                    The application allows users to enter any chat room of thier
                    choice and send messages to other users in the same room as
                    they are. This messages are delivered in real-time.
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      variant='contained'
                      color='primary'
                      type='submit'
                      sx={{
                        backgroundImage:
                          'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      }}
                      onClick={() =>
                        router.push('http://bryan-chat-rooms.herokuapp.com')
                      }
                    >
                      VISIT WEBSITE
                    </Button>
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
