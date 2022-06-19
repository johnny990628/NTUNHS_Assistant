import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { VAR } from "../core/variable";
import Scoretable from "../constants/scoretable";
import Data from "../core/data.json";

const Tab = createMaterialTopTabNavigator();

const getCouresOfSems = () => {
  const { HistoryScores } = Data;
  let couresOfSems = [];
  const totalSems = HistoryScores.sems.map((sem) => {
    return sem.Sem;
  });
  totalSems.forEach((sem) => {
    couresOfSems.push(
      HistoryScores.historyScores.filter((score) => {
        return score.Sem == sem;
      })
    );
  });

  return couresOfSems;
};

const Course = () => {
  const CouresOfSems = getCouresOfSems();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: VAR.WHITE_COLOR,
        tabBarContentContainerStyle: { backgroundColor: VAR.THEME_COLOR },
      }}
    >
      {CouresOfSems.map((sem) => {
        return (
          <Tab.Screen
            name={sem[0].Sem}
            key={(item) => {
              item.courseNormalId;
            }}
            children={() => {
              return <Scoretable data={sem} />;
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default Course;

const styles = StyleSheet.create({});
