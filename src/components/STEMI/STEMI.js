import React, {Fragment} from "react";
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class STEMI extends React.Component {
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
      'ST depression in at least two leads V1-V4',
      'Multi-lead ST depression with ST elevation in aVR',
      'Left Bundle Branch Block with acute symptoms'
    ]
  }

  state2 = {
    data: [
      '≥1 mm in at least two contiguous leads',
      '≥2 mm (men) or ≥ 1.5 mm (women) in V2-V3'
    ]
  }

  firstFn() {
    return (
        <View style={{ flexDirection: 'row', marginLeft: Dimensions.get('window').height/40}}>
        <Text style={styles.bulletPoint}>{`\u2022`}</Text>
        <Text>
          <Text style={{ fontSize: Dimensions.get('window').height/34.5, fontWeight: 'bold' }}>NEW </Text>
          <Text style={styles.bulletPointText}>ST elevation</Text>
        </Text>
      </View>
    )
  }

  secondFn() {
    return (
      this.state2.data.map((item) => (
        <View key={item} style={{ flexDirection: 'row', marginLeft:40, }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>  
            <Text style={{flex:1, flexWrap: 'wrap'}}>
            <Text style={{ fontSize: Dimensions.get('window').height/34.5 }}> 
              {item}
            </Text>
          </Text>   
        </View>
      ))
    )
  }

  thirdFn() {
    return (
      this.state.data.map((item) => (
        <View key={item} style={ styles.bulletPoints }>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text>
              <Text style={{ 
                fontWeight: 'bold', 
                fontSize: Dimensions.get('window').height/34.5, 
              }}>
                NEW
              </Text>
              <Text> </Text>
              <Text style={{ 
                fontWeight: '300',
                fontSize: Dimensions.get('window').height/34.5,
              }}>
                {item}
              </Text>
            </Text>
          </View>
        </View>        
    )))
  }


  render() { 
    return (  
      <SafeAreaView style={styles.container}>

        <View style={styles.top}>
          <Text style={styles.title}>STEMI</Text>
          <Divider style={{ backgroundColor: '#CDCDCD', marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 1.5 }} />
        </View>



        <View style={styles.middle}>
          <Text style={styles.header}>STEMI Criteria</Text>
          {this.firstFn()}
          {this.secondFn()}
          {this.thirdFn()}
        </View>




        <View style={styles.bottom}>
          <Text style={{ marginBottom: 15, fontSize: Dimensions.get('window').height/34.5, textAlign: 'center' }}>One or more STEMI criteria?</Text>
          <SafeAreaView style={{ marginBottom: 5 }}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('STEMIYes')}>
                <Text style={styles.customBtnText}>Yes</Text>
              </TouchableOpacity>
          </SafeAreaView>

        
          <TouchableOpacity
            style={styles.customBtnBG} 
            onPress={() => this.props.navigation.navigate('STEMIUncertain')}>
            <Text style={styles.customBtnText}>Uncertain</Text>
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
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontSize: Dimensions.get('window').height/32.5,
  },
  header: {
    color: 'gray',
    fontWeight: '500',
    color: '#515254',
    textAlign: 'center',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 15,
    fontSize: Dimensions.get('window').height/32.5,
  },


  bulletPoints: {
    flexDirection: 'row',
    marginRight: 40,
    marginTop: Dimensions.get('window').height/55,
    marginLeft: Dimensions.get('window').height/40,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
    marginRight: Dimensions.get('window').height/275
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/34.5,
  },
  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/62,
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