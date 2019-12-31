import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 

export default class InpatientConditions extends React.Component {
  static navigationOptions = ({ navigation }) => {
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
      <Button 
        icon={
          <View style={{ marginRight: Dimensions.get('window').width/75 }}>
            <Icon name="ios-information-circle-outline" size={Dimensions.get('window').height/26} color="white" />
          </View>
        }
        onPress={ () => navigation.navigate('DevelopmentTeam') }
        type='clear'
      />
    )
    
    return {
      headerTitle,
      headerRight,    
      headerStyle: {backgroundColor: '#709CD0'},  
    }
  }

  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>

          <Text style={styles.title}>INPATIENT EMERGENCIES</Text>
          <SafeAreaView style={styles.button}>
            <TouchableOpacity
              style={styles.customBtnBG} 
              onPress={() => this.props.navigation.navigate('Stroke1')}>
              <Text style={styles.customBtnText}>Stroke</Text>
            </TouchableOpacity>
          </SafeAreaView>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.customBtnBG} 
              onPress={() => this.props.navigation.navigate('Pert')}>
              <Text style={styles.customBtnText}>PE</Text>
            </TouchableOpacity>
          </View>
        
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.customBtnBG} 
              onPress={() => this.props.navigation.navigate('RICUPatent')}>
              <Text style={styles.customBtnText}>RICU (Airway)</Text>
            </TouchableOpacity>
          </View>
        
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.customBtnBG} 
              onPress={() => this.props.navigation.navigate('STEMI')}>
              <Text style={styles.customBtnText}>STEMI</Text>
            </TouchableOpacity>
          </View>
        </View>


        
          <View style={styles.bottom}>
            <Text style={styles.title}>ACLS</Text>
            <View style={{marginTop: Dimensions.get('window').height/100,}}>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('CardiacArrest')}>
                  <Text style={styles.customBtnText}>Cardiac Arrest</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('Bradycardia')}>
                <Text style={styles.customBtnText}>Bradycardia</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('Tachycardia')}>
                <Text style={styles.customBtnText}>Tachycardia</Text>
              </TouchableOpacity>
            </View>
          </View>
      </SafeAreaView>
    )
  }
}
  
const styles = StyleSheet.create({
  container: {
    // margin: Dimensions.get('window').height/150,
  },
  top: {
    height: '55%',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Dimensions.get('window').height/55, 
    // marginBottom: Dimensions.get('window').height/150, 
    backgroundColor: '#f0f0f0',
    // backgroundColor: 'pink',
  },
  bottom: {
    height: '45%',
    alignItems: 'center', 
    paddingTop: Dimensions.get('window').height/80, 
    backgroundColor: '#f0f0f0',
    // backgroundColor: 'pink'
  },

  title: {
    fontWeight: '600',
    color: '#333333',
    fontSize: Dimensions.get('window').height/35, 
  },
  button: {
    marginTop: Dimensions.get('window').height/100
  },
  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/40
  },
  customBtnBG: {
    backgroundColor: "#69c8a1",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 4,
    shadowOpacity: .15, 
    width: Dimensions.get('window').width/1.06,
    height: Dimensions.get('window').height/11,
  }
})