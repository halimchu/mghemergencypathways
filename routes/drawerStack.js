import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { createAppContainer, SafeAreaView } from 'react-navigation'
import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, } from 'react-native'


import HomeStack from './homeStack'
import AboutStack from './aboutStack'
import DisclaimerStack from './disclaimerStack'
import TermsConditionsStack from './termsConditionsStack'
import { ScrollView } from 'react-native-gesture-handler'

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ }}>
        <DrawerItems {...props} />
    </View>
  </SafeAreaView>
)


const RootDrawerNavigator = createDrawerNavigator({
  Home: { screen: HomeStack },
  About: { screen: AboutStack },
  Disclaimer: { screen: DisclaimerStack },
  TermsConditions: {
      navigationOptions: {
        drawerLabel: "Terms & Conditions",
        fontSize: 100
      },
      screen: TermsConditionsStack
  },
},{
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    color: 'pink'
  }
})



export default createAppContainer(RootDrawerNavigator)
// export default createAppContainer(CustomDrawerComponent)