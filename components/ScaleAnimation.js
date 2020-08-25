import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, Easing, StyleSheet } from 'react-native';

const ScaleAnimation = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        Animated.sequence([
            Animated.delay(props.btnDelayTime),
            Animated.timing(fadeAnim, {
                toValue: props.dimension.width + 10,
                duration: 800,
                useNativeDriver: false,
            }),
            Animated.timing(fadeAnim, {
                toValue: props.dimension.width,
                duration: 200,
                useNativeDriver: false,
            }),
        ]).start();
    }, [fadeAnim]);

    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                width: fadeAnim, // Bind opacity to animated value
                height: fadeAnim, // Bind opacity to animated value
            }}>
            {props.children}
        </Animated.View>
    );
};

export default ScaleAnimation;
