import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import bryan from '/public/bryan.jpg';
import doctor from '/public/doctor.jpg';
import developer from '/public/developer.jpg';

const About = () => {
  return (
    <Layout title='About me' selectedAbout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* About Me Column */}

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', lg: 'row' },
            justifyContent: 'center',
            width: '100%',
            padding: { xs: '8rem 2rem', lg: '8rem 10rem' },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'end',
              }}
            >
              <Typography
                component='h1'
                sx={{ fontSize: { xs: '3rem', lg: '3rem' }, fontWeight: '600' }}
              >
                about me
              </Typography>
              <span
                style={{
                  width: 10,
                  height: 10,
                  background: '#e809dd',
                  borderRadius: '50px',
                  margin: '0 0 1.2rem 0.5rem',
                }}
              ></span>
            </div>
            <Box
              sx={{
                height: '.5rem',
                width: { xs: '50%', lg: '25%' },
                borderRadius: 20,
                backgroundImage:
                  'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                marginTop: 1,
              }}
            />
            <Typography variant='h2'>
              I am a medical doctor and software developer based in Abuja,
              Nigeria.
            </Typography>
            <Typography
              variant='h4'
              sx={{ width: '90%', fontSize: { xs: '0.9rem', lg: '1rem' } }}
            >
              I am passionate about Public Health care and developing software
              to help solve problems both generally and in health care.
              <br />
              <br />
              When I am not working as a Public Health physician, I am behind my
              computer coding beautiful software applications.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1rem 0',
            }}
          >
            <Image
              src={bryan}
              width={300}
              height={370}
              alt='Dr. Nwanne Bryan Ezeaka'
              style={{
                borderRadius: 30,
              }}
            />
            <Box
              sx={{
                boxShadow: '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
                width: '10rem',
                height: '0px',
                margin: '2rem 0 0 0',
              }}
            />
          </Box>
        </Box>

        {/* Doctor Column*/}

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            justifyContent: 'center',
            width: '100%',
            padding: { xs: '8rem 2rem', lg: '8rem 10rem' },
            background: '#eeeeee',
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1rem 0',
            }}
          >
            <Image
              src={doctor}
              width={300}
              height={350}
              alt='stethoscope'
              style={{ borderRadius: 30 }}
            />
            <Box
              sx={{
                boxShadow: '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
                width: '10rem',
                height: '0px',
                margin: '2rem 0 0 0',
              }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'end',
              }}
            >
              <Typography
                component='h1'
                sx={{ fontSize: '3rem', fontWeight: '600' }}
              >
                doctor
              </Typography>
              <span
                style={{
                  width: 10,
                  height: 10,
                  background: '#e809dd',
                  borderRadius: '50px',
                  margin: '0 0 1.2rem 0.5rem',
                }}
              ></span>
            </div>
            <Box
              sx={{
                height: '.5rem',
                width: { xs: '50%', lg: '25%' },
                borderRadius: 20,
                backgroundImage:
                  'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                marginTop: 1,
              }}
            />
            <Typography variant='h2'>Medicine and Public Health</Typography>
            <Typography
              variant='h4'
              sx={{ width: '90%', fontSize: { xs: '0.9rem', lg: '1rem' } }}
            >
              I am a clinician, Public Health physician, and medical volunteer
              involved in health promotion, disease prevention and global health
              initiatives.
              <br />
              <br />I am involved in Public Health policy formation and
              implementation both at the National and International levels of
              health care.
            </Typography>
          </Box>
        </Box>

        {/* Developer Column */}

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', lg: 'row' },
            justifyContent: 'center',
            width: '100%',
            padding: { xs: '8rem 2rem', lg: '8rem 10rem' },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'end',
              }}
            >
              <Typography
                component='h1'
                sx={{ fontSize: '3rem', fontWeight: '600' }}
              >
                developer
              </Typography>
              <span
                style={{
                  width: 10,
                  height: 10,
                  background: '#e809dd',
                  borderRadius: '50px',
                  margin: '0 0 1.2rem 0.5rem',
                }}
              ></span>
            </div>
            <Box
              sx={{
                height: '.5rem',
                width: { xs: '50%', lg: '25%' },
                borderRadius: 20,
                backgroundImage:
                  'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                marginTop: 1,
              }}
            />
            <Typography variant='h2'>
              Software Design and Development
            </Typography>
            <Typography
              variant='h4'
              sx={{ width: '90%', fontSize: { xs: '0.9rem', lg: '1rem' } }}
            >
              I enjoy developing software that is robust, secure and functional
              while also being responsive and offering a pleasant user interface
              and experience.
              <br />
              <br />I am enthusiastic about programming and I am constantly
              researching and learning about new technologies to stay up to date
              with the constantly evolving tech space.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1rem 0',
            }}
          >
            <Image
              src={developer}
              width={620}
              height={450}
              alt='developer'
              style={{ borderRadius: 30 }}
            />
            <Box
              sx={{
                boxShadow: '0px 0px 15px 4px rgba(0,0,0,0.50)  !important',
                width:{xs: '10rem', lg: '20rem'},
                height: '0px',
                margin: '2rem 0 0 0',
              }}
            />
          </Box>
        </Box>
      </div>
    </Layout>
  );
};

export default About;
