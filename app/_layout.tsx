import { Stack, useLocalSearchParams } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { baseRestaurants } from "@/constants/restaurants";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="dark">
      <ThemeProvider value={DarkTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="restaurant/[id]"
            options={{
              headerTitle: "Restaurante",
            }}
          />
        </Stack>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
