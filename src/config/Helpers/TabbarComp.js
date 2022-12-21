import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Colors from '../Colors';
import Icons from '../../assets/Icons';
import Images from '../../assets/Images';

const {width} = Dimensions.get('window');

export default class TabbarComp extends React.Component {
  render() {
    const {state, navigation} = this.props;
    return (
      <View
        style={{
          height: width / 5.91,
        }}>
        <View
          style={{
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: 0,
          }}>
          <ImageBackground
            source={Images.bottomTab}
            imageStyle={{
              width,
              height: width / 3.72,
              resizeMode: 'cover',
            }}
            style={{
              flexDirection: 'row',
              width,
              height: width / 3.72,
              backgroundColor: 'transparent',
            }}>
            {state.routes.map((route, index) => {
              const onPress = () => {
                if (route.name === 'Chat') {
                  navigation.navigate('Chat', {screen: 'Chat'});
                } else {
                  navigation.navigate(route.name);
                }
              };
              let imageSrc = Icons.home;
              if (route.name === 'MyCoursesStack') imageSrc = Icons.myCourses;
              if (route.name === 'Explore') imageSrc = Icons.explore;
              if (route.name === 'MyChat') imageSrc = Icons.chat;
              if (route.name === 'Profile') imageSrc = Icons.profile;

              let title = 'Home';
              if (route.name === 'MyCoursesStack') title = 'My Courses';
              if (route.name === 'Explore') title = 'Explore';
              if (route.name === 'MyChat') title = 'My Chat';
              if (route.name === 'Profile') title = 'Profile';

              if (route.name === 'Explore') {
                return (
                  <View
                    key={index}
                    style={{
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={onPress}
                      style={{
                        backgroundColor: Colors.primary,
                        height: width / 6.9,
                        width: width / 6.9,
                        borderRadius: width,
                        marginTop: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={imageSrc}
                        style={{
                          height: 25,
                          width: 25,
                        }}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        marginTop: 12,
                        color: Colors.darkText,
                        fontSize: 11,
                        fontWeight: '600',
                        position: 'absolute',
                        bottom: 15,
                      }}>
                      {title}
                    </Text>
                  </View>
                );
              }
              return (
                <View
                  key={index}
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onPress}
                    style={{
                      flex: 1,
                      height: width / 5.91,
                      paddingVertical: 15,
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      overflow: 'hidden',
                    }}>
                    <Image
                      source={imageSrc}
                      style={{
                        height: 25,
                        width: 25,
                        marginTop: 30,
                        tintColor: Colors.darkText,
                      }}
                      resizeMode="contain"
                    />
                    <Text
                      style={{
                        marginTop: 5,
                        color: Colors.darkText,
                        fontSize: 11,
                        fontWeight: '600',
                      }}>
                      {title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ImageBackground>
        </View>
      </View>
    );
  }
}
