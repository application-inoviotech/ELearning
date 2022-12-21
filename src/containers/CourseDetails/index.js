import {
  Dimensions,
  Image,
  LayoutAnimation,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import React, {Component} from 'react';
import Header from '../../components/Header';
import ProfileImage from '../../components/ProfileImage';
import Icons from '../../assets/Icons';
import Images from '../../assets/Images';
import {Colors, NavService} from '../../config';

const {width} = Dimensions.get('window');

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const lessons = [
  {
    id: 1,
    title: 'Introduction',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    current: true,
  },
  {
    id: 2,
    title: 'The Language of Color',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    current: false,
  },
  {
    id: 3,
    title: 'The Psychology of Color',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    current: false,
  },
];

export class CourseDetails extends Component {
  state = {
    starred: false,
    selected: 'overview',
  };
  render() {
    const {starred, selected} = this.state;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Header
          back
          showRightIcon
          rightIcon={starred ? Icons.star : Icons.starEmpty}
          onRightIconPress={() => this.setState({starred: !starred})}
          title="Details"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            paddingBottom: 100,
          }}>
          <Image
            source={Images.coursePlaceholder}
            style={{width, height: 200}}
            resizeMode="cover"
          />
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              marginTop: 10,
              alignItems: 'center',
            }}>
            <ProfileImage
              size={40}
              name={'Anny Morriarty'}
              source={Images.avatar}
            />
            <View
              style={{
                flex: 1,
                marginLeft: 10,
              }}>
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 12,
                }}>
                Instructor
              </Text>
              <Text
                style={{
                  color: Colors.primaryDark,
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Anny Morriarty
              </Text>
            </View>
            <Text
              style={{
                color: Colors.primary,
                fontSize: 22,
                fontWeight: '800',
              }}>
              $ 49.00
            </Text>
          </View>
          <Text
            style={{
              color: Colors.primaryDark,
              fontSize: 24,
              fontWeight: '700',
              marginHorizontal: 20,
              marginTop: 10,
            }}>
            Comic drawing essential for everyone!
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <ClassDaysComp />
            <ClassTimeComp />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <DetailsComp
              icon={Images.clockDuration}
              color={Colors.yellow + '70'}
              title="12 weeks"
              subtitle="Duration"
            />
            <DetailsComp
              icon={Images.chart}
              color={Colors.secondary + '35'}
              title="32"
              subtitle="Total Class"
            />
            <DetailsComp
              icon={Images.book}
              color={Colors.primary + '30'}
              title="24"
              subtitle="Total Topics "
            />
          </View>
          <Text
            style={{
              color: Colors.primaryDark,
              fontSize: 14,
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            Lectus vitae lorem luctus mostie vitae mbi curabitur magna facilisis
            turpis nullam nibh gfas ultricies.
          </Text>
          <View
            style={{
              width,
              paddingHorizontal: 20,
              marginTop: 15,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                LayoutAnimation.linear();
                this.setState({selected: 'overview'});
              }}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 15,
              }}>
              <Text
                style={{
                  color:
                    selected == 'overview' ? Colors.black : Colors.darkText,
                  fontSize: 18,
                  fontWeight: selected == 'overview' ? '700' : '500',
                }}>
                Overview
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                LayoutAnimation.linear();
                this.setState({selected: 'lessons'});
              }}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 15,
              }}>
              <Text
                style={{
                  color: selected == 'lessons' ? Colors.black : Colors.darkText,
                  fontSize: 18,
                  fontWeight: selected == 'lessons' ? '700' : '500',
                }}>
                Lessons
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width - 40,
              marginHorizontal: 20,
              height: 2,
              backgroundColor: Colors.primary + '20',
              alignItems: selected == 'overview' ? 'flex-start' : 'flex-end',
            }}>
            <View
              style={{
                width: (width - 40) / 2,
                height: 2,
                backgroundColor: Colors.primary,
              }}
            />
          </View>
          {selected == 'overview' ? <OverviewComp /> : <LessonsComp />}
        </ScrollView>
        <TouchableOpacity
          onPress={() => NavService.navigate('Payment')}
          activeOpacity={0.8}
          style={{
            height: 60,
            width: width - 40,
            backgroundColor: Colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 20,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 18,
              fontWeight: '700',
            }}>
            Enroll Now
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CourseDetails;

const ClassDaysComp = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.primary + 20,
        width: width / 2 - 30,
        borderRadius: 20,
        paddingTop: 30,
        paddingHorizontal: 15,
        paddingBottom: 15,
      }}>
      <Image
        source={Images.calendar}
        style={{
          width: 45,
          height: 45,
          resizeMode: 'contain',
          position: 'absolute',
          top: -15,
          right: 15,
        }}
      />
      <Text
        style={{
          color: Colors.black,
          fontSize: 16,
          fontWeight: '700',
        }}>
        Class days
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 5,
            backgroundColor: Colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 16,
              fontWeight: '700',
            }}>
            M
          </Text>
        </View>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 5,
            backgroundColor: Colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 5,
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 16,
              fontWeight: '700',
            }}>
            T
          </Text>
        </View>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 5,
            backgroundColor: Colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 16,
              fontWeight: '700',
            }}>
            W
          </Text>
        </View>
      </View>
    </View>
  );
};

const ClassTimeComp = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.yellow + 30,
        width: width / 2 - 30,
        borderRadius: 20,
        paddingTop: 30,
        paddingHorizontal: 15,
        paddingBottom: 15,
      }}>
      <Image
        source={Images.clock}
        style={{
          width: 45,
          height: 45,
          resizeMode: 'contain',
          position: 'absolute',
          top: -15,
          right: 15,
        }}
      />
      <Text
        style={{
          color: Colors.black,
          fontSize: 16,
          fontWeight: '700',
        }}>
        Class Timings
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 5,
            backgroundColor: Colors.secondary,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 14,
              fontWeight: '700',
            }}>
            07
          </Text>
        </View>
        <Text
          style={{
            color: Colors.black,
            fontSize: 16,
            fontWeight: '700',
            marginHorizontal: 3,
          }}>
          :
        </Text>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 5,
            backgroundColor: Colors.secondary,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 14,
              fontWeight: '700',
            }}>
            30
          </Text>
        </View>
        <Text
          style={{
            color: Colors.black,
            fontSize: 16,
            fontWeight: '700',
            marginHorizontal: 3,
          }}>
          -
        </Text>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 5,
            backgroundColor: Colors.yellow,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 14,
              fontWeight: '700',
            }}>
            08
          </Text>
        </View>
        <Text
          style={{
            color: Colors.black,
            fontSize: 16,
            fontWeight: '700',
            marginHorizontal: 3,
          }}>
          :
        </Text>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 5,
            backgroundColor: Colors.yellow,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 14,
              fontWeight: '700',
            }}>
            00
          </Text>
        </View>
      </View>
    </View>
  );
};

const DetailsComp = ({icon, color, title, subtitle}) => {
  return (
    <View
      style={{
        width: width / 3 - 25,
        backgroundColor: color,
        borderRadius: 20,
        padding: 5,
        paddingBottom: 15,
      }}>
      <Image
        source={icon}
        style={{
          width: 40,
          height: 40,
          alignSelf: 'flex-end',
          resizeMode: 'contain',
        }}
      />
      <Text
        style={{
          color: Colors.black,
          fontWeight: '700',
          marginHorizontal: 10,
        }}>
        {title}
      </Text>
      <Text
        style={{
          color: Colors.black,
          fontWeight: '500',
          marginHorizontal: 10,
          fontSize: 12,
        }}>
        {subtitle}
      </Text>
    </View>
  );
};

const OverviewComp = () => {
  return (
    <View style={{}}>
      <Text
        style={{
          color: Colors.black,
          fontWeight: '600',
          fontSize: 16,
          marginHorizontal: 20,
          marginTop: 20,
        }}>
        Introduction
      </Text>
      <Text
        style={{
          color: Colors.darkText,
          fontSize: 14,
          marginHorizontal: 20,
          marginTop: 10,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
    </View>
  );
};

const LessonsComp = () => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        width: width - 40,
      }}>
      <Text
        style={{
          color: Colors.black,
          fontWeight: '600',
          fontSize: 16,
          marginTop: 20,
        }}>
        Course Details
      </Text>
      {lessons.map((item, index) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <View
              style={{
                backgroundColor: item.current
                  ? Colors.primary
                  : Colors.primary + '70',
                borderRadius: 5,
                height: 45,
                width: 45,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={Icons.play}
                style={{
                  width: 35,
                  height: 35,
                  tintColor: item.current ? Colors.white : Colors.primary,
                  marginLeft: 5,
                }}
              />
            </View>
            <View
              style={{
                marginLeft: 20,
              }}>
              <Text
                style={{color: Colors.black, fontWeight: '700', fontSize: 16}}>
                {item.title}
              </Text>
              <Text
                style={{color: Colors.darkText, width: '80%', marginTop: 10}}>
                {item.details}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};
