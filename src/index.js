import React, { Component } from 'react';

// Navigation here
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { NavService } from './config';
import { ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import Images from './assets/Images';

//Screens
import { OnBoarding, LoginSignup } from './containers';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: 'transparent' },
        animation: 'simple_push',
        headerShown: false,
      }}
      initialRouteName="OnBoarding">
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="LoginSignup" component={LoginSignup} />
    </Stack.Navigator>
  );
};

class Navigation extends Component {
  state = {
    // ready: false,
    ready: true,
    initialRouteName: 'AuthStack',
  };
  componentDidMount() {
    setTimeout(() => {
      const { userData } = this.props;
      if (userData) {
        this.setState({ initialRouteName: 'AppStack' });
      }
      this.setState({ ready: true });
    }, 2000);
  }
  render() {
    const { initialRouteName, ready } = this.state;
    if (!ready) return null;
    return (
      <NavigationContainer
        ref={ref => NavService.setTopLevelNavigator(ref)}
        screenOptions={{ animation: 'simple_push' }}>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: 'transparent' },
            animation: 'simple_push',
            headerShown: false,
          }}
          initialRouteName={initialRouteName}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function mapStateToProps({ user: { userData } }) {
  return {
    userData,
  };
}

export default connect(mapStateToProps)(Navigation);
