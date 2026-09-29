import { Image, StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (
    <View>
      <Text style={styles.text}>This is about the app</Text>
      <Image style={styles.image} source={require('@/assets/images/cat-icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
});
