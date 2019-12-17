import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

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
      <View>
       {this.state.data.map((item) => (
					<View key={item} style={ styles.bulletPoints }>
						<View style={{ flexDirection: 'row', }}>
							<Text style={styles.bulletPoint}>{`\u2022`}</Text>
							<Text style={styles.bulletPointText}>{item}</Text>
						</View>
					</View> 
				))} 
			</View>       
    )
  }
}

const styles = StyleSheet.create({
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/10,
    marginTop: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/45,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/150,
    marginRight: Dimensions.get('window').height/30,
    fontSize: Dimensions.get('window').height/45,
  },
})