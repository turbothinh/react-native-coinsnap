
import React, { useContext, useEffect } from 'react';
import { CoinInfoContext } from '../context/CoinInfo';

import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { OverviewStackScreens } from '../router';

type HomeScreenProps = {
  navigation: any;
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const coinInfoContext = useContext(CoinInfoContext);
  const { getTopAssets, assets, streamedInfo } = coinInfoContext;

  useEffect(() => {
    getTopAssets();
  }, [])

  const addToFavorite = () => {};

  const goToSinglePage = (symbol: string) => navigation.navigate(OverviewStackScreens.SingleCoin, { symbol });

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
      onPress={() => goToSinglePage(item.symbol)}
    />
  );

  return (
    <List data={assets} renderItem={renderItem} />
  );
};
