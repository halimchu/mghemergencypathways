import React from 'react'
import { TouchableHighlight, Modal, Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import CardiacArrestShockEnergy from './cardiacArrestShockEnergy'
import CardiacArrestDrugTherapy from './cardiacArrestDrugTherapy'


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





  constructor(props) {
    super(props)
    this.state = { 
      viewHeight: 0,
      y: 0,
      reversibleCausesHidden: false,
      shockEnergyHidden: false,
      drugTherapyHidden: true,
      reversibleCauses: [
        'Hypovolemia', 
        'Hypoxia',
        'Hydrogen ion (acidosis)',
        'Hypo-/hyperkalemia',
        'Hypothermia',
        'Tension pneumothorax',
        'Tamponade, cardiac',
        'Toxins',
        'Thrombosis, pulmomary',
        'Thrombosis, coronary'
      ],
     }
    this.onPressReversibleCausesHidden = this.onPressReversibleCausesHidden.bind(this)
    this.onPressShockEnergyHidden = this.onPressShockEnergyHidden.bind(this)
    this.onPressDrugTherapyHidden = this.onPressDrugTherapyHidden.bind(this)
    this.scrollToEndOfComponent = this.scrollToEndOfComponent.bind(this)
    // this.goToToComponent5 = this.goToComponent5.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
  }

  // goToComponent5(){
  //   this.ScrollView.scrollTo({x: this.state.x, y: this.state.y, animated: true});
  // }


  onPressReversibleCausesHidden() {
    this.setState({ reversibleCausesHidden: !this.state.reversibleCausesHidden})
  }

  onPressShockEnergyHidden() {
    this.setState({ shockEnergyHidden: !this.state.shockEnergyHidden})
  }

  reversibleCauses () {
    return (
      this.state.reversibleCauses.map((item) => 
        <View key={item} style={ styles.bulletPoints }>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text style={styles.bulletPointText}>{item}</Text>
          </View>
        </View>        
    ))
  }

  
  scrollToEndOfComponent() {
    // !this.state.drugTherapyHidden ? <CardiacArrestDrugTherapy /> : null
    this.scrollView.scrollTo({x: 0, y: 0, animated: true})
  }
  
  onPressDrugTherapyHidden() {
    this.setState({ drugTherapyHidden: !this.state.drugTherapyHidden})
  }


  scrollToBottom(animated = true) {
    const scrollHeight = this.contentHeight - this.scrollViewHeight;
    if (scrollHeight > 0) {
      const scrollResponder = this.refs.scrollView.getScrollResponder();
      scrollResponder.scrollResponderScrollTo({x: 0, y: scrollHeight, animated});
    }
  }
  
  render() { 
    var user = {
      name: 'Andrew'
    }
   
    console.log(this.refs.scrollView)

    return (  
      <SafeAreaView style={styles.container}>
        <ScrollView 
          maximumZoomScale={2.5}
          ref='scrollView'
          onContentSizeChange={(w, h) => this.contentHeight = h}
          onLayout={ev => this.scrollViewHeight = ev.nativeEvent.layout.height}
        >
          
        

          <View style={styles.top}>
            <Text style={styles.title}>Adult Cardiac Arrest Algorithm</Text>
            <Divider style={styles.divider} />
          </View>

          {this.IPhone375x812()}
          {this.IPhone414x896()}
          {this.IPhone375x667()}
          {this.IPhone414x736()}

          
        
            
            <Button title="Reversible Causes" onPress={this.onPressReversibleCausesHidden} />
            {this.state.reversibleCausesHidden ? this.reversibleCauses() : null}


            <ScrollView 
              maximumZoomScale={2.5}
              ref={ (component) => this._scrollView = component } 
              onLayout={ (e) => {

                // get the component measurements from the callbacks event
                const height = e.nativeEvent.layout.height
              
                // save the height of the scrollView component to the state
                this.setState({viewHeight: height })}}
            >
              <Button title={this.state.shockEnergyHidden ? "Shock Energy for Defibrillation" : "Shock Energy for Defibrillation"} onPress={this.onPressShockEnergyHidden} />
              {this.state.shockEnergyHidden ? <CardiacArrestShockEnergy name="Halim" user={user} y={this.state.x} /> : null}
            </ScrollView>


           
              <Button title="Drug Therapy" onPress ={this.onPressDrugTherapyHidden} />


            {!this.state.drugTherapyHidden ? <CardiacArrestDrugTherapy /> : null}
        
            
            {this.scrollToBottom()}
         
        
          {/* <Button title={this.state.drugTherapyHidden ? "Drug Therapy" : "Drug Therapy"} onPress={ () => this.scrollView.scrollToEnd({ animated: true }) }/>
          {this.state.drugTherapyHidden ? <CardiacArrestDrugTherapy /> : null} */}
  



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

  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/33.7,
    marginLeft: Dimensions.get('window').width/100,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/10,
    marginRight: Dimensions.get('window').width/10,
  },


  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/47,
  },
  customBtnBG: {
    backgroundColor: "#69c8a1",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 8,
    width: Dimensions.get('window').width/1.13,
    height: Dimensions.get('window').height/12,
  },
})