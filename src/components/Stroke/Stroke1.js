import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import LinearGradient from 'react-native-linear-gradient'

export default class Stroke1 extends React.Component {
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

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177263333` }
    else {phoneNumber = `telprompt:6177263333` }
    Linking.openURL(phoneNumber);
  }

  state = {
    dataOne: [
      'Facial Weakness/Drooping?',
      'Arm or Leg Weakness?',
      'Speech Difficulties?'
    ],
    dataTwo: [
      'Obtain Last Seen Well (LSW) time',
      'Check fingerstick glucose',
      // 'Obtain fingerstick glucose: Treat <50 or >400',
      'Neurology senior resident will arrive within 10 minutes; if not, re-call Acute Stroke Consult and ask page operator to page stroke attending'
    ]
  }
  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.title}>Stroke</Text>
            <View style={{alignItems: 'center'}}>
                  <View style={{ flexDirection: 'row'}}>
                     <View style={styles.firstCircle}></View>
                     <View style={styles.secondCircle}></View>
                     <View style={styles.thirdCircle}></View>
                  </View>
            </View>
          </View>


          <View style={styles.middleOne}>
            <View style={{marginLeft: Dimensions.get('window').width/10}}>
              <Text style={styles.header}>Concern for Stroke?</Text>
            </View>
            {this.state.dataOne.map((item) => (
              <View key={item} style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text style={styles.bulletPointText}>{item}</Text>
                </View>
              </View>        
            ))} 
          </View>

          <View style={styles.middleTwo}>
            <View style={styles.middleTwoSubOne}>
                <View style={{
                  alignItems: 'center', 
                  paddingTop: Dimensions.get('window').height/50,
                  paddingBottom: Dimensions.get('window').height/50,
                }}>
                  <Text style={styles.header}>Initial Steps</Text>
               
                <View style={{ 
                      alignItems: 'center', 
                      marginTop: Dimensions.get('window').height/100, 
                      shadowOffset:{  width: 0,  height: 1,  },
                      shadowColor: 'black',
                      shadowOpacity: .5,}}>

                    <TouchableOpacity style={styles.shadow} onPress={()=>{this.dialCall()}}>
                        <LinearGradient 
                          style={styles.callButton}
                          colors={['#B62619', '#F63826', '#B62619']}
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                        >
                            <View style={{ flexDirection: 'row' }}>
                            <View style={{flexDirection: 'column'}}>
                              <View style={{marginLeft: Dimensions.get('window').width/15}}>
                                <MaterialIcons name="phone-in-talk" size={Dimensions.get('window').width/9} color="white" />
                              </View>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{ marginLeft: Dimensions.get('window').width/60, fontSize: Dimensions.get('window').width/21, color: 'white', fontWeight: 'bold' }}>Call Acute Stroke Consult</Text>
                                <Text style={{ 
                                  marginTop: Dimensions.get('window').height/150, 
                                  color: 'white', 
                                  paddingLeft: Dimensions.get('window').width/5.75, 
                                  fontSize: Dimensions.get('window').width/24, fontWeight: '400'
                                }}>x6-3333
                                </Text>
                            </View>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                  </View>

            

                  <View style={{ 
                    marginTop: Dimensions.get('window').height/300 
                  }}>
                    {this.state.dataTwo.map((item) => (
                      <View key={item} style={ styles.bulletPointsTwo }>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                          <Text style={styles.bulletPointText}>{item}</Text>
                        </View>
                      </View>        
                    ))} 
                  </View>

              </View>
            </View>

          </View>





          <View style={styles.bottom}>
            <TouchableOpacity
              style={styles.customBtnBG} 
              onPress={() => this.props.navigation.navigate('Stroke2')}>
              <Text style={styles.customBtnText}>Next Steps</Text>
            </TouchableOpacity>
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
    height: '10%',
    // backgroundColor: 'yellow'
  },
  middleOne: {
    height: '24%',
    justifyContent: 'center',
    // backgroundColor: 'green'
  },
  middleTwo: {
    height: '51%',
    // backgroundColor: 'pink',
  },
    middleTwoSubOne: {
      justifyContent: 'center',
      shadowOffset:{  width: 0,  height: 1,  },
      shadowColor: 'black',
      shadowOpacity: .25,
      backgroundColor: '#F7F7F7',
    },
    middleTwoSubTwo: {
      // fontSize: Dimensions.get('window').height/40,
      paddingLeft: Dimensions.get('window').width/50,
      paddingRight: Dimensions.get('window').width/50,
      // backgroundColor: 'purple',
  },
  bottom: {
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  header: {
    fontWeight: 'bold',
    color: '#2b2b2b',
    fontSize: Dimensions.get('window').height/36,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/10,
    marginTop: Dimensions.get('window').height/100,
  },
  bulletPointsTwo: {
    flexDirection: 'row',
    paddingLeft: Dimensions.get('window').width/10,
    paddingRight: Dimensions.get('window').width/10,
    marginTop: Dimensions.get('window').height/100,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/45,
  },
  bulletPointText: {
    fontWeight: '300',
    marginLeft: Dimensions.get('window').width/70,
    fontSize: Dimensions.get('window').height/40,
  },
  callButton: {
    borderRadius: 40,
    height: Dimensions.get('window').height/11,
    width: Dimensions.get('window').width/1.17,
    justifyContent: "center",
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.8,
    backgroundColor : "#0000",
    shadowOffset : { width: 1, height: 1},
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
  firstCircle: {
    marginTop: Dimensions.get('window').height/70,
    width: 12,
    height: 12,
    borderRadius: 100/2,
    backgroundColor: '#6c9ea1'
  },
  secondCircle: {
    marginTop: Dimensions.get('window').height/70,
    marginLeft: Dimensions.get('window').width/25,
    marginRight: Dimensions.get('window').width/25,
    width: 12,
    height: 12,
    borderRadius: 100/2,
    borderWidth: 1,
    borderColor: '#6c9ea1'
  },
  thirdCircle: {
    marginTop: Dimensions.get('window').height/70,
    width: 12,
    height: 12,
    borderRadius: 100/2,
    borderWidth: 1,
    borderColor: '#6c9ea1'
  },
})