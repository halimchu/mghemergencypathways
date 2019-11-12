import React, {Fragment} from "react";
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class PertLabs extends React.Component {
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
        <Text style={{ fontSize: Dimensions.get('window').height/45, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>MGH EM Pathways</Text>
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

  state = {
    data: [
      'CBC with diff',
      'BMP',
      'LFTs',
      'NT-pro-BNP (or BNP)',
      'Troponin T-hs',
      'D-dimer',
      'CTA chest PE protocol',
      'US LE duplex (bilateral)',
      'PT/INR and PTT',
      'Type and screen',
      'Lactate',
      'ABG',
      'EKG',
      'TTE (Page US Tech if daytime hours)'
    ]
  }


  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.titleFirstLine}>Pulmonary Embolism</Text>
          <Text style={styles.titleSecondLine}>Response Team</Text>
        </View>

        <Divider style={{ backgroundColor: '#CDCDCD', marginLeft: 10, marginRight: 10, height: 1.5 }} />

        <View style={styles.middle}>
          <Text style={styles.header}>Please order labs</Text>
          {this.state.data.map((item) => (
              <View key={item} style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text style={styles.bulletPointText}>{item}</Text>
                </View>
              </View>        
          ))} 
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
    height: '11%',
    // backgroundColor: 'yellow'
  },
  bottom: {
    height: '89%',
    alignItems: 'center', 
    // backgroundColor: 'gray',
  },


  titleFirstLine: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },
  titleSecondLine: {
    fontSize: Dimensions.get('window').height/32.5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  header: {
    // fontSize: 22,
    fontSize: Dimensions.get('window').height/35,
    fontWeight: '500',
    color: '#515254',
    textAlign: 'center',
    marginTop: 17,
    marginBottom: 8
  },


  bulletPoint: {
    fontSize: Dimensions.get('window').height/35,
    color: 'gray'
  },

  bulletPointText: {
    fontSize: Dimensions.get('window').height/35,
    marginLeft: 4,
    fontWeight: '300'
  },

  bulletPoints: {
    flexDirection: 'row',
    marginTop: 9,
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
  }
});