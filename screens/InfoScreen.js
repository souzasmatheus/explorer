import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableHighlight
} from 'react-native';
import axios from 'axios';

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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: (
      <ImageBackground
        source={{
          uri:
            'https://images-assets.nasa.gov/image/PIA07906/PIA07906~thumb.jpg'
        }}
        style={[styles.container, { width, height: height / 2 }]}
      >
        <SafeAreaView>
          <StatusBar barStyle="light-content" />
        </SafeAreaView>
      </ImageBackground>
    )
  };

  searchOnNASA() {
    axios
      .get(
        `https://images-api.nasa.gov/search?q=${
          this.state.keyWord
        }&media_type=image`
      )
      .then(res => {
        console.log(res.data.collection.items[0]);
      })
      .catch(err => console.log('erro: ' + err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Teste</Text>
      </View>
    );
  }
}
