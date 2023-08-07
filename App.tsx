/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const onPress = async () => {
    Alert.alert('Ассаламу алейкум');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/fon.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.textStaca}>Staca</Text>
        <Text style={styles.GettingStarted}>Getting Started</Text>
        <Text style={styles.GettingStartedGetting}>
          Getting Started Getting
        </Text>
        <Text style={styles.restMusicApp}>Rest music app</Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}> Let` go</Text>
          <Image
            style={styles.musicIcon}
            source={require('./assets/Vector.png')}></Image>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

/*
<Text style={styles.buttonText}> Let` go</Text>
        <Image style={styles.musicIcon} source={require('./assets/Vector.png')}></Image>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center',
    position: 'relative',
  },

  GettingStarted: {
    fontSize: 32,
    color: '#FFFFFF',
    position: 'absolute',
    alignSelf: 'center',
    top: '45%',
    fontWeight: 'bold',
    fontFamily: 'CenturyGothic',
  },

  GettingStartedGetting: {
    color: '#FFFFFF',
    position: 'absolute',
    alignSelf: 'center',
    top: '52%',
    fontFamily: 'CenturyGothic',
    fontWeight: 'regular',
    fontSize: 15,
  },

  textStaca: {
    fontFamily: 'CenturyGothic',
    color: '#FFFFFF',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '5%',
    fontWeight: 'bold',
    fontSize: 15,
  },

  restMusicApp: {
    fontSize: 10,
    fontFamily: 'CenturyGothic',

    color: '#FFFFFF',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '3%',
  },

  button: {
    position: 'relative',
    alignSelf: 'center',
    backgroundColor: '#966AEF',
    shadowOpacity: 1,
    height: 69,
    width: 200,
    borderRadius: 20,
    top: 100,
  },

  buttonText: {
    top: 19,
    left: 60,
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'CenturyGothic',
  },

  musicIcon: {
    top: -5,
    left: 140,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
  },
});

export default App;
