// HW #2 색변화+ 흑건반 

import { useAudioPlayer } from 'expo-audio';
import { useState } from 'react';
import { ImageBackground, View } from 'react-native';

const sound = [ // mp3 리스트 
  require('../../assets/piano/note00.mp3'),   require('../../assets/piano/note01.mp3'),
  require('../../assets/piano/note02.mp3'),   require('../../assets/piano/note03.mp3'),
  require('../../assets/piano/note04.mp3'),   require('../../assets/piano/note05.mp3'),
  require('../../assets/piano/note06.mp3'),   require('../../assets/piano/note07.mp3'),
  require('../../assets/piano/note08.mp3'),   require('../../assets/piano/note09.mp3'),
  require('../../assets/piano/note10.mp3'),   require('../../assets/piano/note11.mp3'),
  require('../../assets/piano/note12.mp3'),
];

// 흑건 위치리스트
const top = { 1: '7.0%', 3: '22.6%', 6: '44.7%', 8: '58.6%', 10: '72.8%' };

// 색표시 통합 
function Key({ n }) {
  const p = useAudioPlayer(sound[n]);
  const [color, setColor] = useState('transparent');
  const black = n in top;

  return (
    <View
      style={black
        ? { position: 'absolute', right: 0, width: '55%', height: '7.4%', top: top[n], backgroundColor: color }
        : { flex: 1, backgroundColor: color }}
      onTouchStart={function () { p.seekTo(0); p.play(); setColor(black ? 'rgba(255,255,255,0.3)' : 'rgba(100,100,100,0.3)'); }}
      onTouchEnd={function () { setColor('transparent'); }}
    />
  );
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ width: '100%', height: '100%' }}
        resizeMode="stretch" source={require('../assets/piano/keyboard.png')}>
        {[0, 2, 4, 5, 7, 9, 11, 12].map(function (n) { return <Key key={n} n={n} />; })}
        {[1, 3, 6, 8, 10].map(function (n) { return <Key key={n} n={n} />; })}
      </ImageBackground>
    </View>
  );
}
