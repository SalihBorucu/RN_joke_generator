import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ScaleAnimation from './ScaleAnimation';
import FadeInAnimation from './FadeInAnimation';

const Button = ({ btnText, btnTextStyle, pressingButton, btnDelayTime }) => {
    return (
        <TouchableOpacity onPress={pressingButton} activeOpacity={0.8}>
            <ScaleAnimation btnDelayTime={btnDelayTime} style={styles.btn} dimension={{ width: 200, height: 200 }}>
                <ScaleAnimation btnDelayTime={btnDelayTime} style={styles.btn2} dimension={{ width: 180, height: 180 }}>
                    <FadeInAnimation btnDelayTime={btnDelayTime}>
                        <Text style={btnTextStyle}>{btnText}</Text>
                    </FadeInAnimation>
                </ScaleAnimation>
            </ScaleAnimation>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    btn: {
        width: 250,
        height: 250,
        borderWidth: 1,
        borderColor: '#FA9C9C',
        backgroundColor: '#EBEEF3',
        borderRadius: 250 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
        elevation: 13,
    },
    btn2: {
        width: 180,
        height: 180,
        borderWidth: 1,
        borderColor: '#FA9C9C',
        backgroundColor: '#EBEEF3',
        borderRadius: 180 / 2,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
});
