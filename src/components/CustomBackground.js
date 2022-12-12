import React from 'react';
import {ScrollView, View} from 'react-native';
import {Colors} from '../config';
import Logo from './Logo';

export default ({children}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Logo size={220} />
        </View>
        <View style={{flex: 3}}>{children}</View>
      </ScrollView>
    </View>
  );
};
