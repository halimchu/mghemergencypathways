import React, {Fragment} from "react";
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class CardiacArrest extends React.Component {
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

  // image () {
  //   return (
  //     Dimensions.get('window').width === 375 && Dimensions.get('window').height === 812 
  //     &&
  //     Dimensions.get('window').width === 414 && Dimensions.get('window').height === 896
      
  //     ? 

  //     <Image
  //       source={require('../../../assets/CardiacArrest1000x1500.png')}
  //       style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/.6}}
  //     /> 
      
  //     : 
    
  //     <Image
  //       source={require('../../../assets/CardiacArrest1000x1500.png')}
  //       style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/.5}}
  //     />
  //   )
  // }

  

  IPhone375x812 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 812) {
      return (
        <Image
          source={require('../../../assets/CardiacArrest3000x6000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/.7}}
        />
      )
    }
  }

  IPhone414x896 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 896) {
      return (
        <Image
          source={require('../../../assets/CardiacArrest3000x6000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/.7}}
        />
      )
    }
  }

  IPhone375x667 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 667) {
      return (
        <Image
          source={require('../../../assets/CardiacArrest3000x6000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/.56 }}
        />
      )
    }
  }

  IPhone414x736 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 736) {
      return (
        <Image
          source={require('../../../assets/CardiacArrest3000x6000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/.56 }}
        />
      )
    }
  }






  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <ScrollView maximumZoomScale={2}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>{Dimensions.get('window').width}</Text>
            <Text>{Dimensions.get('window').height}</Text>


            {this.IPhone375x812()}
            {this.IPhone414x896()}
            {this.IPhone375x667()}
            {this.IPhone414x736()}


        
           


            {/* <Image
              source={require('../../../assets/acls1000x2000.png')}
              style={{width: Dimensions.get('window').width/1, height: Dimensions.get('window').height/.57}}
              // style={{width: 350, height: 425}}
            /> */}
          </View>
        </ScrollView>
      </SafeAreaView>


    //   <SafeAreaView style={{}}>
    //   <ScrollView>
    //     <View style={{alignItems: 'center', }}>
    //       <View style={{justifyContent: 'center', alignItems: 'center', width: 120, height: 120, backgroundColor: 'lightblue'}}>
    //         <Text>Start CPR</Text>
    //         <Text>Give oxygen</Text>
    //         <Text>Attach monitor</Text>
    //       </View>
    //       <View style={{borderColor: 'black', borderWidth: 2, height: 30,}}></View>
    //         <Icon name="md-arrow-dropdown" size={35} color="black" />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({

  });