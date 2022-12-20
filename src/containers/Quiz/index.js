import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import Header from '../../components/Header';
import {Colors, Shadows} from '../../config';
import CustomButton from '../../components/CustomButton';

const questions = [
  {
    id: 1,
    question:
      'Great suspendisse elit sit trist gristi queget quis tristique pulectus?',
    options: [
      'Flit sit trist gristi do musch.',
      'Lorem ipsum dolor sit amet.',
      'Consectetur adipiscing.',
      'Tempor incididunt ut labore.',
    ],
    answer: 4,
  },
  {
    id: 2,
    question:
      'Great suspendisse elit sit trist gristi queget quis tristique pulectus?',
    options: [
      'Flit sit trist gristi do musch.',
      'Lorem ipsum dolor sit amet.',
      'Consectetur adipiscing.',
      'Tempor incididunt ut labore.',
    ],
    answer: 2,
  },
  {
    id: 3,
    question:
      'Great suspendisse elit sit trist gristi queget quis tristique pulectus?',
    options: [
      'Flit sit trist gristi do musch.',
      'Lorem ipsum dolor sit amet.',
      'Consectetur adipiscing.',
      'Tempor incididunt ut labore.',
    ],
    answer: 1,
  },
];

export class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answer: [],
  };
  render() {
    const {activeQuestion, answer} = this.state;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          paddingBottom: 40,
        }}>
        <Header menu={false} title={'Quiz'} />
        <View
          style={{
            flex: 1,
            marginHorizontal: 20,
            marginTop: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: Colors.black,
                alignSelf: 'flex-start',
              }}>
              Q{activeQuestion + 1}:{' '}
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: Colors.black,
              }}>
              {questions[activeQuestion].question}
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            {questions[activeQuestion].options.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  onPress={() => {
                    const newAnswer = [...answer];
                    newAnswer[activeQuestion] = index;
                    this.setState({answer: newAnswer});
                  }}
                  style={{
                    height: 60,
                    marginBottom: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 60,
                    paddingRight: 20,
                    borderRadius: 10,
                    backgroundColor:
                      answer[activeQuestion] === index
                        ? Colors.yellow
                        : Colors.grey,
                  }}>
                  <View
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 10,
                      backgroundColor:
                        answer[activeQuestion] === index
                          ? Colors.yellow
                          : Colors.white,
                      position: 'absolute',
                      left: 20,
                      borderWidth: 3,
                      borderColor: Colors.white,
                      ...Shadows.shadow3,
                    }}
                  />
                  <Text
                    style={{
                      color: Colors.white,
                      fontWeight: '600',
                      textAlign: 'left',
                      alignSelf: 'flex-start',
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <CustomButton
          title={'Next'}
          onPress={() => {
            if (activeQuestion < questions.length - 1) {
              this.setState({activeQuestion: activeQuestion + 1});
            } else {
              this.props.navigation.navigate('Result', {answer});
            }
          }}
        />
      </View>
    );
  }
}

export default Quiz;
