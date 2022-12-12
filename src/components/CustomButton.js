import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import {Colors, Shadows} from '../config';
const {width} = Dimensions.get('screen');

export default function CustomButton(props) {
  const {color, title, onPress, buttonStyle, textStyle, disabled} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        {
          width: width - 60,
          height: 65,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color ? color : Colors.primary,
          marginTop: 15,
          borderRadius: 7,
          ...Shadows.shadow5,
        },
        buttonStyle,
      ]}>
      <Text
        style={[
          {fontSize: 16, color: Colors.white, fontWeight: '800'},
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
