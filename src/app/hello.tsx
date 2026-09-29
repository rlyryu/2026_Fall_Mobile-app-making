import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Hello() {
  const [greet, setGreet] = useState('Hi');
  const [name, setName] = useState('Name');

  return (
    <View>
      {/* lab 2: Hello, Name (useState + TextInput) */}
      <Text style={styles.text}>
        {greet}, {name}
      </Text>
      <TextInput style={styles.input} onChangeText={setName} />

      <View style={styles.buttonRowReverse}>
        <Button title="Nice" onPress={() => setGreet('Nice to meet you')} />
        <View style={styles.spacerHorizontal} />
        <Button title="Hello" onPress={() => setGreet('Hello')} />
      </View>

      {/* navigate / push / replace */}
      <View style={styles.routerBox}>
        <Button title="navigate('/')" onPress={() => router.navigate('/')} />
        <View style={styles.spacer} />
        <Button title="push('/')" onPress={() => router.push('/')} />
        <View style={styles.spacer} />
        <Button title="replace('/mult')" onPress={() => router.replace('/mult')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  buttonRowReverse: {
    margin: 10,
    flexDirection: 'row-reverse',
  },
  spacerHorizontal: {
    width: 10,
  },
  routerBox: {
    margin: 10,
  },
  spacer: {
    height: 10,
  },
});
