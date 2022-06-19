import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import Timetable from '../screens/TimeTable';
import Home from '../screens/Home';
import Scores from '../screens/Scores';
import LearnMap from '../screens/LearnMap';
import Student from '../screens/Student';
import { VAR } from '../core/variable';
const Tab = createBottomTabNavigator();

const isFocused = (focused) => {
    return focused ? VAR.BLACK_COLOR : VAR.GRAY_COLOR;
};

const tabOptions = (icon, screen) => {
    return {
        tabBarIcon: ({ focused }) =>
            focused ? (
                <View style={styles.tabsContainer}>
                    <Icon type={icon.type} name={icon.name} color={isFocused(focused)} />
                    <Text style={{ color: isFocused(focused), paddingTop: 10, fontSize: 12 }}>{screen}</Text>
                </View>
            ) : (
                <View style={styles.tabsContainer}>
                    <Icon type={icon.type} name={icon.name} color={isFocused(focused)} />
                </View>
            ),
    };
};

const tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                // headerStyle: { height: VAR.DEVICE_HEIGHT / 7.5, backgroundColor: VAR.THEME_COLOR },
                // headerTitle: '北護小助手',
                // headerTitleAlign: 'center',
                // headerTintColor: VAR.WHITE_COLOR,
                // headerTitleStyle: { fontSize: 26, padding: 10 },
                // headerLeftContainerStyle: { paddingLeft: 10 },
                // headerLeft: () => {
                //     return (
                //         <TouchableOpacity>
                //             <Icon type={'feather'} name={'menu'} color={VAR.WHITE_COLOR} />
                //         </TouchableOpacity>
                //     );
                // },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: VAR.WHITE_COLOR,
                    height: 80,
                },
            }}
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Timetable"
                component={Timetable}
                options={tabOptions({ type: 'feather', name: 'trello' }, '課表')}
            />
            <Tab.Screen
                name="Scores"
                component={Scores}
                options={tabOptions({ type: 'feather', name: 'check-square' }, '修課明細')}
            />
            <Tab.Screen name="Home" component={Home} options={tabOptions({ type: 'feather', name: 'home' }, '首頁')} />
            <Tab.Screen
                name="LearnMap"
                component={LearnMap}
                options={tabOptions({ type: 'feather', name: 'clipboard' }, '學習歷程')}
            />
            <Tab.Screen
                name="Student"
                component={Student}
                options={tabOptions({ type: 'feather', name: 'user' }, '個人資料')}
            />
        </Tab.Navigator>
    );
};

export default tabs;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    tabsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
