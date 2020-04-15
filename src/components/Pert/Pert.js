import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

export default class Pert extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
        <Button 
          icon={
            <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
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
      'PE with abnormal VS (tachycardia or hypotension)',
      'Evidence of right heart strain (echo, EKG, or positive biomarkers)',
      'Central or Saddle PE'
    ]
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177247378` }
    else {phoneNumber = `telprompt:6177247378` }
    Linking.openURL(phoneNumber);
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

       

        <View style={styles.middleOne}>
          <Text style={styles.header}>Large Pulmonary Embolus?</Text>
          {this.state.data.map((item) => (
              <View key={item} style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text style={styles.bulletPointText}>{item}</Text>
                </View>
              </View>        
          ))} 
        </View>

        

        <View style={styles.middleTwo}>
          <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={()=>{this.dialCall()}}>
                    <LinearGradient 
                      style={styles.callButton}
                      colors={['#B62619', '#F63826', '#B62619']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                    >
                        <View style={{ flexDirection: 'row' }}>
                          <MaterialIcons name="phone" size={19} color="white" />
                          <Text style={{ fontSize: Dimensions.get('window').width/21, color: 'white', fontWeight: 'bold' }}> Call PERT Consult</Text>
                        </View>
                        <Text style={{ 
                          marginTop: Dimensions.get('window').height/150, 
                          color: 'white', 
                          fontSize: Dimensions.get('window').width/24, fontWeight: '400'
                        }}>x4-7378
                        </Text>
                    </LinearGradient>
              </TouchableOpacity>
            </View>
        </View>
 



        <View style={styles.bottom}>
          <SafeAreaView>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('PertLabs')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
          </SafeAreaView>
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
    backgroundColor: '#6c9ea1'
  },
  secondCircle: {
    marginTop: Dimensions.get('window').height/70,
    marginLeft: Dimensions.get('window').width/25,
    width: 12,
    height: 12,
    borderRadius: 100/2,
    borderWidth: 1,
    borderColor: '#6c9ea1'
  },
  container: {
    flex: 1
  },
  top: {
    height: '15%',
    // backgroundColor: 'yellow'
  },
  middleOne: {
    height: '46%',
    paddingTop: Dimensions.get('window').height/120, 
    // backgroundColor: '#eee',
  },
  middleTwo: {
    height: '24%',
    paddingBottom: Dimensions.get('window').height/45,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F7F7F7'
  },
  bottom: {
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: 'gray',
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
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  header: {
    fontWeight: '500',
    fontSize: Dimensions.get('window').height/36,
    marginLeft: Dimensions.get('window').width/15,
    marginTop: Dimensions.get('window').height/300
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/45,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/30,
    marginLeft: Dimensions.get('window').width/11,
    marginRight: Dimensions.get('window').width/8,
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/38,
    marginLeft: Dimensions.get('window').width/100,
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
  callButton: {
    borderRadius: 40,
    height: Dimensions.get('window').height/11,
    width: Dimensions.get('window').width/1.17,
    alignItems: "center",
    justifyContent: "center",
  },
})