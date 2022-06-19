import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Data from '../core/data.json';
import CourseList from '../constants/courseList';
import CourseDetail from '../constants/courseDetail';
const Stack = createSharedElementStackNavigator();

const Week = ['', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
const getCourses = () => {
    const { Courses } = Data;
    let coursesList = [];
    for (let i = 1; i <= 7; i++) {
        let data = Courses.filter((data) => {
            return data.Day == i;
        });
        data.length &&
            coursesList.push({
                Week: Week[i],
                data,
            });
    }
    return coursesList;
};

const TimeTable = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="CoursesList"
                component={(props) => {
                    return <CourseList {...props} coursesList={getCourses()} />;
                }}
            />
            <Stack.Screen
                name="CourseDetail"
                component={CourseDetail}
                options={
                    {
                        // transitionSpec: {
                        //     open: { animation: 'timing', config: { duration: 1000 } },
                        //     close: { animation: 'timing', config: { duration: 1000 } },
                        // },
                        // cardStyleInterpolator: ({ current: { progress } }) => {
                        //     return {
                        //         cardStyle: {
                        //             opacity: progress,
                        //         },
                        //     };
                        // },
                    }
                }
            />
        </Stack.Navigator>
    );
};

export default TimeTable;

const styles = StyleSheet.create({});
