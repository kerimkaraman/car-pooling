import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../constants/Globals";
import SignupForm from "../layout/SignupForm";

export default function SignupScreen() {
  const src =
    "https://assets.api.uizard.io/api/cdn/stream/2cb3b355-a7ed-4abb-8700-e1fca93e3388.png";
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: src }} />
          </View>
          <View style={styles.topTextContainer}>
            <Text style={styles.topHeader}>CarPoolin</Text>
            <View style={styles.topSubTextContainer}>
              <Text style={styles.topSubtext}>Join today to unlock</Text>
              <Text style={styles.topSubtext}>100+ travels everyday!</Text>
            </View>
          </View>
        </View>
        <SignupForm />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: 50,
  },
  topContainer: {
    backgroundColor: Colors.lightblue,
    borderRadius: 20,
    marginHorizontal: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  topTextContainer: {
    alignItems: "center",
    gap: 15,
  },
  topHeader: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  topSubTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  topSubtext: {
    color: "white",
    fontSize: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 250,
    objectFit: "contain",
  },
});
