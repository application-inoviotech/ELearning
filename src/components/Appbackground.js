import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icons from '../assets/Icons';
import {Colors, NavService} from '../config';

export function AppBackground({
  children,
  title,
  back = false,
  nav = '',
  notification = true,
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
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <View
        style={{
          marginTop: getStatusBarHeight(),
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            isResult ? NavService.reset(0, [{name: 'UserAppStack'}]) : onPress()
          }
          style={{position: 'absolute', left: 20}}>
          <Image
            source={back ? Icons.back : Icons.menu}
            style={{
              width: 25,
              height: 25,
              resizeMode: 'contain',
              tintColor: Colors.primary,
            }}
          />
        </TouchableOpacity>

        <View>
          <Text
            style={{
              color: Colors.secondary,
              fontWeight: '700',
              fontSize: 18,
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
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          marginBottom: 10,
          overflow: 'visible',
        }}>
        {children}
      </View>
    </View>
  );
}

export default AppBackground;
