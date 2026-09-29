import { Drawer } from 'expo-router/drawer';

// lab 5: drawer navigator (current)
export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: 'Home' }} />
      <Drawer.Screen name="about" options={{ title: 'About' }} />
      <Drawer.Screen name="hello" options={{ title: 'Hello' }} />
      <Drawer.Screen name="mult" options={{ title: '구구단' }} />
    </Drawer>
  );
}

// lab 1: stack navigator - swap in to get back-arrow navigation
//
// import { Stack } from 'expo-router';
//
// export default function Layout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{ title: 'Home' }} />
//       <Stack.Screen name="about" options={{ title: 'About' }} />
//       <Stack.Screen name="hello" options={{ title: 'Hello' }} />
//       <Stack.Screen name="mult" options={{ title: '구구단' }} />
//     </Stack>
//   );
// }

// lab 4: tab navigator - just change the layout
//
// import { Tabs } from 'expo-router/js-tabs';
//
// export default function Layout() {
//   return (
//     <Tabs>
//       <Tabs.Screen name="index" options={{ title: 'Home' }} />
//       <Tabs.Screen name="about" options={{ title: 'About' }} />
//       <Tabs.Screen name="hello" options={{ title: 'Hello' }} />
//       <Tabs.Screen name="mult" options={{ title: '구구단' }} />
//     </Tabs>
//   );
// }
