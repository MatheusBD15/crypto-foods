import { Tabs } from "expo-router";

import { Home, MessageCircle } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#e7e8e8" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          headerShown: false,
          tabBarIcon: ({ color }) => <Home size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="my-reviews"
        options={{
          headerShown: false,
          title: "Minhas análises",
          tabBarIcon: ({ color }) => <MessageCircle size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
