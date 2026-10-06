// Lec 6 (lab2a): Piano App — white & black keys laid out with flex + absolute
import { useState } from 'react';
import { useAudioPlayer, type AudioPlayer } from 'expo-audio';
import { ImageBackground, StyleSheet, View } from 'react-native';

const on_white = 'rgba(100, 100, 100, 0.3)';
const on_black = 'rgba(255, 255, 255, 0.3)';

export default function PianoScreen() {
  const p00 = useAudioPlayer(require('@/assets/piano/note00.mp3'));
  const p01 = useAudioPlayer(require('@/assets/piano/note01.mp3'));
  const p02 = useAudioPlayer(require('@/assets/piano/note02.mp3'));
  const p03 = useAudioPlayer(require('@/assets/piano/note03.mp3'));
  const p04 = useAudioPlayer(require('@/assets/piano/note04.mp3'));
  const p05 = useAudioPlayer(require('@/assets/piano/note05.mp3'));
  const p06 = useAudioPlayer(require('@/assets/piano/note06.mp3'));
  const p07 = useAudioPlayer(require('@/assets/piano/note07.mp3'));
  const p08 = useAudioPlayer(require('@/assets/piano/note08.mp3'));
  const p09 = useAudioPlayer(require('@/assets/piano/note09.mp3'));
  const p10 = useAudioPlayer(require('@/assets/piano/note10.mp3'));
  const p11 = useAudioPlayer(require('@/assets/piano/note11.mp3'));
  const p12 = useAudioPlayer(require('@/assets/piano/note12.mp3'));

  function play(p: AudioPlayer) {
    p.seekTo(0);
    p.play();
  }

  const [k00, setK00] = useState('transparent');
  const [k01, setK01] = useState('transparent');
  const [k02, setK02] = useState('transparent');
  const [k03, setK03] = useState('transparent');
  const [k04, setK04] = useState('transparent');
  const [k05, setK05] = useState('transparent');
  const [k06, setK06] = useState('transparent');
  const [k07, setK07] = useState('transparent');
  const [k08, setK08] = useState('transparent');
  const [k09, setK09] = useState('transparent');
  const [k10, setK10] = useState('transparent');
  const [k11, setK11] = useState('transparent');
  const [k12, setK12] = useState('transparent');

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        resizeMode="stretch"
        source={require('@/assets/piano/keyboard.png')}>
        {/* 흰 건반 8개: C D E F G A B C */}
        <View style={styles.whiteKeysColumn}>
          <View
            style={[styles.whiteKey, { backgroundColor: k00 }]}
            onTouchStart={() => {
              play(p00);
              setK00(on_white);
            }}
            onTouchEnd={() => setK00('transparent')}
          />
          <View
            style={[styles.whiteKey, { backgroundColor: k02 }]}
            onTouchStart={() => {
              play(p02);
              setK02(on_white);
            }}
            onTouchEnd={() => setK02('transparent')}
          />
          <View
            style={[styles.whiteKey, { backgroundColor: k04 }]}
            onTouchStart={() => {
              play(p04);
              setK04(on_white);
            }}
            onTouchEnd={() => setK04('transparent')}
          />
          <View
            style={[styles.whiteKey, { backgroundColor: k05 }]}
            onTouchStart={() => {
              play(p05);
              setK05(on_white);
            }}
            onTouchEnd={() => setK05('transparent')}
          />
          <View
            style={[styles.whiteKey, { backgroundColor: k07 }]}
            onTouchStart={() => {
              play(p07);
              setK07(on_white);
            }}
            onTouchEnd={() => setK07('transparent')}
          />
          <View
            style={[styles.whiteKey, { backgroundColor: k09 }]}
            onTouchStart={() => {
              play(p09);
              setK09(on_white);
            }}
            onTouchEnd={() => setK09('transparent')}
          />
          <View
            style={[styles.whiteKey, { backgroundColor: k11 }]}
            onTouchStart={() => {
              play(p11);
              setK11(on_white);
            }}
            onTouchEnd={() => setK11('transparent')}
          />
          <View
            style={[styles.whiteKey, { backgroundColor: k12 }]}
            onTouchStart={() => {
              play(p12);
              setK12(on_white);
            }}
            onTouchEnd={() => setK12('transparent')}
          />
        </View>

        {/* 흑건반 5개: absolute로 흰 건반 경계 위에 겹치기 */}
        <View
          style={[styles.blackKey, { top: '9.0%', backgroundColor: k01 }]}
          onTouchStart={() => {
            play(p01);
            setK01(on_black);
          }}
          onTouchEnd={() => setK01('transparent')}
        />
        <View
          style={[styles.blackKey, { top: '21.5%', backgroundColor: k03 }]}
          onTouchStart={() => {
            play(p03);
            setK03(on_black);
          }}
          onTouchEnd={() => setK03('transparent')}
        />
        <View
          style={[styles.blackKey, { top: '46.5%', backgroundColor: k06 }]}
          onTouchStart={() => {
            play(p06);
            setK06(on_black);
          }}
          onTouchEnd={() => setK06('transparent')}
        />
        <View
          style={[styles.blackKey, { top: '59.0%', backgroundColor: k08 }]}
          onTouchStart={() => {
            play(p08);
            setK08(on_black);
          }}
          onTouchEnd={() => setK08('transparent')}
        />
        <View
          style={[styles.blackKey, { top: '71.5%', backgroundColor: k10 }]}
          onTouchStart={() => {
            play(p10);
            setK10(on_black);
          }}
          onTouchEnd={() => setK10('transparent')}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: '100%',
    width: '100%',
  },
  whiteKeysColumn: {
    flex: 1,
  },
  whiteKey: {
    flex: 1,
  },
  blackKey: {
    position: 'absolute',
    right: 0,
    width: '55%',
    height: '7%',
  },
});
