import {
  Pressable,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Globals";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { DRIVERS } from "../data/drivers";
import Trip from "../components/Trip";

export default function TripScreen() {
  const nav = useNavigation();
  const { from, to } = useSelector((state) => state.trip);
  const FILTERED_DRIVERS = DRIVERS.filter((driver) => {
    driver.from === from && driver.to === to;
  });

  const goBackHandler = () => {
    nav.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topArea}>
        <View /*go back button wrapper */>
          <Pressable onPress={goBackHandler}>
            <Ionicons name="chevron-back" size={46} color="white" />
          </Pressable>
        </View>
        <View style={styles.tripInfo}>
          <Text style={styles.tripText}>
            Ride from <Text style={styles.tripInnerText}>{from}</Text> to{" "}
            <Text style={styles.tripInnerText}>{to}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.trips}>
        <FlatList data={FILTERED_DRIVERS} renderItem={<Trip />} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  topArea: {
    backgroundColor: Colors.lightblue,
    borderRadius: 20,
    padding: 40,
    gap: 20,
    alignItems: "flex-start",
  },
  tripInfo: {
    maxWidth: "100%",
  },
  tripText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  tripInnerText: {
    color: Colors.verylightblue,
  },
});
