// // import { ServerStyleSheets } from '@mui/material/styles';
// import Document, { Head, Html, Main, NextScript } from 'next/document';
// import React from 'react';

// export default class MyDocument extends Document {
//   render() {
//     return (
//       <Html lang='en'>
//         <Head>
//           <link rel='preconnect' href='https://fonts.googleapis.com' />
//           <link rel='preconnect' href='https://fonts.gstatic.com' />
//           <link
//             href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
//             rel='stylesheet'
//           />
//         </Head>
//         <body>
//           <div style={{ height: '80px' }} />
//           <Main />
//           <div style={{ height: '100px' }} />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// MyDocument.getInitialProps = async (ctx) => {
//   const sheets = new ServerStyleSheets();
//   const originalRenderPage = ctx.renderPage;
//   ctx.renderPage = () => {
//     return originalRenderPage({
//       enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//     });
//   };
//   const initialProps = await Document.getInitialProps(ctx);
//   return {
//     ...initialProps,
//     styles: [
//       ...React.Children.toArray(initialProps.styles),
//       sheets.getStyleElement(),
//     ],
//   };
// };

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          {/* <div style={{ height: '80px' }} /> */}
          <Main />
          {/* <div style={{ height: '100px' }} /> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
