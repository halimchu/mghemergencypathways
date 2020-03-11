import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import ReversibleCauses from '../reversibleCauses'
import CardiacArrestShockEnergy from './cardiacArrestShockEnergy'
import CardiacArrestDrugTherapy from './cardiacArrestDrugTherapy'
import CardiacArrestROSC from './cardiacArrestROSC'
import CardiacArrestCPR from './cardiacArrestCPR'
import CardiacArrestAdvancedAirway from './cardiacArrestAdvancedAirway'
import Component from './../Component'
// import Timer from './Timer'
import LinearGradient from 'react-native-linear-gradient';


export default class CardiacArrest extends React.Component {
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
          textAlign: 'center'}}>ACLS STAT</Text>
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
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),   
    }
  }

  IPhone375x812 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 812) {
      return (
        <Image
          source={require('../../../../assets/CardiacArrest3000x3000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.25}}
        />
      )
    }
  }

  IPhone414x896 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 896) {
      return (
        <Image
          source={require('../../../../assets/CardiacArrest3000x3000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/.75}}
        />
      )
    }
  }

  IPhone375x667 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 667) {
      return (
        <Image
          source={require('../../../../assets/CardiacArrest3000x3000.png')}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.01 }}
        />
      )
    }
  }

  IPhone414x736 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 736) {
      return (
        <Image
        // source={require('../../../../assets/CardiacArrest3000x3000.png')}
        // source={require('../../../../assets/CardiacArrest3000x3000.png')}
          style={{width: Dimensions.get('window').width/2, height: Dimensions.get('window').height }}
        />
      )
    }
  }

  IPhone320x568 () {
    if (Dimensions.get('window').width === 320 && Dimensions.get('window').height === 568) {
      return (
        <Image
          source={require('../../../../assets/CardiacArrest3000x3000.png')}
          style={{width: Dimensions.get('window').width/2, height: Dimensions.get('window').height }}
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

          

          <View style={{paddingTop: Dimensions.get('window').height/300,}}>
            <Text style={styles.title}>Adult Cardiac Arrest Algorithm</Text>
            <Divider style={styles.divider} />
          </View>
          <Text>{Dimensions.get('window').width}</Text>
          <Text>{Dimensions.get('window').height}</Text>




          {/* <Timer /> */}



          <View onLayout={this.measureImageView}>
            {this.IPhone375x812()}
            {this.IPhone414x896()}
            {this.IPhone375x667()} 
            {this.IPhone414x736()}
            {this.IPhone320x568()}
          </View>






<View style={{alignItems: 'center', marginBottom: Dimensions.get('window').height/50,}}>
  <View style={{flexDirection: 'row'}}>


    <View style={{
      backgroundColor: '#CBE7F7', 
      borderRadius: 10, 
      // marginLeft: Dimensions.get('window').width/50,
      width: '35%',
      padding: Dimensions.get('window').width/150,
    }}>
      <View style={{alignItems: 'center',}}>
        <Text style={{fontWeight: 'bold', fontSize: Dimensions.get('window').width/21}}>CPR 2 min</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
          <Text style={{
            fontSize: Dimensions.get('window').height/42, 
            marginRight: Dimensions.get('window').width/90,}}>{`\u2022`}</Text>
          <Text style={{marginTop: Dimensions.get('window').height/200}}>Amiodarone or Liocaine</Text> 
      </View>
      <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: Dimensions.get('window').height/40, paddingRight: Dimensions.get('window').width/90,}}>{`\u2022`}</Text>
          <Text style={{marginTop: Dimensions.get('window').height/200}}>Treat reversible causes</Text> 
      </View>
    </View>


 









      <View style={{
          backgroundColor: '#EED8C5', 
          borderRadius: 10, 
          marginLeft: Dimensions.get('window').width/30,
          width: '57%',
          padding: Dimensions.get('window').width/150,
      }}>
        <View style={{flexDirection: 'row',}}>
          <Text style={{
            // marginTop: Dimensions.get('window').height/140, 
            marginRight: Dimensions.get('window').width/90, 
            fontSize: Dimensions.get('window').height/42,}}>{`\u2022`}</Text>
          <Text style={{flex: 1, flexWrap: 'wrap', marginTop: Dimensions.get('window').height/200}}>
            <Text>If no signs of ROSC, go to</Text>
            <Text style={{fontWeight: 'bold'}}> 10</Text>
            <Text> or</Text>
            <Text style={{fontWeight: 'bold'}}> 11</Text> 
          </Text>
        </View>
            

        <View style={{flexDirection: 'row'}}>
              <Text style={{
                  marginRight: Dimensions.get('window').width/90,
                  marginTop: Dimensions.get('window').height/140, 
                  fontSize: Dimensions.get('window').height/42,}}>{`\u2022`}
              </Text>

              <Text style={{
                marginTop: Dimensions.get('window').height/80, 
                fontSize: Dimensions.get('window').width/27,}}>If ROSC, go to 
              </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.customBtnBG3} 
            onPress={() => this.props.navigation.navigate('PostCardiacArrestCare')}>
            <Text style={styles.customBtnText2}>Post Cardiac Arrest Care</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  </View>









   


          <View style={{ alignItems: 'center', marginTop: Dimensions.get('window').height/80 }} onLayout={this.measureParentView}>
              <View onLayout={this.measureReversibleCausesView}>
                <Component 
                  goToNextComponent={this.goToComponentTwo} 
                  toggle={this.onPressReversibleCausesHidden} 
                  hidden = {this.state.reversibleCausesHidden}
                  component={<ReversibleCauses />}
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
                  buttonTitle='Return of Spontaneous Circulation'
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

              {/* <View style={{
                marginTop: Dimensions.get('window').height/50
              }}>
                <Text style={{fontSize: Dimensions.get('window').height/70,}}>
                  American Heart Association Guidelines 2018
                </Text>
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
  },
  customBtnText2: {
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: "center",
    color: 'white',
    marginTop: Dimensions.get('window').height/155,
    fontSize: Dimensions.get('window').width/25,
  },
  customBtnBG3: {
    alignItems: 'center',
    backgroundColor: '#B93E2F',
    // shadowOpacity: .3, 
    borderRadius: 4, 
    marginTop: Dimensions.get('window').height/250,
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').height/25,
  }
})