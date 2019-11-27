import React, {Fragment} from "react";
import { Linking, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;


// Pert number 6177247378

export default class Pert extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = (  
      <Button 
        icon={
          <View style={{ marginLeft: 9 }}>
            <Icon name="ios-arrow-back" size={34} color="white" />
          </View>
        }
        onPress={() => navigation.goBack()}
        type='clear'
      />
    )

    headerTitle = (
      <View style={{ marginBottom: 7}}>
        <Text style={{ fontSize: Dimensions.get('window').height/45, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>MGH Stat</Text>
      </View>
    )
      
    let headerRight = (
      <Button 
        icon={
          <View style={{ marginRight: Dimensions.get('window').width/75 }}>
            <Icon name="md-home" size={32} color="white" />
          </View>
        }
        onPress={() => navigation.navigate('Home')}
        type='clear'
      />
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
      'PE with abnormal vital signs (tachycardia or hypotension)',
      'Evidence of right heart strain (echo, EKG or positive biomarkers)',
      'Central or Saddle PE'
    ]
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:7149448364` }
    else {phoneNumber = `telprompt:7149448364` }
    Linking.openURL(phoneNumber);
  }


  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.titleFirstLine}>Pulmonary Embolism</Text>
          <Text style={styles.titleSecondLine}>Response Team</Text>
        </View>

        <Divider style={{ backgroundColor: '#CDCDCD', marginLeft: 10, marginRight: 10, height: 1.5 }} />

        <View style={styles.middleOne}>
          <View style={{ marginTop: Dimensions.get('window').height/60 }}>
            <Text style={styles.headerOne}>Large Pulmonary Embolus?</Text>
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
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 40,
                    backgroundColor: '#B62130',
                    height: Dimensions.get('window').height/11,
                    width: Dimensions.get('window').width/1.12,
                  }}
                  onPress={()=>{this.dialCall()}
                }
                >
                <View style={{ flexDirection: 'row' }}>
                  <MaterialIcons name="phone" size={24} color="white" />
                  <Text style={{ fontSize: Dimensions.get('window').height/37, color: 'white', fontWeight: 'bold' }}> Call PERT Consult</Text>
                </View>
                <Text style={{ marginTop: Dimensions.get('window').height/150, color: 'white', fontSize: Dimensions.get('window').height/45, fontWeight: '400'}}>x4-7378</Text>
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
  container: {
    flex: 1
  },
  top: {
    height: '11%',
    // backgroundColor: 'yellow'
  },
  middleOne: {
    height: '44%',
    // backgroundColor: '#eee',
  },
  middleTwo: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height/80, 
    // backgroundColor: 'pink',
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
    fontSize: Dimensions.get('window').height/32.5,
    marginTop: Dimensions.get('window').height/80,
  },
  titleSecondLine: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/32.5,
  },

  headerOne: {
    fontWeight: '500',
    color: '#515254',
    fontSize: Dimensions.get('window').height/32.5,
    marginLeft: Dimensions.get('window').width/15,
    marginTop: Dimensions.get('window').height/100
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
    marginTop: Dimensions.get('window').height/33.7,
    marginLeft: Dimensions.get('window').width/10,
    marginRight: Dimensions.get('window').width/8,
  },

  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
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
  },
})