import React from 'react';
import '../styles/styles.css';
import 'aos/dist/aos.css';
import Script from 'next/script';
import '../components/pacman/pacman.styles.css';

const App = ({Component, pageProps}) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-FBZ7N3BWY6"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FBZ7N3BWY6', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Component {...pageProps} />;
    </>
  );
};

export default App;
