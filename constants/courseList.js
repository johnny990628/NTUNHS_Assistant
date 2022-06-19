import React, { useState, useEffect } from 'react';
import { SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Haptics from 'expo-haptics';

import { VAR } from '../core/variable';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';

export const RenderCourseItems = ({ item, navigation }) => {
    let { Name, Time, Day, Place, Period, Teacher } = item;
    const [beginTime, endTime] = Time.split('~');
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CourseDetail', { ...item })}>
            <View style={{ margin: 5 }}>
                <SharedElement id={`course.${Name}`}>
                    <Text style={styles.name}>{Name}</Text>
                </SharedElement>
                <Text style={styles.detail}>{Place ? `${Place}_${Teacher}` : Teacher}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10, marginRight: 20 }}>
                <Text Text style={[styles.time, { color: VAR.BLACK_COLOR }]}>
                    {beginTime}
                </Text>
                <Text style={[styles.time, { color: VAR.GRAY_COLOR }]}>{endTime}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ({ navigation, coursesList }) => {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.FullCode}
                sections={coursesList}
                renderItem={({ item }) => <RenderCourseItems item={item} navigation={navigation} />}
                stickySectionHeadersEnabled={false}
                renderSectionHeader={({ section: { Week } }) => (
                    <View>
                        <Text style={styles.week}>{Week}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: VAR.DEVICE_WIDTH * 0.95,
        marginHorizontal: 10,
        marginVertical: 8,
        borderLeftWidth: 5,
        borderLeftColor: VAR.THEME_COLOR,
    },
    name: {
        fontSize: 20,
        padding: 10,
        color: VAR.BLACK_COLOR,
        fontWeight: '500',
    },
    detail: { color: VAR.GRAY_COLOR, paddingLeft: 10 },
    time: {
        padding: 10,
        marginVertical: 15,
        fontWeight: 'bold',
    },
    week: {
        color: VAR.GRAY_COLOR,
        padding: 10,
        marginVertical: 5,
        fontSize: 20,
        textAlign: 'center',
    },
});
