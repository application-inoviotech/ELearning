import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors, NavService} from '../config';

export default Courses = ({item, index}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => NavService.navigate('CourseDetails')}
      style={{
        width: 200,
        backgroundColor: Colors.white,
        marginRight: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.lightText,
      }}>
      <Image
        source={item?.image}
        style={{
          width: 200,
          height: 170,
          borderRadius: 10,
          resizeMode: 'contain',
        }}
      />
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 16,
            color: Colors.black,
            width: '70%',
            fontWeight: '600',
          }}>
          {item?.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: Colors.black,
            width: '30%',
            textAlign: 'right',
            fontWeight: '600',
          }}>
          ${item?.price}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          color: Colors.lightText,
          marginLeft: 10,
        }}>
        By: {item?.instructor}
      </Text>
      <View
        style={{
          width: '100%',
          borderTopColor: Colors.lightText,
          borderTopWidth: 1,
          marginTop: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: Colors.lightText,
            marginLeft: 10,
          }}>
          {item?.totalLessons} Lesson
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={Icons.star}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 16,
              color: Colors.lightText,
              marginLeft: 10,
            }}>
            {item?.rating}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
