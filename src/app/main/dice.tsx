// Lec 9: Components, Dice App — (step1) Draw Dots, (step2) Dice component, (step3) Roll
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function Circle() {
  return <View style={styles.circle} />;
}

function Blank() {
  return <View style={[styles.circle, styles.blank]} />;
}

// 3x3 dot grid per face (1 = dot, 0 = blank)
const DICE_PATTERNS: Record<number, number[][]> = {
  1: [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  2: [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
  ],
  3: [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
  4: [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ],
  5: [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ],
  6: [
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
};

function Dice({ num }: { num: number }) {
  const pattern = DICE_PATTERNS[num] ?? DICE_PATTERNS[1];
  return (
    <View style={styles.dice}>
      {pattern.map((row, r) => (
        <View key={r} style={styles.diceRow}>
          {row.map((dot, c) => (dot ? <Circle key={c} /> : <Blank key={c} />))}
        </View>
      ))}
    </View>
  );
}

export default function DiceScreen() {
  const [n, setN] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dice</Text>
      <Dice num={n} />
      <View style={styles.rollWrap}>
        <Button title="Roll" onPress={() => setN(Math.floor(Math.random() * 6) + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgb(0, 200, 255)',
    borderWidth: 1,
    margin: 2,
  },
  blank: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  dice: {
    backgroundColor: 'rgb(255, 240, 200)',
    padding: 10,
  },
  diceRow: {
    flexDirection: 'row',
  },
  rollWrap: {
    marginHorizontal: 100,
    marginVertical: 30,
  },
});
