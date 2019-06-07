import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { Header } from 'react-navigation';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchedTerm: {
    color: 'white',
    fontWeight: '700',
    fontSize: 24
  },
  infoCard: {
    justifyContent: 'space-between',
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    backgroundColor: 'white',
    marginTop: -36,
    paddingHorizontal: 36,
    paddingTop: 36
  },
  infoText: {
    fontSize: 18,
    color: '#a3a3a3',
    fontWeight: '500',
    textTransform: 'uppercase',
    marginBottom: 8
  },
  nasaText: {
    color: 'black',
    textTransform: 'none'
  }
});

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <Text style={[styles.searchedTerm]}>
        {navigation.getParam('searchedTerm')}
      </Text>
    ),
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0
    },
    headerTintColor: '#fff'
  });

  render() {
    const nasaId = this.props.navigation.getParam('nasaInfo').data[0]['nasa_id']
    const backgroundImage = `https://images-assets.nasa.gov/image/${nasaId}/${nasaId}~medium.jpg`
    const title = this.props.navigation.getParam('nasaInfo').data[0].title;
    const description = this.props.navigation.getParam('nasaInfo').data[0][
      'description_508'
    ];
    const creator = this.props.navigation.getParam('nasaInfo').data[0][
      'secondary_creator'
    ];
    return (
      <View style={[styles.flex, { marginTop: -Header.HEIGHT }]}>
        <ImageBackground
          source={{
            uri: backgroundImage
          }}
          style={[styles.container, { width, height: height * 0.66 }]}
        >
          <SafeAreaView>
            <StatusBar barStyle="light-content" />
          </SafeAreaView>
        </ImageBackground>
        <View style={[styles.infoCard, { height: height * 0.37 }]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[styles.infoText]}>
              Title: <Text style={[styles.nasaText]}>{title}</Text>
            </Text>
            <Text style={[styles.infoText]}>
              description: <Text style={[styles.nasaText]}>{description}</Text>
            </Text>
            <Text style={[styles.infoText]}>
              creator: <Text style={[styles.nasaText]}>{creator}</Text>
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}
