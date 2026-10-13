import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#C0392B' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="dish/[id]" options={{ title: 'Dish' }} />
      <Stack.Screen name="about" options={{ title: 'About', presentation: 'modal' }} />
    </Stack>
  );
}
