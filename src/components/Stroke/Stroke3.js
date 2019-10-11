import React, {Fragment} from "react";
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class Stroke4 extends React.Component {
  
  state = {
    data: [
      'Floor RN & MD accompany patient to CT scanner',
      'Continue monitoring vital signs Q15 min',
      'Remain with patient until completion of acute workup or transfer to Neurology service'
    ]
  }
  
  render() { 
    return (  
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Stroke</Text>
          <Divider style={{ backgroundColor: '#CDCDCD', marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 1.5 }} />
        </View>


        <View style={styles.middle}>
          <Text style={styles.header}>ED CT Scanner</Text>
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
          <SafeAreaView style={{ marginBottom: 5 }}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('Stroke1')}>
                <Text style={styles.customBtnText}>Back Stroke</Text>
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
    // backgroundColor: 'green'
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
  header: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    textAlign: 'center'
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
    fontSize: Dimensions.get('window').height/34.5,
    marginLeft: 2,
    fontWeight: '300'
  },

  bulletPoints: {
    flexDirection: 'row',
    marginTop: 10,
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