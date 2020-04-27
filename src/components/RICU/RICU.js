import React from 'react'
import { ScrollView, Image, Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import LinearGradient from 'react-native-linear-gradient'
import RiskFactors from './RiskFactors'

export default class RICU extends React.Component {
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
      'Respiratory Therapist',
      'Ventilator (standing or transport)',
      'Working IV',
      'Vasopressor in line and on pump',
      'Suction on and connected with tubing'
    ],
    dataTwo: [
      '"STAT" vs "non-STAT"',
      'COVID-19 status',
      'Patient last name and location',
      'Clinician name and cellphone number',
      'If patient requires emergency surgical airway, call x6-3333 and state: "Emergency surgical airway, [current location]."'
    ],
    buttonHidden: true,
    buttonHidden2: true,
  }

  onPressButtonHidden = () => {
    this.setState({ buttonHidden: !this.state.buttonHidden})
  }
  onPressButton2Hidden = () => {
    this.setState({ buttonHidden2: !this.state.buttonHidden2})
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177263333` }
    else {phoneNumber = `telprompt:6177263333` }
    Linking.openURL(phoneNumber);
  }

  IPhone414x896 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 896) {
      return (
        <Image
          source={require('../../../assets/RICU3000x2000V2.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/2.3}}
        />
      )
    }
  }

  IPhone375x812 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 812) {
      return (
        <Image
          source={require('../../../assets/RICU3000x2000V2.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/2.3}}
        />
      )
    }
  }

  IPhone414x736 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 736) {
      return (
        <Image
          source={require('../../../assets/RICU3000x2000V2.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.9}}
        />
      )
    }
  }

  IPhone375x667 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 667) {
      return (
        <Image
          source={require('../../../assets/RICU3000x2000V2.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.9 }}
        />
      )
    }
  }

  IPhone320x568 () {
    if (Dimensions.get('window').width === 320 && Dimensions.get('window').height === 568) {
      return (
        <Image
          source={require('../../../assets/RICU3000x2000V2.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.9 }}
        />
      )
    }
  }

  IPhoneNotYet () {
    return (
      <Image
        source={require('../../../assets/RICU3000x2000V2.png')}
        style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/2.3}}
      />
    )
  }

  showInfo = () => {
    return (
      <View style={{backgroundColor: '#f0f0f0', paddingRight: Dimensions.get('window').width/25, paddingBottom: Dimensions.get('window').height/100, }}>
          {this.state.dataTwo.map((item) => (
            <View key={item} style={ styles.bulletPoints }>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                <Text style={styles.bulletPointText2}>{item}</Text>
              </View>
            </View>        
          ))} 
        </View>
    ) 
  } 


  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <ScrollView 
          maximumZoomScale={2.5}
          ref={(scroller) => {this.scroller = scroller}}
        >


            <View style={{alignItems: 'center'}}>
              <Text style={styles.title}>RICU </Text>
              <Text style={{fontWeight: '500', fontSize: Dimensions.get('window').width/25, color: 'red'}}>(Notable changes in COVID-19 Era)</Text>
            </View>
          

          <View style={{alignItems: 'center'}}>
            <View style={{ flexDirection: 'row'}}>
                <View style={styles.firstCircle}></View>
                <View style={styles.secondCircle}></View>
                <View style={styles.thirdCircle}></View>
            </View>
          </View>



          <View style={styles.divider}></View>

          <View onLayout={this.measureImageView}>
            {
            
                this.IPhone375x812() || this.IPhone414x896() || this.IPhone414x736() || this.IPhone375x667() || this.IPhone320x568()
                
                ? 
                
                this.IPhone375x812() || this.IPhone414x896() || this.IPhone414x736() || this.IPhone375x667() || this.IPhone320x568()
                
                : 
                
                this.IPhoneNotYet()
            
            }  
          </View>


      
          <View style={{ marginLeft: Dimensions.get('window').width/29}}>
            <TouchableOpacity style={styles.riskFactorsButton} onPress={() => {
              this.onPressButtonHidden()
            }}>
              <Text style={styles.riskFactorsBtnText}>See Risk Factors</Text>
            </TouchableOpacity>
          </View>

          
          <View style={{backgroundColor: '#f0f0f0',}}>
            {!this.state.buttonHidden ? <RiskFactors /> : null}
          </View>
        

          <View style={styles.divider}></View>

          <View style={{
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginTop: Dimensions.get('window').height/30 
          }}>
            <View style={{alignContent: 'center'}}>
                {/* <TouchableOpacity onPress={()=>{this.dialCall()}}>
                      <LinearGradient 
                        style={styles.callButton}
                        colors={['#B62619', '#F63826', '#B62619']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                      >
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: Dimensions.get('window').width/24, color: 'white', fontWeight: 'bold' }}> Use this button to</Text>
                            <MaterialIcons name="phone" size={19} color="white" />
                            <Text style={{ fontSize: Dimensions.get('window').width/24, color: 'white', fontWeight: 'bold' }}> Call Page Operator for RICU</Text>
                          </View>
                          <Text style={{ 
                            marginTop: Dimensions.get('window').height/150, 
                            color: 'white', 
                            fontSize: Dimensions.get('window').width/24, fontWeight: '400'
                          }}>x6-3333
                          </Text>
                      </LinearGradient>   
                </TouchableOpacity> */}

                <TouchableOpacity style={styles.shadow} onPress={()=>{this.dialCall()}}>
                      <LinearGradient 
                        style={styles.callButton}
                        colors={['#B62619', '#F63826', '#B62619']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                      >
                          <View style={{ flexDirection: 'row' }}>
                            <View style={{flexDirection: 'column'}}>
                              <View style={{marginLeft: Dimensions.get('window').width/20}}>
                                <MaterialIcons name="phone-in-talk" size={40} color="white" />
                              </View>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                              <Text style={{ fontSize: Dimensions.get('window').width/24, color: 'white', fontWeight: 'bold' }}>Call Page Operator for RICU</Text>
                              <Text style={{ 
                                marginTop: Dimensions.get('window').height/150, 
                                paddingLeft: Dimensions.get('window').width/7, 
                                color: 'white', 
                                fontSize: Dimensions.get('window').width/24, fontWeight: '400'
                              }}>x6-3333
                              </Text>
                            </View>
                          </View>
                      </LinearGradient>   
                </TouchableOpacity>
            </View>

            <View style={{marginLeft: Dimensions.get('window').width/40, }}>
                <TouchableOpacity onPress={()=>{this.onPressButton2Hidden()}}>
                    <View style={{ flexDirection: 'row',  }}>
                      <Icon name="ios-information-circle" size={Dimensions.get('window').height/15} color="#90adb0" />
                    </View>                  
                </TouchableOpacity>
            </View>
          </View>


          {!this.state.buttonHidden2 ? this.showInfo() : null}

          <View style={{alignItems: 'center', paddingTop: Dimensions.get('window').height/50,}}>
              <TouchableOpacity
                style={styles.customBtnBGbottom} 
                onPress={() => this.props.navigation.navigate('RICUWhatToPresent')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
          </View>
       
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
    // marginLeft: Dimensions.get('window').width/3,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/100, 
    marginBottom: Dimensions.get('window').height/200, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/400
  },
  bulletPoint: {
    marginLeft: Dimensions.get('window').width/80,
    color: 'gray',
    fontSize: Dimensions.get('window').height/50,
  },
  bulletPointText2: {
    fontWeight: '400',
    marginLeft: Dimensions.get('window').width/80,
    fontSize: Dimensions.get('window').height/50,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/90,
    marginLeft: Dimensions.get('window').width/50,
    marginRight: Dimensions.get('window').width/30,
  },
  customBtnText: {
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/47,
  },
  customBtnBGbottom: {
    borderWidth: 5,
    borderColor: '#6c9ea1',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    width: Dimensions.get('window').width/1.17,
    height: Dimensions.get('window').height/10.75,
  },
  callButton: {
    borderRadius: 40,
    shadowRadius: 15,
    shadowOffset : { width: 1, height: 13},
    height: Dimensions.get('window').height/11,
    width: Dimensions.get('window').width/1.3,
    justifyContent: "center",
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.8,
    backgroundColor : "#0000",
    shadowOffset : { width: 1, height: 1},
  },
  riskFactorsBtnText: {
    fontWeight: '600',
    color: '#303333',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/69,
    marginTop: Dimensions.get('window').height/130,
  },
  riskFactorsButton: {
    backgroundColor: '#DBE2E8',
    borderRadius: 20,
    shadowOpacity: .2,
    borderColor: '#cfcfcf', 
    borderWidth: 1,   
    width: Dimensions.get('window').width/2.4,
    height: Dimensions.get('window').height/27,
  },
  button3: {
    shadowColor: 'black',
    shadowOpacity: 0.8,
    // elevation: 6,
    backgroundColor : "#0000",
    // shadowRadius: 15 ,
    shadowOffset : { width: 3, height: 3},
  },
  firstCircle: {
    marginTop: Dimensions.get('window').height/100,
    width: 12,
    height: 12,
    borderRadius: 100/2,
    backgroundColor: '#6c9ea1'
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
    borderWidth: 1,
    borderColor: '#6c9ea1'
  },
})