// HW #2 색변화

import { useAudioPlayer } from 'expo-audio';
import { useState } from 'react';
import { ImageBackground, View } from 'react-native';

var on_white = 'rgba(100, 100, 100, 0.3)';

// redundant한것 합침 
function WhiteKey({ source }) {
  const player = useAudioPlayer(source);
  const [bg, setBg] = useState('transparent');

  function down() {
    player.seekTo(0);
    player.play();
    setBg(on_white);
  }
  function up() {
    setBg('transparent');
  }

  return (
    <View
      style={{ flex: 1, margin: 5, backgroundColor: bg }}
      onTouchStart={down}
      onTouchEnd={up}
      onTouchCancel={up}
    />
  );
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        resizeMode="stretch"
        source={require('../assets/piano/keyboard.png')}>
        <WhiteKey source={require('../assets/piano/note00.mp3')} />
        <WhiteKey source={require('../assets/piano/note02.mp3')} />
        <WhiteKey source={require('../assets/piano/note04.mp3')} />
        <WhiteKey source={require('../assets/piano/note05.mp3')} />
        <WhiteKey source={require('../assets/piano/note07.mp3')} />
        <WhiteKey source={require('../assets/piano/note09.mp3')} />
        <WhiteKey source={require('../assets/piano/note11.mp3')} />
        <WhiteKey source={require('../assets/piano/note12.mp3')} />
      </ImageBackground>
    </View>
  );
}
