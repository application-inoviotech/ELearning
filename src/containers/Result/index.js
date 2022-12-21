import {Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import Header from '../../components/Header';
import {Colors} from '../../config';

export class Result extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Header menu={false} title="Quiz Result" />
        <View
          style={{flex: 0.8, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={Icons.emoji}
            style={{
              width: 50,
              height: 50,
              alignSelf: 'center',
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: '800',
              color: Colors.primary,
              marginTop: 10,
            }}>
            YOUR SCORE
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '800',
              color: Colors.black,
              marginTop: 10,
            }}>
            09 / 10
          </Text>
        </View>
        <View
          style={{
            flex: 0.2,
          }}
        />
      </View>
    );
  }
}

export default Result;
