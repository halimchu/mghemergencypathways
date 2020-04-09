import React from 'react'
import { SafeAreaView, Dimensions, View, Text, StyleSheet } from 'react-native'

export default class RiskFactors extends React.Component {
	state = {
		data: [
      'Prior difficult intubations',
      'BMI >40',
      'Prior neck radiation',
      'Airway edema (burn, stridor, angioedema',
      'Surgical spine injury or fixation',
      'Airway bleeding (trauma, tumor)',
      'History of head/neck tumor',
      'Prior or current tracheostomy',
      'Known inability to open mouth (e.g. trismus)'
		]
	}
  render() {
    return (
      <SafeAreaView style={{marginBottom: Dimensions.get('window').height/120}}>
        <View style={{marginLeft: Dimensions.get('window').width/30 }}>
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
  bulletPoints: {
    marginTop: Dimensions.get('window').height/120,
    // marginRight: Dimensions.get('window').width/50
  },
  bulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/60,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/150,
    fontSize: Dimensions.get('window').height/50,
  },
})