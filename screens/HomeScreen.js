import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  StatusBar,
  SafeAreaView
} from 'react-native';

const { width, height } = Dimensions.get('screen');

export default function HomeScreen() {
  return (
    <ImageBackground
      source={{
        uri: 'https://images-assets.nasa.gov/image/PIA07906/PIA07906~thumb.jpg'
      }}
      style={[styles.container, { width, height }]}
    >
      <SafeAreaView>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
        />
      </SafeAreaView>
      <Text style={{ color: 'white' }}>Hello World</Text>
    </ImageBackground>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
