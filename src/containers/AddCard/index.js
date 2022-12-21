import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import {Colors, NavService} from '../../config';
import {CardInput} from '../../components/CustomTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icons from '../../assets/Icons';

const {width, height} = Dimensions.get('window');

export class AddCard extends Component {
  state = {
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    isChecked: false,
  };
  render() {
    const {cardName, cardNumber, cardExpiry, cardCvv, isChecked} = this.state;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          paddingBottom: 20,
        }}>
        <Header menu={false} title="Confirm Payment" />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={{
            flex: 1,
            width,
          }}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 10,
          }}>
          <View
            style={{
              backgroundColor: Colors.border,
              width: '100%',
              padding: 15,
              paddingVertical: 40,
              paddingTop: 20,
              borderRadius: 10,
              marginTop: 40,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: Colors.darkText,
              }}>
              Payment Method
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 16,
                  backgroundColor: Colors.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderColor: Colors.black,
                }}>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: Colors.black,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: Colors.black,
                  marginLeft: 10,
                  flex: 1,
                }}>
                Credit Card
              </Text>
              <Image
                source={Icons.visa}
                style={{
                  height: 30,
                  width: 53,
                  resizeMode: 'contain',
                }}
              />
              <Image
                source={Icons.master}
                style={{
                  height: 30,
                  width: 53,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <CardInput
              label="Name on card"
              width={width}
              value={cardName}
              onChangeText={text => this.setState({cardName: text})}
            />
            <CardInput
              label="Card number"
              width={width}
              value={cardNumber}
              onChangeText={text => this.setState({cardNumber: text})}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <CardInput
                label="Expiration Date"
                width={width / 1.8}
                value={cardExpiry}
                onChangeText={text => this.setState({cardExpiry: text})}
              />
              <CardInput
                label="Security code"
                width={width / 1.8}
                value={cardCvv}
                onChangeText={text => this.setState({cardCvv: text})}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.setState({isChecked: !isChecked})}
                style={{
                  marginRight: 10,
                  backgroundColor: Colors.black,
                  height: 20,
                  width: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={Icons.check}
                  style={{
                    width: 12,
                    height: 12,
                    resizeMode: 'contain',
                    tintColor: isChecked ? Colors.white : Colors.black,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: Colors.darkText,
                  fontSize: 15,
                  width: width - 100,
                }}>
                My billing address is the same as my shipping address
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 50,
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: Colors.black,
              }}>
              Total
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '800',
                color: Colors.primary,
              }}>
              $ 49.00
            </Text>
          </View>
          <CustomButton
            title="Confirm and Pay"
            onPress={() => NavService.navigate('PaymentSuccess')}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default AddCard;
