import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

export default class STEMIYes extends React.Component {
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
    if (Platform.OS === 'android') { phoneNumber = `tel:6177268282` }
    else {phoneNumber = `telprompt:6177268282` }
    Linking.openURL(phoneNumber);
  }
  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}> 
          <Text style={styles.title}>STEMI</Text>
          <View style={{alignItems: 'center'}}>
            <View style={{ flexDirection: 'row'}}>
              <View style={styles.firstCircle}>
              </View>
              <View style={styles.secondCircle}>
              </View>
            </View>
          </View>
        </View>


        <View style={styles.middle}>
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
                            <Text style={{ fontSize: Dimensions.get('window').width/21, color: 'white', fontWeight: 'bold' }}> Call STEMI Consult</Text>
                          </View>
                          <Text style={{ 
                            marginTop: Dimensions.get('window').height/150, 
                            color: 'white', 
                            fontSize: Dimensions.get('window').width/24, fontWeight: '400'
                          }}>x6-8282
                          </Text>
                      </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={{ paddingTop: Dimensions.get('window').height/16 }}>
                <Text style={styles.textFirstLine}>Enter SmartPhrase in Epic</Text>
                <Text style={{ paddingTop: Dimensions.get('window').height/100 }}>
                  <Text style={styles.textSecondLine}>Start </Text>
                  <Text style={styles.textSecondLineBold}>.AcuteMIMGH</Text>
                </Text>
                <Text style={styles.textLastTwoLines}>(to generate relevant</Text>
                <Text style={styles.textLastTwoLines}>information to clinical team)</Text> 
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
    borderWidth: 1,
    backgroundColor: '#6c9ea1',
    borderColor: '#6c9ea1'
  },
  container: {
    flex: 1,
  },
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height/6,
    // backgroundColor: '#F7F7F7',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    paddingTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  
  textFirstLine: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/37,
  },
  textSecondLine: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/37,
  },
  textSecondLineBold: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: Dimensions.get('window').height/100,
    fontSize: Dimensions.get('window').height/37,
  },
  textLastTwoLines: {
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: Dimensions.get('window').height/100,
    fontSize: Dimensions.get('window').height/39,
  },
  callButton: {
    borderRadius: 40,
    height: Dimensions.get('window').height/11,
    width: Dimensions.get('window').width/1.17,
    alignItems: "center",
    justifyContent: "center",
  }
})