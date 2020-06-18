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



import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './routes/drawerStack'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux' //Provider component wraps around the root App Component
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers/index.js'


const store = createStore(reducers, applyMiddleware(thunk, logger)) 

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  )
}
  

export default App


