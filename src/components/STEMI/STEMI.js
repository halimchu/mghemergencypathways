import React from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'

export default class STEMI extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="white" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />

          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />

          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />
      </View>
    )

    headerTitle = (
      <View>
        <Text style={{ 
          fontSize: Dimensions.get('window').height/43, 
          marginTop: Dimensions.get('window').height/200, 
          color: 'white', fontWeight: 'bold', 
          textAlign: 'center'}}>MGH STAT</Text>
      </View>
    )
      
    let headerRight = (
      <View style={{ flexDirection: 'row' }}>
        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={32} color="rgba(0, 0, 0, 0)"  />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />

        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={32} color="white" />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />
      </View>
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
        <View key={item} style={{ flexDirection: 'row', marginRight: Dimensions.get('window').width/20, marginLeft: Dimensions.get('window').width/10 }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>  
            <Text style={{flex: 1, flexWrap: 'wrap'}}>
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
          <Divider style={styles.divider} />
        </View>

        <View style={styles.titleBlock}>
          <Text style={styles.header}>STEMI Criteria</Text>
        </View>

        <View style={styles.middleOne}>
          {this.firstFn()}
          {this.secondFn()}
          {this.thirdFn()}
        </View>

        <View style={styles.middleTwo}>
          <View style={{ marginTop: Dimensions.get('window').height/100 }}>
            <Text style={styles.headerBottom}>One or more STEMI criteria?</Text>
          </View>
        </View>


        <View style={styles.bottom}>
          <SafeAreaView style={{ marginBottom: Dimensions.get('window').height/150 }}>
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
  titleBlock: {
    height: '6%',
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  middleOne: {
    height: '50%',
    justifyContent: 'center',
    // backgroundColor: 'pink'
  },
  middleTwo: {
    height: '9%',
    justifyContent: 'center',
    // backgroundColor: 'purple'
  },
  bottom: {
    height: '25%',
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },


  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  header: {
    color: 'gray',
    fontWeight: '500',
    color: '#515254',
    marginBottom: Dimensions.get('window').height/70,
    fontSize: Dimensions.get('window').height/32.5,
  },
  headerBottom: {
    textAlign: 'center', 
    fontSize: Dimensions.get('window').height/34.5, 
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
    marginTop: Dimensions.get('window').height/47,
  },
  customBtnBG: {
    backgroundColor: "#69c8a1",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 8,
    width: Dimensions.get('window').width/1.13,
    height: Dimensions.get('window').height/12,
  },
})