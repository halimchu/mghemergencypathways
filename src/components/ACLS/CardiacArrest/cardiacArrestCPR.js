import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class CardiacArrestCPR extends React.Component {
	state = {
		data: [ 
      'Push hard (at least 2 inches [5 cm]) and fast (100-120/min) and allow complete chest recoil.',
      'Minimize interruptions in compressions.',
      'Avoid excessive ventilation.',
      'Change compressor every 2 minutes, or sooner if fatigued.',
      'If no advanced airway, 30:2 compression-ventilation ratio.'
    ]
	}
  render() {
    return (
      <View style={{ marginBottom: Dimensions.get('window').width/35 }}>
        {this.state.data.map((item) => (
					<View key={item} style={ styles.bulletPoints }>
						<View style={{ flexDirection: 'row',  marginRight: Dimensions.get('window').width/70 }}>
							<Text style={styles.bulletPoint}>{`\u2022`}</Text>
							<Text style={styles.bulletPointText}>{item}</Text>
						</View>
					</View> 
				))} 




        <View style={{ marginTop: Dimensions.get('window').height/120, flexDirection: 'row' }}>
          <Text style={{ 
            marginLeft: Dimensions.get('window').width/10, 
            fontWeight: 'bold', fontSize: Dimensions.get('window').height/45, }}>{`\u2022`}</Text>
          <Text style={{ 
            marginLeft: Dimensions.get('window').height/150, 
            fontSize: Dimensions.get('window').height/45, }}>Quantitative waveform capnography</Text>
        </View>




        <View style={{ marginTop: Dimensions.get('window').height/120 }}>
          <Text style={{ marginLeft: Dimensions.get('window').width/5, }}>
            <Text style={{ 
              marginLeft: Dimensions.get('window').width/6, 
              fontWeight: '400', 
              fontSize: Dimensions.get('window').height/45, }}>{`\u2022`}</Text>
            <Text style={{ 
              marginLeft: Dimensions.get('window').height/150, 
              fontSize: Dimensions.get('window').height/45, }}>If PETCO</Text>
            <Text style={{ 
              fontWeight: 'bold', 
              marginTop: Dimensions.get('window').height/70, 
              fontSize: Dimensions.get('window').height/60, }}>2 </Text>
            <Text style={{ fontSize: Dimensions.get('window').height/45, }}>{'<'}10 mm Hg, attempt to improve CPR quality.</Text>
          </Text>
        </View>





        <View style={{ marginTop: Dimensions.get('window').height/120, flexDirection: 'row' }}>
          <Text style={{ 
            marginLeft: Dimensions.get('window').width/10, 
            fontWeight: 'bold', 
            fontSize: Dimensions.get('window').height/45, }}>{`\u2022`}</Text>
          <Text style={{ 
            marginLeft: Dimensions.get('window').width/50, 
            fontSize: Dimensions.get('window').height/45, }}>Intra-arterial pressure</Text>
        </View>





        <View style={{ marginTop: Dimensions.get('window').height/120, marginRight: Dimensions.get('window').width/20}}>
          <Text style={{ marginLeft: Dimensions.get('window').width/5 }}>
            <Text style={{ 
              marginLeft: Dimensions.get('window').width/6, 
              fontWeight: '400', 
              fontSize: Dimensions.get('window').height/45, }}>{`\u2022`}</Text>
            <Text style={{ 
              marginLeft: Dimensions.get('window').height/150, 
              fontSize: Dimensions.get('window').height/45 }}>
                If relaxation phase (diastolic) pressure {'<'}20 mm Hg, attempt to improve CPR quality.
            </Text>
          </Text>
        </View>
			</View>       
    )
  }
}

const styles = StyleSheet.create({
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/20,
    marginTop: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/45,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/150,
    fontSize: Dimensions.get('window').height/45,
  },

})