import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class About extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <MaterialIcons name="menu" size={Dimensions.get('window').height/26} color="white" />
              </View>
            }
            onPress={ () => navigation.openDrawer()}
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
              <Icon name="md-home" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)"  />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />

        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={Dimensions.get('window').height/29} color="white" />
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
      headerBackground: (
        <LinearGradient
            colors={['#23A7C2', '#2D7C93',]}
            style={{ flex: 1 }}
        />
      ),   
    }
  }


  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <ScrollView>
            <Text style={styles.title}>ABOUT THE APP</Text>

            <View style={{marginBottom: Dimensions.get('window').height/50, marginLeft: Dimensions.get('window').width/25, paddingRight: Dimensions.get('window').width/25, }}>
              <View style={{marginTop: Dimensions.get('window').height/50,}}>
                <Text style={styles.text}>
                  The MGH STAT app is a reference of clinical protocols, resources, and content for physicians and advanced practice providers as they manage patients with acutely life threatening illnesses. All algorithms and protocols (CVA, PE, RICU, STEMI) are developed and vetted by their respective MGH specialty specific committees. All ACLS content in the app is material developed, studied, and vetted by the American Heart Association (AHA). The AHA has given permission and a license to use their ACLS materials for the purposes of this app. We want to thank each of them for their collaboration in this effort.
                </Text>
              </View>
              <Text style={styles.bold}>Creators</Text>
              <Text style={styles.text}>Andrew Chu, MD, MPH</Text>
              <Text style={styles.text}>Jared Conley, MD, PhD, MPH</Text>


              <Text style={styles.bold}>Significant Contributors</Text>
              <Text style={styles.text}>Halim Chu</Text>
              <Text style={styles.text}>Josh Ziperstein, MD</Text>
              <Text style={styles.text}>Blake Niccum, MD</Text>
              <Text style={styles.text}>Melvin Joice, MD</Text>
              <Text style={styles.text}>Matthew Tung, MD</Text>
              <Text style={styles.text}>Eric Isselbacher, MD, MHCDS</Text>


              <Text style={styles.bold}>MGH Specialty Committee Contributors</Text>
              <Text style={styles.text}>Christopher Anderson MD, MMSc</Text>
              <Text style={styles.text}>Joseph Garasic, MD</Text>
              <Text style={styles.text}>Christopher Kabrhel, MD, MPH</Text>
              <Text style={styles.text}>Jean Kwo, MD</Text>
              <Text style={styles.text}>Kenneth Rosenfield, MD, MHCDS</Text>
              <Text style={styles.text}>Elizabeth Temin, MD, MPH</Text>

              <View style={{marginTop: Dimensions.get('window').height/70,}}>
                <Text style={styles.text}>We also appreciate the contributions of the Department of Medicine leadership.</Text>
              </View>


              <Text style={styles.bold}>Partners</Text>
              <Text style={styles.text}>MGH Healthcare Transformation Lab (HTL)</Text>
              <Text style={styles.text}>American Heart Association (AHA)</Text>
              <Text style={styles.text}>MGH Housestaff Innovation Studio</Text>


              
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: Dimensions.get('window').height/60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4d4d4d',
    fontSize: Dimensions.get('window').width/23,
  },
  bold: {
    marginTop: Dimensions.get('window').height/60,
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').width/23,
    color: '#4d4d4d',
  },
  text: {
    fontSize: Dimensions.get('window').width/25,
    color: '#636363',
  },
})