
import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { CoinInfoContext } from '../context/CoinInfo';

export const HomeScreen = () => {
  const coinInfoContext = useContext(CoinInfoContext);
  const { getTopAssets, assets, streamSinglePrice, streamedInfo } = coinInfoContext;

  useEffect(() => {
    getTopAssets();
    streamSinglePrice('ETH');
  }, [])

  useEffect(() => {
    console.log('>>> streamedInfo', streamedInfo);
  }, [streamedInfo])


  return (
    <View>
      {assets.map((a: any) => <Text>{`${a.symbol}: ${a.priceUsd}`}</Text>)}
    </View>
  )
};
