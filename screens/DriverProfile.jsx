import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../constants/Globals";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function DriverProfile({ route, navigation }) {
  const { name, surname, photo, stars, review, level } = route.params;

  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
          <Pressable onPress={goBackHandler}>
            <Ionicons name="chevron-back" size={46} color="white" />
          </Pressable>
          <View style={styles.person}>
            <Image style={styles.image} source={{ uri: photo }} />
            <Text style={styles.personName}>
              {name} {surname}
            </Text>
          </View>
        </View>
        <View style={styles.personSkillsArea}>
          <View style={styles.personSkillItem}>
            <Text style={styles.skillItemHeader}>Level: </Text>
            <Text style={styles.skillItemText}>{level}</Text>
          </View>
          <View style={styles.personSkillItem}>
            <Text style={styles.skillItemHeader}>Rating: </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Text style={styles.skillItemText}>{stars}</Text>
              <AntDesign name="star" size={20} color="orange" />
            </View>
          </View>
          <View style={styles.personSkillItem}>
            <Text style={styles.skillItemHeader}>Reviews: </Text>
            <Text style={styles.skillItemText}>{review}</Text>
          </View>
        </View>
        <View style={styles.detailsArea}>
          <View style={styles.detailItem}>
            <View style={styles.detailIcon}>
              <Entypo name="check" size={20} color={Colors.lightblue} />
            </View>
            <Text style={styles.detailText}>ID Verified.</Text>
          </View>
          <View style={styles.detailItem}>
            <View style={styles.detailIcon}>
              <Entypo name="check" size={20} color={Colors.lightblue} />
            </View>
            <Text style={styles.detailText}>Driver license uploaded.</Text>
          </View>
        </View>
        <View style={styles.descriptionArea}>
          <Text style={styles.descriptionHeader}>Meet {name}</Text>
          <View>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              ut iure debitis quia laborum, aliquam beatae perferendis
              accusantium, odio nemo ipsum dicta cumque alias officiis in quasi
              doloremque quam ratione.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  topContainer: {
    backgroundColor: Colors.lightblue,
    borderRadius: 10,
    padding: 40,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 20,
  },
  personSkillsArea: {
    backgroundColor: "white",
    marginTop: -20,
    zIndex: -1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    gap: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  personSkillItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 40,
  },
  skillItemHeader: {
    color: Colors.grey,
    fontSize: 24,
    fontWeight: "bold",
  },
  skillItemText: {
    color: Colors.verylightgrey,
    fontSize: 20,
    fontWeight: "600",
  },
  detailsArea: {
    backgroundColor: Colors.lightblue,
    marginTop: -20,
    zIndex: -2,
    paddingVertical: 40,
    paddingHorizontal: 20,
    gap: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  detailItem: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  detailIcon: {
    backgroundColor: "white",
    padding: 5,
    width: 30,
    alignItems: "center",
    borderRadius: 999,
  },
  detailText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  person: {
    alignItems: "center",
    gap: 20,
  },
  personName: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    objectFit: "cover",
    borderRadius: 999,
  },
  descriptionArea: {
    backgroundColor: "white",
    marginTop: -20,
    zIndex: -3,
    paddingVertical: 40,
    paddingHorizontal: 20,
    gap: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  descriptionHeader: {
    fontSize: 28,
    fontWeight: "700",
  },
  descriptionText: {
    fontSize: 16,
    color: Colors.verylightgrey,
    lineHeight: 26,
  },
});
