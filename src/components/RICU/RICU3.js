import React, {Fragment} from "react";
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class RICU2 extends React.Component {
  state = { 
    data: [
      ['One-Liner:', 'major cardiac, pulm, ENT'],
      ['Last Echo:', 'EF, RV function, RVSP, valves'],
      ['Prior Intubations:', '"chart reviews" -> "anesthesia," leave open'],
      ['Code Status'],
      ['Gas Exchange:', 'last ABG'],
      ['Allergies'],
      ['Access'],
      ['NPO Status:', 'last meal, major GI issues'],
      ['Status:', 'functional status & weight[kg]']
    ],
  }

  render() { 
    return (  
      <View style={styles.container}>

        <View style={styles.top}>
          <Text style={styles.title}>RICU</Text>
          <Divider style={{ backgroundColor: '#CDCDCD', marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 1.5 }} />
        </View>


        <View style={styles.bottom}>
          <Text style={styles.header}>What to present?</Text>
          {this.state.data.map((item) => (   
            <View key={item} style={{ flexWrap: 'wrap', flexDirection: 'row', marginBottom: 15, marginLeft: '5%', }}>
              <Text style={styles.bulletPoint}>{`\u2022`}</Text>
              <Text style={{ fontSize: Dimensions.get('window').height/33.7, marginLeft: 4, fontWeight: '500' }}>{item[0]}</Text>
              <Text style={{ fontSize: Dimensions.get('window').height/33.7, marginLeft: 15, fontWeight: '300' }}>{item[1]}</Text>
            </View>
          ))}  
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
    // backgroundColor: 'gray'
  },
  bottom: {
    height: '90%',
    // backgroundColor: 'yellow',
  },

  
  title: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },


  header: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
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
    fontWeight: '300',
  },

  bulletPoints: {
    marginTop: 20,
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