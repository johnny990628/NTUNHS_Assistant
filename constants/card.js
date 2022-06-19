import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { VAR } from '../core/variable';

const card = ({ total, title, courses }) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    width: '40%',
                }}
            >
                <Text style={styles.total}>{total}</Text>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={{ margin: 10, marginRight: 20 }}>
                {courses.map((course) => {
                    return (
                        <Text key={course.name} style={styles.course}>
                            {course.name} {course.credit}
                        </Text>
                    );
                })}
            </View>
        </View>
    );
};

export default card;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: VAR.DEVICE_WIDTH - 40,
        marginVertical: 10,
        backgroundColor: VAR.THEME_COLOR,
        borderRadius: 40,
        padding: 20,
    },
    total: {
        fontSize: 50,
        color: VAR.BACKGROUND_COLOR,
        textAlign: 'center',
    },
    title: { color: VAR.BLACK_COLOR, marginTop: 10, fontSize: 16, textAlign: 'center' },
    course: {
        padding: 4,
        color: VAR.GRAY_COLOR,
        fontWeight: 'bold',
    },
});
