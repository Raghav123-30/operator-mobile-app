import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#7c3aed",
        },
        headerStyle: {
          backgroundColor: "#7c3aed",
        },
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerTitleStyle: { fontSize: 20, textTransform: "uppercase" },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#cbd5e1",
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons color={color} size={size} name="home" />
            );
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons color={color} size={size} name="bell" />
            );
          },
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
