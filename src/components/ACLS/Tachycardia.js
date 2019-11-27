import React, {Fragment} from "react";
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class Tachycardia extends React.Component {
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

  IPhone375x812 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 812) {
      return (
        <Image
          source={require('../../../assets/Tachycardia4000x6000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/1 }}
        />
      )
    }
  }

  IPhone414x896 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 896) {
      return (
        <Image
          source={require('../../../assets/Tachycardia4000x6000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.16}}
        />
      )
    }
  }

  IPhone375x667 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 667) {
      return (
        <Image
          source={require('../../../assets/Tachycardia4000x6000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        />
      )
    }
  }

  IPhone414x736 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 736) {
      return (
        <Image
          source={require('../../../assets/Tachycardia4000x6000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        />
      )
    }
  }

  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <ScrollView maximumZoomScale={2.5}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>

          <Text>{Dimensions.get('window').width}</Text>
          <Text>{Dimensions.get('window').height}</Text>

            {this.IPhone375x812()}
            {this.IPhone414x896()}
            {this.IPhone375x667()}
            {this.IPhone414x736()}

            </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({

  });