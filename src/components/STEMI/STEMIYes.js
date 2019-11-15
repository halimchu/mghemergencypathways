import React, {Fragment} from "react";
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class STEMI2 extends React.Component {

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
  
  render() { 
    return (  
      <View style={styles.container}>

        <View style={styles.top}>
          <Text style={styles.title}>STEMI</Text>
          <Divider style={{backgroundColor: '#CDCDCD', marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 1.5 }} />
        </View>


        <View style={{ alignItems: 'center'}}>
          <View style={{ alignItems: 'center', marginTop: 120, width: 300, height: 150, backgroundColor: 'rgba(200, 0, 0, 0.5)'}}>
            <Text style={styles.textFirst}>Call Cath Emergency</Text>
            <Text style={styles.textFirst}>STEMI Line</Text>
            <Text style={styles.textFirst}>x6-8282</Text>
          </View>
        </View>

        <View style={{ marginTop: 120 }}>
          <Text style={styles.textFirst}>Enter SmartPhrase in Epic</Text>
          <Text style={styles.textFirst}>Start .AcuteMIMGH</Text>
          <Text style={styles.textSecond}>(to generate relevant</Text>
          <Text style={styles.textSecond}>information to clinical team)</Text>
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


  textFirst: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },
  textSecond: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/38,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  }

});