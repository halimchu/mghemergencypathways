import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Pert extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
        <Button 
          icon={
            <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
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
              <Icon name="md-home" size={Dimensions.get('window').height/26} color="white" />
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
          <Text style={styles.titleFirstLine}>Pulmonary Embolism</Text>

          <View style={{alignItems: 'center', paddingTop: Dimensions.get('window').height/60, }}>
            <View style={{ flexDirection: 'row'}}>
              <View style={{marginRight: Dimensions.get('window').width/30}}>
                <View style={styles.circleFilledIn}></View>
              </View>
              <View style={{marginRight: Dimensions.get('window').width/30}}>
                <View style={styles.circleNotFilledIn}></View>
              </View>
            </View>
          </View>

        </View>

       

        <View style={styles.middleOne}>
          <View style={{ }}>
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
        </View>

        

        <View style={styles.middleTwo}>
          <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                  style={{
                    shadowOffset:{  width: 0,  height: 1,  },
                    shadowColor: 'black',
                    shadowOpacity: .5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 60,
                    backgroundColor: '#B62130',
                    height: Dimensions.get('window').height/9,
                    width: Dimensions.get('window').width/1.25,
                  }}
                  onPress={()=>{this.dialCall()}
                }
                >
                <View style={{ flexDirection: 'row' }}>
                  <MaterialIcons name="phone" size={24} color="white" />
                  <Text style={{ fontSize: Dimensions.get('window').height/37, color: 'white', fontWeight: 'bold' }}> Call PERT Consult</Text>
                </View>
                <Text style={{ 
                  marginTop: Dimensions.get('window').height/150, 
                  color: 'white', 
                  fontSize: Dimensions.get('window').height/45, fontWeight: '400'}}>x4-7378</Text>
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
  circleFilledIn: {
    width: 12,
    height: 12,
    borderRadius: 100/2,
    backgroundColor: '#69c8a1'
  },
  circleNotFilledIn: {
    width: 12,
    height: 12,
    borderRadius: 100/2,
    borderWidth: 1,
    borderColor: '#69c8a1'
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
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  header: {
    fontWeight: '500',
    color: '#515254',
    fontSize: Dimensions.get('window').height/32.5,
    marginLeft: Dimensions.get('window').width/15,
    marginTop: Dimensions.get('window').height/300
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/33.7,
    marginLeft: Dimensions.get('window').width/100,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/30,
    marginLeft: Dimensions.get('window').width/11,
    marginRight: Dimensions.get('window').width/8,
  },
  customBtnText: {
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/40,
  },
  customBtnBG: {
    borderWidth: 4,
    borderColor: '#69c8a1',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    width: Dimensions.get('window').width/1.25,
    height: Dimensions.get('window').height/10.75,
  },
})