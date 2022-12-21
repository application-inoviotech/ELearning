import {Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import Header from '../../components/Header';
import Images from '../../assets/Images';
import CustomButton from '../../components/CustomButton';
import {Colors, NavService} from '../../config';

export class PaymentSuccess extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          paddingBottom: 30,
        }}>
        <Header back title="Payment" />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <Image
            source={Images.paymentSuccess}
            style={{
              width: 350,
              height: 350,
            }}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: '600',
              color: Colors.black,
            }}>
            Payment Success
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: Colors.darkText,
              marginTop: 15,
              textAlign: 'center',
            }}>
            Your credit card is successfully{'\n'}scanned!
          </Text>
        </View>
        <CustomButton
          title="Back home"
          onPress={() => {
            NavService.reset(0, [{name: 'AppStack'}]);
          }}
        />
      </View>
    );
  }
}

export default PaymentSuccess;
