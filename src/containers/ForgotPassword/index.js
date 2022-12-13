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

export class ForgotPassword extends Component {
  state = {
    email: '',
  };
  render() {
    const {email} = this.state;
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
                marginVertical: 40,
              }}>
              Enter Your Email
            </Text>
            <CustomTextInput
              label="Email"
              value={email}
              onChangeText={text => this.setState({email: text})}
            />

            <View
              style={{
                marginTop: 85,
              }}>
              <CustomButton
                title={'Next'}
                onPress={() => NavService.navigate('Verification')}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default ForgotPassword;
