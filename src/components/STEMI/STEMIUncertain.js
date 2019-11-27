import React, {Fragment} from "react";
import { Linking, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'



const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

// 6177268282 STEMI line

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
        
          <View style={{ marginTop: Dimensions.get('window').height/5, alignItems: 'center', }}>
            <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 40,
                  backgroundColor: '#B62130',
                  height: Dimensions.get('window').height/8,
                  width: Dimensions.get('window').width/1.12,
                }}
                onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.mwl?APP=PDPERS&FF=PDA&ACTION=SEARCHRES&SRCHNM=29694') }
              }
              >
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome5Icons name="pager" size={22} color="white" />
                <Text style={{ fontSize: Dimensions.get('window').height/37, color: 'white', fontWeight: 'bold' }}> Page General</Text>
              </View>
              <Text style={{ fontSize: Dimensions.get('window').height/37, color: 'white', fontWeight: 'bold' }}>Cardiology Consult</Text>
              <Text style={{ marginTop: Dimensions.get('window').height/150, color: 'white', fontSize: Dimensions.get('window').height/45, fontWeight: '400'}}>25712</Text>
            </TouchableOpacity>
          </View>
        </View>
     

        <View style={styles.bottom}>
          <Text style={styles.textFirst}>Please write</Text>
          <Text style={styles.textFirst}>"Suspect Acute MI"</Text>
          <Text style={styles.textFirst}>in page</Text>
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
    height: '50%',
    // backgroundColor: 'yellow'
  },
  bottom: {
    height: '50%',
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
  },
  customBtnBG: {
    backgroundColor: "#69c8a1",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 40,
    width: Dimensions.get('window').width/1.2,
    height: Dimensions.get('window').height/8.5,
  },
})