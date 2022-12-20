import React from 'react';
import {Image, Text, View} from 'react-native';
import {Colors} from '../config';

const ProfileImage = ({size = 140, source, name = ' ', style}) => {
  if (source)
    return (
      <View
        style={{
          borderWidth: size / 25,
          borderRadius: size / 8,
          borderColor: Colors.primary,
          padding: size / 25,
        }}>
        <Image
          source={source}
          style={[
            {
              width: size,
              height: size,
              resizeMode: 'cover',
              borderRadius: size / 12,
              backgroundColor: Colors.primary,
            },
            style,
          ]}
        />
      </View>
    );
  return (
    <View
      style={{
        borderWidth: size / 25,
        borderRadius: size / 8,
        borderColor: Colors.primary,
        padding: size / 25,
      }}>
      <View
        style={[
          {
            width: size,
            height: size,
            borderRadius: size / 12,
            backgroundColor: Colors.secondary,
            alignItems: 'center',
            justifyContent: 'center',
          },
          style,
        ]}>
        <Text
          numberOfLines={1}
          style={{
            color: Colors.primary,
            fontSize: size * 0.75,
            fontWeight: '800',
            width: '100%',
            textAlign: 'center',
          }}>
          {name[0].toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

export default ProfileImage;
