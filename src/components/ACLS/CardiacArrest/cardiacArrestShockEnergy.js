import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class CardiacArrestShockEnergy extends React.Component {
  render() {
    return (
      <View style={{marginTop: Dimensions.get('window').height/150, marginBottom: Dimensions.get('window').height/150}}>
        <View>
          <Text style={styles.bold}>{`\u2022`} Biphasic:</Text>
          <Text style={styles.regular}>Manufacturer recommendation (e.g. initial dose of 120-200 J); if unknown, use maximum available. Second and subsequent doses should be equivalent, and higher doses may be considered.</Text>
        </View>
        
        <View style={{marginTop: Dimensions.get('window').height/150,}}>
          <Text age={27} style={styles.bold}>{`\u2022`} Monophasic:</Text>
          <Text style={styles.regular}>360 J</Text>
        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    marginLeft: Dimensions.get('window').width/10,
    fontSize: Dimensions.get('window').height/45
  }, 
  regular: {
    marginLeft: Dimensions.get('window').width/7.3,
    marginRight: Dimensions.get('window').width/8,
    fontSize: Dimensions.get('window').height/45,
  }
})