// Lec 8: JSX and <Tags>
import type { ReactNode } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function JsxScreen() {
  // (lab1) box in box: wrap an element in a new bordered View, N times
  let boxed: ReactNode = <Text style={styles.boxText}>Hello Ewha</Text>;
  for (let i = 0; i < 5; i++) {
    boxed = (
      <View key={i} style={styles.box}>
        {boxed}
      </View>
    );
  }

  // (lab2) build screen (adding tags) by programming
  const built: ReactNode[] = [
    <Text key="hello" style={styles.line}>
      Hello
    </Text>,
    <Text key="ewha" style={styles.line}>
      Ewha
    </Text>,
  ];
  for (let i = 0; i < 10; i++) {
    built.push(
      <Text key={`count${i}`} style={styles.line}>
        count {i}
      </Text>,
    );
  }
  for (let i = 0; i < 3; i++) {
    built.push(
      <Image
        key={`cat${i}`}
        style={styles.catIcon}
        source={require('@/assets/images/cat-icon.png')}
      />,
    );
  }

  // (lab3) square, 구구단
  const squares: ReactNode[] = [];
  for (let i = 0; i < 10; i++) {
    squares.push(
      <Text key={i} style={styles.line}>
        {i} {i * i}
      </Text>,
    );
  }

  // (lab3-extra) 구구단, "for" inside "for"
  const rows: ReactNode[] = [];
  for (let r = 2; r <= 6; r += 4) {
    const cols: ReactNode[] = [];

    for (let d = r; d < r + 4; d++) {
      const lines: ReactNode[] = [
        <Text key={0} style={styles.multHeader}>
          {d}단
        </Text>,
      ];

      for (let k = 1; k <= 9; k++) {
        lines.push(
          <Text key={k} style={styles.multLine}>
            {d} x {k} = {d * k}
          </Text>,
        );
      }

      cols.push(
        <View key={d} style={styles.multCol}>
          {lines}
        </View>,
      );
    }

    rows.push(
      <View key={r} style={styles.multRow}>
        {cols}
      </View>,
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.sectionTitle}>(lab1) box in box</Text>
      <View style={styles.lab1Wrap}>{boxed}</View>

      <Text style={styles.sectionTitle}>(lab2) build screen by programming</Text>
      <View>{built}</View>

      <Text style={styles.sectionTitle}>(lab3) square, 구구단</Text>
      <View>{squares}</View>

      <Text style={styles.sectionTitle}>(lab3-extra) 구구단, &quot;for&quot; inside &quot;for&quot;</Text>
      <View>{rows}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 8,
  },
  lab1Wrap: {
    marginTop: 10,
  },
  box: {
    borderWidth: 1,
    padding: 10,
  },
  boxText: {
    fontSize: 16,
  },
  line: {
    fontSize: 18,
  },
  catIcon: {
    width: 60,
    height: 60,
    marginTop: 4,
  },
  multRow: {
    flexDirection: 'row',
  },
  multCol: {
    flex: 1,
    borderWidth: 1,
    margin: 2,
    padding: 5,
  },
  multHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  multLine: {
    fontSize: 14,
  },
});
