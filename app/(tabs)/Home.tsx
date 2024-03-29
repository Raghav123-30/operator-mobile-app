import { TouchableOpacity, FlatList, ScrollView } from "react-native";
import { View, Text } from "react-native";
import React from "react";
import { useRouter, Href, Link } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface service {
  id: number;
  name: string;
  route: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
}
const Home = () => {
  const router = useRouter();
  const services: service[] = [
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 30,
      }}
    >
      <FlatList
        data={services}
        key={"id"}
        contentContainerStyle={{
          alignSelf: "center",
          paddingVertical: 50,
          rowGap: 8,
          paddingHorizontal: 16,
        }}
        columnWrapperStyle={{ gap: 8, justifyContent: "center" }}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              router.push(item.route as Href<"">);
            }}
            className="bg-violet-700 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-5 "
            style={{ width: 180, height: 180 }}
          >
            <MaterialCommunityIcons
              name={item.iconName}
              size={50}
              color={"white"}
            />
            <Text className="text-white  text-lg">{item.name}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};

export default Home;
