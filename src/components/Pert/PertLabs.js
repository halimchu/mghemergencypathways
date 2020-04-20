import React from 'react'
import { Dimensions, View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import LinearGradient from 'react-native-linear-gradient'

export default class PertLabs extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/29} color="white" />
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
              <Icon name="md-home" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)"  />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />

        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={Dimensions.get('window').height/29} color="white" />
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
      headerBackground: (
        <LinearGradient
            colors={['#23A7C2', '#2D7C93',]}
            style={{ flex: 1 }}
        />
      ),
    }
  }

  state = {
    data: [
      'CBC with diff, BMP, LFTs, Lactate, D-dimer, ABG',
      'PT/INR and PTT, Type & Screen',
      'NT-proBNP (or BNP)',
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
          <Text style={styles.title}>Pulmonary Embolism</Text>
          <View style={{alignItems: 'center'}}>
            <View style={{ flexDirection: 'row'}}>
              <View style={styles.firstCircle}></View>
              <View style={styles.secondCircle}></View>
            </View>
          </View>
        </View>


        <View style={styles.bottom}>
          <View style={{marginLeft: Dimensions.get('window').width/27}}>
            <Text style={styles.header}>If not already obtained, please order:</Text>
          </View>
          {this.state.data.map((item) => (
            <View key={item} style={ styles.bulletPoints }>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                <Text style={styles.bulletPointText}>{item}</Text>
              </View>
            </View>        
          ))} 


          <View style={{marginTop: 20, paddingLeft: 20, paddingRight: 10, }}>
            <Text style={styles.text}>If concerned about COVID, please discuss with PERT the need for TTE, LENI, & CT with PERT</Text>
          </View>
        </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  firstCircle: {
    marginTop: Dimensions.get('window').height/70,
    width: 12,
    height: 12,
    borderRadius: 100/2,
    borderWidth: 1,
    borderColor: '#6c9ea1'
  },
  secondCircle: {
    marginTop: Dimensions.get('window').height/70,
    marginLeft: Dimensions.get('window').width/25,
    width: 12,
    height: 12,
    borderRadius: 100/2,
    backgroundColor: '#6c9ea1',
  },
  container: {
    flex: 1
  },
  top: {
    height: '13%',
    // backgroundColor: 'yellow'
  },
  bottom: {
    height: '87%',
    // backgroundColor: 'pink',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  header: {
    fontWeight: '500',
    marginLeft: Dimensions.get('window').width/15,
    marginTop: Dimensions.get('window').height/35,
    fontSize: Dimensions.get('window').height/36,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/45,
  },
  bulletPoints: {
    marginTop: Dimensions.get('window').height/50,
    marginLeft: Dimensions.get('window').width/10,
    marginRight: Dimensions.get('window').width/8,
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/38,
    marginLeft: Dimensions.get('window').width/100,
  },
  text: {
    color: '#5c5c5c',
    fontWeight: '400',
    fontSize: Dimensions.get('window').height/40,
    marginLeft: Dimensions.get('window').width/100,
  }
})