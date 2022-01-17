
import React from 'react';
import { CoinInfoContextProvider } from './context/CoinInfo';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './router';

const App = () => {
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <CoinInfoContextProvider>
          <BottomTab />
        </CoinInfoContextProvider>
      </ApplicationProvider>
    </NavigationContainer>
  )
};

export default App;
