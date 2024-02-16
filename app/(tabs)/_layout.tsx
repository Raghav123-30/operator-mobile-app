import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
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
