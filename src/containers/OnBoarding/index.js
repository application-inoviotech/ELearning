import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { Colors, NavService } from '../../config';
import CustomButton from '../../components/CustomButton';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export class OnBoarding extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.background }}>
                <View s
                    style={{
                        flex: 1,
                        backgroundColor: Colors.white,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        paddingTop: getStatusBarHeight()
                    }}></View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <CustomButton title={'Next'} onPress={() => {
                        NavService.navigate('LoginSignup')
                    }}
                    />
                </View>
            </View>
        );
    }
}

export default OnBoarding;
