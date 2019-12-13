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
              <Icon name="md-home" size={32} color="rgba(0, 0, 0, 0)"  />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />

        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={32} color="white" />
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
      CPRHidden: true,
      advancedAirwayHidden: true
    }
    this.ImageURI = require('../../../../assets/CardiacArrest3000x6000.png')
  }

  onPressReversibleCausesHidden = () => {
    this.setState({ reversibleCausesHidden: !this.state.reversibleCausesHidden})

  }

  onPressShockEnergyHidden = () => {
    this.setState({ shockEnergyHidden: !this.state.shockEnergyHidden})
  }

  onPressDrugTherapyHidden = () => {
    this.setState({ drugTherapyHidden: !this.state.drugTherapyHidden})
  }

  onPressROSC = () => {
    this.setState({ ROSCHidden: !this.state.ROSCHidden})
  }

  onPressCPR = () => {
    this.setState({ CPRHidden: !this.state.CPRHidden})
  }

  onPressAdvancedAirway = () => {
    this.setState({ advancedAirwayHidden: !this.state.advancedAirwayHidden})
  }

  scrollToBottom = () => {
    this.scroller.scrollTo({x: 0, y: this.state.screenHeight});
  };

  
  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight })
  }


  showReversibleCausesComponent = () => {
    return (
      !this.state.reversibleCausesHidden ? <CardiacArrestReversibleCauses /> : null
    )
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


  scrollingForReversibleCauses = () => {
    if (!this.state.reversibleCausesHidden) {
      let added = this.state.imageHeight + this.state.reversibleCausesView
      this.scroller.scrollTo({x: 0, y: added, animated: true})
    }
  }
  


  render() {  
    console.log(this.state.reversibleCausesHidden)
    // console.log('childHeight', this.state.childHeight)
    // console.log('screen height', this.state.screenHeight)
    // console.log('imageHeight', this.state.screenHeight - this.state.parentView)
    // console.log('parentView:', this.state.parentView)
    console.log('image height:', this.state.imageHeight)
    console.log('reversiblecausesView', this.state.reversibleCausesView)
    // console.log('shockEnergyView', this.state.shockEnergyView)
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



            <View onLayout={this.measureImageView}>
              {this.IPhone375x812()}
              {this.IPhone414x896()}
              {this.IPhone375x667()}
              {this.IPhone414x736()}
            </View>
        
           
          <View onLayout={this.measureParentView}>
              <View onLayout={this.measureReversibleCausesView}>
                {/* <Button title="Reversible Causes" onPress={this.onPressReversibleCausesHidden} /> */}
                <Button title="Reversible Causes" onPress={() => {
                  this.onPressReversibleCausesHidden()
                }} />
                {!this.state.reversibleCausesHidden ? <CardiacArrestReversibleCauses /> : null}
                {/* {!this.state.reversibleCausesHidden ? this.scrollToTopOfReversibleCauses() : null} */}
                {this.scrollingForReversibleCauses()}
              </View>

              <View onLayout={this.measureShockEnergyView}>
                <Button title={"Shock Energy for Defibrillation"} onPress={this.onPressShockEnergyHidden} />
                {!this.state.shockEnergyHidden ? <CardiacArrestShockEnergy /> : null}
                {!this.state.shockEnergyHidden ? this.scrollToTopOfShockEnergy() : null}
              </View>
            
              <View onLayout={this.measureDrugTherapyView}>
                <Button title="Drug Therapy" onPress ={this.onPressDrugTherapyHidden} />
                {!this.state.drugTherapyHidden ? <CardiacArrestDrugTherapy /> : null}
                {!this.state.drugTherapyHidden ? this.scrollToTopOfDrugTherapy() : null}
              </View>

              {/* <View onLayout={this.measureROSCView}>
                <Button title="Return of Spontaneous Circulation (ROSC)" onPress ={this.onPressROSC} />
                {!this.state.ROSCHidden ? <CardiacArrestROSC /> : null}
                {!this.state.ROSCHidden ? this.scrollToTopOfROSC() : null}
              </View> */}


              {/* <View onLayout={this.measureCPRQualityView}>
                <Button title="CPR Quality" onPress ={this.onPressCPR} />
                {!this.state.CPRHidden ? <CardiacArrestCPR /> : null}
                {!this.state.CPRHidden ? this.scrollToTopOfCPRQuality() : null}
              </View> */}

              {/* <View onLayout={this.measureAdvancedAirwayView}>
                <Button title="Advanced Airway" onPress ={this.onPressAdvancedAirway} />
                {!this.state.advancedAirwayHidden ? <CardiacArrestAdvancedAirway /> : null}
                {!this.state.advancedAirwayHidden ? this.scrollToTopOfAdvancedAirway() : null}
              </View> */}

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