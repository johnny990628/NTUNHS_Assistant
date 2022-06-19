import React, { useRef } from 'react';
import {
    SectionList,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExpandingDot } from 'react-native-animated-pagination-dots';

import { VAR } from '../core/variable';
import Data from '../core/data.json';
import { RenderCourseItems } from '../constants/courseList';
import Box from '../constants/box';
import Card from '../constants/card';

const setCreditHisSummaryObject = () => {
    const {
        commonRequiredShouldTake,
        commonRequiredTook,
        professionalRequiredShouldTake,
        professionalRequiredTook,
        electiveShouldTake,
        electiveTook,
        totalCreditsShouldTake,
        totalCreditsTook,
    } = Data.LearnMap.creditHisSummaryObject;
    return [
        { title: '畢業學分', credit: [totalCreditsTook, totalCreditsShouldTake] },
        { title: '專業必修', credit: [professionalRequiredTook, professionalRequiredShouldTake] },
        { title: '共同必修', credit: [commonRequiredTook, commonRequiredShouldTake] },
        { title: '選修', credit: [electiveTook, electiveShouldTake] },
    ];
};

const Home = ({ navigation }) => {
    const courseScrollX = useRef(new Animated.Value(0)).current;
    const creditData = setCreditHisSummaryObject();
    const { program: programData } = Data.LearnMap;
    const todayCourses = Data.TodayCourses.reverse();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={[styles.title, { margin: 20 }]}>今日課程</Text>
                    <FlatList
                        keyExtractor={(item) => item.Name}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        data={todayCourses}
                        renderItem={({ item }) => <RenderCourseItems item={item} navigation={navigation} />}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: courseScrollX } } }], {
                            useNativeDriver: false,
                        })}
                    />
                    <ExpandingDot
                        data={todayCourses}
                        expandingDotWidth={25}
                        scrollX={courseScrollX}
                        inActiveDotOpacity={0.2}
                        activeDotColor={VAR.THEME_COLOR}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            backgroundColor: VAR.GRAY_COLOR,
                            borderRadius: 10,
                            marginHorizontal: 5,
                        }}
                        containerStyle={{
                            right: 20,
                            bottom: -5,
                        }}
                    />
                </View>

                <View style={{ margin: 20 }}>
                    <Text style={styles.title}>學習進度</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <FlatList
                            data={creditData}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item: { title, credit } }) => {
                                return <Box title={title} value={credit[0]} limit={credit[1]} />;
                            }}
                            keyExtractor={(item) => item.title}
                        />
                    </View>
                </View>

                <View style={{ margin: 20 }}>
                    <Text style={styles.title}>學程總覽</Text>
                    <FlatList
                        data={programData}
                        renderItem={({ item: { key, course, credit } }) => {
                            return <Card title={key} total={credit} courses={course} />;
                        }}
                        keyExtractor={(item) => item.key}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        color: VAR.BLACK_COLOR,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
