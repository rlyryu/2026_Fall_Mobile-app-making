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
  const [name, setName] = useState('');
  const [greet, setGreet] = useState('Hi');
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [multiplicand, setMultiplicand] = useState(4);
  const [multiplier, setMultiplier] = useState(7);

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

      {/* lab 3a: controlled TextInput */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Type your name"
      />

      {/* lab 4: Button with onPress action */}
      <Button title="Press Me" onPress={() => Alert.alert('Tapped')} />
      <View style={styles.spacer} />
      <Button title="Touch Me" onPress={touchMeAction} />

      {/* lab 4: Hello, Name (lab2 + lab3a) */}
      <View style={styles.greetBox}>
        <Text style={styles.subText}>
          {greet}, {name || 'Name'}
        </Text>
        <View style={styles.buttonRowReverse}>
          <Button title="Nice" onPress={() => setGreet('Nice to meet you')} />
          <View style={styles.spacerHorizontal} />
          <Button title="Hello" onPress={() => setGreet('Hello')} />
        </View>
      </View>

      {/* lab 5: Counter App (useState) */}
      <View style={styles.counterBox}>
        <Text style={styles.counterText}>{count}</Text>
        <Button title="Count Up" onPress={() => setCount(count + 1)} />
        <View style={styles.spacer} />
        <Button title="Count Down" onPress={() => setCount(count - 1)} />
      </View>

      {/* lab 6: Two counters (row layout) */}
      <View style={styles.rowBox}>
        <Text style={styles.boxText}>{counterA}</Text>
        <Text style={styles.boxText}>{counterB}</Text>
      </View>
      <View style={styles.rowBox}>
        <View>
          <Button title="+" onPress={() => setCounterA(counterA + 1)} />
          <View style={styles.spacer} />
          <Button title="-" onPress={() => setCounterA(counterA - 1)} />
        </View>
        <View style={styles.spacerHorizontal} />
        <View>
          <Button title="+" onPress={() => setCounterB(counterB + 1)} />
          <View style={styles.spacer} />
          <Button title="-" onPress={() => setCounterB(counterB - 1)} />
        </View>
      </View>

      {/* lab 7: 구구단 App */}
      <View style={styles.rowBox}>
        <Text style={styles.boxText}>{multiplicand}</Text>
        <Text style={styles.multSymbol}>x</Text>
        <Text style={styles.boxText}>{multiplier}</Text>
        <Text style={styles.multSymbol}>=</Text>
        <Text style={styles.boxText}>{multiplicand * multiplier}</Text>
      </View>
      <View style={styles.rowBox}>
        <View>
          <Button title="+" onPress={() => setMultiplicand(multiplicand + 1)} />
          <View style={styles.spacer} />
          <Button title="-" onPress={() => setMultiplicand(multiplicand - 1)} />
        </View>
        <View style={styles.spacerHorizontal} />
        <View>
          <Button title="+" onPress={() => setMultiplier(multiplier + 1)} />
          <View style={styles.spacer} />
          <Button title="-" onPress={() => setMultiplier(multiplier - 1)} />
        </View>
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
  greetBox: {
    marginTop: 20,
  },
  buttonRowReverse: {
    flexDirection: 'row-reverse',
    marginTop: 10,
  },
  spacerHorizontal: {
    width: 10,
  },
  rowBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  boxText: {
    fontSize: 30,
    backgroundColor: 'lightgray',
    padding: 10,
    marginRight: 10,
  },
  multSymbol: {
    fontSize: 24,
    marginRight: 10,
  },
});
