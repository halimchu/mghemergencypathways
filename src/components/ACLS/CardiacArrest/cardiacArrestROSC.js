import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class CardiacArrestROSC extends React.Component {
  render() {
    return (
      <View style={{marginTop: Dimensions.get('window').height/150, marginBottom: Dimensions.get('window').height/150}}>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ 
            marginLeft: Dimensions.get('window').width/10, 
            fontWeight: 'bold', 
            fontSize: Dimensions.get('window').height/45, }}>{`\u2022`}</Text>
          <Text style={{ 
            marginLeft: Dimensions.get('window').height/150, 
            fontSize: Dimensions.get('window').height/45 }}>
            Pulse and blood pressure
          </Text>
        </View>

        <View style={{ marginTop: Dimensions.get('window').height/120, flexDirection: 'row' }}>
          <Text style={{ 
            fontWeight: 'bold', 
            marginLeft: Dimensions.get('window').width/10, 
            fontSize: Dimensions.get('window').height/45, }}>{`\u2022`}</Text>
          <Text style={{ 
            marginLeft: Dimensions.get('window').width/150, 
            fontSize: Dimensions.get('window').height/45, }}>
            <Text>Abrupt sustained increase in</Text>
          </Text>
        </View>
        
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ 
            marginLeft: Dimensions.get('window').width/7.6, 
            fontSize: Dimensions.get('window').height/45, }}>
            <Text>PETCO</Text>
            <Text style={{
              fontWeight: 'bold', 
              fontSize: Dimensions.get('window').height/60,}}>2</Text>
            <Text> (typically ≥40 mm Hg)</Text>
          </Text>
        </View>


        <View style={{ marginTop: Dimensions.get('window').height/120, flexDirection: 'row' }}>
          <Text style={{ 
            fontWeight: 'bold', 
            marginLeft: Dimensions.get('window').width/10, 
            fontSize: Dimensions.get('window').height/45, }}>{`\u2022`}</Text>
          <Text style={{ 
            marginLeft: Dimensions.get('window').height/150, 
            fontSize: Dimensions.get('window').height/45, }}>Quantitative waveform capnography</Text>
        </View>
    
			</View>       
    )
  }
}