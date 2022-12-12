import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Device from './config/Helpers/Devices';
import {Colors, Icon} from './config';
import Icons from './assets/Icons';

export default class TabbarComp extends React.Component {
  render() {
    const {state, descriptors, navigation} = this.props;
    return (
      <View
        style={{
          padding: 20,
          paddingTop: 0,
          backgroundColor: Colors.background,
        }}>
        <View
          style={{
            backgroundColor: Colors.primary,
            flexDirection: 'row',
            overflow: 'hidden',
            borderRadius: 5,
          }}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const onPress = () => {
              if (route.name === 'Chat') {
                navigation.navigate('Chat', {screen: 'Chat'});
              } else {
                navigation.navigate(route.name);
              }
            };
            let imageSrc = Icons.home;
            if (route.name === 'Lesson') imageSrc = Icons.lesson;
            if (route.name === 'Connections') imageSrc = Icons.connections;
            if (route.name === 'Quizzes') imageSrc = Icons.quizzes;
            if (route.name === 'Profile') imageSrc = Icons.profile;
            return (
              <TouchableOpacity
                key={index}
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityRole="button"
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.tabs}>
                <View
                  style={{
                    backgroundColor: isFocused ? Colors.white : 'transparent',
                    height: 45,
                    width: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: isFocused ? 5 : 0,
                  }}>
                  <Image
                    source={imageSrc}
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: isFocused ? Colors.primary : Colors.white,
                    }}
                    resizeMode="contain"
                  />
                </View>
                {/* {isFocused ? (
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 16,
                    // borderBottomRightRadius: 16,
                    // borderBottomEndRadius: 16,
                    backgroundColor: '#F1668D',
                    position: 'absolute',
                    top: -8,
                  }}
                />
              ) : null} */}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
