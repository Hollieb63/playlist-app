import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007BFF",
        tabBarInactiveTintColor: "#333",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        },
        headerStyle: {
          backgroundColor: "#fff",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        },
        headerTitleStyle: {
          color: "#333",
        },
        headerTintColor: "#333",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerLeft: () => <></>,
          headerTitle: "Vibefy",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="+not-found" />
      <Tabs.Screen
        name="playlist"
        options={{
          headerTitle: "Playlist",
          tabBarIcon: ({ color }) => (
            <Ionicons name="musical-note" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
