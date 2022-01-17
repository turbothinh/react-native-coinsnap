
import React from 'react';
import { CoinInfoContextProvider } from './context/CoinInfo';
import { HomeScreen } from './screens/Home';

const App = () => {
  return (
    <CoinInfoContextProvider>
      <HomeScreen />
    </CoinInfoContextProvider>
  )
};

export default App;
