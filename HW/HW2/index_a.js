// HW #2 흰건반 only

import { useAudioPlayer } from 'expo-audio';
import { ImageBackground, View } from 'react-native';

var on_white = 'rgba(100, 100, 100, 0.3)';

export default function App() {
  const p00 = useAudioPlayer(require('../assets/piano/note00.mp3'));
  const p02 = useAudioPlayer(require('../assets/piano/note02.mp3'));
  const p04 = useAudioPlayer(require('../assets/piano/note04.mp3'));
  const p05 = useAudioPlayer(require('../assets/piano/note05.mp3'));
  const p07 = useAudioPlayer(require('../assets/piano/note07.mp3'));
  const p09 = useAudioPlayer(require('../assets/piano/note09.mp3'));
  const p11 = useAudioPlayer(require('../assets/piano/note11.mp3'));
  const p12 = useAudioPlayer(require('../assets/piano/note12.mp3'));

  function play00() { p00.seekTo(0); p00.play(); }
  function play02() { p02.seekTo(0); p02.play(); }
  function play04() { p04.seekTo(0); p04.play(); }
  function play05() { p05.seekTo(0); p05.play(); }
  function play07() { p07.seekTo(0); p07.play(); }
  function play09() { p09.seekTo(0); p09.play(); }
  function play11() { p11.seekTo(0); p11.play(); }
  function play12() { p12.seekTo(0); p12.play(); }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        resizeMode="stretch"
        source={require('../assets/piano/keyboard.png')}>
        <View style={{ flex: 1, margin: 5, backgroundColor: on_white }} onTouchStart={play00} />
        <View style={{ flex: 1, margin: 5, backgroundColor: on_white }} onTouchStart={play02} />
        <View style={{ flex: 1, margin: 5, backgroundColor: on_white }} onTouchStart={play04} />
        <View style={{ flex: 1, margin: 5, backgroundColor: on_white }} onTouchStart={play05} />
        <View style={{ flex: 1, margin: 5, backgroundColor: on_white }} onTouchStart={play07} />
        <View style={{ flex: 1, margin: 5, backgroundColor: on_white }} onTouchStart={play09} />
        <View style={{ flex: 1, margin: 5, backgroundColor: on_white }} onTouchStart={play11} />
        <View style={{ flex: 1, margin: 5, backgroundColor: on_white }} onTouchStart={play12} />
      </ImageBackground>
    </View>
  );
}
