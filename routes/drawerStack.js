import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { createAppContainer, SafeAreaView } from 'react-navigation'
import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, } from 'react-native'


import HomeStack from './homeStack'
import AboutStack from './aboutStack'
import DisclaimerStack from './disclaimerStack'
import TermsConditionsStack from './termsConditionsStack'
import PrivacyPolicyStack from './privacyPolicyStack'
import ContactUsStack from './contactUsStack'

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
  TermsConditions: {
      navigationOptions: {
        drawerLabel: "Terms of Use",
      },
      screen: TermsConditionsStack
  },
  PrivacyPolicy: {
    navigationOptions: {
      drawerLabel: "Privacy Policy",
    },
    screen: PrivacyPolicyStack
  },
  ContactUs: {
    navigationOptions: {
      drawerLabel: "Contact Us",
    },
    screen: ContactUsStack
},
},{
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    color: 'pink'
  }
})



export default createAppContainer(RootDrawerNavigator)
// export default createAppContainer(CustomDrawerComponent)