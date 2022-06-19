import React, { useEffect, useState } from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { VAR } from "../core/variable";
import SemSwitch from "../constants/SemSwitch";
import { RenderCourseItems } from "./courseList";

const formatScoreList = (data, sem) => {
  return sem == "up"
    ? data.filter((data) => {
        return data.Up_Credit;
      })
    : data.filter((data) => {
        return data.Down_Credit;
      });
};

const RenderScores = ({
  Course,
  Up_Score,
  Down_Score,
  Up_Credit,
  Down_Credit,
  Type,
}) => {
  Course = Course.split(" ");
  const Score = Up_Score.split(".")[0] || Down_Score.split(".")[0];
  const typeBgColor =
    Type == "必修" ? "rgba(204, 88, 96,.4)" : "rgba(143, 194, 189,.4)";
  const typeTextColor = Type == "必修" ? VAR.RED_COLOR : VAR.GRAY_COLOR;
  return (
    <View style={styles.card}>
      <View style={{ width: "25%", height: 80 }}>
        {Score * 1 >= 60 ? (
          <Text style={[styles.score, { color: VAR.BLACK_COLOR }]}>
            {Score}
          </Text>
        ) : (
          <Text style={[styles.score, { color: VAR.RED_COLOR }]}>{Score}</Text>
        )}
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            paddingVertical: 5,
            fontWeight: "500",
            color: VAR.BLACK_COLOR,
          }}
        >
          {Course[1]}
        </Text>
        <Text style={{ fontSize: 14, color: VAR.GRAY_COLOR }}>{Course[0]}</Text>
      </View>
      <View style={styles.detail}>
        <View
          style={{
            backgroundColor: typeBgColor,
            borderRadius: 10,
            padding: 8,
            marginVertical: 5,
          }}
        >
          <Text style={{ color: typeTextColor, fontWeight: "500" }}>
            {Type}
          </Text>
        </View>
        <Text style={{ color: VAR.GRAY_COLOR }}>
          {Up_Credit || Down_Credit}
        </Text>
      </View>
    </View>
  );
};

const scoretable = ({ data }) => {
  const [semTab, setSemTab] = useState("up");

  const onSelectSwitch = (value) => {
    setSemTab(value);
  };

  return (
    <View style={styles.container}>
      <SemSwitch
        option1={"上學期"}
        option2={"下學期"}
        selectionMode={"up"}
        onSelectSwitch={onSelectSwitch}
      />
      <ScrollView>
        {formatScoreList(data, semTab).map((item) => {
          return <RenderScores key={item.Course} {...item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default scoretable;

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: {
    width: "100%",
  },
  card: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: VAR.GRAY_COLOR,
    borderRadius: 20,
    height: VAR.DEVICE_HEIGHT / 8,
  },
  score: {
    fontSize: 28,
    fontWeight: "bold",
    padding: 15,
    margin: 10,
  },
  detail: {
    position: "absolute",
    right: 20,
    alignItems: "center",
  },
  sem: {
    color: VAR.GRAY_COLOR,
    padding: 10,
    marginVertical: 20,
    fontSize: 20,
    textAlign: "center",
  },
});
