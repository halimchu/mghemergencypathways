import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class ReversibleCauses extends React.Component {
	state = {
		dataH: [
      ['H', 'ypovolemia'],
      ['H', 'ypoxia'],
      ['H','ydrogen ion (acidosis)'],
      ['H', 'ypo-/hyperkalemia'],
      ['H', 'ypothermia'],
    ],
    dataT: [
      ['T', 'ension pneumothorax'],
      ['T', 'amponade cardiac'],
      ['T', 'oxins'],
      ['T', 'hrombosis pulmonary'],
      ['T', 'hrombosis coronary']
    ],
    dataHchildren: [
      ['Intubation', '100%', 'Naloxone'],
      ['Hello', 'Naloxone']
    ]
  }

  

  render() {
    return (
      
      <View style={{ marginBottom: Dimensions.get('window').height/100, justifyContent: 'center', flexDirection: 'row', }}>  
              
            <View>
              {this.state.dataH.map((...item) => (
                  <View key={item} style={styles.bulletPoints}>
                    <View style={{ marginTop: Dimensions.get('window').height/120, flexDirection: 'row' }}>
                      <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                      <Text style={styles.bold}>{item[0][0]}</Text>
                      <Text style={styles.regular}>{item[0][1]}</Text>
                      {/* <Text style={styles.bold}>{item[0]}</Text>
                      <Text style={styles.regular}>{item[1]}</Text> */}
                    </View>
                  </View> 
                ))}  
              </View>     











            <View style={{ 
              marginLeft: Dimensions.get('window').width/20 
            }}>
              {this.state.dataT.map((item) => (
                  <View key={item}>
                    <View style={{ marginTop: Dimensions.get('window').height/120, flexDirection: 'row' }}>
                      <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                      <Text style={styles.bold}>{item[0]}</Text>
                      <Text style={styles.regular}>{item[1]}</Text>
                    </View>
                  </View> 
                ))} 
              </View>       


    
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/52,
    marginBottom: Dimensions.get('window').height/80, 
  },
  bulletPoint2: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/52,
    // marginBottom: Dimensions.get('window').height/80, 
    marginLeft: 20
  },
  bold: {
    fontWeight: 'bold',
    // marginLeft: Dimensions.get('window').width/120,
    // fontSize: Dimensions.get('window').height/52,
    fontSize: Dimensions.get('window').width/25,
  }, 
  regular: {
    // fontSize: Dimensions.get('window').height/52,
    fontSize: Dimensions.get('window').width/25,
  }
})


