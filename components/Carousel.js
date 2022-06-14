/* eslint-disable @next/next/no-img-element */
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import { Box } from '@mui/material';

const ImageCarousel = () => {
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      autoPlay={true}
      interval={5000}
      swipeable={true}
      transitionTime={2000}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src='/whatsup-doc_screen.png'
          alt='Whatsup Doc!'
          style={{ width: '10rem', height: '20rem' }}
        />
        <Box
          sx={{
            boxShadow: '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
            width: '5rem',
            height: '0px',
            margin: '2rem 0 0 0',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src='ahia_screen.png'
          alt='Ahia Marketplace'
          style={{ width: '10rem', height: '20rem' }}
        />
        <Box
          sx={{
            boxShadow: '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
            width: '5rem',
            height: '0px',
            margin: '2rem 0 0 0',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src='lms_screen.png'
          alt=''
          style={{ width: '10rem', height: '20rem' }}
        />
        <Box
          sx={{
            boxShadow: '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
            width: '5rem',
            height: '0px',
            margin: '2rem 0 0 0',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src='phs_screen.png'
          alt=''
          style={{ width: '10rem', height: '20rem' }}
        />
        <Box
          sx={{
            boxShadow: '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
            width: '5rem',
            height: '0px',
            margin: '2rem 0 0 0',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src='weather_screen.png'
          alt=''
          style={{ width: '10rem', height: '20rem' }}
        />
        <Box
          sx={{
            boxShadow: '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
            width: '5rem',
            height: '0px',
            margin: '2rem 0 0 0',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src='chatrooms_screen.png'
          alt=''
          style={{ width: '10rem', height: '20rem' }}
        />
        <Box
          sx={{
            boxShadow: '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
            width: '5rem',
            height: '0px',
            margin: '2rem 0 0 0',
          }}
        />
      </div>
    </Carousel>
  );
}

export default ImageCarousel