import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icons from '../../assets/Icons';
import {Colors, NavService} from '../index';
import ProfileImage from '../../components/ProfileImage';
import Images from '../../assets/Images';

const menuItems = [
  {
    icon: Icons.home,
    title: 'Home',
    nav: 'HomeScreen',
  },
  {
    icon: Icons.video,
    title: 'Videos',
    nav: 'HomeScreen',
  },
  {
    icon: Icons.messages,
    title: 'Messages',
    nav: 'MyChat',
  },
  {
    icon: Icons.myCourses,
    title: 'Courses',
    nav: 'MyCoursesStack',
  },
  {
    icon: Icons.settings,
    title: 'Settings',
    nav: 'Settings',
  },
  {
    icon: Icons.logout,
    title: 'Logout',
  },
];

function Drawer() {
  const _renderItem = ({item: {title, icon, nav}}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (title === 'Logout') {
            NavService.reset(0, [{name: 'AuthStack'}]);
          } else {
            NavService.navigate(nav);
          }
        }}
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 50,
          borderColor: title === 'Logout' ? 'transparent' : Colors.grey + '70',
        }}>
        <Image
          source={icon}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            tintColor: '#ACC1F8',
          }}
        />
        <Text
          style={{
            marginLeft: 10,
            color: '#ACC1F8',
            fontSize: 16,
            fontWeight: '500',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.primary,
        paddingTop: getStatusBarHeight(),
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
      }}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          width: '80%',
          alignItems: 'center',
          borderColor: Colors.grey + '50',
          paddingBottom: 20,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            borderRadius: 40,
            width: 40,
            height: 40,
            backgroundColor: Colors.white,
            overflow: 'hidden',
          }}>
          <Image
            source={Images.avatar}
            style={{width: 40, height: 40, resizeMode: 'contain'}}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: Colors.white,
            }}>
            Thomas Andrew
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '300',
              color: Colors.white,
            }}>
            STUDENT
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 30,
          width: '100%',
        }}>
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          data={menuItems}
          style={{
            height: '100%',
            marginHorizontal: 40,
          }}
          renderItem={_renderItem}
        />
      </View>
    </View>
  );
}

export default Drawer;
