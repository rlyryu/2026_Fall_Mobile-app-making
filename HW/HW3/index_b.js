// HW #3 주사위 1개

import { useState } from 'react';
import { Button, Text, View } from 'react-native';

function Circle() {
  return <View style={st_circle} />;
}

function Blank() {
  return <View style={[st_circle, { backgroundColor: 'transparent', borderWidth: 0 }]} />;
}

var st_circle = {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: 'rgb(0, 200, 255)',
  borderWidth: 1,
  margin: 2,
};
var st_text = {
  textAlign: 'center',
  fontSize: 20,
  margin: 5,
};
var st_dice = {
  backgroundColor: 'rgb(255, 240, 200)',
  padding: 10,
};

function Dice(props) {
  if (props.num == 1) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: 'row' }}><Blank /><Blank /><Blank /></View>
        <View style={{ flexDirection: 'row' }}><Blank /><Circle /><Blank /></View>
        <View style={{ flexDirection: 'row' }}><Blank /><Blank /><Blank /></View>
      </View>
    );
  } else if (props.num == 2) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: 'row' }}><Circle /><Blank /><Blank /></View>
        <View style={{ flexDirection: 'row' }}><Blank /><Blank /><Blank /></View>
        <View style={{ flexDirection: 'row' }}><Blank /><Blank /><Circle /></View>
      </View>
    );
  } else if (props.num == 3) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: 'row' }}><Circle /><Blank /><Blank /></View>
        <View style={{ flexDirection: 'row' }}><Blank /><Circle /><Blank /></View>
        <View style={{ flexDirection: 'row' }}><Blank /><Blank /><Circle /></View>
      </View>
    );
  } else if (props.num == 4) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: 'row' }}><Circle /><Blank /><Circle /></View>
        <View style={{ flexDirection: 'row' }}><Blank /><Blank /><Blank /></View>
        <View style={{ flexDirection: 'row' }}><Circle /><Blank /><Circle /></View>
      </View>
    );
  } else if (props.num == 5) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: 'row' }}><Circle /><Blank /><Circle /></View>
        <View style={{ flexDirection: 'row' }}><Blank /><Circle /><Blank /></View>
        <View style={{ flexDirection: 'row' }}><Circle /><Blank /><Circle /></View>
      </View>
    );
  } else {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: 'row' }}><Circle /><Blank /><Circle /></View>
        <View style={{ flexDirection: 'row' }}><Circle /><Blank /><Circle /></View>
        <View style={{ flexDirection: 'row' }}><Circle /><Blank /><Circle /></View>
      </View>
    );
  }
}

export default function App() {
  const [N1, setN1] = useState(1);
  const [N2, setN2] = useState(1);

  function roll() {
    setN1(Math.floor(Math.random() * 6) + 1);
    setN2(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <Text style={st_text}>Double Dice</Text>
      <Text style={st_text}>{N1 + N2}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 50 }}>
        <Dice num={N1} />
        <Dice num={N2} />
      </View>
      <View style={{ marginHorizontal: 100, marginVertical: 30 }}>
        <Button title="Roll" onPress={roll} />
      </View>
    </View>
  );
}
