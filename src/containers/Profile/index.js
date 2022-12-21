import {
  Dimensions,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Header from '../../components/Header';
import {Colors} from '../../config';
import ProfileImage from '../../components/ProfileImage';
import Images from '../../assets/Images';
import CustomTextInput from '../../components/CustomTextInput';
import {TextInput} from 'react-native-gesture-handler';
import Icons from '../../assets/Icons';

const {width, height} = Dimensions.get('window');

export class Profile extends Component {
  state = {
    firstName: 'Thomas',
    lastName: '',
    email: '',
  };
  render() {
    const {firstName, lastName, email} = this.state;

    return (
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        style={{
          // alignItems: 'center',
          // justifyContent: 'center',
          flex: 1,
        }}>
        <View
          style={{
            width: '100%',
            height: 220,
            backgroundColor: Colors.yellow,
            alignItems: 'center',
          }}>
          <Header back title="My Profile" />
          <TouchableOpacity
            onPress={() => {
              Nav;
            }}
            style={{
              bottom: -45,
            }}>
            <ProfileImage source={Images.avatar} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 90,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: Colors.black,
              textAlign: 'center',
            }}>
            Thomas Andrew
          </Text>
          <Text
            style={{
              color: Colors.darkText,
              textAlign: 'center',
              marginTop: 5,
            }}>
            Student, College of US
          </Text>
          <View
            style={{
              marginTop: 10,
              backgroundColor: Colors.secondary,
              padding: 5,
              borderRadius: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 120,
              alignSelf: 'center',
            }}>
            <View
              style={{
                backgroundColor: Colors.white,
                height: 30,
                width: 30,
                borderRadius: 30,
              }}>
              <Image
                source={Icons.badge}
                style={{
                  height: 32,
                  width: 32,
                  resizeMode: 'contain',
                  bottom: -4,
                  left: -1,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: Colors.white,
                width: 50,
                flex: 1,
                marginLeft: 10,
              }}>
              Grade A
            </Text>
          </View>
          {/* <CustomTextInput value={firstName} label={'First Name'} /> */}
          <View
            style={{
              marginTop: 20,
              height: 50,
              width: width - 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Fields label={'First Name'} icon={Icons.user} value="Thomas" />
          </View>
          <View
            style={{
              marginTop: 20,
              height: 50,
              width: width - 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Fields label={'Last Name'} icon={Icons.user} value="Andrew" />
          </View>
          <View
            style={{
              marginTop: 20,
              height: 50,
              width: width - 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Fields
              label={'Email'}
              icon={Icons.mail}
              value="Thomas07@xyz.com"
            />
          </View>
          <View
            style={{
              marginTop: 20,
              height: 50,
              width: width - 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Fields label={'Password'} icon={Icons.lock} value="********" />
            <Text
              onPress={() => {}}
              style={{
                position: 'absolute',
                right: 10,
              }}>
              Change Password
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              height: 50,
              width: width - 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Fields label={'Location'} icon={Icons.pin} value="United States" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Profile;

const Fields = ({label, value, icon}) => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: 50,
      }}>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <Image
          source={icon}
          style={{
            height: 25,
            width: 25,
            resizeMode: 'contain',
            marginRight: 5,
          }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
          }}>
          <Text style={{color: Colors.grey}}>{label}:</Text>
          <Text style={{marginTop: 5}}>{value}</Text>
        </View>
      </View>
      <Image
        source={Images.border}
        style={{
          width: width,
          marginTop: 10,
          resizeMode: 'stretch',
          marginLeft: -20,
        }}
      />
    </View>
  );
};
