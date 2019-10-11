/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Home from './src/components/Home'
import RICU from './src/components/RICU/RICU'
import RICU2 from './src/components/RICU/RICU2'
import RICU3 from './src/components/RICU/RICU3'
import Result1 from './src/components/RICU/Result1'
import STEMI1 from './src/components/STEMI/STEMI1'
import STEMI2 from './src/components/STEMI/STEMI2'
import STEMI3 from './src/components/STEMI/STEMI3'
import Stroke1 from './src/components/Stroke/Stroke1'
import Stroke2 from './src/components/Stroke/Stroke2'
import Stroke3 from './src/components/Stroke/Stroke3'
import Pert from './src/components/Pert/Pert'
import PertLabs from './src/components/Pert/PertLabs'
import Acls from './src/components/Acls'


const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  RICU: { screen: RICU },
  RICU2: { screen: RICU2 },
  RICU3: { screen: RICU3 },
  Result1: { screen: Result1 },
  STEMI1: { screen: STEMI1 },
  STEMI2: { screen: STEMI2 },
  STEMI3: { screen: STEMI3 },
  Stroke1: { screen: Stroke1 },
  Stroke2: { screen: Stroke2 },
  Stroke3: { screen: Stroke3 },
  Pert: { screen: Pert },
  PertLabs: { screen: PertLabs },
  Acls: { screen: Acls },
})


const App = () => {
  return (
    <AppContainer />
    );
  };
  
const AppContainer = createAppContainer(AppNavigator)

export default App;
