import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

export default class CardiacArrestDrugTherapy extends React.Component {
  render() {
    return (
      <View style={{
        marginTop: Dimensions.get('window').height/150, 
        marginLeft: Dimensions.get('window').height/150, 
        marginBottom: Dimensions.get('window').height/150}}>
        <View>
          <Text style={styles.bold}>Epinephrine IV/IO dose:</Text>
          <Text style={styles.regular}>1 mg 1:10,000 IV push every 3-5 minutes</Text>
        </View>

        <View style={{marginTop: Dimensions.get('window').height/70}}>
          <Text style={styles.bold}>Amiodarone IV/IO dose:</Text>
          <Text style={styles.regular}>First dose: 300 mg bolus</Text>
          <Text style={styles.regular}>Second dose: 150 mg</Text>
        </View>


        <View style={{marginTop: Dimensions.get('window').height/70}}>
          <Text style={styles.lidocaine}>Lidocaine IV/IO dose:</Text>
          <Text style={styles.regular}>First dose: 1-1.5 mg/kg</Text>
          <Text style={styles.regular}>Second dose: 0.5-0.75 mg/kg</Text>
        </View>


        <View style={{marginTop: Dimensions.get('window').height/100}}>
          <Divider />
        </View>

        <View style={{marginTop: Dimensions.get('window').height/70}}>
          <Text>
            <Text style={styles.bold}>Calcium gluconate</Text>
            <Text style={styles.regular}> 3 grams IV</Text>
          </Text>
        </View>

        <View style={{marginTop: Dimensions.get('window').height/70}}>
          <Text>
            <Text style={styles.bold}>Naloxone</Text>
            <Text style={styles.regular}> 2 mg IV</Text>
          </Text>
        </View>

        <View style={{marginTop: Dimensions.get('window').height/70}}>
          <Text>
            <Text style={styles.bold}>Potassium chloride</Text>
            <Text style={styles.regular}> 40 mEq IV</Text>
          </Text>
        </View>

        <View style={{marginTop: Dimensions.get('window').height/70}}>
          <Text>
            <Text style={styles.bold}>Sodium bicarbonate</Text>
            <Text style={styles.regular}> 150 mEq IV</Text>
          </Text>
        </View>

        <View style={{marginTop: Dimensions.get('window').height/70}}>
          <Text>
            <Text style={styles.bold}>tPA (Alteplase)</Text>
            <Text style={styles.regular}> 100 mg IV</Text>
          </Text>
        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/50
  }, 
  regular: {
    fontSize: Dimensions.get('window').height/50,
  },
  lidocaine: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/50
  }
})