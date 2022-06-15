/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import {
  Button,
  Card,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import Image from 'next/image';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import * as Yup from 'yup';
import MessageIcon from '@mui/icons-material/Message';
import axios from 'axios';

import dev from '/public/Dev.png';
import medic from '/public/Medic.png';
import Layout from '../components/Layout';

export default function Home() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedContact, setSelectedContact] = useState('');

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(2, 'Name is not valid'),

    email: Yup.string()
      .required('Email is required')
      .email('Email is not valid'),

    message: Yup.string().required('Message is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm(formOptions);

  const submitHandler = async ({ name, email, message }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        'https://dev-medic-server.herokuapp.com',
        {
          name,
          email,
          message,
        }
      );
      setValue('name', '');
      setValue('email', '');
      setValue('message', '');
      enqueueSnackbar(data.message, {
        variant: 'success',
      });
      router.push('/');
      setLoading(false);
    } catch (err) {
      enqueueSnackbar(err.message, {
        variant: 'error',
      });
      setLoading(false);
    }
  };

  function revealDev() {
    var reveals = document.querySelectorAll('.revealDev');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } 
    }
  }

  function revealMedic() {
    var reveals = document.querySelectorAll('.revealMedic');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } 
    }
  }

  function revealTechStack() {
    var reveals = document.querySelectorAll('.revealTechStack');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 350;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } 
    }
  }

  const navActive = () => {
     var reveals = document.querySelectorAll('.contact');
     for (var i = 0; i < reveals.length; i++) {
       var windowHeight = window.innerHeight;
       var elementTop = reveals[i].getBoundingClientRect().top;
       var elementVisible = 500;
       if (elementTop < windowHeight - elementVisible) {
         setSelectedContact('selectedContact')
       } else {
         setSelectedContact('');
       }
     }
  };

  useEffect(() => {
    revealDev();
    revealMedic();

    window.addEventListener('scroll', () => {
      revealTechStack();
      navActive();
    });
  }, []);

  return (
    <Layout
      sx={{ width: '100%' }}
      title='Home'
      description='Software Developer and Medical Doctor proficient in full stack JavaScript development.'
      selectedContact={selectedContact}
    >
      <Grid
        container
        spacing={0}
        style={{ display: 'flex', justifyContent: 'center', zIndex: -1 }}
      >
        <Grid item md={12} xs={12}>
          <div
            style={{ width: '100%', padding: '6rem 0.5rem 0' }}
          >
            <div style={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <NextLink href='/portfolio' passHref>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginTop: { xs: '1rem', sm: '10rem' },
                      position: 'relative',
                      left: '1.5rem',
                      flex: 1,
                      cursor: 'pointer',
                    }}
                  >
                    <Typography
                      variant='h1'
                      sx={{
                        fontSize: { xs: '1.5rem', lg: '5rem' },
                        fontWeight: '300',
                        background: 'transparent',
                      }}
                    >{`<Dev/>`}</Typography>
                    <Typography
                      variant='h5'
                      component='h1'
                      sx={{
                        width: '75%',
                        textAlign: 'center',
                        fontSize: { xs: '0.6rem', sm: '1rem' },
                        margin: 0,
                      }}
                    >
                      Developer building useful applications to solve problems
                      using technology.
                    </Typography>
                  </Box>
                </NextLink>
                <Box>
                  <Image
                    src={dev}
                    width={300}
                    height={700}
                    alt='software developer'
                    style={{ borderRadius: '0 0 0 250px ' }}
                    className='revealDev'
                  />
                </Box>
                <Box>
                  <Image
                    src={medic}
                    width={300}
                    height={700}
                    alt='medical doctor'
                    style={{ borderRadius: '0 0 200px 0 ' }}
                    className='revealMedic'
                  />
                </Box>
                <NextLink href='/about' passHref>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginTop: { xs: '1rem', sm: '10rem' },
                      position: 'relative',
                      right: '1.5rem',
                      flex: 1,
                      cursor: 'pointer',
                    }}
                  >
                    <Typography
                      variant='h1'
                      sx={{
                        fontSize: { xs: '1.5rem', lg: '5rem' },
                        fontWeight: '800',
                      }}
                    >{`Medic`}</Typography>
                    <Typography
                      variant='h5'
                      component='h1'
                      sx={{
                        width: '75%',
                        textAlign: 'center',
                        fontSize: { xs: '0.6rem', sm: '1rem' },
                        margin: 0,
                      }}
                    >
                      Medical Doctor and volunteer physician specialized in
                      Public Health.
                    </Typography>
                  </Box>
                </NextLink>
              </Box>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ background: '#eeeeee', padding: '0 0 1rem 0' }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant='h6'
              component='h1'
              sx={{
                margin: '2rem 0 4rem 0',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              DR. NWANNE BRYAN EZEAKA
              <span style={{ color: '#e809dd' }}>&nbsp;|&nbsp;</span> The Dev
              Medic
            </Typography>

            {/* Tech Stack */}

            <Typography component='h1' variant='h1' style={{ margin: 0 }}>
              TECH STACK
            </Typography>
            <Box
              sx={{
                height: '.5rem',
                width: { xs: '25%', lg: '10%' },
                borderRadius: 20,
                backgroundImage:
                  'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                marginTop: 1,
              }}
            />
          </div>
          <Grid
            container
            spacing={0}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: '2rem 0 0 0',
            }}
            className='revealTechStack'
          >
            <Grid
              item
              xs={6}
              md={3}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <img
                src='/HTML5.png'
                alt='HTML5'
                style={{ width: `6rem`, height: `6rem` }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <img
                src='/CSS3.png'
                alt='CSS3'
                style={{ width: `6rem`, height: `6rem` }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                marginTop: '1rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src='/JS.png'
                alt='JavaScript'
                style={{ width: `5rem`, height: `5rem` }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                marginTop: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'end',
              }}
            >
              <img
                src='/next.png'
                alt='Next.js'
                style={{ width: `5rem`, height: `3rem` }}
              />
            </Grid>

            <Grid
              item
              xs={6}
              md={3}
              style={{
                marginTop: '3rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
              }}
            >
              <img
                src='/node.png'
                alt='Node.js'
                style={{ width: `5rem`, height: `5rem` }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                marginTop: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'end',
              }}
            >
              <img
                src='/react.png'
                alt='React.js'
                style={{ width: `5rem`, height: `5rem` }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                marginTop: '3rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src='/mongo.png'
                alt='MongoDb'
                style={{ width: `5rem`, height: `3rem` }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                marginTop: '3rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'end',
              }}
            >
              <img
                src='/mui.png'
                alt='MUI'
                style={{ width: `5rem`, height: `4rem` }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                marginTop: '3rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src='/Figma.png'
                alt='Figma'
                style={{ width: `5rem`, height: `5rem` }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                marginTop: '3rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src='/typescript.png'
                alt='Typescript'
                style={{ width: `5rem`, height: `5rem` }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                marginTop: '3rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src='/wordpress.png'
                alt='WordPress'
                style={{ width: `5rem`, height: `5rem` }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                marginTop: '3rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src='/blockchain.png'
                alt='Blockchain'
                style={{ width: `5rem`, height: `5rem` }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                marginTop: '3rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src='/rest.png'
                alt='REST API'
                style={{ width: `10rem`, height: `5rem` }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                marginTop: '3rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src='/git.png'
                alt='Git'
                style={{ width: `5rem`, height: `5rem` }}
              />
            </Grid>
          </Grid>
          <div className='contact' id='contact' />
          <Box sx={{ height: '2rem' }} />
        </Grid>
        <Grid
          item
          md={12}
          xs={9}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 5,
          }}
        >
          <form
            onSubmit={handleSubmit(submitHandler)}
            style={{ maxWidth: 400, margin: '0 auto', padding: 10 }}
          >
            <Card raised={true}>
              <List>
                <ListItem
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography component='h1' variant='h1' style={{ margin: 0 }}>
                    CONTACT
                  </Typography>
                  <Box
                    sx={{
                      height: '.5rem',
                      width: { xs: '40%', lg: '25%' },
                      borderRadius: 20,
                      backgroundImage:
                        'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      marginTop: 1,
                    }}
                  />
                </ListItem>
                <ListItem sx={{ margin: '0 0 2rem 0' }}>
                  <Controller
                    name='name'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                      <TextField
                        InputProps={{
                          style: {
                            fontSize: '1rem',
                            fontWeight: 300,
                            height: '3rem',
                          },
                          startAdornment: (
                            <InputAdornment position='start'>
                              <IconButton>
                                <PersonIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{
                          style: { fontSize: '1rem', fontWeight: 300 },
                        }}
                        variant='outlined'
                        fullWidth
                        id='name'
                        label='Name'
                        inputProps={{ type: 'text' }}
                        error={Boolean(errors.name)}
                        helperText={errors.name?.message}
                        {...field}
                      />
                    )}
                  />
                </ListItem>

                <ListItem sx={{ margin: '0 0 2rem 0' }}>
                  <Controller
                    name='email'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                      <TextField
                        InputProps={{
                          style: {
                            fontSize: '1rem',
                            fontWeight: 300,
                            height: '3rem',
                          },
                          startAdornment: (
                            <InputAdornment position='start'>
                              <IconButton>
                                <MailIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{
                          style: { fontSize: '1rem', fontWeight: 300 },
                        }}
                        variant='outlined'
                        fullWidth
                        id='email'
                        label='Email'
                        inputProps={{ type: 'email' }}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                        {...field}
                      />
                    )}
                  />
                </ListItem>
                <ListItem sx={{ margin: '0 0 2rem 0' }}>
                  <Controller
                    name='message'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                      <TextField
                        multiline={true}
                        minRows={4}
                        InputProps={{
                          style: { fontSize: '1rem', fontWeight: 300 },
                          startAdornment: (
                            <InputAdornment
                              position='start'
                              sx={{ display: 'flex', alignItems: 'end' }}
                            >
                              <IconButton>
                                <MessageIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{
                          style: { fontSize: '1rem', fontWeight: 300 },
                        }}
                        variant='outlined'
                        fullWidth
                        id='message'
                        label='Message'
                        inputProps={{ type: 'message' }}
                        error={Boolean(errors.message)}
                        helperText={errors.message?.message}
                        {...field}
                      />
                    )}
                  />
                </ListItem>
                <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
                  {loading ? (
                    <CircularProgress size={30} />
                  ) : (
                    <Button
                      fullWidth
                      variant='contained'
                      color='primary'
                      type='submit'
                      sx={{
                        backgroundImage:
                          'linear-gradient( 95deg,rgb(135,35,138) 0%,rgb(33,113,242) 50%,rgb(87,233,233) 100%)',
                      }}
                    >
                      SUBMIT
                    </Button>
                  )}
                </ListItem>
              </List>
            </Card>
          </form>
        </Grid>
      </Grid>
    </Layout>
  );
}
