import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Tools() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Apps made in Class</Text>
      <Button title="hello" onPress={() => router.navigate('/hello')} />
      <Button title="구구단" onPress={() => router.navigate('/multiplication')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
});
