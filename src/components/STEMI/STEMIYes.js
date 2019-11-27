import React, {Fragment} from "react";
import { Linking, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

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

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:7149448364` }
    else {phoneNumber = `telprompt:7149448364` }
    Linking.openURL(phoneNumber);
  }
  
  render() { 
    return (  
      <View style={styles.container}>

        <View style={styles.top}> 
          <Text style={styles.title}>STEMI</Text>
          <Divider style={{backgroundColor: '#CDCDCD', marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 1.5 }} />
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
                  <Text style={{ fontSize: Dimensions.get('window').height/37, color: 'white', fontWeight: 'bold' }}> Call STEMI Consult</Text>
                </View>
                <Text style={{ marginTop: Dimensions.get('window').height/150, color: 'white', fontSize: Dimensions.get('window').height/45, fontWeight: '400'}}>x6-8282</Text>
              </TouchableOpacity>
            </View>
        </View>


        <View style={styles.bottom}>
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
  middle: {
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    height: '45%',
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: Dimensions.get('window').height/70,
    fontSize: Dimensions.get('window').height/32.5,
  },
  textFirst: {
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
    fontSize: Dimensions.get('window').height/32,
  },
  textSecond: {
    fontWeight: '500',
    textAlign: 'center',
    marginTop: Dimensions.get('window').height/70,
    fontSize: Dimensions.get('window').height/37,
  }
})