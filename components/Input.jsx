import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../constants/Globals";
import { useDispatch } from "react-redux";
import { updateData } from "../store/signformslice";

export default function Input({ placeholder, type }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState();

  return (
    <View>
      <TextInput
        onChangeText={() => dispatch(updateData(type))}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.lightgrey,
    borderWidth: 1,
    minWidth: "80%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 40,
    fontSize: 18,
  },
});
