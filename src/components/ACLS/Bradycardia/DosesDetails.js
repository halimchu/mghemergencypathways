import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class DosesDetails extends React.Component {
	
  render() {
    return (
      <View style={styles.container}>    

        <View style={styles.headerOne}>
          <Text style={{fontSize: Dimensions.get('window').height/45, fontWeight: 'bold', }}>Atropine IV Dose</Text>
          <Text style={{fontSize: Dimensions.get('window').height/45,}}>First dose: 0.5 mg bolus.</Text>
          <Text style={{ fontSize: Dimensions.get('window').height/45, }}>Repeat every 3-5 minutes.</Text>
          <Text style={{ fontSize: Dimensions.get('window').height/45, }}>Maximum: 3 mg.</Text>
        </View>


        <View style={styles.headerOne}>
          <Text style={{fontSize: Dimensions.get('window').height/45, fontWeight: 'bold', }}>Dopamine IV infusion:</Text>
          <Text style={{fontSize: Dimensions.get('window').height/45,}}>Usual infusion rate is 2-20 mcg/kg per minute.</Text>
          <Text style={{ fontSize: Dimensions.get('window').height/45, }}>Titrate to patient response;</Text>
          <Text style={{ fontSize: Dimensions.get('window').height/45, }}>taper slowly.</Text>
        </View>



        <View style={styles.headerOne}>
          <Text style={{fontSize: Dimensions.get('window').height/45, fontWeight: 'bold', }}>Epinephrine IV infusion:</Text>
          <Text style={{fontSize: Dimensions.get('window').height/45,}}>2-10 mcg per minute infusion.</Text>
          <Text style={{ fontSize: Dimensions.get('window').height/45, }}>Titrate to patient response.</Text>
        </View>
         
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: Dimensions.get('window').width/20, 
    marginTop: Dimensions.get('window').height/80, 
  },
  headerOne: {
    marginBottom: Dimensions.get('window').height/70,
  }
})


