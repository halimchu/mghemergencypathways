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
            <Text style={styles.bold}>About the App</Text>
            <Text style={styles.text}>
              The MGH STAT app is a reference of clinical protocols, resources, and content for physicians and advanced practice providers as they manage patients with acutely life threatening illnesses. All algorithms and protocols (CVA, PE, RICU, STEMI) are developed and vetted by their respective MGH specialty specific committees. All ACLS content in the app is material developed, studied, and vetted by the American Heart Association.
            </Text>
            <Text style={styles.bold}>Creators</Text>
            <Text style={styles.text}>Andrew Chu, MD, MPH</Text>
            <Text style={styles.text}>Jared Conley, MD, PhD, MPH</Text>


            <Text style={styles.bold}>Significant Contributors</Text>
            <Text style={styles.text}>Halim Chu</Text>
            <Text style={styles.text}>Josh Ziperstein, MD</Text>
            <Text style={styles.text}>Blake Niccum, MD</Text>
            <Text style={styles.text}>Melvin Joice, MD</Text>
            <Text style={styles.text}>Matthew Tung, MD</Text>
            <Text style={styles.text}>Eric Isselbacher, MD</Text>


            <Text style={styles.bold}>Partners</Text>
            <Text style={styles.text}>MGH Healthcare Transformation Lab (HTL)</Text>
            <Text style={styles.text}>American Heart Association (AHA)</Text>
            <Text style={styles.text}>MGH Housestaff Innovation Studio</Text>
            <Text style={styles.text}>MGH Laboratory of Computer Science (LCS)</Text>


            <Text style={styles.bold}>Acknowledgements</Text>
            <Text style={styles.text}>
              Special thanks to all the MGH specialty committees (CVA, PE, RICU, STEMI) and the American Heart Association for providing evidence-based guidelines to serve patients in need.
            </Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: Dimensions.get('window').width/25,
  },
  bold: {
    marginTop: Dimensions.get('window').height/60,
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/44
  },
  text: {
    fontSize: Dimensions.get('window').height/47
  },
})