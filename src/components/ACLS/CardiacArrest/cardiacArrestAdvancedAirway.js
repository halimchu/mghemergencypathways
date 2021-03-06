import React from 'react'
import { SafeAreaView, Dimensions, View, Text, StyleSheet } from 'react-native'

export default class CardiacArrestAdvancedAirway extends React.Component {
	state = {
		data: [
      'Endotracheal intubation or supraglottic advanced airway',
      'Waveform capnography or capnometry to confirm and monitor ET tube placement',
      'Once advanced airway in place, give 1 breath every 6 seconds (10 breaths/min) with continuous chest compressions'
		]
	}
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{}}>
            {this.state.data.map((item) => (
              <View key={item} style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row', }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <View>
                    <Text style={styles.bulletPointText}>{item}</Text>
                  </View>
                </View>
              </View> 
            ))} 
        </View>
			</SafeAreaView>       
    )
  } 
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Dimensions.get('window').height/120,
    marginLeft: Dimensions.get('window').width/30, 
    marginRight: Dimensions.get('window').width/30,
  },
  bulletPoints: {
    marginTop: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    fontWeight: 'bold',
    marginTop: 1,
    fontSize: Dimensions.get('window').height/60,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/150,
    fontSize: Dimensions.get('window').width/24
  },
})