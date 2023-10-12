import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Globals";

export default function Trip({
  id,
  start,
  end,
  from,
  to,
  name,
  surname,
  stars,
  photo,
  price,
  car,
}) {
  /* from - to - start - end - name - surname - price - photo */
  /* carbooking  -> eklenecekler: araba -  belki drop off pick up*/
  return (
    <Pressable style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.hoursArea}>
          <Text style={styles.hoursText}>{start}</Text>
          <Text style={styles.hoursText}>{end}</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.iconTop}>
            <View style={styles.iconTopInner}></View>
          </View>
          <View style={styles.iconBar}></View>
          <View style={styles.iconBottom}>
            <View style={styles.iconBottomInner}></View>
          </View>
        </View>
        <View style={styles.tripInfo}>
          <View style={styles.tripContainer}>
            <View style={styles.tripItem}>
              <Text style={styles.tripHeader}>From</Text>
              <Text style={styles.tripText}>{from}</Text>
            </View>
            <View style={styles.tripItem}>
              <Text style={styles.tripHeader}>To</Text>
              <Text style={styles.tripText}>{to}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.priceText}>{price} €</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.personCard}>
          <Image
            style={styles.image}
            source={{
              uri: photo,
            }}
          />
          <Text style={styles.personText}>
            {name} {surname}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "white",
    marginVertical: 40,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    justifyContent: "center",
  },
  hoursArea: {
    gap: 70,
  },
  hoursText: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.lightgrey,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 0,
  },
  iconTop: {
    backgroundColor: Colors.lightgrey,
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 300,
  },
  iconTopInner: {
    backgroundColor: "white",
    width: 7,
    height: 7,
    borderRadius: 300,
  },
  iconBar: {
    width: 1,
    height: 100,
    backgroundColor: Colors.lightgrey,
  },
  iconBottom: {
    backgroundColor: Colors.lightgrey,
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
    backgroundColor: Colors.grey,
  },
  tripHeader: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.lightgrey,
  },
  tripItem: {
    gap: 10,
  },
  tripText: {
    color: Colors.grey,
  },
  tripInfo: {
    flexDirection: "row",
    gap: 20,
  },
  tripContainer: {
    gap: 30,
  },
  image: {
    width: 50,
    height: 50,
    objectFit: "cover",
    borderRadius: "50%",
  },
  priceText: {
    color: Colors.grey,
    fontSize: 18,
    fontWeight: "bold",
  },
  personCard: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  personText: {
    color: Colors.lightgrey,
    fontSize: 18,
    fontWeight: "600",
  },
});
