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
import {Colors, NavService} from '../../config';
import ProfileImage from '../../components/ProfileImage';
import Images from '../../assets/Images';
import CustomTextInput from '../../components/CustomTextInput';
import {TextInput} from 'react-native-gesture-handler';
import Icons from '../../assets/Icons';
import CustomButton from '../../components/CustomButton';

const {width, height} = Dimensions.get('window');

export class Profile extends Component {
  state = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  render() {
    const {oldPassword, newPassword, confirmPassword} = this.state;

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
          <Header back title="Change Password" />
          <View
            style={{
              bottom: -45,
            }}>
            <ProfileImage source={Images.avatar} />
          </View>
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
          <CustomTextInput
            value={oldPassword}
            label={'Old Password'}
            onChangeText={text => this.setState({oldPassword: text})}
            placeholder={'Type old password here'}
            isPassword
          />
          <CustomTextInput
            value={newPassword}
            label={'New Password'}
            onChangeText={text => this.setState({newPassword: text})}
            placeholder={'Type new password here'}
            isPassword
          />
          <CustomTextInput
            value={confirmPassword}
            label={'Confirm New Password'}
            onChangeText={text => this.setState({confirmPassword: text})}
            placeholder={'Confirm new password here'}
            isPassword
          />

          <CustomButton
            title="Submit"
            buttonStyle={{justifyContent: 'center', marginTop: 20}}
            onPress={() => NavService.goBack()}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Profile;
