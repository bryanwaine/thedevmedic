/* eslint-disable @next/next/no-img-element */
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
import Image from 'next/image';
import Layout from '../components/Layout';
import dev from '/public/Dev.png';
import medic from '/public/Medic.png';
import { Controller, useForm } from 'react-hook-form';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import MessageIcon from '@mui/icons-material/Message';
import { Spring } from 'react-spring';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import { useState } from 'react';
import NextLink from 'next/link';

export default function Home() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(2, 'Name is not valid'),

    email: Yup.string()
      .required('Email is required')
      .email('Email is not valid'),

    textarea: Yup.string().required('Message is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm(formOptions);

  const submitHandler = async ({ name, email, textarea }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        'https://formsubmit.co/1c99fe8591d605276f8823e16f35d43a',
        {
          name,
          email,
          textarea,
        }
      );
      setValue('name', '');
      setValue('email', '');
      setValue('textarea', '');
      enqueueSnackbar(`Message submitted successfully!`, {
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

  return (
    <Layout sx={{ width: '100%' }} title='Home'>
      <Grid
        container
        spacing={0}
        style={{ display: 'flex', justifyContent: 'center', zIndex: -1 }}
      >
        <Grid items md={12} xs={12}>
          <Spring
            from={{ opacity: 0, marginLeft: -200 }}
            to={{ opacity: 1, marginLeft: 0 }}
          >
            {(props) => <div style={props}></div>}
          </Spring>
          <div
            raised={true}
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
                  />
                </Box>
                <Box>
                  <Image
                    src={medic}
                    width={300}
                    height={700}
                    alt='medical doctor'
                    style={{ borderRadius: '0 0 200px 0 ' }}
                  />
                </Box>
                <NextLink href='/about' passHref>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginTop: { xs: '1rem', md: '10rem' },
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
              variant='h5'
              sx={{
                margin: '2rem 0 4rem 0',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              DR. NWANNE BRYAN EZEAKA | The Dev Medic
            </Typography>
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
          <Box id='contact' />
          <Box sx={{ height: '5rem', display: { xs: 'flex', lg: 'none' } }} />
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
                    name='textarea'
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
                        id='textarea'
                        label='Message'
                        inputProps={{ type: 'textarea' }}
                        error={Boolean(errors.textarea)}
                        helperText={errors.textarea?.message}
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
