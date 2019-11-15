import React, {Fragment} from "react";
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class Pert extends React.Component {
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
  
  state = {
    data: [
      'PE with abnormal vital signs (tachycardia or hypotension)',
      'Evidence of right heart strain (echo, EKG or positive biomarkers)',
      'Central or Saddle PE'
    ]
  }

  render() { 
    return (  
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.titleFirstLine}>Pulmonary Embolism</Text>
          <Text style={styles.titleSecondLine}>Response Team</Text>
        </View>

        <Divider style={{ backgroundColor: '#CDCDCD', marginLeft: 10, marginRight: 10, height: 1.5 }} />

        <View style={styles.middleOne}>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.headerOne}>Large Pulmonary Embolus?</Text>
            {this.state.data.map((item) => (
                <View key={item} style={ styles.bulletPoints }>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                    <Text style={styles.bulletPointText}>{item}</Text>
                  </View>
                </View>        
            ))} 
          </View>
        </View>


        <View style={styles.middleTwo}>
          <Text style={{ fontSize: Dimensions.get('window').height/33, fontWeight: '500', marginBottom: 10 }}>Call x4-PERT (4-7378)</Text>
          <Text style={{ fontSize: Dimensions.get('window').height/37}}>Pulmonary Embolism</Text>
          <Text style={{ fontSize: Dimensions.get('window').height/37}}>Response Team (PERT)</Text>
        </View>

    

          <View style={styles.bottom}>
            <SafeAreaView>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('PertLabs')}>
                  <Text style={styles.customBtnText}>Next Steps</Text>
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
    height: '11%',
    // backgroundColor: 'yellow'
  },
  middleOne: {
    height: '51%',
    // backgroundColor: '#eee',
  },
  middleTwo: {
    height: '23%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  bottom: {
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
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

  headerOne: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/32.5,
    color: 'gray',
    fontWeight: '500',
    color: '#515254',
    textAlign: 'center',
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
  },


  bulletPoint: {
    // fontSize: 20,
    fontSize: Dimensions.get('window').height/40,
    color: 'gray'
  },

  bulletPointText: {
    // fontSize: 25,
    fontSize: Dimensions.get('window').height/33.7,
    marginLeft: 4,
    fontWeight: '300'
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
    width: Dimensions.get('window').width/1.13,
    height: Dimensions.get('window').height/13.5,
  },


});