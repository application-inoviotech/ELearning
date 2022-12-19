import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icons from '../../assets/Icons';
import {Colors, NavService} from '../../config';
import CustomImagePicker from '../../components/CustomImagePicker';

const messages = [
  {
    sentByMe: false,
    type: 'image',
    uri: 'https://images.unsplash.com/photo-1536048810607-3dc7f86981cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmFsbGV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    time: '12:00',
    senderName: 'Shanaya',
    senderImage: {
      uri: 'https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
  },
  {
    sentByMe: true,
    type: 'image',
    uri: 'https://images.unsplash.com/photo-1524726240783-939bfdd633e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZhbGxleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    time: '12:00',
    senderName: 'Shanaya',
    senderImage: {
      uri: 'https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
  },
  {
    sentByMe: true,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    time: '12:00',
  },
  {
    sentByMe: true,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    time: '12:00',
  },
  {
    sentByMe: true,
    message: 'labore et dolore magna.',
    time: '12:00',
  },
  {
    sentByMe: false,
    message: 'Ut enim minim veniam',
    time: '12:00',
    senderName: 'Shanaya',
    senderImage: {
      uri: 'https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
  },
  {
    sentByMe: false,
    message: 'Duis aute dolor in reprehenderit ',
    time: '12:00',
    senderName: 'Kale',
    senderImage: {
      uri: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
  },
  {
    sentByMe: true,
    message:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    time: '12:00',
  },
];

export class Chat extends Component {
  render() {
    const {item} = this.props.route.params;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <View
          style={{
            marginTop: getStatusBarHeight(),
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity activeOpacity={0.8} onPress={NavService.goBack}>
            <Image
              source={Icons.back}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                tintColor: Colors.black,
              }}
            />
          </TouchableOpacity>
          {item?.type == 'single' ? (
            <Image
              source={item.image}
              style={{
                width: 45,
                height: 45,
                borderRadius: 45,
                resizeMode: 'cover',
                marginHorizontal: 10,
              }}
            />
          ) : (
            <View
              style={{
                width: 50,
                height: 50,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 10,
              }}>
              {item.images.map((item, index) => (
                <Image
                  source={item}
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 60,
                    resizeMode: 'cover',
                  }}
                />
              ))}
            </View>
          )}

          <View style={{flex: 1}}>
            <Text
              style={{
                color: Colors.black,
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                color: Colors.darkText,
                fontSize: 12,
              }}>
              {item.type == 'single' ? 'Active Now' : '23 Members'}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={{
              backgroundColor: Colors.yellow,
              padding: 8,
              borderRadius: 20,
            }}>
            <Image
              source={Icons.video}
              style={{
                width: 22,
                height: 22,
                resizeMode: 'contain',
                tintColor: Colors.primary,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={{
              backgroundColor: Colors.yellow,
              padding: 8,
              borderRadius: 20,
              marginLeft: 10,
            }}>
            <Image
              source={Icons.phone}
              style={{
                width: 22,
                height: 22,
                resizeMode: 'contain',
                tintColor: Colors.primary,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, width: '100%'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={messages}
            renderItem={props =>
              props.item.type == 'image' ? (
                <ImageChat {...props} type={item.type} />
              ) : item?.type == 'single' ? (
                <SingleChat {...props} />
              ) : (
                <GroupChat {...props} />
              )
            }
            style={{flex: 1, width: '100%', paddingHorizontal: 20}}
            keyExtractor={(item, index) => index.toString()}
            inverted
          />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginBottom: 20,
            marginTop: 10,
          }}>
          <CustomImagePicker>
            <Image
              source={Icons.addChat}
              style={{
                width: 48,
                height: 48,
                resizeMode: 'contain',
              }}
            />
          </CustomImagePicker>
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.border,
              marginLeft: 10,
              borderRadius: 50,
              paddingHorizontal: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Type a message"
              style={{
                fontSize: 14,
                color: Colors.black,
                height: 50,
                marginLeft: 10,
                flex: 1,
              }}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
                backgroundColor: Colors.primary,
              }}>
              <Image
                source={Icons.send}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Chat;

const SingleChat = ({item}) => {
  return (
    <View
      style={{
        alignItems: item.sentByMe ? 'flex-end' : 'flex-start',
        marginBottom: 15,
      }}>
      <View
        style={{
          backgroundColor: item.sentByMe ? Colors.primary : Colors.border,
          paddingVertical: 15,
          paddingHorizontal: 20,
          maxWidth: '80%',
          borderTopRightRadius: item.sentByMe ? 10 : 50,
          borderTopLeftRadius: item.sentByMe ? 50 : 10,
          borderBottomRightRadius: item.sentByMe ? 10 : 50,
          borderBottomLeftRadius: item.sentByMe ? 50 : 10,
        }}>
        <Text
          style={{
            color: item.sentByMe ? Colors.white : Colors.black,
          }}>
          {item.message}
        </Text>
      </View>
      <Text
        style={{
          color: Colors.darkText,
          fontSize: 12,
          marginTop: 10,
          marginRight: item.sentByMe ? 10 : 0,
          marginLeft: item.sentByMe ? 0 : 10,
        }}>
        {item.time}
      </Text>
    </View>
  );
};

const GroupChat = ({item}) => {
  return (
    <View
      style={{
        marginBottom: 15,
        alignItems: item.sentByMe ? 'flex-end' : 'flex-start',
      }}>
      <View
        style={{
          flexDirection: item.sentByMe ? 'column' : 'row',
          alignItems: item.sentByMe ? 'flex-end' : 'flex-start',
        }}>
        {!item.sentByMe && (
          <Image
            source={item.senderImage}
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              resizeMode: 'cover',
            }}
          />
        )}
        <View
          style={{
            marginLeft: item.sentByMe ? 0 : 10,
          }}>
          {!item.sentByMe && (
            <Text
              style={{
                color: Colors.darkText,
                fontSize: 12,
                marginVertical: 5,
              }}>
              {item.senderName}
            </Text>
          )}
          <View
            style={{
              backgroundColor: item.sentByMe ? Colors.primary : Colors.border,
              paddingVertical: 15,
              paddingHorizontal: 20,
              maxWidth: '80%',
              borderTopRightRadius: item.sentByMe ? 10 : 50,
              borderTopLeftRadius: item.sentByMe ? 50 : 10,
              borderBottomRightRadius: item.sentByMe ? 10 : 50,
              borderBottomLeftRadius: item.sentByMe ? 50 : 10,
            }}>
            <Text
              style={{
                color: item.sentByMe ? Colors.white : Colors.black,
              }}>
              {item.message}
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          color: Colors.darkText,
          fontSize: 12,
          marginTop: 10,
          marginRight: item.sentByMe ? 10 : 0,
          marginLeft: item.sentByMe ? 0 : 60,
        }}>
        {item.time}
      </Text>
    </View>
  );
};

const ImageChat = ({item, type}) => {
  console.log(item);
  return (
    <View
      style={{
        alignItems: item.sentByMe ? 'flex-end' : 'flex-start',
        marginBottom: 15,
      }}>
      {!item.sentByMe && type != 'single' ? (
        <View
          style={{
            flexDirection: item.sentByMe ? 'column' : 'row',
            alignItems: item.sentByMe ? 'flex-end' : 'flex-start',
          }}>
          <Image
            source={item.senderImage}
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              resizeMode: 'cover',
            }}
          />
          <View
            style={{
              marginLeft: item.sentByMe ? 0 : 10,
            }}>
            <Text
              style={{
                color: Colors.darkText,
                fontSize: 12,
                marginVertical: 5,
              }}>
              {item.senderName}
            </Text>
            <Image
              source={{uri: item.uri}}
              style={{
                height: 200,
                width: 200,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
          </View>
        </View>
      ) : (
        <Image
          source={{uri: item.uri}}
          style={{
            height: 200,
            width: 200,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />
      )}

      <Text
        style={{
          color: Colors.darkText,
          fontSize: 12,
          marginTop: 10,
          marginRight: item.sentByMe ? 10 : 0,
          marginLeft: item.sentByMe ? 0 : type != 'single' ? 60 : 10,
        }}>
        {item.time}
      </Text>
    </View>
  );
};
