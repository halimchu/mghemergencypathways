import React from 'react'
import { ScrollView, Dimensions, View, Text, StyleSheet } from 'react-native'

export default class CardiacArrestDrugTherapy extends React.Component {

  render() {
    return (
      <View>
        <View style={{ marginTop: Dimensions.get('window').height/60, marginBottom: Dimensions.get('window').height/40,}}>
          <Text style={styles.bold}>{`\u2022`} Epinephrine IV/IO dose:</Text>
          <Text style={styles.regular}>1 mg every 3-5 minutes</Text>
        </View>
  
        <Text style={styles.bold}>{`\u2022`} Amiodarone IV/IO dose:</Text>
        <Text style={styles.regular}>First dose: 300 mg bolus</Text>
        <Text style={styles.regular}>Second dose: 150 mg</Text>
  
        <View style={{ marginLeft: Dimensions.get('window').width/3.5 }}>
          <Text style={styles.bold}>-OR-</Text>
        </View>
  
        <Text style={styles.lidocaine}>Lidocaine IV/IO dose:</Text>
        <Text style={styles.regular}>First dose: 1-1.5 mg/kg</Text>
        <Text style={styles.regular}>Second dose: 0.5-0.75 mg/kg</Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    marginLeft: Dimensions.get('window').width/10,
    fontSize: Dimensions.get('window').height/40
  }, 
  regular: {
    marginLeft: Dimensions.get('window').width/6.8,
    fontSize: Dimensions.get('window').height/40,
  },
  lidocaine: {
    fontWeight: 'bold',
    marginLeft: Dimensions.get('window').width/7,
    fontSize: Dimensions.get('window').height/40
  }
})