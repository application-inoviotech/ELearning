import {Text, View, UIManager, Platform, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors, NavService} from '../../config';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {width} = Dimensions.get('window');

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export class Verification extends Component {
  state = {
    code: '',
  };
  render() {
    const otpContainerWidth = width - 160;
    const otpsingle = (width - 120) / 6;
    const {code} = this.state;
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
              FORGOT PASSWORD
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.white,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: Colors.black,
                marginTop: 40,
              }}>
              Verification Code
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: Colors.lightText,
                textAlign: 'center',
                marginTop: 20,
              }}>
              Enter the 4 digits code that you received{'\n'}on your e-mail.
            </Text>
            <View
              style={{
                marginTop: 40,
              }}>
              <OTPInputView
                style={{width: otpContainerWidth, height: otpsingle}}
                pinCount={4}
                code={code}
                onCodeChanged={code => {
                  this.setState({code});
                }}
                autoFocusOnLoad
                codeInputFieldStyle={{
                  width: otpsingle / 1.2,
                  height: otpsingle,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  color: 'black',
                  borderWidth: 1,
                  borderColor: Colors.primary,
                }}
              />
            </View>
            <View
              style={{
                marginTop: 65,
              }}>
              <CustomButton
                title={'Next'}
                onPress={() => NavService.navigate('ResetPassword')}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Verification;
