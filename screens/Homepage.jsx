import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Globals";

export default function Homepage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topHeader}>Where are you going?</Text>
        <View style={styles.tripContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.iconTop}>
              <View style={styles.iconTopInner}></View>
            </View>
            <View style={styles.iconBar}></View>
            <View style={styles.iconBottom}>
              <View style={styles.iconBottomInner}></View>
            </View>
          </View>
          <View>
            <View></View>
            <View></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: Colors.lightblue,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    gap: 50,
  },
  topHeader: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    maxWidth: "60%",
  },
  tripContainer: {
    flexDirection: "row",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 0,
  },
  iconTop: {
    backgroundColor: "white",
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
  iconTopInner: {
    backgroundColor: Colors.lightblue,
    width: 7,
    height: 7,
    borderRadius: "50%",
  },
  iconBar: {
    width: 1,
    height: 70,
    backgroundColor: "white",
  },
  iconBottom: {
    backgroundColor: Colors.verylightblue,
    width: 15,
    height: 15,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  iconBottomInner: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    backgroundColor: "white",
  },
});
