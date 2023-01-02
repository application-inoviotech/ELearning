import {
  FlatList,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors, NavService} from '../../config';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Images from '../../assets/Images';
import Courses from '../../components/Courses';

const category = [
  {
    id: 1,
    title: 'All Courses',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
  },
  {
    id: 3,
    title: 'Development',
  },
];

const ongoingCourses = [
  {
    id: 1,
    title: '3D Essential - CenemaD',
    totalLessons: 32,
    lessonsCompleted: 20,
  },
  {
    id: 2,
    title: 'Marketing',
    totalLessons: 32,
    lessonsCompleted: 0,
  },
  {
    id: 3,
    title: '3D Essential - CenemaD',
    totalLessons: 32,
    lessonsCompleted: 10,
  },
  {
    id: 4,
    title: 'Marketing',
    totalLessons: 32,
    lessonsCompleted: 31,
  },
];

const featuredCourses = [
  {
    id: 1,
    title: 'UI/UX Design',
    instructor: 'John',
    price: 40,
    totalLessons: 32,
    rating: 4.5,
    image: Images.marketing,
  },
  {
    id: 2,
    title: 'Marketing',
    instructor: 'Smith',
    price: 50,
    totalLessons: 34,
    rating: 4.5,
    image: Images.UIUX,
  },
  {
    id: 3,
    title: 'Programming',
    instructor: 'John',
    price: 40,
    totalLessons: 32,
    rating: 4.5,
    image: Images.programming,
  },
  {
    id: 4,
    title: 'Marketing',
    instructor: 'Smith',
    price: 50,
    totalLessons: 34,
    rating: 4.5,
    image: Images.marketing2,
  },
];

export class Home extends Component {
  state = {selectedCourse: 1, isKeyboardVisible: false};

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
      this.setState({isKeyboardVisible: true}),
    );
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
      this.setState({isKeyboardVisible: false}),
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  renderItem = ({item}) => {
    const {selectedCourse} = this.state;
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({selectedCourse: item.id});
        }}
        activeOpacity={0.8}
        style={{
          backgroundColor:
            item.id == selectedCourse ? Colors.secondary : Colors.title,
          padding: 10,
          borderRadius: 10,
          paddingHorizontal: 15,
          marginHorizontal: 5,
        }}>
        <Text
          style={{
            fontSize: 14,
            color: item.id == selectedCourse ? Colors.white : Colors.darkText,
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {selectedCourse, isKeyboardVisible} = this.state;
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{
          flex: 1,
          backgroundColor: Colors.white,
        }}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: Colors.white,
          paddingBottom: isKeyboardVisible ? 0 : 50,
        }}>
        <View
          style={{
            backgroundColor: Colors.yellow,
            width: '100%',
            paddingTop: getStatusBarHeight(),
            paddingBottom: 10,
          }}>
          <View
            style={{
              paddingHorizontal: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={NavService.toggleDrawer}
                activeOpacity={0.8}
                style={{
                  padding: 10,
                  backgroundColor: Colors.primary,
                  borderRadius: 10,
                }}>
                <Image
                  source={Icons.menu}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <Image
                  source={Icons.notification}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: Colors.title,
                marginTop: 15,
              }}>
              What would you like to learn today?
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: Colors.title,
                marginTop: 5,
              }}>
              Search Below.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 50,
                borderBottomColor: Colors.white,
                borderBottomWidth: 1,
                alignItems: 'center',
              }}>
              <Image
                source={Icons.search}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
              <TextInput
                placeholder="Search Courses"
                placeholderTextColor={Colors.white}
                style={{
                  color: Colors.white,
                  marginLeft: 10,
                  height: 50,
                  width: '100%',
                }}
                returnKeyType="search"
                onSubmitEditing={() => {
                  console.log('search');
                }}
              />
            </View>
          </View>
          <FlatList
            data={category}
            renderItem={this.renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 15,
            }}
            style={{marginTop: 15}}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.black,
            marginTop: 10,
            marginLeft: 20,
          }}>
          Ongoing Courses
        </Text>
        <FlatList
          data={ongoingCourses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={props => <OngoingCourses {...props} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 15, maxHeight: 100}}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingRight: 5,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.black,
            marginTop: 20,
            marginLeft: 20,
          }}>
          Feature Courses
        </Text>
        <FlatList
          data={featuredCourses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={props => <Courses {...props} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 15, maxHeight: 285}}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingRight: 5,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.black,
            marginTop: 20,
            marginLeft: 20,
          }}>
          Feature Courses
        </Text>
        <FlatList
          data={featuredCourses}
          renderItem={props => <Courses {...props} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 15, maxHeight: 285}}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingRight: 5,
          }}
        />
      </KeyboardAwareScrollView>
    );
  }
}

export default Home;

const OngoingCourses = ({item, index}) => {
  return (
    <View
      style={{
        width: 300,
        backgroundColor: index % 2 == 0 ? Colors.primary : Colors.secondary,
        padding: 15,
        marginRight: 15,
        borderRadius: 10,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: Colors.white,
        }}>
        {item?.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: Colors.white + '70',
          }}>
          {item?.totalLessons} Lesson
        </Text>
        <Text
          style={{
            color: Colors.white + '70',
          }}>
          {item?.lessonsCompleted} Lesson
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 8,
          backgroundColor: Colors.white + '60',
          marginTop: 10,
          borderRadius: 10,
        }}>
        <View
          style={{
            width: (item?.lessonsCompleted / item?.totalLessons) * 100 + '%',
            height: 8,
            backgroundColor: Colors.white,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
};
