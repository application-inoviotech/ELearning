import {Text, View, UIManager, Platform, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors, NavService} from '../../config';
import Logo from '../../components/Logo';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {width} = Dimensions.get('window');

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export class ResetPassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
  };
  render() {
    const {password, confirmPassword} = this.state;
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
          paddingBottom: 20,
          backgroundColor: Colors.white,
        }}>
        <View style={{marginTop: 40}}>
          <Logo />
        </View>
        <View
          style={{
            flex: 1,
            width: width,
            backgroundColor: Colors.secondary,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: 15,
          }}>
          <View
            style={{
              width: '100%',
              height: 65,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: Colors.white,
              }}>
              RESET PASSWORD
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.white,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}>
            <CustomTextInput
              label="Enter new Password"
              value={password}
              onChangeText={text => this.setState({password: text})}
              isPassword={true}
            />
            <CustomTextInput
              label="Re-enter Password"
              value={confirmPassword}
              onChangeText={text => this.setState({confirmPassword: text})}
              isPassword={true}
            />
            <View
              style={{
                marginTop: 110,
              }}>
              <CustomButton title={'Reset'} />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default ResetPassword;
