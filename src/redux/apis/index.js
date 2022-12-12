import {NavService} from '../../config';
import Toast from 'react-native-toast-message';
import postApi from '../requestTypes/post';
import getApi from '../requestTypes/get';
import * as EmailValidator from 'email-validator';
import {logoutUser, saveToken, saveUser} from '../actions';
import {Platform} from 'react-native';

var passwordValidator = require('password-validator');
var schema = new passwordValidator();
schema
  .is()
  .min(8)
  .is()
  .max(50)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces();

//  USER REGISTRATION MODULE
export async function userLogin(email, password) {
  if (!email && !password)
    return Toast.show({
      text1: 'Please enter all info',
      type: 'error',
      visibilityTime: 3000,
    });
  if (!EmailValidator.validate(email))
    return Toast.show({
      text1: 'Email not valid',
      type: 'error',
      visibilityTime: 3000,
    });
  if (!schema.validate(password))
    return Toast.show({
      text1: 'Password not valid (Use at least eight character)',
      type: 'error',
      visibilityTime: 3000,
    });

  const params = {
    email,
    password,
    deviceType: Platform.OS,
    deviceToken: 'fcmToken',
  };

  const data = await postApi('user/signIn', params);
  if (
    data?.status == 1 &&
    data?.data?.profileCompleted &&
    data?.data?.isVerify
  ) {
    saveUser({...data?.data, role: 'user'});
    saveToken(data?.data?.token);
    NavService.reset(0, [{name: 'UserAppStack'}]);
  } else if (data?.status == 1 && data?.data?.isVerify == false) {
    NavService.navigate('SignupOTP', {_id: data?.data?._id, email});
  } else if (data?.status == 1 && data?.data?.profileCompleted == false) {
    saveToken(data?.data?.token);
    NavService.navigate('CompleteProfile');
  }
}
