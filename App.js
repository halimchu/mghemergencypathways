/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
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
import RICUWhatToPresent from './src/components/RICU/RICUWhatToPresent'
import RICUYes from './src/components/RICU/RICUYes'
import RICUWhatToPrepare from './src/components/RICU/RICUWhatToPrepare'
import STEMI from './src/components/STEMI/STEMI'
import STEMIYes from './src/components/STEMI/STEMIYes'
import STEMIUncertain from './src/components/STEMI/STEMIUncertain'
import Stroke1 from './src/components/Stroke/Stroke1'
import Stroke2 from './src/components/Stroke/Stroke2'
import Stroke3 from './src/components/Stroke/Stroke3'
import Pert from './src/components/Pert/Pert'
import PertLabs from './src/components/Pert/PertLabs'
import CardiacArrest from './src/components/ACLS/CardiacArrest/CardiacArrest'
import Bradycardia from './src/components/ACLS/Bradycardia'
import Tachycardia from './src/components/ACLS/Tachycardia'


const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  RICU: { screen: RICU },
  RICUWhatToPresent: { screen: RICUWhatToPresent },
  RICUYes: { screen: RICUYes },
  RICUWhatToPrepare: { screen: RICUWhatToPrepare },
  STEMI: { screen: STEMI },
  STEMIYes: { screen: STEMIYes },
  STEMIUncertain: { screen: STEMIUncertain },
  Stroke1: { screen: Stroke1 },
  Stroke2: { screen: Stroke2 },
  Stroke3: { screen: Stroke3 },
  Pert: { screen: Pert },
  PertLabs: { screen: PertLabs },
  CardiacArrest: { screen: CardiacArrest },
  Bradycardia: { screen: Bradycardia },
  Tachycardia: { screen: Tachycardia }
})


const App = () => {
  return (
    <AppContainer />
    );
  };
  
const AppContainer = createAppContainer(AppNavigator)

export default App;
