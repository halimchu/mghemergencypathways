import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import Component from './../Component'
import DosesDetails from './DosesDetails'
import LinearGradient from 'react-native-linear-gradient';

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
          textAlign: 'center'}}>ACLS</Text>
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


  IPhone414x896 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 896) {
      return (
        <Image
          source={require('../../../../assets/Bradycardia3000x2300.png')}
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.5}}
        />
      )
    }
  }

  IPhone375x812 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 812) {
      return (
        <Image
          source={require('../../../../assets/Bradycardia3000x2300.png')}
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.5}}
        />
      )
    }
  }

  IPhone414x736 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 736) {
      return (
        <Image
          source={require('../../../../assets/Bradycardia3000x2300.png')}
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.22 }}
        />
      )
    }
  }

  IPhone375x667 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 667) {
      return (
        <Image 
          source={require('../../../../assets/Bradycardia3000x2300.png')}
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.22}}
        />
      )
    }
  } 

  IPhone320x568 () {
    if (Dimensions.get('window').width === 320 && Dimensions.get('window').height === 568) {
      return (
        <Image
          source={require('../../../../assets/Bradycardia3000x2300.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.23 }}
        />
      )
    }
  }

  IPhoneNotYet () {
    return (
      <Image
        source={require('../../../../assets/CardiacArrest3000x2700.png')}
        style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.5}}
      />
    )
  }
  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <ScrollView 
          maximumZoomScale={2.5}
          ref={(scroller) => {this.scroller = scroller}}
        >

          <View>
            <Text style={styles.titleFirstLine}>Bradycardia with a Pulse</Text>
            <Divider style={styles.divider} />
          </View>

          {/* <Text>{Dimensions.get('window').width}</Text>
          <Text>{Dimensions.get('window').height}</Text> */}
              
          <View onLayout={this.measureImageView}>
            {
            
                this.IPhone375x812() || this.IPhone414x896() || this.IPhone414x736() || this.IPhone375x667() || this.IPhone320x568()
                
                ? 
                
                this.IPhone375x812() || this.IPhone414x896() || this.IPhone414x736() || this.IPhone375x667() || this.IPhone320x568()
                
                : 
                
                this.IPhoneNotYet()
            
            }  
          </View>



          <View style={{marginBottom: Dimensions.get('window').height/60}}></View>


          <View onLayout={this.measureDosesDetailsView}>
            <Component
              goToNextComponent={this.goToEnd} 
              toggle={this.onPressDosesDetailsHidden} 
              hidden = {this.state.dosesDetailsHidden}
              component={<DosesDetails />}
              buttonTitle='Doses/Details'
            />
          </View>

          
          <View style={{ alignItems: 'center', marginTop: Dimensions.get('window').height/50 }}>
            <Text style={{ fontSize: Dimensions.get('window').height/60 }}>American Heart Association Guidelines 2018</Text>
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
    fontSize: Dimensions.get('window').height/38,
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
    marginBottom: Dimensions.get('window').height/150, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
})