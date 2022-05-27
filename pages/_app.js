import '../styles/globals.css'
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={2000}
      >
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  );
  
}

export default MyApp
