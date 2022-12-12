import axios from 'axios';
import Toast from 'react-native-toast-message';
import {Common} from '../../config';
import {loaderStart, loaderStop} from '../actions';
import {store} from '../index';

axios.defaults.baseURL = Common.baseURL;
axios.defaults.timeout = Common.defaultTimeout;

function storeUpdate() {
  let user_authentication = store.getState()?.user?.userToken;
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${user_authentication}`;
}

export default async function postApi(
  endpoint,
  params = null,
  isFormData = false,
  successToast = true,
  startLoader = true,
  stopLoader = true,
) {
  let newParams = params;
  storeUpdate();
  if (startLoader) {
    loaderStart();
  }
  if (isFormData) {
    newParams = new FormData();
    for (let key in params) {
      newParams.append(key, params[key]);
    }
  }
  try {
    const response = await axios.post(endpoint, newParams, {
      headers: {
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
        accept: 'application/json',
      },
    });
    if (stopLoader) {
      loaderStop();
    }
    {
      successToast &&
        Toast.show({
          text1: response.data.message,
          type: 'success',
          visibilityTime: 5000,
        });
    }
    return response.data;
  } catch (e) {
    loaderStop();
    console.log('Error', e.response);
    if (
      e?.message.includes('timeout of ') &&
      e?.message.includes('ms exceeded')
    ) {
      Toast.show({
        text1: "Can't connect to server",
        textStyle: {textAlign: 'center'},
        type: 'error',
        visibilityTime: 5000,
      });
    } else if (e.response?.data?.message) {
      Toast.show({
        text1: e.response.data.message,
        textStyle: {textAlign: 'center'},
        type: 'error',
        visibilityTime: 5000,
      });
    } else {
      Toast.show({
        text1: e?.message,
        textStyle: {textAlign: 'center'},
        type: 'error',
        visibilityTime: 5000,
      });
    }
    return null;
  }
}
