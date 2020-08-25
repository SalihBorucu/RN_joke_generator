import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Animated, StyleSheet, Text, View, Alert } from 'react-native';
import TypeWriter from 'react-native-typewriter';
import { useFonts, SpecialElite_400Regular } from '@expo-google-fonts/dev';
import { AppLoading } from 'expo';
import Button from './components/Button';
import axios from 'axios';

export default function App() {
    let [fontsLoaded] = useFonts({
        SpecialElite_400Regular,
    });

    let [joke, setJoke] = useState({});
    let [nextJoke, setNextJoke] = useState(false);

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        function pressedButton() {
          setJoke({});
            axios
                .get('https://official-joke-api.appspot.com/random_joke')
                .then((res) => {
                    setJoke(res.data);
                })
                .catch();
        }
        if (Object.keys(joke).length) {
            let delayMap = [{ at: joke.setup.length, delay: 1500 }];
            return (
                <View style={styles.container}>
                    <TypeWriter delayMap={delayMap} typing={1} style={styles.typeWriter}>
                        {joke.setup}
                        {'\n'}
                        {'\n'}
                        {joke.punchline}
                    </TypeWriter>
                    <Button btnDelayTime={10000} btnTextStyle={styles.btnTextStyle} pressingButton={pressedButton} btnText="Tell me more!" />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <TypeWriter typing={1} style={styles.typeWriter}>
                        Hello there!{'\n'}
                        Would you like to hear a joke?
                    </TypeWriter>
                    <View style={{ margin: 20 }}>
                        <Button btnDelayTime={4000} btnTextStyle={styles.btnTextStyle} pressingButton={pressedButton} btnText="Sure, let's hear it." />
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EBEEF3' },
    typeWriter: {
        marginBottom: 20,
        fontFamily: 'SpecialElite_400Regular',
        fontSize: 28,
        textAlign: 'center',
    },
    btnTextStyle: {
        fontFamily: 'SpecialElite_400Regular',
        fontSize: 20,
        textAlign: 'center',
    },
});
