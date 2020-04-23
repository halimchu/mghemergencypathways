import React from 'react'
import { Image, Linking, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class ContactUs extends React.Component {
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
          <View style={{marginLeft: Dimensions.get('window').width/25, paddingRight: Dimensions.get('window').width/40, }}>

              <Text style={styles.title}>Contact Us</Text>

              <View style={{marginTop: Dimensions.get('window').height/50,}}></View>


              <Text style={styles.text}>If you have any questions or would like to provide feedback about the app, please contact us at: </Text>
              <TouchableOpacity
                style={styles.customBtnSendFeedback}
                onPress={ () => Linking.openURL('mailto:hchu3@mgh.harvard.edu')} >
                <Text style={styles.customBtnTextSendFeedback}>hctransformationlab@partners.org</Text>
              </TouchableOpacity>


              <View style={{marginTop: Dimensions.get('window').height/50,}}></View>

              <Text style={styles.text}>Learn more about the MGH Healthcare Transformation Lab and our innovation work at:</Text>
              <TouchableOpacity
                style={styles.customBtnSendFeedback}
                onPress={ () => Linking.openURL('http://healthcaretransformation.org/')} >
                <Text style={styles.customBtnTextSendFeedback}>http://healthcaretransformation.org/</Text>
              </TouchableOpacity>


              
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
  customBtnTextSendFeedback: {
    fontSize: Dimensions.get('window').width/25,
    color: 'blue',
  },
})