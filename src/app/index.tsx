import { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  function touchMeAction() {
    Alert.alert('Do something');
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {/* lab 1a~1c: styled text grouped in a View */}
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>Hello Ewha</Text>
        <Text style={styles.subText}>Nice to meet you</Text>
      </View>

      {/* lab 1d / lab 2: local image + remote image */}
      <Image style={styles.image} source={require('@/assets/images/react-logo.png')} />
      <Image style={styles.image} source={require('@/assets/images/cat-icon.png')} />
      <Image
        style={styles.image}
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
      />

      {/* lab 2a: TextInput */}
      <TextInput style={styles.input} defaultValue="You can type in me" />

      {/* lab 4: Button with onPress action */}
      <Button title="Press Me" onPress={() => Alert.alert('Tapped')} />
      <View style={styles.spacer} />
      <Button title="Touch Me" onPress={touchMeAction} />

      {/* lab 5: Counter App (useState) */}
      <View style={styles.counterBox}>
        <Text style={styles.counterText}>{count}</Text>
        <Button title="Count Up" onPress={() => setCount(count + 1)} />
        <View style={styles.spacer} />
        <Button title="Count Down" onPress={() => setCount(count - 1)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingTop: 30,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  headerBox: {
    backgroundColor: 'cyan',
    padding: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 30,
    color: 'blue',
  },
  subText: {
    fontSize: 20,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  spacer: {
    height: 10,
  },
  counterBox: {
    marginTop: 20,
  },
  counterText: {
    fontSize: 30,
    backgroundColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
  },
});
