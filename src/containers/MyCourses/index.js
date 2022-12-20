import {Image, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Header from '../../components/Header';
import {Colors, NavService} from '../../config';
import Icons from '../../assets/Icons';

const courses = [
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

export class MyCourses extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <Header back title={'Enrolled Courses'} />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            width: '100%',
          }}>
          <FlatList
            data={[...courses, ...courses]}
            renderItem={props => <Course {...props} />}
            style={{
              flex: 1,
            }}
            contentContainerStyle={{paddingBottom: 30, flexGrow: 1}}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}

export default MyCourses;

const Course = ({item}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.yellow + '20',
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        // alignItems: 'center',
      }}>
      <Image
        source={item.image}
        style={{width: 95, height: 95, borderRadius: 10, resizeMode: 'contain'}}
      />
      <View
        style={{
          flex: 1,
          marginLeft: 10,
        }}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 15,
            fontWeight: '600',
            color: Colors.black,
          }}>
          {item?.title}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 13,
            color: Colors.grey,
            marginTop: 5,
          }}>
          {item?.title}
        </Text>
        <View style={{flexDirection: 'row', marginTop: 6}}>
          <Image
            source={Icons.star}
            style={{width: 15, height: 15, marginRight: 2}}
          />
          <Image source={Icons.star} style={{width: 15, height: 15}} />
          <Image source={Icons.star} style={{width: 15, height: 15}} />
          <Image source={Icons.star} style={{width: 15, height: 15}} />
          <Image source={Icons.star} style={{width: 15, height: 15}} />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => NavService.navigate('EnrolledCourseDetails')}
          style={{
            backgroundColor: Colors.primary,
            alignSelf: 'flex-end',
            paddingHorizontal: 13,
            paddingVertical: 10,
            borderRadius: 7,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 13,
              fontWeight: '600',
              color: Colors.white,
            }}>
            View Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
