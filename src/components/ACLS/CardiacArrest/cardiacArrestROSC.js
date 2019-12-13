import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class CardiacArrestROSC extends React.Component {
	
  render() {
    return (
      <View>
        <View style={{ marginTop: Dimensions.get('window').height/120, flexDirection: 'row' }}>
          <Text style={{ marginLeft: Dimensions.get('window').width/10, fontWeight: 'bold', fontSize: Dimensions.get('window').height/40, }}>{`\u2022`}</Text>
          <Text style={{ marginLeft: Dimensions.get('window').height/150, marginRight: Dimensions.get('window').width/6, fontSize: Dimensions.get('window').height/40, }}>Pulse and blood pressure</Text>
        </View>


        <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/10, marginRight: Dimensions.get('window').width/10, }}>
          <Text style={{ flex:1, flexWrap: 'wrap'}}>
            <Text style={{ 
              marginLeft: Dimensions.get('window').width/10, 
              fontWeight: 'bold', 
              fontSize: Dimensions.get('window').height/40, 
            }}>
              {`\u2022`}
            </Text>

            <Text style={{ 
              marginLeft: Dimensions.get('window').height/150, 
              marginRight: Dimensions.get('window').width/6, 
              fontSize: Dimensions.get('window').height/40, 
            }}>
              Abrupt sustained increase in
            </Text>
          </Text>


          <Text style={{marginRight: Dimensions.get('window').width/10,}}>
            <Text style={{ 
              marginLeft: Dimensions.get('window').height/40, 
              marginRight: Dimensions.get('window').width/6, 
              fontSize: Dimensions.get('window').height/40, 
            }}> 
              PETCO
            </Text>
            
            <Text style={{ fontWeight: 'bold', marginTop: Dimensions.get('window').height/70, fontSize: Dimensions.get('window').height/60, }}>2 </Text>
            <Text style={{ marginLeft: Dimensions.get('window').height/150, marginRight: Dimensions.get('window').width/6, fontSize: Dimensions.get('window').height/40, }}>(typically ≥40 mm Hg)</Text>
          </Text>
        </View>
       
{/* 
          <View style={{ marginTop: Dimensions.get('window').height/120 }}>
            <Text style={{ marginLeft: Dimensions.get('window').width/5, marginRight: Dimensions.get('window').width/6 }}>
              <Text style={{ marginLeft: Dimensions.get('window').width/6, fontWeight: '400', fontSize: Dimensions.get('window').height/40, }}>{`\u2022`}</Text>
              <Text style={{ marginLeft: Dimensions.get('window').height/150, fontSize: Dimensions.get('window').height/40, }}>PETCO</Text>
              <Text style={{ fontWeight: 'bold', marginTop: Dimensions.get('window').height/70, fontSize: Dimensions.get('window').height/60, }}>2 </Text>
              <Text style={{ fontSize: Dimensions.get('window').height/40, }}>{'<'}10 mm Hg, attempt to improve CPR quality.</Text>
            </Text>
          </View> */}
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
    marginRight: Dimensions.get('window').width/8,
    fontSize: Dimensions.get('window').height/40,
  }
})