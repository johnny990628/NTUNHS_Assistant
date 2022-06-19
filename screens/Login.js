import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
export default function Login() {
    return (
        <InputScrollView>
            <View style={styles.container}>
                <View style={[{ left: -64, top: 130 }, styles.ball]} />
                <View style={[{ left: 350, top: 10 }, styles.ball]} />
                <View style={[{ left: 300, top: -65 }, styles.ball]} />
                <Image style={styles.logo} source={require('../src/images/ntunhslogo.jpg')} />
                <Text style={styles.title}>北護人登入</Text>

                <TextInput style={styles.input} placeholder="帳號" />
                <TextInput style={styles.input} placeholder="密碼" />
                <TouchableOpacity style={styles.button}>
                    <Text style={{ fontSize: 20, color: '#ffffff' }}>登入</Text>
                </TouchableOpacity>
            </View>
        </InputScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '110%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 180,
        height: 180,
    },
    title: {
        fontSize: 35,
        margin: 60,
    },
    input: {
        width: 300,
        height: 40,
        margin: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#8C8585',
    },
    button: {
        width: 300,
        alignItems: 'center',
        padding: 15,
        margin: 20,
        backgroundColor: '#50C5B7',
        borderRadius: 40,
    },
    ball: {
        width: 130,
        height: 130,
        position: 'absolute',
        borderRadius: 100,
        backgroundColor: 'rgba(80, 197, 183, 0.8)',
    },
});
