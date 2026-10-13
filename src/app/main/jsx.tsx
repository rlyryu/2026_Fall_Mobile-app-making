// Lec 8: JSX and <Tags> — (lab6) Phone Book: lab4a (styled) + lab5 (add item) combined
// names/phones are real state (not a mutated module-level array + dummy refresh) —
// with React Compiler enabled, a render that only reads a mutated external array
// (no tracked state/props) can be memoized away, so the list wouldn't update.
import type { ReactNode } from 'react';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function JsxScreen() {
  const [names, setNames] = useState(['Ewha', 'June', 'Jane', 'Nick']);
  const [phones, setPhones] = useState<(number | string)[]>([1234, 3347, 1111, 1212]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  function addItem() {
    setNames([...names, name]);
    setPhones([...phones, phone]);
  }

  function deleteItem() {
    setNames(names.slice(0, -1));
    setPhones(phones.slice(0, -1));
  }

  const rows: ReactNode[] = [];
  for (let i = 0; i < names.length; i++) {
    rows.push(
      <View key={i} style={styles.phoneRow}>
        <Text style={styles.phoneCell}>{names[i]}</Text>
        <Text style={styles.phoneCell}>{phones[i]}</Text>
      </View>,
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.phoneBookTitle}>Phone Book</Text>
      <View style={styles.inputRow}>
        <TextInput style={styles.inputBox} onChangeText={setName} />
        <TextInput style={styles.inputBox} onChangeText={setPhone} />
        <Button title="ADD" onPress={addItem} />
        <Button title="DEL" onPress={deleteItem} />
      </View>
      <View>{rows}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  phoneBookTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  phoneRow: {
    flexDirection: 'row',
  },
  phoneCell: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
    padding: 5,
    margin: 2,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  inputBox: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
    padding: 5,
    margin: 5,
  },
});
