import React from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 

export default class PertLabs extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="white" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />

          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />

          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />
      </View>
    )

    headerTitle = (
      <View>
        <Text style={{ 
          fontSize: Dimensions.get('window').height/43, 
          marginTop: Dimensions.get('window').height/200, 
          color: 'white', fontWeight: 'bold', 
          textAlign: 'center'}}>MGH STAT</Text>
      </View>
    )
      
    let headerRight = (
      <View style={{ flexDirection: 'row' }}>
        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={32} color="rgba(0, 0, 0, 0)"  />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />

        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={32} color="white" />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />
      </View>
    )
    
    return {
      headerLeft, 
      headerRight,
      headerTitle,
      headerStyle: {backgroundColor: '#709CD0'},      
    }
  }

  state = {
    data: [
      'CBC with diff, BMP, LFTs, Lactate, D-dimer, ABG',
      'PT/INR and PTT, Type and Screen',
      'NT-pro-BNP (or BNP)',
      'Troponin T-hs',
      'EKG',
      'CTA chest PE protocol',
      'US LE duplex (bilateral)',
      'TTE (Page US Tech if daytime hours)'
    ]
  }

  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.titleFirstLine}>Pulmonary Embolism</Text>
          <Text style={styles.titleSecondLine}>Response Team</Text>
        </View>

        <Divider style={{ backgroundColor: '#CDCDCD', marginLeft: 10, marginRight: 10, height: 1.5 }} />

        <View style={styles.bottom}>
          <Text style={styles.header}>Please Order:</Text>
          {this.state.data.map((item) => (
            <View key={item} style={ styles.bulletPoints }>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                <Text style={styles.bulletPointText}>{item}</Text>
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
    flex: 1
  },
  top: {
    height: '12.5%',
    // backgroundColor: 'yellow'
  },
  bottom: {
    height: '87.5%',
    // backgroundColor: 'pink',
  },
  titleFirstLine: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  titleSecondLine: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    fontSize: Dimensions.get('window').height/32.5,
    marginBottom: Dimensions.get('window').height/30,
  },
  header: {
    fontWeight: '500',
    color: '#2b2b2b',
    marginLeft: Dimensions.get('window').width/15,
    marginTop: Dimensions.get('window').height/35,
    fontSize: Dimensions.get('window').height/32.5,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/35,
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/33.7,
    marginLeft: Dimensions.get('window').width/100,
  },
  bulletPoints: {
    marginTop: Dimensions.get('window').height/50,
    marginLeft: Dimensions.get('window').width/10,
    marginRight: Dimensions.get('window').width/8,
  },
  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/62,
  },
  customBtnBG: {
    backgroundColor: "#69c8a1",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 8,
    width: Dimensions.get('window').width/1.13,
    height: Dimensions.get('window').height/13.5,
  }
})