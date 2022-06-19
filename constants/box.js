import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { VAR } from '../core/variable';
const box = ({ title, value, limit }) => {
    const percent = Math.floor((value / limit) * 100);

    return (
        <View>
            <View style={styles.box}>
                <ProgressCircle
                    percent={percent}
                    radius={50}
                    borderWidth={8}
                    color={VAR.WHITE_COLOR}
                    shadowColor={VAR.THEME_COLOR}
                    bgColor={VAR.THEME_COLOR}
                >
                    <Text style={{ color: VAR.BACKGROUND_COLOR, fontSize: 20, fontWeight: 'bold' }}>{percent}%</Text>
                </ProgressCircle>

                <Text style={{ color: VAR.BLACK_COLOR, padding: 20, fontSize: 20, textAlign: 'center' }}>{title}</Text>
            </View>
        </View>
    );
};

export default box;

const styles = StyleSheet.create({
    box: {
        backgroundColor: VAR.THEME_COLOR,
        width: VAR.DEVICE_WIDTH / 2.5,
        height: VAR.DEVICE_HEIGHT / 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        margin: 10,
    },
});
