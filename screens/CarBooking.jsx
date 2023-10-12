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
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CarBooking({ route }) {
  const {
    from,
    to,
    start,
    end,
    name,
    surname,
    car,
    price,
    photo,
    review,
    stars,
  } = route.params;

  const nav = useNavigation();

  const goBackHandler = () => {
    nav.goBack();
  };

  const handleOrder = () => {
    nav.navigate("Confirmation");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.priceArea}>
          <Pressable onPress={goBackHandler}>
            <Ionicons name="chevron-back" size={46} color="white" />
          </Pressable>
          <View>
            <Text style={styles.priceText}>{price} €</Text>
          </View>
        </View>
        <View style={styles.topContentContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.iconTop}>
              <View style={styles.iconTopInner}></View>
            </View>
            <View style={styles.iconBar}></View>
            <View style={styles.iconBottom}>
              <View style={styles.iconBottomInner}></View>
            </View>
          </View>
          <View style={styles.topItemContainer}>
            <View style={styles.topItem}>
              <Text style={styles.topItemHeader}>{start}</Text>
              <Text style={styles.topItemText}>{from}</Text>
            </View>
            <View style={styles.topItem}>
              <Text style={styles.topItemHeader}>{end}</Text>
              <Text style={styles.topItemText}>{to}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.personCard}>
          <View style={styles.personInfo}>
            <Image style={styles.image} source={{ uri: photo }} />
            <View style={{ gap: 10 }}>
              <Text style={styles.personText}>
                {name} {surname}
              </Text>
              <View style={styles.reviewArea}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Text style={{ color: Colors.verylightgrey }}>{stars}</Text>
                  <AntDesign name="star" size={20} color="orange" />
                </View>
                <Text style={styles.reviewText}>({review} reviews)</Text>
              </View>
            </View>
          </View>
          <View style={styles.personCar}>
            <FontAwesome name="car" size={36} color={Colors.lightgrey} />
            <Text style={styles.carText}>{car}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 60, alignItems: "center" }}>
        <Pressable onPress={handleOrder} style={styles.orderButton}>
          <Text style={styles.orderText}>Order Now</Text>
        </Pressable>
      </View>
      <View style={styles.warningTextContainer}>
        <Text style={styles.warningText}>
          By clicking on "Order Now" button you agree with Terms and Policies of
          using CarPooling
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  topContainer: {
    padding: 30,
    borderRadius: 30,
    backgroundColor: Colors.lightblue,
    gap: 30,
  },
  topContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  contentContainer: {
    marginTop: 50,
    paddingLeft: 40,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 0,
  },
  topItemContainer: {
    gap: 60,
  },
  topItem: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  priceArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  priceText: {
    color: Colors.lightgrey,
    fontSize: 24,
    fontWeight: "bold",
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
  topItemHeader: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  topItemText: {
    color: Colors.verylightblue,
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: "50%",
  },
  personCard: {
    gap: 50,
  },
  personText: {
    fontSize: 24,
    color: Colors.grey,
    fontWeight: "bold",
  },
  personInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  personCar: {
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
  },
  carText: {
    color: Colors.grey,
    fontSize: 18,
    fontWeight: "bold",
  },
  reviewArea: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  reviewText: {
    color: Colors.verylightgrey,
  },
  orderButton: {
    backgroundColor: Colors.lightgrey,
    width: "60%",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },
  orderText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  warningTextContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  warningText: {
    width: "90%",
    textAlign: "center",
    color: Colors.verylightgrey,
  },
});
