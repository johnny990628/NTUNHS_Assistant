import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import { VAR } from './core/variable';
import Tabs from './navigation/tabs';
import Login from './screens/Login';

const MyTheme = {
    colors: {
        background: VAR.BACKGROUND_COLOR,
    },
};

export default function App() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Tabs />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
