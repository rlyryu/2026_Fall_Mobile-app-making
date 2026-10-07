// HW #2 색변화 & 흑건반까지 

import { useAudioPlayer } from 'expo-audio';
import { useState } from 'react';
import { ImageBackground, View } from 'react-native';

var on_white = 'rgba(100, 100, 100, 0.3)';
var on_black = 'rgba(255, 255, 255, 0.3)';

export default function App() {
  const p00 = useAudioPlayer(require('../assets/piano/note00.mp3'));
  const p01 = useAudioPlayer(require('../assets/piano/note01.mp3'));
  const p02 = useAudioPlayer(require('../assets/piano/note02.mp3'));
  const p03 = useAudioPlayer(require('../assets/piano/note03.mp3'));
  const p04 = useAudioPlayer(require('../assets/piano/note04.mp3'));
  const p05 = useAudioPlayer(require('../assets/piano/note05.mp3'));
  const p06 = useAudioPlayer(require('../assets/piano/note06.mp3'));
  const p07 = useAudioPlayer(require('../assets/piano/note07.mp3'));
  const p08 = useAudioPlayer(require('../assets/piano/note08.mp3'));
  const p09 = useAudioPlayer(require('../assets/piano/note09.mp3'));
  const p10 = useAudioPlayer(require('../assets/piano/note10.mp3'));
  const p11 = useAudioPlayer(require('../assets/piano/note11.mp3'));
  const p12 = useAudioPlayer(require('../assets/piano/note12.mp3'));

  function play00() { p00.seekTo(0); p00.play(); }
  function play01() { p01.seekTo(0); p01.play(); }
  function play02() { p02.seekTo(0); p02.play(); }
  function play03() { p03.seekTo(0); p03.play(); }
  function play04() { p04.seekTo(0); p04.play(); }
  function play05() { p05.seekTo(0); p05.play(); }
  function play06() { p06.seekTo(0); p06.play(); }
  function play07() { p07.seekTo(0); p07.play(); }
  function play08() { p08.seekTo(0); p08.play(); }
  function play09() { p09.seekTo(0); p09.play(); }
  function play10() { p10.seekTo(0); p10.play(); }
  function play11() { p11.seekTo(0); p11.play(); }
  function play12() { p12.seekTo(0); p12.play(); }

  const [k00, setk00] = useState('transparent');
  const [k01, setk01] = useState('transparent');
  const [k02, setk02] = useState('transparent');
  const [k03, setk03] = useState('transparent');
  const [k04, setk04] = useState('transparent');
  const [k05, setk05] = useState('transparent');
  const [k06, setk06] = useState('transparent');
  const [k07, setk07] = useState('transparent');
  const [k08, setk08] = useState('transparent');
  const [k09, setk09] = useState('transparent');
  const [k10, setk10] = useState('transparent');
  const [k11, setk11] = useState('transparent');
  const [k12, setk12] = useState('transparent');

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ height: '100%', width: '100%' }}
        resizeMode="stretch" source={require('../assets/piano/keyboard.png')}>

        {/* 흰 */}
        <View style={{ flex: 1, backgroundColor: k00 }}
          onTouchStart={function () { play00(); setk00(on_white) }}
          onTouchEnd={function () { setk00('transparent') }} />
        <View style={{ flex: 1, backgroundColor: k02 }}
          onTouchStart={function () { play02(); setk02(on_white) }}
          onTouchEnd={function () { setk02('transparent') }} />
        <View style={{ flex: 1, backgroundColor: k04 }}
          onTouchStart={function () { play04(); setk04(on_white) }}
          onTouchEnd={function () { setk04('transparent') }} />
        <View style={{ flex: 1, backgroundColor: k05 }}
          onTouchStart={function () { play05(); setk05(on_white) }}
          onTouchEnd={function () { setk05('transparent') }} />
        <View style={{ flex: 1, backgroundColor: k07 }}
          onTouchStart={function () { play07(); setk07(on_white) }}
          onTouchEnd={function () { setk07('transparent') }} />
        <View style={{ flex: 1, backgroundColor: k09 }}
          onTouchStart={function () { play09(); setk09(on_white) }}
          onTouchEnd={function () { setk09('transparent') }} />
        <View style={{ flex: 1, backgroundColor: k11 }}
          onTouchStart={function () { play11(); setk11(on_white) }}
          onTouchEnd={function () { setk11('transparent') }} />
        <View style={{ flex: 1, backgroundColor: k12 }}
          onTouchStart={function () { play12(); setk12(on_white) }}
          onTouchEnd={function () { setk12('transparent') }} />

        {/* 흑 */}
        <View style={{ position: 'absolute', right: 0, width: '55%', top: '7.0%', height: '7.4%', backgroundColor: k01 }}
          onTouchStart={function () { play01(); setk01(on_black) }}
          onTouchEnd={function () { setk01('transparent') }} />
        <View style={{ position: 'absolute', right: 0, width: '55%', top: '22.6%', height: '7.4%', backgroundColor: k03 }}
          onTouchStart={function () { play03(); setk03(on_black) }}
          onTouchEnd={function () { setk03('transparent') }} />
        <View style={{ position: 'absolute', right: 0, width: '55%', top: '44.7%', height: '7.4%', backgroundColor: k06 }}
          onTouchStart={function () { play06(); setk06(on_black) }}
          onTouchEnd={function () { setk06('transparent') }} />
        <View style={{ position: 'absolute', right: 0, width: '55%', top: '58.6%', height: '7.4%', backgroundColor: k08 }}
          onTouchStart={function () { play08(); setk08(on_black) }}
          onTouchEnd={function () { setk08('transparent') }} />
        <View style={{ position: 'absolute', right: 0, width: '55%', top: '72.8%', height: '7.4%', backgroundColor: k10 }}
          onTouchStart={function () { play10(); setk10(on_black) }}
          onTouchEnd={function () { setk10('transparent') }} />

      </ImageBackground>
    </View>
  );
}
