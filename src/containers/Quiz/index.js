import {Text, TouchableOpacity, View, Image} from 'react-native';
import React, {Component} from 'react';
import Header from '../../components/Header';
import {Colors, NavService, Shadows} from '../../config';
import CustomButton from '../../components/CustomButton';
import Toast from 'react-native-toast-message';

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
    showResult: false,
  };
  render() {
    const {activeQuestion, answer, showResult} = this.state;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          paddingBottom: 40,
        }}>
        <Header menu={false} title={'Quiz'} />

        {!showResult ? (
          <Question
            activeQuestion={activeQuestion}
            answer={answer}
            setAnswer={ans => this.setState({answer: ans})}
          />
        ) : (
          <Result answer={answer} activeQuestion={activeQuestion} />
        )}

        <CustomButton
          title={activeQuestion < questions.length - 1 ? 'Next' : 'Result'}
          onPress={() => {
            if (answer[activeQuestion] === undefined) {
              return Toast.show({
                type: 'error',
                text1: 'Please select an option',
              });
            }
            if (activeQuestion < questions.length - 1) {
              this.setState({activeQuestion: activeQuestion + 1});
            } else if (!showResult) {
              this.setState({showResult: true, activeQuestion: 0});
            } else {
              NavService.navigate('Result');
            }
          }}
        />
      </View>
    );
  }
}

export default Quiz;

const Question = ({answer, activeQuestion, setAnswer}) => {
  return (
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
                setAnswer(newAnswer);
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
  );
};

const Result = ({answer, activeQuestion}) => {
  const correctAnswer =
    answer[activeQuestion] + 1 == questions[activeQuestion].answer;
  return (
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
          const isAnswered = answer[activeQuestion] === index;
          const isCorrect = questions[activeQuestion].answer == index + 1;
          return (
            <View
              key={index}
              style={{
                height: 60,
                marginBottom: 15,
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 60,
                paddingRight: 20,
                borderRadius: 10,
                backgroundColor: isCorrect
                  ? Colors.green
                  : isAnswered
                  ? Colors.pink
                  : Colors.grey,
              }}>
              <View
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 10,
                  backgroundColor:
                    isCorrect && isAnswered
                      ? Colors.green
                      : isAnswered
                      ? Colors.pink
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
            </View>
          );
        })}
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: correctAnswer ? Colors.green : Colors.pink,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={correctAnswer ? Icons.check : Icons.cross}
            style={{
              width: correctAnswer ? 35 : 25,
              height: correctAnswer ? 35 : 25,
              tintColor: Colors.white,
            }}
          />
        </View>
        <Text
          style={{
            color: Colors.primaryDark,
            fontWeight: '800',
            fontSize: 20,
            marginTop: 10,
          }}>
          {correctAnswer ? 'Correct Answer' : 'Incorrect Answer'}
        </Text>
      </View>
    </View>
  );
};
