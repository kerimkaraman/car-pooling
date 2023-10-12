import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../constants/Globals";

export default function OrderConfirmation({ navigation }) {
  const handleButton = () => {
    navigation.navigate("HomePage");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.confirmation}>
        <View style={styles.icon}>
          <Entypo name="check" size={48} color="white" />
        </View>
        <Text style={styles.confirmationText}>
          Your order has been confirmed! Good trips 😁
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleButton} style={styles.button}>
          <Text style={styles.buttonText}>Go Home</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  confirmation: {
    marginTop: 300,
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
  icon: {
    backgroundColor: "#07BE5C",
    width: 70,
    padding: 10,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmationText: {
    color: Colors.lightgrey,
    fontSize: 24,
    width: "90%",
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.lightgrey,
    width: "60%",
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
