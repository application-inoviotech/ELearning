import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {connect} from 'react-redux';
import Icons from '../assets/Icons';
import {Colors, NavService} from '../config';
import {logout} from '../redux/actions';
import ProfileImage from './ProfileImage';

const menuItems = [
  {
    icon: Icons.homeDrawer,
    title: 'Home',
    nav: 'Home',
  },
  {
    icon: Icons.settings,
    title: 'Settings',
    nav: 'Settings',
  },
  {
    icon: Icons.termsConditions,
    title: 'Terms & Conditions',
    nav: 'TermsConditions',
  },
  {
    icon: Icons.privacyPolicy,
    title: 'Privacy Policy',
    nav: 'PrivacyPolicy',
  },
  {
    icon: Icons.logout,
    title: 'Logout',
    nav: 'RoleSelection',
  },
];

class Drawer extends Component {
  _renderItem({title, icon, nav}) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (title === 'Logout') {
            NavService.reset(0, [{name: nav}]);
          } else {
            this.props.navigation.navigate(nav);
          }
        }}
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          borderBottomWidth: 0.5,
          borderColor: title === 'Logout' ? 'transparent' : Colors.grey + '70',
        }}>
        <View
          style={{
            padding: 10,
            borderRadius: 7,
          }}>
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: Colors.primary,
            }}
          />
        </View>
        <Text
          style={{
            marginLeft: 10,
            color: Colors.secondary,
            fontSize: 16,
            fontWeight: '500',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  render() {
    const {user} = this.props;
    console.log('user', user);
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: Colors.white,
          alignItems: 'center',
          paddingTop: getStatusBarHeight(),
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <View
          style={{
            marginTop: 20,
            // flexDirection: 'row',
            width: '80%',
            alignItems: 'center',
            borderBottomWidth: 0.5,
            borderColor: Colors.grey + '50',
            paddingBottom: 20,
          }}>
          <ProfileImage size={110} imageUri={user?.image} name={user?.name} />
          <Text
            numberOfLines={1}
            style={{
              color: Colors.secondary,
              fontSize: 14,
              marginTop: 15,
            }}>
            {user?.name}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: Colors.secondary,
              fontSize: 14,
              marginTop: 5,
            }}>
            {user?.email}
          </Text>
        </View>
        <View style={{flex: 1, marginTop: 30, width: '80%'}}>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={menuItems}
            style={{
              height: '100%',
            }}
            renderItem={({item}) => this._renderItem(item)}
          />
        </View>
      </View>
    );
  }
}

function mapState({reducer: {user}}) {
  return {
    user,
  };
}

function mapDispatch(dispatch) {
  return {
    logout: (token, userID) => {
      dispatch(logout(token, userID));
    },
  };
}

export default connect(mapState, mapDispatch)(Drawer);
