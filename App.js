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
import RICUPatent from './src/components/RICU/RICUPatent'
import RICUOxygenation from './src/components/RICU/RICUOxygenation'
import RICUNIPPV from './src/components/RICU/RICUNIPPV'
import RICUFutureIntubation from './src/components/RICU/RICUFutureIntubation'
import RICURiskFactors from './src/components/RICU/RICURiskFactors'
import RICUOne from './src/components/RICU/RICUOne'
import RICUTwo from './src/components/RICU/RICUTwo'
import RICUThree from './src/components/RICU/RICUThree'
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
import Bradycardia from './src/components/ACLS/Bradycardia/Bradycardia'
import Tachycardia from './src/components/ACLS/Tachycardia/Tachycardia'


const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  RICUPatent: { screen: RICUPatent },
  RICUOxygenation: { screen: RICUOxygenation },
  RICUNIPPV: { screen: RICUNIPPV },
  RICUFutureIntubation: { screen: RICUFutureIntubation },
  RICURiskFactors: { screen: RICURiskFactors },
  RICUOne: { screen: RICUOne },
  RICUTwo: { screen: RICUTwo },
  RICUThree: { screen: RICUThree },
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
