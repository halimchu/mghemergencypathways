import React, {Fragment} from "react";
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class STEMI3 extends React.Component {

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
          <Divider style={{ backgroundColor: '#CDCDCD', marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 1.5 }} />
        </View>


        <View style={{ marginTop: 120 }}>
          <Text style={styles.text}>STAT page General</Text>
          <Text style={styles.text}>Cardiology Consult:</Text>
          <Text style={styles.text}>"Suspect Acute MI"</Text>
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