import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Trip({ theme, start, end }) {
  return (
    <Pressable>
      <View>
        <View>
          <Text>{start}</Text>
          <Text>{end}</Text>
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
          <View>
            <View>
              <Text>FROM</Text>
              <Text>Dusseldorf</Text>
            </View>
            <View>
              <Text>To</Text>
              <Text>Blabla</Text>
            </View>
          </View>
          <View>
            <Text>Price</Text>
          </View>
        </View>
      </View>
      <View>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/2589650/pexels-photo-2589650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
        />
        <Text>Mark</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
});
