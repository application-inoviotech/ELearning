import {
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View,
  UIManager,
  Platform,
} from 'react-native';
import React, {Component} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors, NavService} from '../../config';
import Logo from '../../components/Logo';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export class LoginSignup extends Component {
  state = {
    index: 0,
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };
  render() {
    const {index, username, email, phone, password, confirmPassword} =
      this.state;
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyboardShouldPersistTaps="handled"
        style={{flex: 1, backgroundColor: Colors.white}}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          paddingTop: getStatusBarHeight(),
          backgroundColor: Colors.white,
        }}>
        <View style={{marginTop: index ? 0 : 40}}>
          <Logo />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.secondary,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: 15,
          }}>
          <View
            style={{
              width: '100%',
              height: 65,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                LayoutAnimation.easeInEaseOut();
                this.setState({
                  index: 0,
                  username: '',
                  phone: '',
                  confirmPassword: '',
                  email: '',
                  password: '',
                });
              }}
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: index == 0 ? Colors.white : Colors.white + '50',
                }}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                LayoutAnimation.easeInEaseOut();
                this.setState({
                  index: 1,
                  username: '',
                  phone: '',
                  confirmPassword: '',
                  email: '',
                  password: '',
                });
              }}
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: index == 1 ? Colors.white : Colors.white + '50',
                }}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.white,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}>
            {index == 1 && (
              <CustomTextInput
                label="Username"
                value={username}
                onChangeText={text => this.setState({username: text})}
              />
            )}
            <CustomTextInput
              label="Email"
              value={email}
              onChangeText={text => this.setState({email: text})}
            />
            {index == 1 && (
              <CustomTextInput
                label="Phone"
                value={phone}
                onChangeText={text => this.setState({phone: text})}
              />
            )}
            <CustomTextInput
              label="Password"
              value={password}
              onChangeText={text => this.setState({password: text})}
              isPassword={true}
            />
            {index == 1 && (
              <CustomTextInput
                label="Re-Password"
                value={confirmPassword}
                onChangeText={text => this.setState({confirmPassword: text})}
                isPassword={true}
              />
            )}
            {index == 0 && (
              <TouchableOpacity
                onPress={() => NavService.navigate('ForgotPassword')}
                style={{
                  marginLeft: 40,
                  marginTop: 20,
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: Colors.primary,
                  }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            )}
            <View
              style={{
                marginTop: 50,
              }}>
              <CustomButton
                title={index == 0 ? 'Login' : 'Sign Up'}
                onPress={() => {
                  NavService.reset(0, [{name: 'AppStack'}]);
                }}
              />
            </View>
            {index == 0 && (
              <TouchableOpacity
                onPress={() => {
                  LayoutAnimation.easeInEaseOut();
                  this.setState({index: 1});
                }}
                style={{
                  marginVertical: 20,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: Colors.primary,
                  }}>
                  Create Account
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default LoginSignup;
