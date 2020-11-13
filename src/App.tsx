import React from 'react';

import {ThemeAppProvider} from './contexts/ThemeContext';
import Layout from './Layout';

const App = () => {
  return (
    <ThemeAppProvider>
      <Layout />
    </ThemeAppProvider>
  );
};

export default App;
