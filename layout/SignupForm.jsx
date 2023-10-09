import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../components/Input";
import { Colors } from "../constants/Globals";
import { useDispatch, useSelector } from "react-redux";

export default function SignupForm() {
  const mail = useSelector((state) => state.signup.Name);

  const pressHandler = () => {
    console.log(mail);
  };

  return (
    <View style={styles.formContainer}>
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Name" type="Name" />
      <Input placeholder="Surname" type="surname" />
      <Input placeholder="Phone Number" type="phone" />
      <Pressable onPress={pressHandler} style={styles.button}>
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
});
