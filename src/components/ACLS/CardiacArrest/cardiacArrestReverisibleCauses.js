import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class CardiacArrestReversibleCauses extends React.Component {
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
    ]
  }

  dataH () {
    return (
      this.state.dataH.map((item) => (
        item[2] 
        
        ? 

        <View key={item} style={styles.bulletPoints}>
          <View style={{ marginRight: Dimensions.get('window').width/4, marginTop: Dimensions.get('window').height/50, flexDirection: 'row' }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text style={styles.bold}>{item[0]}</Text>
            <Text style={styles.regular}>{item[1]}</Text>
          </View>
          <Text style={{fontSize: Dimensions.get('window').height/50, marginLeft: Dimensions.get('window').width/50 }}>{item[2]}</Text>
        </View> 

        : 

        <View key={item} style={styles.bulletPoints}>
          <View style={{ marginTop: Dimensions.get('window').height/50, flexDirection: 'row' }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text style={styles.bold}>{item[0]}</Text>
            <Text style={styles.regular}>{item[1]}</Text>
          </View>
        </View> 
        
  )))}


  dataT () {
    return (
      this.state.dataT.map((item) => (
        // if it has a second line
        item[2] 
        
        ? 

        <View key={item} style={styles.bulletPoints}>
          <View style={{ marginTop: Dimensions.get('window').height/50, flexDirection: 'row' }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text style={styles.bold}>{item[0]}</Text>
            <Text style={styles.regular}>{item[1]}</Text>
          </View>
          <Text style={{fontSize: Dimensions.get('window').height/40, marginLeft: Dimensions.get('window').width/50 }}>{item[2]}</Text>
        </View> 

        : 

        <View key={item} style={styles.bulletPoints}>
          <View style={{ marginTop: Dimensions.get('window').height/120, flexDirection: 'row' }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text style={styles.bold}>{item[0]}</Text>
            <Text style={styles.regular}>{item[1]}</Text>
          </View>
        </View> 
        
  )))}
  

  render() {
    return (
      
      <View style={{ marginBottom: Dimensions.get('window').height/100, justifyContent: 'center', flexDirection: 'row', }}>  
              
{/* 
              <View>{this.dataH()}</View>  
              <View>{this.dataT()}</View> */}


            <View>
              {this.state.dataH.map((item) => (
                  <View key={item} style={styles.bulletPoints}>
                    <View style={{ marginTop: Dimensions.get('window').height/120, flexDirection: 'row' }}>
                      <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                      <Text style={styles.bold}>{item[0]}</Text>
                      <Text style={styles.regular}>{item[1]}</Text>
                    </View>
                  </View> 
                ))} 
              </View>     


            <View style={{ marginLeft: Dimensions.get('window').width/100 }}>
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
  bold: {
    fontWeight: 'bold',
    // marginLeft: Dimensions.get('window').width/120,
    fontSize: Dimensions.get('window').height/52,
  }, 
  regular: {
    fontSize: Dimensions.get('window').height/52,
  }
})


