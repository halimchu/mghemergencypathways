import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'

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
    
    return {
      headerTitle,
      headerStyle: {backgroundColor: '#709CD0'},      
    }
  }

  render() { 
    return (  
      <SafeAreaView>
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
              onPress={() => this.props.navigation.navigate('RICU')}>
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
            <View style={{ marginTop: 10}}>
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
  top: {
    height: '55%',
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height/55,
    // backgroundColor: 'yellow',
  },
  bottom: {
    height: '45%',
    alignItems: 'center', 
    paddingTop: Dimensions.get('window').height/45,
    // backgroundColor: 'pink'
  },
  title: {
    fontWeight: '600',
    color: '#303030',
    fontSize: Dimensions.get('window').height/38, 
  },
  button: {
    marginTop: Dimensions.get('window').height/70
  },
  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/35
  },
  customBtnBG: {
    backgroundColor: "#69c8a1",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 8,
    shadowOpacity: .15, 
    width: Dimensions.get('window').width/1.13,
    height: Dimensions.get('window').height/11,
  }
})