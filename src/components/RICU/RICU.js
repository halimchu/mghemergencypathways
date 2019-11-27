import React, {Fragment} from "react";
import { Linking, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import { ThemeProvider, Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 

const phoneIcon = <MaterialIcons name="phone" size={30} color="white" />;

export default class RICU extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = (  
      <Button 
        icon={
          <View style={{ marginLeft: 9 }}>
            <Icon name="md-arrow-back" size={34} color="white" />
          </View>
        }
        onPress={() => navigation.goBack()}
        type='clear'
      />
    )

    headerTitle = (
      <View style={{ marginBottom: 7 }}>
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
      'Respiratory Therapist',
      'Ventilator (standing or transport)',
      'Working IV',
      'Vasopressor in line and on pump',
      'Suction on and connected with tubing'
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
          <Text style={styles.title}>RICU</Text>
          <Divider style={{ backgroundColor: '#CDCDCD', marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 1.5 }} />
        </View>
       

        <View style={styles.middle}> 




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
                <Text style={{ fontSize: Dimensions.get('window').height/37, color: 'white', fontWeight: 'bold' }}> Call RICU Consult</Text>
              </View>
              <Text style={{ marginTop: Dimensions.get('window').height/150, color: 'white', fontSize: Dimensions.get('window').height/45, fontWeight: '400'}}>x6-3333</Text>
            </TouchableOpacity>
          </View>







         
          <Text style={styles.headerTwo}>If need for surgical airway,</Text>
          <Text style={styles.headerThree}>state: "Emergency surgical airway, [current location]"</Text>
          
          <Text style={{ fontSize: Dimensions.get('window').height/32.5, marginLeft: 30, }}>What to prepare:</Text>
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
  middle: {
    height: '75%',
    // backgroundColor: 'green',
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
    marginTop: Dimensions.get('window').height/70,
    fontSize: Dimensions.get('window').height/32.5,
  },
  headerOne: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/32.5,
  },
  headerTwo: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: Dimensions.get('window').height/45, 
    fontSize: Dimensions.get('window').height/34,
  },
  headerThree: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Dimensions.get('window').height/40,
    fontSize: Dimensions.get('window').height/34,
  },
  headerText: {
    fontWeight: '500',
    color: '#515254',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/32.5,
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