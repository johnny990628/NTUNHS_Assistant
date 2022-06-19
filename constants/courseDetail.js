import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import * as Animatable from 'react-native-animatable';
import { VAR } from '../core/variable';
import { ScrollView } from 'react-native-gesture-handler';

export default ({ navigation, route }) => {
    const { Name, Time, Day, Place, Period, Teacher, Type, Credit, FullCode } = route.params;
    const Week = ['', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
    return (
        <SafeAreaView>
            <Icon
                type="feather"
                name="chevron-left"
                size={28}
                color={VAR.BLACK_COLOR}
                onPress={() => {
                    navigation.navigate('CoursesList');
                }}
                containerStyle={{ position: 'absolute', left: 15, top: 40 }}
            />
            <Animatable.View style={styles.card} animation="fadeInRight">
                <Text style={styles.name}>{Name}</Text>
                <Text style={[styles.name, { fontSize: 20, color: VAR.GRAY_COLOR }]}>{FullCode}</Text>
            </Animatable.View>
            <View style={styles.bg}>
                <Animatable.View style={{ marginVertical: 10, marginRight: 20 }} animation="fadeInLeft">
                    <Text style={styles.detail}>地點:{Place || '無教室'}</Text>
                    <Text style={styles.detail}>老師:{Teacher}</Text>
                    <Text style={styles.detail}>星期:{Week[Day]}</Text>
                    <Text style={styles.detail}>時間:{Time}</Text>
                    <Text style={styles.detail}>節次:{Period}</Text>
                    <Text style={styles.detail}>類型:{Type}</Text>
                    <Text style={styles.detail}>學分數:{Credit}</Text>
                </Animatable.View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    card: {
        alignItems: 'flex-end',
        marginHorizontal: 10,
        marginTop: 40,
    },
    name: {
        fontSize: 36,
        padding: 10,
        textAlign: 'right',
        color: VAR.BLACK_COLOR,
        fontWeight: '500',
    },
    detail: {
        padding: 10,
        fontSize: 22,
        color: VAR.BLACK_COLOR,
    },
    bg: {
        position: 'absolute',
        width: VAR.DEVICE_WIDTH,
        height: VAR.DEVICE_HEIGHT,
        backgroundColor: VAR.THEME_COLOR,
        transform: [{ translateY: VAR.DEVICE_HEIGHT / 4 }],
        borderRadius: 32,
        padding: 20,
    },
});
