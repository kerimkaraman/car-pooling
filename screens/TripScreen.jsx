import {
  Pressable,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Globals";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Trip from "../components/Trip";

export default function TripScreen({ route }) {
  const { from, to } = useSelector((state) => state.trip);
  const nav = useNavigation();

  const goBackHandler = () => {
    nav.goBack();
  };

  const { filtered } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {filtered.map((driver) => console.log(driver))}
      <View style={styles.topArea}>
        <View /*go back button wrapper */>
          <Pressable onPress={goBackHandler}>
            <Ionicons name="chevron-back" size={46} color="white" />
          </Pressable>
        </View>
        <View style={styles.tripInfo}>
          <Text style={styles.tripText}>
            Ride from <Text style={styles.tripInnerText}>{from}</Text> to
            <Text style={styles.tripInnerText}> {to}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.trips}>
        {filtered.length <= 0 ? (
          <Text style={styles.errorText}>
            A trip from {from} to {to} have not found.
          </Text>
        ) : (
          <FlatList
            contentContainerStyle={{ paddingBottom: 20 }}
            keyExtractor={(itemData) => itemData.id}
            data={filtered}
            renderItem={(itemData) => (
              <Trip
                id={itemData.item.id}
                start={itemData.item.start}
                end={itemData.item.end}
                from={itemData.item.from}
                to={itemData.item.to}
                name={itemData.item.name}
                surname={itemData.item.surname}
                car={itemData.item.car}
                review={itemData.item.review}
                photo={itemData.item.photo}
                price={itemData.item.price}
                stars={itemData.item.stars}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
  },
  topArea: {
    backgroundColor: Colors.lightblue,
    borderRadius: 20,
    padding: 40,
    gap: 20,
    alignItems: "flex-start",
  },
  tripInfo: {
    maxWidth: "100%",
  },
  tripText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  tripInnerText: {
    color: Colors.verylightblue,
  },
  errorText: {
    textAlign: "center",
    color: Colors.grey,
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 40,
  },
  tripList: {
    marginBottom: 20,
  },
  trips: {
    flex: 1,
  },
});
