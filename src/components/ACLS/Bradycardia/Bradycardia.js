import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import Component from './../Component'
import DosesDetails from './DosesDetails'

export default class BradyCardia extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/29} color="white" />
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
      headerStyle: {backgroundColor: '#709CD0'},      
    }
  }

  IPhone375x812 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 812) {
      return (
        <Image
          source={require('../../../../assets/Bradycardia3000x4000.png')}
          style={{marginBottom: Dimensions.get('window').height/70, width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
        />
      )
    }
  }

  IPhone414x896 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 896) {
      return (
        <Image
          source={require('../../../../assets/Bradycardia3000x4000.png')}
          style={{marginBottom: Dimensions.get('window').height/70, width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
        />
      )
    }
  }

  IPhone375x667 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 667) {
      return (
        <Image
          source={require('../../../../assets/Bradycardia3000x4000.png')}
          style={{marginBottom: Dimensions.get('window').height/70, width: Dimensions.get('window').width, height: Dimensions.get('window').height/.85}}
        />
      )
    }
  }

  IPhone414x736 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 736) {
      return (
        <Image
          source={require('../../../../assets/Bradycardia3000x4000.png')}
          style={{marginBottom: Dimensions.get('window').height/70, width: Dimensions.get('window').width, height: Dimensions.get('window').height/.85 }}
        />
      )
    }
  }



  constructor(props) {
    super(props)
    this.state = {
      imageHeight: 0,
      dosesDetailsView: 0,
      dosesDetailsHidden: true,
    }
  }


  onPressDosesDetailsHidden = () => {
    this.setState({ dosesDetailsHidden: !this.state.dosesDetailsHidden})
  }

  
  measureImageView = (event) => {
    this.setState({
      imageHeight: event.nativeEvent.layout.height
    })
  }
  measureDosesDetailsView = (event) => {
    this.setState({
      dosesDetailsView: event.nativeEvent.layout.height
    })
  }


  goToEnd = () => {
    const added = this.state.imageHeight + this.state.dosesDetailsView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <ScrollView 
          maximumZoomScale={2.5}
          ref={(scroller) => {this.scroller = scroller}}
        >

          <View styles={styles.top}>
            <Text style={styles.titleFirstLine}>Adult Bradycardia</Text>
            <Text style={styles.titleSecondLine}>with a Pulse Algorithm</Text>
            <Divider style={styles.divider} />
          </View>
              
          <View onLayout={this.measureImageView}>
            {this.IPhone375x812()}
            {this.IPhone414x896()}
            {this.IPhone375x667()}
            {this.IPhone414x736()}
          </View>


          <View onLayout={this.measureDosesDetailsView}>
            <Component
              goToNextComponent={this.goToEnd} 
              toggle={this.onPressDosesDetailsHidden} 
              hidden = {this.state.dosesDetailsHidden}
              component={<DosesDetails />}
              buttonTitle='Doses/Details'
            />
          </View>


          <View style={{
            marginTop: Dimensions.get('window').height/50,
            alignItems: 'center'
          }}>
            <Text style={{fontSize: Dimensions.get('window').height/70,}}>
              American Heart Association Guidelines 2015
            </Text>
          </View>



        </ScrollView>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleFirstLine: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    paddingTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/33,
  },
  titleSecondLine: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    fontSize: Dimensions.get('window').height/33,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
})