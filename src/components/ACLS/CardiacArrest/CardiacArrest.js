import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import CardiacArrestReversibleCauses from './cardiacArrestReverisibleCauses'
import CardiacArrestShockEnergy from './cardiacArrestShockEnergy'
import CardiacArrestDrugTherapy from './cardiacArrestDrugTherapy'
import CardiacArrestROSC from './cardiacArrestROSC'
import CardiacArrestCPR from './cardiacArrestCPR'
import CardiacArrestAdvancedAirway from './cardiacArrestAdvancedAirway'
import Component from './../Component'
import Timer from './Timer'


export default class CardiacArrest extends React.Component {
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
              <Icon name="md-home" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)"  />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />

        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={Dimensions.get('window').height/26} color="white" />
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
          source={require('../../../../assets/CardiacArrest3000x6000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/.7}}
        />
      )
    }
  }

  IPhone414x896 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 896) {
      return (
        <Image
          source={require('../../../../assets/CardiacArrest3000x6000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/.7}}
        />
      )
    }
  }

  IPhone375x667 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 667) {
      return (
        <Image
          source={require('../../../../assets/CardiacArrest3000x6000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/.56 }}
        />
      )
    }
  }

  IPhone414x736 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 736) {
      return (
        <Image
          source={require('../../../../assets/CardiacArrest3000x6000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/.56 }}
        />
      )
    }
  }

  IPhone320x568 () {
    if (Dimensions.get('window').width === 320 && Dimensions.get('window').height === 568) {
      return (
        <Image
          source={require('../../../../assets/CardiacArrest3000x6000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/.56 }}
        />
      )
    }
  }

  constructor(props) {
    super(props)
    this.state = { 
      imageHeight: 0,
      parentView: 0,
      screenHeight: 0,


      reversibleCausesView: 0,
      shockEnergyView: 0,
      drugTherapyView: 0,
      ROSCView: 0,
      CPRQualityView: 0,
      advancedAirwayView: 0,


      reversibleCausesHidden: true,
      shockEnergyHidden: true,
      drugTherapyHidden: true,
      ROSCHidden: true,
      CPRQualityHidden: true,
      advancedAirwayHidden: true
    }
    this.ImageURI = require('../../../../assets/CardiacArrest3000x6000.png')
  }

  onPressReversibleCausesHidden = () => {
    this.setState({ reversibleCausesHidden: !this.state.reversibleCausesHidden})
    this.setState({ shockEnergyHidden: true})
    this.setState({ drugTherapyHidden: true})
    this.setState({ ROSCHidden: true})
    this.setState({ CPRQualityHidden: true})
    this.setState({ advancedAirwayHidden: true})
  }
  onPressShockEnergyHidden = () => {
    this.setState({ reversibleCausesHidden: true})
    this.setState({ shockEnergyHidden: !this.state.shockEnergyHidden})
    this.setState({ drugTherapyHidden: true})
    this.setState({ ROSCHidden: true})
    this.setState({ CPRQualityHidden: true})
    this.setState({ advancedAirwayHidden: true})
  }
  onPressDrugTherapyHidden = () => {
    this.setState({ reversibleCausesHidden: true})
    this.setState({ shockEnergyHidden: true})
    this.setState({ drugTherapyHidden: !this.state.drugTherapyHidden})
    this.setState({ ROSCHidden: true})
    this.setState({ CPRQualityHidden: true})
    this.setState({ advancedAirwayHidden: true})
  }
  onPressROSCHidden = () => {
    this.setState({ reversibleCausesHidden: true})
    this.setState({ shockEnergyHidden: true})
    this.setState({ drugTherapyHidden: true})
    this.setState({ ROSCHidden: !this.state.ROSCHidden})
    this.setState({ CPRQualityHidden: true})
    this.setState({ advancedAirwayHidden: true})
  }
  onPressCPRQualityHidden = () => {
    this.setState({ reversibleCausesHidden: true})
    this.setState({ shockEnergyHidden: true})
    this.setState({ drugTherapyHidden: true})
    this.setState({ ROSCHidden: true})
    this.setState({ CPRQualityHidden: !this.state.CPRQualityHidden})
    this.setState({ advancedAirwayHidden: true})
  }
  onPressAdvancedAirwayHidden = () => {
    this.setState({ reversibleCausesHidden: true})
    this.setState({ shockEnergyHidden: true})
    this.setState({ drugTherapyHidden: true})
    this.setState({ ROSCHidden: true})
    this.setState({ CPRQualityHidden: true})
    this.setState({ advancedAirwayHidden: !this.state.advancedAirwayHidden})
  }
  scrollToBottom = () => {
    this.scroller.scrollTo({x: 0, y: this.state.screenHeight});
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight })
  }


  measureParentView = (event) => {
    this.setState({
      parentView: event.nativeEvent.layout.height
    })
  }
  measureChildView = (event) => {
    this.setState({
      childHeight: event.nativeEvent.layout.height
    })
  }
  measureImageView = (event) => {
    this.setState({
      imageHeight: event.nativeEvent.layout.height
    })
  }
  measureReversibleCausesView = (event) => {
    this.setState({
      reversibleCausesView: event.nativeEvent.layout.height
    })
  }  
  measureShockEnergyView = (event) => {
    this.setState({
      shockEnergyView: event.nativeEvent.layout.height
    })
  }
  measureDrugTherapyView = (event) => {
    this.setState({
      drugTherapyView: event.nativeEvent.layout.height
    })
  }
  measureROSCView = (event) => {
    this.setState({
      ROSCView: event.nativeEvent.layout.height
    })
  }
  measureCPRQualityView = (event) => {
    this.setState({
      CPRQualityView: event.nativeEvent.layout.height
    })
  }
  measureAdvancedAirwayView = (event) => {
    this.setState({
      advancedAirwayView: event.nativeEvent.layout.height
    })
  }




  scrollToTopOfReversibleCauses = () => {
    let added = this.state.imageHeight + this.state.reversibleCausesView
    this.scroller.scrollTo({x: 0, y: added, animated: true})
  }
  scrollToTopOfShockEnergy = () => {
    const added = this.state.imageHeight + this.state.reversibleCausesView + this.state.shockEnergyView
    this.scroller.scrollTo({x: 0, y: added})
  }
  scrollToTopOfDrugTherapy = () => {
    const added = this.state.imageHeight + this.state.reversibleCausesView + this.state.shockEnergyView + this.state.drugTherapyView
    this.scroller.scrollTo({x: 0, y: added})
  }
  scrollToTopOfROSC = () => {
    const added = this.state.imageHeight + this.state.ROSCView
    this.scroller.scrollTo({x: 0, y: added})
  }
  scrollToTopOfCPRQuality = () => {
    const added = this.state.imageHeight + this.state.CPRQualityView
    this.scroller.scrollTo({x: 0, y: added})
  }
  scrollToTopOfAdvancedAirway = () => {
    const added = this.state.imageHeight + this.state.AdvancedAirwayView
    this.scroller.scrollTo({x: 0, y: added})
  }

      
  
  goToComponentTwo = () => {
    const added = this.state.imageHeight + this.state.reversibleCausesView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  goToComponentThree = () => {
    const added = this.state.imageHeight + this.state.reversibleCausesView 
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  goToComponentFour = () => {
    const added = this.state.imageHeight + this.state.reversibleCausesView + this.state.shockEnergyView + this.state.ROSCView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  goToComponentFive = () => {
    const added = this.state.imageHeight + this.state.reversibleCausesView + this.state.shockEnergyView + this.state.ROSCView + this.state.CPRQualityView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  goToComponentSix = () => {
    const added = this.state.imageHeight + this.state.reversibleCausesView + this.state.shockEnergyView + this.state.ROSCView + this.state.CPRQualityView + this.state.advancedAirwayView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  goToEnd = () => {
    const added = this.state.imageHeight + this.state.reversibleCausesView + this.state.shockEnergyView + this.state.ROSCView + this.state.CPRQualityView + this.state.advancedAirwayView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }


  render() {  
    console.log(this.state.reversibleCausesHidden)
    // console.log('childHeight', this.state.childHeight)
    // console.log('screen height', this.state.screenHeight)
    // console.log('imageHeight', this.state.screenHeight - this.state.parentView)
    // console.log('parentView:', this.state.parentView)
    console.log('image height:', this.state.imageHeight)
    console.log('reversiblecausesView', this.state.reversibleCausesView)
    console.log('shockEnergyView', this.state.shockEnergyView)
    // console.log('drugTherapyView', this.state.drugTherapyView)
    // console.log('ROSC', this.state.ROSCView)
    // console.log('CPR QUality', this.state.CPRQualityView)
    // console.log('advanced Airway', this.state.advancedAirwayView)
  


    

    return ( 
      <SafeAreaView>
        <ScrollView 
          maximumZoomScale={2.5}
          ref={(scroller) => {this.scroller = scroller}}
          onContentSizeChange={this.onContentSizeChange}
        >

          <View style={styles.top}>
            <Text style={styles.title}>Adult Cardiac Arrest Algorithm</Text>
            <Divider style={styles.divider} />
          </View>




          {/* <Timer /> */}






          <View onLayout={this.measureImageView}>
            {this.IPhone375x812()}
            {this.IPhone414x896()}
            {this.IPhone375x667()} 
            {this.IPhone414x736()}
            {this.IPhone320x568()}
          </View>


          <View style={{ alignItems: 'center'  }} onLayout={this.measureParentView}>
              <View onLayout={this.measureReversibleCausesView}>
                <Component 
                  goToNextComponent={this.goToComponentTwo} 
                  toggle={this.onPressReversibleCausesHidden} 
                  hidden = {this.state.reversibleCausesHidden}
                  component={<CardiacArrestReversibleCauses />}
                  buttonTitle='Reversible Causes'
                />
              </View>

 
              <View onLayout={this.measureShockEnergyView}>
                <Component
                  goToNextComponent={this.goToComponentThree} 
                  toggle={this.onPressShockEnergyHidden} 
                  hidden = {this.state.shockEnergyHidden}
                  component={<CardiacArrestShockEnergy />}
                  buttonTitle='Shock Energy for Defibrillation'
                />
              </View>
            
              <View onLayout={this.measureDrugTherapyView}>
                <Component 
                  goToNextComponent={this.goToComponentFour} 
                  toggle={this.onPressDrugTherapyHidden} 
                  hidden = {this.state.drugTherapyHidden}
                  component={<CardiacArrestDrugTherapy />}
                  buttonTitle='Drug Therapy'
                />
              </View>

              <View onLayout={this.measureROSCView}>
                <Component 
                  goToNextComponent={this.goToComponentFive} 
                  toggle={this.onPressROSCHidden} 
                  hidden = {this.state.ROSCHidden}
                  component={<CardiacArrestROSC />}
                  buttonTitle='Return of Spontaneous Circulation (ROSC)'
                />
              </View>

              <View onLayout={this.measureCPRQualityView}>
                <Component 
                  goToNextComponent={this.goToComponentSix} 
                  toggle={this.onPressCPRQualityHidden} 
                  hidden = {this.state.CPRQualityHidden}
                  component={<CardiacArrestCPR />}
                  buttonTitle='CPR Quality'
                />
              </View>

              <View style={{ }} onLayout={this.measureAdvancedAirwayView}>
                <Component 
                  goToNextComponent={this.goToEnd} 
                  toggle={this.onPressAdvancedAirwayHidden} 
                  hidden = {this.state.advancedAirwayHidden}
                  component={<CardiacArrestAdvancedAirway />}
                  buttonTitle='Advanced Airway'
                />
              </View>

              <View style={{
                marginTop: Dimensions.get('window').height/50
              }}>
                <Text style={{fontSize: Dimensions.get('window').height/70,}}>
                  American Heart Association Guidelines 2018
                </Text>
              </View>
          </View>

        

        </ScrollView>
      </SafeAreaView> 
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  top: {
    paddingTop: Dimensions.get('window').height/300,
    // backgroundColor: 'yellow'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/33,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/100, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  }
})