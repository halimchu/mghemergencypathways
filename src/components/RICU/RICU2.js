import React, {Fragment} from "react";
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class RICU2 extends React.Component {

  state = {
    data: [
      'Respiratory Therapist',
      'Ventilator (standing or transport)',
      'Working IV',
      'Vasopressor in line and on pump',
      'Suction on and connected with tubing'
    ]
  }


  render() { 
    return (  
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>RICU</Text>
          <Divider style={{ backgroundColor: '#CDCDCD', marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 1.5 }} />
        </View>
       



        <View style={styles.middle}>
          <Text style={styles.headerOne}>Dial x63333 for "STAT RICU"</Text>
          <Text style={styles.headerTwo}>If need for surgical airway, state: "Emergency surgical airway, [current location]"</Text>
          
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
                  onPress={() => this.props.navigation.navigate('RICU3')}>
                  <Text style={styles.customBtnText}>Next Steps</Text>
                </TouchableOpacity>
            </SafeAreaView>
          </View>

      </View>
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
    // backgroundColor: '#eee',
  },

  bottom: {
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },
  
  title: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },

  headerOne: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },

  headerTwo: {
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },

  headerText: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/32.5,
    color: 'gray',
    fontWeight: '500',
    color: '#515254',
    textAlign: 'center',
    marginLeft: 12,
    marginRight: 12
  },


  bulletPoint: {
    // fontSize: 20,
    fontSize: Dimensions.get('window').height/40,
    color: 'gray'
  },

  bulletPointText: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/33.7,
    marginLeft: 4,
    fontWeight: '300'
  },

  bulletPoints: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 50,
    marginRight: 50,
  },

  /* Here, style the text of your button */
  customBtnText: {
    // fontSize: 20,
    // margin: 13
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/62,
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    textAlignVertical: "center",
  },

  /* Here, style the background of your button */
  customBtnBG: {
    backgroundColor: "#69c8a1",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 8,
    // width: 330,
    // height: 60,
    width: Dimensions.get('window').width/1.13,
    height: Dimensions.get('window').height/13.5,
  },


});