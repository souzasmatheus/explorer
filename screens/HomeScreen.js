import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableHighlight
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 48,
    width: width - 72,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1.5,
    textAlign: 'center',
    fontSize: 24
  },
  button: {
    width: width / 3,
    height: 40,
    backgroundColor: '#5d97dd',
    marginTop: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default function HomeScreen() {
  return (
    <ImageBackground
      source={{
        uri: 'https://images-assets.nasa.gov/image/PIA07906/PIA07906~thumb.jpg'
      }}
      style={[styles.container, { width, height }]}
    >
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="black" />
      </SafeAreaView>

      <TextInput style={styles.input} />

      <TouchableHighlight
        onPress={() => alert('funcionou!')}
        style={styles.button}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>Explore!</Text>
      </TouchableHighlight>
    </ImageBackground>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
