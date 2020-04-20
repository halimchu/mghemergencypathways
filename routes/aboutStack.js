import { createStackNavigator } from 'react-navigation-stack'
import About from '../src/components/drawer/About'

const AboutStack = createStackNavigator({
  About: { screen: About },
})

export default AboutStack


// // ACLS About
// import { createStackNavigator } from 'react-navigation-stack'
// import About2 from '../src/components/drawer/About2'

// const AboutStack = createStackNavigator({
//   About2: { screen: About2 },
// })

// export default AboutStack