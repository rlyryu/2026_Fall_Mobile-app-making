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

  const [charText, setCharText] = useState('');
  const [multiVal, setMultiVal] = useState(0);
  const [addVal, setAddVal] = useState(0);
  const [addNb, setAddNb] = useState(0);
  const [stepVal, setStepVal] = useState(0);
  const [step, setStep] = useState(5);
  const [textFontSize, setTextFontSize] = useState(30);
  const [textColor, setTextColor] = useState('black');
  const [imgWidth, setImgWidth] = useState(100);

  const charGreeting = 'Hello, ' + charText;

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

      {/* practice lab1: row layout in <ScrollView horizontal> */}
      <ScrollView horizontal style={styles.hScroll}>
        <View style={[styles.colorBox, { backgroundColor: 'red' }]} />
        <View style={[styles.colorBox, { backgroundColor: 'blue' }]} />
        <View style={[styles.colorBox, { backgroundColor: 'green' }]} />
        <View style={[styles.colorBox, { backgroundColor: 'lightgray' }]} />
        <View style={[styles.colorBox, { backgroundColor: 'yellow' }]} />
      </ScrollView>

      {/* practice lab2: nested ScrollView - Netflix style */}
      <View style={styles.netflixSection}>
        <Text style={styles.netflixTitle}>인기 콘텐츠</Text>
        <ScrollView horizontal style={styles.hScroll}>
          <View style={[styles.posterBox, { backgroundColor: '#7952b3' }]}>
            <Text style={styles.posterLabel}>포스터 1</Text>
          </View>
          <View style={[styles.posterBox, { backgroundColor: '#5566cc' }]}>
            <Text style={styles.posterLabel}>포스터 2</Text>
          </View>
          <View style={[styles.posterBox, { backgroundColor: '#336699' }]}>
            <Text style={styles.posterLabel}>포스터 3</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.netflixSection}>
        <Text style={styles.netflixTitle}>박스오피스</Text>
        <ScrollView horizontal style={styles.hScroll}>
          <View style={[styles.posterBox, { backgroundColor: '#996633' }]}>
            <Text style={styles.posterLabel}>영화 1</Text>
          </View>
          <View style={[styles.posterBox, { backgroundColor: '#cc6633' }]}>
            <Text style={styles.posterLabel}>영화 2</Text>
          </View>
          <View style={[styles.posterBox, { backgroundColor: '#663333' }]}>
            <Text style={styles.posterLabel}>영화 3</Text>
          </View>
        </ScrollView>
      </View>

      {/* practice lab3a: counting characters */}
      <View style={styles.charBox}>
        <Text style={styles.subText}>{charGreeting}</Text>
        <TextInput
          style={styles.input}
          value={charText}
          onChangeText={setCharText}
          placeholder="이름 입력"
        />
        <Text style={styles.charCountText}>글자수: {charGreeting.length}</Text>
      </View>

      {/* practice lab4a: 다단 Counter - row layout */}
      <View style={styles.counterBox}>
        <Text style={styles.counterText}>{multiVal}</Text>
        <View style={styles.rowBox}>
          <Button title="+1" onPress={() => setMultiVal(multiVal + 1)} />
          <View style={styles.spacerHorizontal} />
          <Button title="-1" onPress={() => setMultiVal(multiVal - 1)} />
        </View>
        <View style={styles.rowBox}>
          <Button title="+5" onPress={() => setMultiVal(multiVal + 5)} />
          <View style={styles.spacerHorizontal} />
          <Button title="-5" onPress={() => setMultiVal(multiVal - 5)} />
        </View>
      </View>

      {/* practice lab5: TextInput으로 더하기 (numeric fix) */}
      <View style={styles.counterBox}>
        <Text style={styles.counterText}>{addVal}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(x) => setAddNb(Number(x) || 0)}
          keyboardType="numeric"
          placeholder="더할 숫자"
        />
        <Button title="PLUS" onPress={() => setAddVal(addVal + addNb)} />
      </View>

      {/* practice lab5a: 다단 counter using step (심화) */}
      <View style={styles.counterBox}>
        <Text style={styles.counterText}>{stepVal}</Text>
        <Text style={styles.stepLabel}>STEP</Text>
        <TextInput
          style={styles.input}
          onChangeText={(x) => setStep(Number(x) || 0)}
          keyboardType="numeric"
          placeholder="증가폭 (기본 5)"
        />
        <View style={styles.rowBox}>
          <Button title="+1" onPress={() => setStepVal(stepVal + 1)} />
          <View style={styles.spacerHorizontal} />
          <Button title="-1" onPress={() => setStepVal(stepVal - 1)} />
        </View>
        <View style={styles.rowBox}>
          <Button title={`+ ${step}`} onPress={() => setStepVal(stepVal + step)} />
          <View style={styles.spacerHorizontal} />
          <Button title={`- ${step}`} onPress={() => setStepVal(stepVal - step)} />
        </View>
      </View>

      {/* practice lab6a: state in various place - <Text> style */}
      <View style={styles.counterBox}>
        <Text style={[styles.styledText, { fontSize: textFontSize, color: textColor }]}>
          Using State in Style!
        </Text>
        <View style={styles.rowBox}>
          <Button title="+1" onPress={() => setTextFontSize(textFontSize + 1)} />
          <View style={styles.spacerHorizontal} />
          <Button title="-1" onPress={() => setTextFontSize(textFontSize - 1)} />
        </View>
        <View style={styles.rowBox}>
          <Button title="RED" onPress={() => setTextColor('red')} />
          <View style={styles.spacerHorizontal} />
          <Button title="BLUE" onPress={() => setTextColor('blue')} />
          <View style={styles.spacerHorizontal} />
          <Button title="WHITE" onPress={() => setTextColor('white')} />
        </View>
      </View>

      {/* practice lab7: state in various place - <Image> style */}
      <View style={styles.counterBox}>
        <View style={styles.rowBox}>
          <Button title="크게" onPress={() => setImgWidth(imgWidth + 10)} />
          <View style={styles.spacerHorizontal} />
          <Button title="작게" onPress={() => setImgWidth(imgWidth - 10)} />
        </View>
        <Image
          style={{ width: imgWidth, height: imgWidth, marginTop: 10 }}
          source={require('@/assets/images/cat-icon.png')}
          resizeMode="contain"
        />
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
  hScroll: {
    marginTop: 20,
  },
  colorBox: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  netflixSection: {
    marginTop: 20,
  },
  netflixTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  posterBox: {
    width: 120,
    height: 170,
    marginRight: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  posterLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  charBox: {
    marginTop: 20,
  },
  charCountText: {
    fontSize: 18,
    marginTop: 4,
  },
  stepLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  styledText: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
  },
});
