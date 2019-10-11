import React, {Fragment} from "react";
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class RICU extends React.Component {

  
  render() { 
    return (  
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>RICU</Text>
          <Divider style={{ backgroundColor: '#CDCDCD', marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 1.5 }} />
        </View>



          <View style={styles.bottom}>

            <View style={{ marginTop: 100, marginBottom: 30 }}>
              <Text style={styles.headerFirstLine}>Is airway patent </Text>
              <Text style={styles.headerSecondLine}>and protected?</Text>
            </View>

            <SafeAreaView style={{ marginBottom: 15 }}>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('RICU2')}>
                  <Text style={styles.customBtnText}>No</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('Result1')}>
                  <Text style={styles.customBtnText}>Yes</Text>
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

  bottom: {
    height: '90%',
    alignItems: 'center', 
    // backgroundColor: 'gray',
  },


  title: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },

  headerFirstLine: {
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  headerSecondLine: {
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  


  
  bulletPoints: {
    flexDirection: 'row',
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
    width: Dimensions.get('window').width/2.5,
    height: Dimensions.get('window').height/13.5,
  },


});