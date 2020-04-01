import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'


import HomeStack from './homeStack'
import AboutStack from './aboutStack'
import DisclaimerStack from './disclaimerStack'
import TermsConditionsStack from './termsConditionsStack'


const RootDrawerNavigator = createDrawerNavigator({
  Home: { screen: HomeStack },
  About: { screen: AboutStack },
  Disclaimer: { screen: DisclaimerStack },
  TermsConditions: {
      navigationOptions: {
        drawerLabel: "Terms & Conditions"
      },
      screen: TermsConditionsStack
    },
})

export default createAppContainer(RootDrawerNavigator)