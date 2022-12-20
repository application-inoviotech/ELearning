import {
  Image,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Header from '../../components/Header';
import {Colors, NavService} from '../../config';
import Icons from '../../assets/Icons';

const messages = [
  {
    id: 1,
    name: 'Shanaya kale',
    lastMessage: 'Hello',
    unreadMessages: '02',
    lastMessageTime: '10:00 AM',
    type: 'single',
    image: {
      uri: 'https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
  },
  {
    id: 2,
    name: 'Comic drawing group',
    lastMessage: 'Hello',
    unreadMessages: '00',
    lastMessageTime: '10:00 AM',
    type: 'group',
    images: [
      {
        uri: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        uri: 'https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        uri: 'https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        uri: 'https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      },
    ],
  },
  {
    id: 3,
    name: 'Shanaya kale',
    lastMessage: 'Hello',
    unreadMessages: '00',
    lastMessageTime: '10:00 AM',
    type: 'single',
    image: {
      uri: 'https://images.unsplash.com/photo-1551024739-78e9d60c45ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
  },
  {
    id: 4,
    name: 'Shanaya kale',
    lastMessage: 'Hello',
    unreadMessages: '00',
    lastMessageTime: '10:00 AM',
    type: 'single',
    image: {
      uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
  },
];

export class MyCourses extends Component {
  state = {search: ''};
  render() {
    const {search} = this.state;
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <Header menu={false} title={'Chats'} />
        <View
          style={{
            backgroundColor: Colors.grey,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginHorizontal: 20,
            borderRadius: 50,
          }}>
          <Image
            source={Icons.search}
            style={{tintColor: Colors.darkText, width: 20, height: 20}}
          />
          <TextInput
            style={{
              width: '100%',
              height: 50,
              marginLeft: 5,
              color: Colors.white,
            }}
            value={search}
            onChangeText={text => this.setState({search: text})}
            placeholder={'Search'}
            placeholderTextColor={Colors.darkText}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            width: '100%',
            marginTop: 20,
          }}>
          <FlatList
            data={messages}
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
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => NavService.navigate('Chat', {item})}
      style={{
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
        borderRadius: 10,
        alignItems: 'center',
      }}>
      {item?.type == 'single' ? (
        <Image
          source={item.image}
          style={{width: 60, height: 60, borderRadius: 60, resizeMode: 'cover'}}
        />
      ) : (
        <View
          style={{
            width: 60,
            height: 60,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {item.images.map((item, index) => (
            <Image
              source={item}
              style={{
                width: 30,
                height: 30,
                borderRadius: 60,
                resizeMode: 'cover',
              }}
            />
          ))}
        </View>
      )}
      <View
        style={{
          flex: 1,
          marginLeft: 10,
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: Colors.black,
            }}>
            {item?.name}
          </Text>
          {item?.unreadMessages != '00' && (
            <View
              style={{
                backgroundColor: Colors.icon,
                padding: 4,
                borderRadius: 100,
                height: 21,
                width: 21,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 10,
                  fontWeight: '700',
                }}>
                {item?.unreadMessages}
              </Text>
            </View>
          )}
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              color: item?.unreadMessages == '00' ? Colors.grey : Colors.black,
              fontWeight: item?.unreadMessages == '00' ? '400' : '600',
            }}>
            {item?.lastMessage}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              color: Colors.grey,
            }}>
            {item?.lastMessageTime}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
