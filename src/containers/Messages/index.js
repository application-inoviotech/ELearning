import {Text, View} from 'react-native';
import React, {Component} from 'react';

export class Messages extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'teal',
          }}>
          Messages
        </Text>
      </View>
    );
  }
}

export default Messages;
