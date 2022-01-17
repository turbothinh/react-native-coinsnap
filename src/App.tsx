
import React from 'react';
import { CoinInfoContextProvider } from './context/CoinInfo';
import { HomeScreen } from './screens/Home';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <CoinInfoContextProvider>
          <HomeScreen />
        </CoinInfoContextProvider>
      </ApplicationProvider>
    </>
  )
};

export default App;
