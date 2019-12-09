import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 

export default class RICU extends React.Component {
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
      'Respiratory Therapist',
      'Ventilator (standing or transport)',
      'Working IV',
      'Vasopressor in line and on pump',
      'Suction on and connected with tubing'
    ]
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177263333` }
    else {phoneNumber = `telprompt:6177263333` }
    Linking.openURL(phoneNumber);
  }


  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>RICU</Text>
          <Divider style={styles.divider} />
        </View>
       

        <View style={styles.middleOne}> 
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 40,
                backgroundColor: '#B62130',
                height: Dimensions.get('window').height/10,
                width: Dimensions.get('window').width/1.12,
              }}
              onPress={()=>{this.dialCall()}}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="phone" size={24} color="white" />
                <Text style={{ fontSize: Dimensions.get('window').height/37, color: 'white', fontWeight: 'bold' }}> Call RICU Consult</Text>
              </View>
              <Text style={{ marginTop: Dimensions.get('window').height/150, color: 'white', fontSize: Dimensions.get('window').height/45, fontWeight: '400'}}>x6-3333</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.headerOne}>If need for surgical airway,</Text>
          <Text style={styles.headerTwo}>state: "Emergency surgical airway, [current location]"</Text>
          </View>




          <View style={styles.middleTwo}>
            <Text style={{ fontSize: Dimensions.get('window').height/32.5, marginLeft: Dimensions.get('window').width/10, }}>What to prepare:</Text>
            {this.state.data.map((item) => (
              <View key={item} style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text style={styles.bulletPointText}>{item}</Text>
                </View>
              </View>        
            ))} 
          </View>
     


        <View style={styles.bottom}>
          <SafeAreaView>
            <TouchableOpacity
              style={styles.customBtnBG} 
              onPress={() => this.props.navigation.navigate('RICUNextSteps')}>
              <Text style={styles.customBtnText}>Next Steps</Text>
            </TouchableOpacity>
          </SafeAreaView>
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
    height: '30%',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
    paddingTop: Dimensions.get('window').height/37,
    // backgroundColor: 'yellow'
  },
  middleTwo: {
    height: '45%',
    paddingTop: Dimensions.get('window').height/85,
    // backgroundColor: 'pink'
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
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  headerOne: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: Dimensions.get('window').height/45, 
    fontSize: Dimensions.get('window').height/34,
  },
  headerTwo: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Dimensions.get('window').height/40,
    fontSize: Dimensions.get('window').height/34,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    fontWeight: '300',
    marginLeft: Dimensions.get('window').width/80,
    fontSize: Dimensions.get('window').height/33.7,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/90,
    marginLeft: Dimensions.get('window').width/8,
    marginRight: Dimensions.get('window').width/30,
  },
  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/47,
  },
  customBtnBG: {
    backgroundColor: "#69c8a1",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 8,
    width: Dimensions.get('window').width/1.13,
    height: Dimensions.get('window').height/12,
  }
})