import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class CardiacArrestReversibleCauses extends React.Component {
	state = {
    height: 0,
		data: [
      ['H', 'ypovolemia'],
      ['H', 'ypoxia'],
      ['H','ydrogen ion (acidosis)'],
      ['H', 'ypo-/hyperkalemia'],
      ['H', 'ypothermia'],
      ['T', 'ension pneumothorax'],
      ['T', 'amponade, cardiac'],
      ['T', 'oxins'],
      ['T', 'hrombosis, pulmonary'],
      ['T', 'hrombosis, coronary']
		]
  }
  
  
  // measureView = (event) => {
    // console.log('event properties: ', event);
  //   this.setState({
  //     height: event.nativeEvent.layout.height
  //   })
  // }

  render() {
    console.log('View Height:', this.state.height)

    return (
      <View
        // onLayout={ (event) => this.measureView(event) }
        style={{ marginBottom: Dimensions.get('window').height/150 }}
      >
       {this.state.data.map((item) => (
					<View key={item} style={styles.bulletPoints}>
						<View style={{ marginTop: Dimensions.get('window').height/120, flexDirection: 'row' }}>
              <Text style={styles.bulletPoint}>{`\u2022`}</Text>
              <Text style={styles.bold}>{item[0]}</Text>
              <Text style={styles.regular}>{item[1]}</Text>
						</View>
					</View> 
				))} 
			</View>       
    )
  }
}

const styles = StyleSheet.create({
  bulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPoints: {
    marginLeft: Dimensions.get('window').width/10,
  },
  bold: {
    fontWeight: 'bold',
    marginLeft: Dimensions.get('window').width/120,
    fontSize: Dimensions.get('window').height/40,
  }, 
  regular: {
    marginRight: Dimensions.get('window').width/8,
    fontSize: Dimensions.get('window').height/40,
  }
})