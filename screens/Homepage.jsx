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
import Checkbox from "expo-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  updateDate,
  updateFrom,
  updatePassenger,
  updateTo,
} from "../store/tripslice";

export default function Homepage() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigation();

  const { from } = useSelector((state) => state.trip);

  const pressHandler = () => {
    console.log(from);
    nav.navigate("Trip");
  };

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
                  ]}
                  onValueChange={(e) => dispatch(updateFrom(e))}
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
                  ]}
                  onValueChange={(e) => dispatch(updateTo(e))}
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
          <DateTimePicker
            value={date}
            onChange={(e) => updateDate(e.timeStamp)}
            display="default"
          />
        </View>
      </View>
      <View style={styles.passengerArea}>
        <Text style={styles.passengerHeader}>Passenger</Text>
        <View style={styles.checkboxArea}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={checkbox1}
              onChange={() => dispatch(updatePassenger(1))}
              onValueChange={setCheckbox1}
              color={checkbox1 ? Colors.lightblue : undefined}
            />
            <Text style={styles.checkboxText}>1</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={checkbox2}
              onChange={() => dispatch(updatePassenger(2))}
              onValueChange={setCheckbox2}
              color={checkbox2 ? Colors.lightblue : undefined}
            />
            <Text style={styles.checkboxText}>2</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={checkbox3}
              onChange={() => dispatch(updatePassenger(3))}
              onValueChange={setCheckbox3}
              color={checkbox3 ? Colors.lightblue : undefined}
            />
            <Text style={styles.checkboxText}>3</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={checkbox4}
              onChange={() => dispatch(updatePassenger(4))}
              onValueChange={setCheckbox4}
              color={checkbox4 ? Colors.lightblue : undefined}
            />
            <Text style={styles.checkboxText}>4</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={checkbox5}
              onChange={() => dispatch(updatePassenger(5))}
              onValueChange={setCheckbox5}
              color={checkbox5 ? Colors.lightblue : undefined}
            />
            <Text style={styles.checkboxText}>5</Text>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Pressable onPress={pressHandler} style={styles.searchButton}>
          <Text style={styles.searchText}>Search</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 30 : 0,
    gap: 30,
    marginHorizontal: 10,
  },
  topContainer: {
    backgroundColor: Colors.lightblue,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    gap: 30,
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
  checkboxArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    borderColor: Colors.lightgrey,
    backgroundColor: Colors.verylightblue,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  checkboxText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.lightgrey,
  },
  searchButton: {
    width: "60%",
    backgroundColor: Colors.lightgrey,
    paddingVertical: 10,
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    shadowOpacity: 0.2,
  },
  searchText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
