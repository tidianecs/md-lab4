import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

function MenuIcon({ color, size }) {
  return <Ionicons name="restaurant" color={color} size={size} />;
}

function SearchIcon({ color, size }) {
  return <Ionicons name="search" color={color} size={size} />;
}

function InfoIcon({ color, size }) {
  return <Ionicons name="time" color={color} size={size} />;
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#C0392B',
        headerStyle: { backgroundColor: '#C0392B' },
        headerTintColor: '#fff',
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Menu', tabBarIcon: MenuIcon }} />
      <Tabs.Screen name="search" options={{ title: 'Search', tabBarIcon: SearchIcon }} />
      <Tabs.Screen name="info" options={{ title: 'Info', tabBarIcon: InfoIcon }} />
    </Tabs>
  );
}