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
  ImageBackground,
  Pressable,
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

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { useSafeAreaInsets } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();



function StartScreen({navigation}): JSX.Element {
  const onPress = async () => {
    navigation.navigate('Screen2');
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

function SecondScreen({navigation}): JSX.Element {
  return (
    <TouchableOpacity
      style={styles.backToHome}
      onPress={() => navigation.navigate('Screen1')}>
      <Image
        // style={styles.backToHome}
        source={require('./assets/left-md.png')}></Image>
    </TouchableOpacity>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen1"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen2"
          component={SecondScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    paddingTop: 10,
  },

  backToHome: {
    position: 'absolute',
    top: 44,
    marginLeft: 25,
  },

  image: {
    flex: 1,
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
    backgroundColor: '#966AEF',
    height: 69,
    width: 200,
    borderRadius: 20,
    top: '62%',
    left: '25%',
    bottom: '28%',
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
});

export default App;
