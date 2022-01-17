
import React, { useContext, useEffect } from 'react';
import { CoinInfoContext } from '../context/CoinInfo';

import { Button, Icon, List, ListItem } from '@ui-kitten/components';

export const HomeScreen = () => {
  const coinInfoContext = useContext(CoinInfoContext);
  const { getTopAssets, assets, streamSinglePrice, streamedInfo } = coinInfoContext;

  useEffect(() => {
    getTopAssets();
    // streamSinglePrice('ETH');
  }, [])

  useEffect(() => {
    // console.log('>>> streamedInfo', streamedInfo);
  }, [streamedInfo])

  const addToFavorite = () => {};

  const goToSinglePage = () => {};

  const renderItemAccessory = (props: any) => (
    <Button size='medium' appearance='ghost' accessoryLeft={<Icon color='grey' name='star-outline'/>} onPress={addToFavorite} />
  );

  const renderItemIcon = (props: any) => (
    <Icon {...props} name='arrow-right-outline' />
  );

  const renderItem = ({ item, index }: any) => (
    <ListItem
      key={item.symbol}
      title={item.symbol}
      description={`Price: ${parseFloat(item.priceUsd).toFixed(2)} USD`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
      onPress={goToSinglePage}
    />
  );

  return (
    <List data={assets} renderItem={renderItem} />
  );
};
