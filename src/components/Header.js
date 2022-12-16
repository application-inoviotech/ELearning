import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icons from '../assets/Icons';
import {Colors, NavService} from '../config';

export function Header({
  title,
  back = false,
  nav = '',
  notification = false,
  rightIcon = Icons.notification,
  rightIconNav = () => {
    NavService.navigate('Notification');
  },
}) {
  const onPress = () => {
    nav.length
      ? NavService.navigate(nav)
      : back
      ? NavService.goBack()
      : NavService.openDrawer();
  };
  return (
    <View
      style={{
        marginTop: getStatusBarHeight(),
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPress()}
        style={{position: 'absolute', left: 20}}>
        <Image
          source={back ? Icons.back : Icons.menu}
          style={{
            width: 25,
            height: 25,
            resizeMode: 'contain',
            tintColor: back ? Colors.black : Colors.primary,
          }}
        />
      </TouchableOpacity>

      <View style={{}}>
        <Text
          style={{
            color: Colors.primaryDark,
            fontWeight: 'bold',
            fontSize: 22,
          }}>
          {title}
        </Text>
      </View>
      {notification && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={rightIconNav}
          style={{position: 'absolute', right: 20}}>
          <Image
            source={rightIcon}
            style={{
              width: 25,
              height: 25,
              resizeMode: 'contain',
              tintColor: Colors.primary,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Header;
