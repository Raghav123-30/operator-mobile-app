import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = () => {
  const router = useRouter();
  const services = [
    {
      id: 1,
      name: "New Booking",
      route: "NewBooking",
      iconName: "account",
    },
    {
      id: 2,
      name: "Register Farmer",
      route: "RegisterFarmer",
      iconName: "account-arrow-up",
    },
    {
      id: 3,
      name: "Nearby Operators",
      route: "NearbyOperators",
      iconName: "google-nearby",
    },
    {
      id: 4,
      name: "View Layout",
      route: "ViewLayout",
      iconName: "warehouse",
    },
    { id: 5, name: "Settings", route: "Settings", iconName: "hammer" },
  ];
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={services}
        key={"id"}
        contentContainerStyle={{
          alignSelf: "center",
          paddingVertical: 50,
          rowGap: 8,
        }}
        columnWrapperStyle={{ gap: 8, justifyContent: "center" }}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              router.push(`/${item.route}`);
            }}
            style={{
              width: 200,
              height: 200,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#836FFF",
              borderRadius: 8,
              gap: 8,
            }}
          >
            <MaterialCommunityIcons
              name={item.iconName}
              size={50}
              color={"white"}
            />
            <Text style={{ color: "white" }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};

export default Home;
