import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../constants/Globals";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const src =
    "https://assets.api.uizard.io/api/cdn/stream/2cb3b355-a7ed-4abb-8700-e1fca93e3388.png";
  const navigation = useNavigation();

  const handleForwardBtn = () => {
    navigation.navigate("SignupScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{ uri: src }} />
      <View style={styles.textContainer}>
        <Text style={styles.header}>CarPoolin</Text>
        <Text style={styles.subtext}>Drive & Save Money</Text>
      </View>
      <Pressable onPress={handleForwardBtn} style={styles.button}>
        <FontAwesome5 name="arrow-right" size={24} color="white" />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  image: {
    objectFit: "contain",
    width: 350,
    height: 300,
  },
  textContainer: {
    flexShrink: 1,
    alignItems: "center",
    gap: 10,
  },
  header: {
    fontSize: 48,
    color: Colors.grey,
    fontWeight: "bold",
  },
  subtext: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.grey,
  },
  button: {
    backgroundColor: Colors.lightgrey,
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 50,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 1,
  },
});
