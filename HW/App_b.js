// Lab6: Two counters

import { useState } from 'react';
import { Button, Text, View } from 'react-native';

var text_st = { fontSize: 30, backgroundColor: 'lightgray', padding: 10, margin: 10 };

export default function App() {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  return (
    <View style={{ paddingTop: 30 }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={text_st}>{A}</Text>
        <Text style={text_st}>{B}</Text>
      </View>

      <View style={{ flexDirection: 'row', margin: 10 }}>
        <View>
          <Button title="+" onPress={function () { setA(A + 1); }} />
          <View style={{ height: 10 }}></View>
          <Button title="-" onPress={function () { setA(A - 1); }} />
        </View>
        <View style={{ width: 10 }}></View>
        <View>
          <Button title="+" onPress={function () { setB(B + 1); }} />
          <View style={{ height: 10 }}></View>
          <Button title="-" onPress={function () { setB(B - 1); }} />
        </View>
      </View>
    </View>
  );
}
