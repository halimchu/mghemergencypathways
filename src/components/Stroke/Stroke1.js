import React, {Fragment} from "react";
import { Linking, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import { ThemeProvider, Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class Sroke1 extends React.Component {
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
        <Text style={{ fontSize: Dimensions.get('window').height/45, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>MGH STAT</Text>
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

  state = {
    dataOne: [
      'Facial Drooping?',
      'Arm or Leg Weakness?',
      'Speech Difficulties?'
    ],
    dataTwo: [
      'Obtain Last Seen Well (LSW) time',
      'Obtain fingerstick glucose: Treat <50 or >400',
    ]
  }
  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Stroke</Text>
          <Divider style={{ backgroundColor: '#CDCDCD', marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 1.5 }} />
        </View>

        <View style={styles.middle}>
            <Text style={styles.header}>Concern for Stroke?</Text>
            {this.state.dataOne.map((item) => (
                <View key={item} style={ styles.bulletPoints }>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                    <Text style={styles.bulletPointText}>{item}</Text>
                  </View>
                </View>        
            ))} 
          </View>

        <View style={styles.middleTwo}>
          <View style={{ alignItems: 'center'}}>

            <Text style={styles.header}>Initial Steps</Text>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
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
                  <Text style={{ fontSize: Dimensions.get('window').height/37, color: 'white', fontWeight: 'bold' }}> Call Acute Stroke Consult</Text>
                </View>
                <Text style={{ marginTop: Dimensions.get('window').height/150, color: 'white', fontSize: Dimensions.get('window').height/45, fontWeight: '400'}}>x6-3333</Text>
              </TouchableOpacity>
            </View>
          </View>











          {this.state.dataTwo.map((item) => (
              <View key={item} style={ styles.bulletPointsTwo }>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text style={styles.bulletPointText}>{item}</Text>
                </View>
              </View>        
          ))} 
        </View>



        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.customBtnBG} 
            onPress={() => this.props.navigation.navigate('Stroke2')}>
            <Text style={styles.customBtnText}>Next Steps</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
    height: '28%',
    // backgroundColor: 'green'
  },
  middleTwo: {
    height: '47%',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7'
  },
  bottom: {
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontSize: Dimensions.get('window').height/32.5,
  },
  header: {
    fontWeight: 'bold',
    marginLeft: 25,
    fontSize: Dimensions.get('window').height/33,
  },
  headerText: {
    color: 'gray',
    fontWeight: '500',
    color: '#515254',
    textAlign: 'center',
    marginLeft: 12,
    marginRight: 12,
    fontSize: Dimensions.get('window').height/32.5,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/10,
    marginTop: Dimensions.get('window').height/60,
  },
  bulletPointsTwo: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/10,
    marginRight: Dimensions.get('window').width/10,
    marginTop: Dimensions.get('window').height/40,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    fontWeight: '300',
    marginLeft: Dimensions.get('window').height/150,
    fontSize: Dimensions.get('window').height/34.5,
  },
  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    textAlignVertical: "center",
    marginTop: Dimensions.get('window').height/62,
    fontSize: Dimensions.get('window').height/35,
  },
  customBtnBG: {
    backgroundColor: "#69c8a1",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 8,
    width: Dimensions.get('window').width/1.13,
    height: Dimensions.get('window').height/13.5,
  },
})