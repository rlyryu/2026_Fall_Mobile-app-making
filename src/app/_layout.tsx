import { Stack } from 'expo-router';

// lab 3a: outer Stack = onboarding -> main (Tabs) -> hello / multiplication
// lab 1: screenOptions style every header, a screen's own options override them
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
      }}>
      <Stack.Screen name="index" options={{ title: 'Onboarding', headerShown: false }} />
      <Stack.Screen name="main" options={{ title: 'main', headerShown: false }} />
      <Stack.Screen name="hello" options={{ title: 'Hello' }} />
      <Stack.Screen
        name="multiplication"
        options={{
          title: '구구단',
          headerStyle: { backgroundColor: 'red' },
          headerTintColor: 'black',
        }}
      />
    </Stack>
  );
}
