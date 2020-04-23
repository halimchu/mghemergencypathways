import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'  
import LinearGradient from 'react-native-linear-gradient'

export default class RICUWhatToPrepare extends React.Component {
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
      'Syringes: 10mL x4, 2mL x4, saline flushes',
      'Respiratory therapist present',
      'AMBU bag, PEEP valve, and CO2 detector',
      'ETT holder and HEPA filters',
      'Working IV with free-flowing IV fluid bag attached',
      'Phenylephrine (or norepinephrine) and propofol infusions',
      'Suction with connected tubing',
      'Designate one RN to join RICU team in room and one to be "clean runner"'
    ]
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177263333` }
    else {phoneNumber = `telprompt:6177263333` }
    Linking.openURL(phoneNumber);
  }

  // someFunc = () => {
  //   if (Dimensions.get('window').width === 320 && Dimensions.get('window').height === 568) {
  //     styles.
  //     return (
  //       <Text>Yes</Text>
  //     )
  //   } else {
  //     return (
  //       <Text>No</Text>
  //     )
  //   }
  // }


  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>RICU</Text>
          <View style={{alignItems: 'center'}}>
            <View style={{ flexDirection: 'row'}}>
              <View style={styles.firstCircle}></View>
              <View style={styles.secondCircle}></View>
              <View style={styles.thirdCircle}></View>
            </View>
          </View>
        </View> 
       

        <View style={styles.middle}>
          <View style={{
            backgroundColor: '#e89b0e',
            paddingLeft: Dimensions.get('window').width/64,
            paddingRight: Dimensions.get('window').width/64,
            paddingTop: Dimensions.get('window').height/120,
            paddingBottom: Dimensions.get('window').height/120,
            marginTop: Dimensions.get('window').height/90,
            marginBottom: Dimensions.get('window').height/50,
            }}>
            <Text style={{
              textAlign: 'center', 
              fontSize: Dimensions.get('window').width/22, 
              fontWeight: 'bold', 
              color: 'white', 
            }}>Important: Informed clinician must be at patient's bedside when RICU arrives.</Text>
            <Text style={{
              paddingTop: Dimensions.get('window').height/200, 
              textAlign: 'center', fontSize: Dimensions.get('window').width/24, 
              fontStyle: 'italic', 
              fontWeight: '500', 
              color: 'white', }}>(Please have computer logged in to patient chart)</Text>
          </View>
           
        


          

        
                <Text style={styles.header}>
                  <Text>If</Text>
                  <Text style={{color: 'red'}}> STAT RICU</Text>
                  <Text> called for emergent intubation, please work with the rapid response team to prepare the following:</Text>
                </Text>

                <View style={{marginRight: Dimensions.get('window').width/50, }}>
                  {this.state.data.map((item) => (
                    <View key={item} style={ styles.bulletPoints }>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                        <Text style={ (Dimensions.get('window').width === 320 && Dimensions.get('window').height === 568) ? styles.bulletPointTextSE : styles.bulletPointText }>{item}</Text>
                      </View>
                    </View>        
                  ))} 

                  <View style={{
                    paddingTop: Dimensions.get('window').height/22,
                    paddingLeft: Dimensions.get('window').width/22,
                    paddingRight: Dimensions.get('window').width/22,
                    }}>
                    <Text style={{
                      textAlign: 'center',
                      fontSize: Dimensions.get('window').width/22,
                      fontStyle: 'italic',
                      color: '#575757', 
                    }}>If non-emergent intubation needed, please obtain consent for intubation</Text>
                  </View>
                </View>

            </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '75%',
    // backgroundColor: 'pink'
  },
  bottom: {
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },
  firstCircle: {
    marginTop: Dimensions.get('window').height/100,
    width: 12,
    height: 12,
    borderRadius: 100/2,
    borderWidth: 1,
    borderColor: '#6c9ea1'
  },
  secondCircle: {
    marginTop: Dimensions.get('window').height/100,
    marginLeft: Dimensions.get('window').width/25,
    marginRight: Dimensions.get('window').width/25,
    width: 12,
    height: 12,
    borderRadius: 100/2,
    borderWidth: 1,
    borderColor: '#6c9ea1'
  },
  thirdCircle: {
    marginTop: Dimensions.get('window').height/100,
    width: 12,
    height: 12,
    borderRadius: 100/2,
    backgroundColor: '#6c9ea1',
  },
  circleFilledIn: {
    width: 12,
    height: 12,
    borderRadius: 100/2,
    backgroundColor: '#6c9ea1'
  },
  circleNotFilledIn: { 
    width: 12,
    height: 12,
    borderRadius: 100/2,
    borderWidth: 1,
    borderColor: '#6c9ea1'
  },
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  header: {
    fontWeight: 'bold',
    marginLeft: Dimensions.get('window').width/30,
    marginBottom: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').width/22,
  },
  bulletPoint: {
    // color: 'gray',
    fontSize: Dimensions.get('window').height/50,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/20,
    marginRight: Dimensions.get('window').width/50,
  },
  bulletPointText: {
    fontWeight: '400',
    marginLeft: Dimensions.get('window').width/80,
    fontSize: Dimensions.get('window').width/22,
  },
  bulletPointTextSE: {
    fontWeight: '400',
    marginLeft: Dimensions.get('window').width/80,
    fontSize: Dimensions.get('window').width/24,
  },
  customBtnText: {
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/47,
  },
  customBtnBG: {
    borderWidth: 5,
    borderColor: '#6c9ea1',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    width: Dimensions.get('window').width/1.17,
    height: Dimensions.get('window').height/10.75,
  },
})