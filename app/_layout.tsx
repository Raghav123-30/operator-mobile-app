import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity, useColorScheme } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack
        screenOptions={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#7c3aed",
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  router.back();
                }}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={24}
                  color={colorScheme == "dark" ? "white" : "black"}
                />
              </TouchableOpacity>
            );
          },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="(services)/NearbyOperators"></Stack.Screen>
        <Stack.Screen name="(services)/NewBooking"></Stack.Screen>
        <Stack.Screen name="(services)/RegisterFarmer"></Stack.Screen>
        <Stack.Screen name="(services)/Settings"></Stack.Screen>
        <Stack.Screen name="(services)/ViewLayout"></Stack.Screen>
      </Stack>
    </ThemeProvider>
  );
}
