import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../constants/Globals";
import RNPickerSelect from "react-native-picker-select";
import { Entypo } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import CheckBox from "@react-native-community/checkbox";

export default function Homepage() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
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
          <View style={styles.tripContainer}>
            <View style={{ gap: 20 }}>
              <View>
                <Text style={styles.informationText}>From</Text>
                <RNPickerSelect
                  style={{ color: "white" }}
                  items={[
                    { label: "Brussels", value: "Brussels" },
                    { label: "Paris", value: "Paris" },
                    { label: "Dusseldorf", value: "Dusseldorf" },
                    { label: "", value: "" },
                  ]}
                  onValueChange={() => console.log("item")}
                />
              </View>
              <View style={styles.whiteline}></View>
              <View>
                <Text style={styles.informationText}>To</Text>
                <RNPickerSelect
                  items={[
                    { label: "Brussels", value: "Brussels" },
                    { label: "Paris", value: "Paris" },
                    { label: "Dusseldorf", value: "Dusseldorf" },
                    { label: "", value: "" },
                  ]}
                  onValueChange={() => console.log("item")}
                />
              </View>
            </View>
            <Pressable style={styles.button}>
              <Entypo name="shuffle" size={24} color={Colors.lightgrey} />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.dateArea}>
        <Text style={styles.dateHeader}>Date</Text>
        <View style={{ alignItems: "center" }}>
          <DateTimePicker value={date} display="default" />
        </View>
      </View>
      <View style={styles.passengerArea}>
        <Text style={styles.passengerHeader}>Passenger</Text>
        <View>{/* checkbox eklenecek */}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 30 : 0,
    gap: 50,
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
    gap: 20,
    alignItems: "center",
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
    borderRadius: 300,
  },
  iconTopInner: {
    backgroundColor: Colors.lightblue,
    width: 7,
    height: 7,
    borderRadius: 300,
  },
  iconBar: {
    width: 1,
    height: 100,
    backgroundColor: "white",
  },
  iconBottom: {
    backgroundColor: Colors.verylightblue,
    width: 15,
    height: 15,
    borderRadius: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  iconBottomInner: {
    width: 7,
    height: 7,
    borderRadius: 300,
    backgroundColor: "white",
  },
  informationText: {
    color: Colors.lightgrey,
    fontSize: 20,
  },
  whiteline: {
    height: 2,
    minWidth: 200,
    backgroundColor: "white",
  },
  picker: {
    fontSize: 20,
    color: "white",
  },
  button: {
    backgroundColor: "white",
    width: 60,
    borderRadius: 300,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  dateArea: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    gap: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  dateHeader: {
    color: Colors.lightgrey,
    fontSize: 36,
    fontWeight: "bold",
  },
  passengerArea: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    gap: 50,
  },
  passengerHeader: {
    color: Colors.lightgrey,
    fontSize: 36,
    fontWeight: "bold",
  },
});
