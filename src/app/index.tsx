import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="About" onPress={() => router.navigate('/about')} />
      <View style={styles.spacer} />
      <Button title="Hello" onPress={() => router.navigate('/hello')} />
      <View style={styles.spacer} />
      <Button title="구구단" onPress={() => router.navigate('/mult')} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 10,
  },
  spacer: {
    height: 10,
  },
});
