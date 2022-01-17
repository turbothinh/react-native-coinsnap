
import React, { useContext, useEffect } from 'react';
import { CoinInfoContext } from '../context/CoinInfo';
import { Layout, Text } from '@ui-kitten/components';
import { useRoute } from '@react-navigation/native';

type SingleCoinScreenProps = {
  navigation: any;
}

export const SingleCoinScreen = ({ navigation }: SingleCoinScreenProps) => {
  const { params } = useRoute<any>();

  const coinInfoContext = useContext(CoinInfoContext);
  const { streamSinglePrice, streamedInfo } = coinInfoContext;

  useEffect(() => {
    if (params?.symbol) {
      streamSinglePrice(params?.symbol);
    } else {
      navigation.goBack();
    }
  }, []);

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h2'>Live data for {params?.symbol}</Text>

      {(streamedInfo.TYPE === "429") ? (
        <Text category='p2' status="danger" style={{ textAlign: 'center' }}>{streamedInfo.INFO}</Text>
      ) : (
        <Text category='h3'>Price: {streamedInfo.P}</Text>
      )}
    </Layout>
  );
};
