import React, {Fragment} from "react";
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class STEMI2 extends React.Component {

  
  render() { 
    return (  
      <View style={styles.container}>

        <View style={styles.top}>
          <Text style={styles.title}>STEMI</Text>
          <Divider style={{ backgroundColor: '#CDCDCD', marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 1.5 }} />
        </View>


        <View style={{ marginTop: 120 }}>
          <Text style={styles.text}>Call Cath Emergency</Text>
          <Text style={styles.text}>STEMI Line</Text>
          <Text style={styles.text}>x6-8282</Text>
        </View>

        <View style={{ marginTop: 120 }}>
          <Text style={styles.text}>Start .AcuteMIMGH SmartPhrase in EPIC</Text>
          <Text style={styles.text}>to provide relevant</Text>
          <Text style={styles.text}>information to clinical team</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  top: {
    height: '10%',
  },

  title: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },


  text: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  }

});