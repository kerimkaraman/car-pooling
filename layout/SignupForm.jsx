import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Globals";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  updateEmail,
  updateName,
  updatePassword,
  updatePhone,
  updateSurname,
} from "../store/signformslice";

export default function SignupForm() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("HomePage");
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => dispatch(updateName(text))}
          placeholder="Name"
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => dispatch(updateSurname(text))}
          placeholder="Surname"
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => dispatch(updateEmail(text))}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => dispatch(updatePassword(text))}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        ></TextInput>
        <TextInput
          onChangeText={(text) => dispatch(updatePhone(text))}
          placeholder="Phone Number"
          style={styles.input}
        />
      </View>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    gap: 20,
    paddingBottom: 50,
  },
  button: {
    backgroundColor: Colors.lightgrey,
    padding: 20,
    minWidth: "80%",
    borderRadius: 40,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  inputContainer: {
    flex: 1,
    gap: 20,
  },
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
