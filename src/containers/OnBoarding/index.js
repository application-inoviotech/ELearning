import {Dimensions, Image, LayoutAnimation, Text, View} from 'react-native';
import React, {Component} from 'react';
import {Colors, NavService} from '../../config';
import CustomButton from '../../components/CustomButton';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Images from '../../assets/Images';

const {width} = Dimensions.get('window');
export class OnBoarding extends Component {
  state = {
    index: 0,
  };
  render() {
    const {index} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        {index == 0 ? (
          <OnBoarding1
            onNext={() => {
              LayoutAnimation.easeInEaseOut();
              this.setState({index: 1});
            }}
          />
        ) : (
          <OnBoarding2 onNext={() => NavService.navigate('LoginSignup')} />
        )}
      </View>
    );
  }
}

export default OnBoarding;

const OnBoarding1 = ({onNext}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingTop: getStatusBarHeight(),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={Images.ob1}
          style={{
            width: width - 40,
            height: width,
            resizeMode: 'contain',
            marginBottom: 50,
          }}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: Colors.primaryDark,
            textAlign: 'center',
          }}>
          Learn Online From{'\n'}
          Your Home
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            color: Colors.primaryDark + '80',
            textAlign: 'center',
            marginVertical: 20,
          }}>
          Amet minim mollit non deserunt ullamco{'\n'}est sit aliqua amet sint.
          Velit{'\n'}officia consequat duis enim velit mollit.
        </Text>
        <CustomButton title={'Next'} onPress={onNext} />
      </View>
    </>
  );
};
const OnBoarding2 = ({onNext}) => {
  return (
    <>
      <View
        style={{
          flex: 1.2,
          backgroundColor: Colors.white,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingTop: getStatusBarHeight(),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={Images.ob2}
          style={{
            width: width - 40,
            height: width,
            resizeMode: 'contain',
            marginBottom: -50,
          }}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: Colors.primaryDark,
            textAlign: 'center',
          }}>
          Welcome{'\n'}To e-Learning
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            color: Colors.primaryDark + '80',
            textAlign: 'center',
            marginVertical: 20,
          }}>
          Amet minim mollit non deserunt ullamco{'\n'}est sit aliqua amet sint.
        </Text>
        <CustomButton title={'Next'} onPress={onNext} />
      </View>
    </>
  );
};
