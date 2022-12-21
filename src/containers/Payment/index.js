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

const {width, height} = Dimensions.get('window');

export class Payment extends Component {
  state = {
    card: 1,
  };
  render() {
    const {card} = this.state;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          paddingBottom: 30,
        }}>
        <Header menu={false} title="Confirm Payment" />
        <ScrollView
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
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: Colors.darkText,
            }}>
            Details
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: Colors.primaryDark,
                width: (width - 40) * 0.66,
              }}>
              Comic drawing essential for everyone!
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '800',
                color: Colors.primary,
                width: (width - 40) * 0.33,
                textAlign: 'right',
              }}>
              $ 49.00
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '300',
              color: Colors.darkText,
              marginTop: 10,
              lineHeight: 18,
            }}>
            Full payment of 03 months Comic drawing{'\n'}essential Course,
            Monday to Thursday from 7:30 to{'\n'}8:00.
          </Text>
          <View
            style={{
              backgroundColor: Colors.border,
              width: '100%',
              padding: 15,
              paddingVertical: 40,
              paddingTop: 20,
              borderRadius: 10,
              marginTop: 20,
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
            <View
              style={{
                paddingVertical: 30,
                paddingHorizontal: 20,
                borderRadius: 10,
                color: Colors.black,
                backgroundColor: Colors.primary + '30',
                marginTop: 15,
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.setState({card: 1})}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderColor: card == 1 ? Colors.primary : Colors.grey,
                  }}>
                  {card == 1 && (
                    <View
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: 12,
                        backgroundColor: Colors.primary,
                      }}
                    />
                  )}
                </View>
                <Image
                  source={Icons.master}
                  style={{
                    height: 40,
                    width: 60,
                    marginLeft: 15,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: Colors.black,
                    marginLeft: 10,
                    flex: 1,
                    textAlign: 'right',
                  }}>
                  xxxx xxxx xxxx 3456
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.setState({card: 2})}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderColor: card == 2 ? Colors.primary : Colors.grey,
                  }}>
                  {card == 2 && (
                    <View
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: 12,
                        backgroundColor: Colors.primary,
                      }}
                    />
                  )}
                </View>
                <Image
                  source={Icons.bank}
                  style={{
                    height: 40,
                    width: 60,
                    marginLeft: 15,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: Colors.black,
                    marginLeft: 10,
                    flex: 1,
                    textAlign: 'right',
                  }}>
                  xxxx xxxx xxxx 3456
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => NavService.navigate('AddCard')}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: Colors.primary,
                  marginTop: 10,
                }}>
                + Add Card
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              justifyContent: 'space-between',
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
        </ScrollView>
        <CustomButton
          title="Pay"
          onPress={() => NavService.navigate('PaymentSuccess')}
        />
      </View>
    );
  }
}

export default Payment;
