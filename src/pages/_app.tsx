import React from 'react';
import '../styles/styles.css';
import 'aos/dist/aos.css';

const App = ({Component, pageProps}) => {
  return <Component {...pageProps} />;
};

export default App;
