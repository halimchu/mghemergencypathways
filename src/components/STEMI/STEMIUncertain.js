import React, {Fragment} from "react";
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import { ThemeProvider, Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 

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
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>STEMI</Text>
          <Divider style={{ backgroundColor: '#CDCDCD', marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 1.5 }} />
        </View>

        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 40,
                  backgroundColor: '#B62130',
                  height: Dimensions.get('window').height/8.5,
                  width: Dimensions.get('window').width/1.12,
                }}
                onPress={()=>{this.dialCall()}
              }
              >
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="phone" size={24} color="white" />
                <Text style={{ fontSize: Dimensions.get('window').height/37, color: 'white', fontWeight: 'bold' }}> Call STAT General</Text>
              </View>
                <Text style={{ fontSize: Dimensions.get('window').height/37, color: 'white', fontWeight: 'bold' }}>Cardiology Consult</Text>
              <Text style={{ marginTop: Dimensions.get('window').height/150, color: 'white', fontSize: Dimensions.get('window').height/45, fontWeight: '400'}}></Text>
            </TouchableOpacity>
          </View>


        <View style={styles.bottom}>
          <Text style={styles.textFirst}>STAT Page General</Text>
          <Text style={styles.textSecond}>Cardiology Consult:</Text>
          <Text style={styles.textSecond}>"Suspect Acute MI"</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: '7%',
    // backgroundColor: 'yellow'
  },
  bottom: {
    height: '93%',
    paddingTop: Dimensions.get('window').height/3.8,
    // backgroundColor: 'pink'
  },

  title: {
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },

  textFirst: {
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textSecond: {
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: Dimensions.get('window').height/75
  }
})