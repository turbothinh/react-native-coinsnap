
import React from 'react';
import { Layout, Text } from '@ui-kitten/components';

type ProfileScreenProps = {
  navigation: any;
}

export const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h2'>User: Guest</Text>
    </Layout>
  );
};
