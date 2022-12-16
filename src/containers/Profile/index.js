import {Text, View} from 'react-native';
import React, {Component} from 'react';

export class Profile extends Component {
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
          Profile
        </Text>
      </View>
    );
  }
}

export default Profile;
