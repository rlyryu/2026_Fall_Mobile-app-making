import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Multiplication() {
  const [multiplicand, setMultiplicand] = useState(0);
  const [multiplier, setMultiplier] = useState(0);

  return (
    <View>
      <View style={styles.rowBox}>
        <Text style={styles.boxText}>{multiplicand}</Text>
        <Text style={styles.symbol}>x</Text>
        <Text style={styles.boxText}>{multiplier}</Text>
        <Text style={styles.symbol}>=</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  rowBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  boxText: {
    fontSize: 30,
    backgroundColor: 'lightgray',
    padding: 10,
    marginRight: 10,
  },
  symbol: {
    fontSize: 24,
    marginRight: 10,
  },
  spacer: {
    height: 10,
  },
  spacerHorizontal: {
    width: 10,
  },
});
