/**
 * @format
 */

import { AppRegistry, Text } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

console.disableYellowBox = true

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false

AppRegistry.registerComponent(appName, () => App);
