import React, {Fragment} from "react";
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class STEMI extends React.Component {
  
  state = {
    data: [
      'ST depression in at least two leads V1-V4',
      'Multi-lead ST depression with ST elevation in aVR',
      'Left Bundle Branch Block with acute symptoms'
    ]
  }
  
  render() { 
    return (  
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>STEMI</Text>
          <Divider style={{ backgroundColor: '#CDCDCD', marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 1.5 }} />
        </View>



        <View style={styles.middle}>
          <Text style={styles.header}>STEMI Criteria</Text>
            <View style={{ flexDirection: 'row', marginLeft: 40 }}>
              <Text style={styles.bulletPoint}>{`\u2022`}</Text>
              <Text>
                <Text style={{ fontSize: Dimensions.get('window').height/34.5, fontWeight: 'bold' }}>NEW </Text>
                <Text style={styles.bulletPointText}>ST elevation</Text>
              </Text>
            </View>
        
          <View style={{ flexDirection: 'row', marginLeft: 70 }}>
              <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text>
              <Text style={{ fontSize: Dimensions.get('window').height/34.5, }}> ≥1 mm in at least two contiguous leads</Text>
            </Text>
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 70 }}>
              <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text>
              <Text style={{ fontSize: Dimensions.get('window').height/34.5, }}> ≥2 mm (men) or ≥ 1.5 mm (women) in V2-V3</Text>
            </Text>
          </View>
        
          {this.state.data.map((item) => (
              <View key={item} style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text>
                    <Text style={{ fontSize: Dimensions.get('window').height/34.5, fontWeight: 'bold' }}>NEW </Text>
                    <Text style={styles.bulletPointText}>{item}</Text>
                  </Text>
                </View>
              </View>        
          ))} 
        </View>




        <View style={styles.bottom}>
          <Text style={{ marginBottom: 15, fontSize: Dimensions.get('window').height/34.5, textAlign: 'center' }}>One or more STEMI criteria?</Text>
          <SafeAreaView style={{ marginBottom: 5 }}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('STEMI2')}>
                <Text style={styles.customBtnText}>Yes</Text>
              </TouchableOpacity>
          </SafeAreaView>

          <SafeAreaView>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('STEMI3')}>
                <Text style={styles.customBtnText}>Uncertain</Text>
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
    height: '60%',
    // backgroundColor: 'pink'
  },
  bottom: {
    height: '30%',
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
    color: 'gray',
    fontWeight: '500',
    color: '#515254',
    textAlign: 'center',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 15
  },


  bulletPoint: {
    // fontSize: 20,
    fontSize: Dimensions.get('window').height/40,
    color: 'gray',
    marginRight: 5
  },
  bulletPointText: {
    fontSize: Dimensions.get('window').height/34.5,
    marginLeft: 2,
    fontWeight: '300'
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
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