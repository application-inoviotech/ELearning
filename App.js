import React, {Component} from 'react';
import Nav from './src';
import {
  View,
  StatusBar,
  LogBox,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {store} from './src/redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {Loader} from './src/config';
import Toast from 'react-native-toast-message';
import Orientation from 'react-native-orientation';

LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(['Remote debugger']);

class App extends Component {
  componentDidMount() {
    Orientation.lockToPortrait();
    console.clear();
  }
  render() {
    return (
      <GestureHandlerRootView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Provider store={store}>
          <Loader />
          <Nav />
          <Toast />
        </Provider>
      </GestureHandlerRootView>
    );
  }
}

export default App;
