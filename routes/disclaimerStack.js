import { createStackNavigator } from 'react-navigation-stack'
import Disclaimer from '../src/components/drawer/Disclaimer'


const DisclaimerStack = createStackNavigator({
  disclaimer: { screen: Disclaimer },
})


export default DisclaimerStack