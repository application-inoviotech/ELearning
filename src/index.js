import React, {Component} from 'react';

// Navigation here
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Colors, NavService} from './config';
import TabbarComp from './config/Helpers/TabbarComp';
import {connect} from 'react-redux';

//Screens
import {
  OnBoarding,
  LoginSignup,
  ForgotPassword,
  Verification,
  ResetPassword,
  Home,
  MyCourses,
  Explore,
  Messages,
  Profile,
  Chat,
  CourseDetails,
  EnrolledCourseDetails,
  Quiz,
  Payment,
  AddCard,
  PaymentSuccess,
  Result,
  EditProfile,
  ChangePassword,
} from './containers';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: Colors.white},
        animation: 'fade',
        headerShown: false,
      }}
      initialRouteName="OnBoarding">
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="LoginSignup" component={LoginSignup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

const MyCoursesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: Colors.white},
        animation: 'fade',
        headerShown: false,
      }}
      initialRouteName="MyCourses">
      <Stack.Screen name="MyCourses" component={MyCourses} />
      <Stack.Screen
        name="EnrolledCourseDetails"
        component={EnrolledCourseDetails}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: Colors.white},
        animation: 'fade',
        headerShown: false,
      }}
      initialRouteName="ProfileScreen">
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        animation: 'simple_push',
        headerShown: false,
      }}
      tabBar={props => <TabbarComp {...props} />}
      initialRouteName={'HomeScreen'}>
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="MyCoursesStack" component={MyCoursesStack} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="MyChat" component={Messages} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: Colors.white},
        animation: 'fade',
        headerShown: false,
      }}
      initialRouteName="TabStack">
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
};

class Navigation extends Component {
  state = {
    // ready: false,
    ready: true,
    initialRouteName: 'AppStack',
    // initialRouteName: 'AuthStack',
  };
  componentDidMount() {
    setTimeout(() => {
      const {userData} = this.props;
      if (userData) {
        this.setState({initialRouteName: 'AppStack'});
      }
      this.setState({ready: true});
    }, 2000);
  }
  render() {
    const {initialRouteName, ready} = this.state;
    if (!ready) return null;
    return (
      <NavigationContainer
        ref={ref => NavService.setTopLevelNavigator(ref)}
        screenOptions={{animation: 'simple_push'}}>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {backgroundColor: 'transparent'},
            animation: 'simple_push',
            headerShown: false,
          }}
          initialRouteName={initialRouteName}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="AppStack" component={AppStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function mapStateToProps({user: {userData}}) {
  return {
    userData,
  };
}

export default connect(mapStateToProps)(Navigation);
