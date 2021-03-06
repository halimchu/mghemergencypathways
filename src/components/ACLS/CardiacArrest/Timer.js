import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, TouchableOpacity, ActionSheetIOS } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { connect } from 'react-redux'


class Timer extends React.Component {
   
  state = {
    minute: 0,
    secondBefore: 0,
    second: 0,
    fastSecond: true, 
    secondBeforeVisible: true,
    icon: 'ios-play',
    buttonType: null,
  }


  onStart = () => {
    if (this.props.second === 2) {
      console.log('second is at 2')
      clearInterval(increment2)
    }
  }



  onReset = () => {
    clearInterval(this.interval)
    this.setState({ icon: 'ios-play' })
    this.setState({ minute: 0 })
    this.setState({ secondBeforeVisible: true })
    this.setState({ second: 0 })
  }

  onPause = () => {
    clearInterval(this.interval)
  } 

  renderButton = () => {
        return (
          <TouchableOpacity
          style={styles.customBtnBG} 
          onPress={this.onPress}>
  
              <View style={{ alignItems: 'center' }}>
                <Icon name={this.props.buttonType} size={Dimensions.get('window').height/29} color="#656767" />
              </View>
  
          <Text style={styles.customBtnText}>{this.state.buttonText}</Text>
        </TouchableOpacity>
        )    
  }

  renderResetButton = () => {
    return (
      <TouchableOpacity
        style={styles.customBtnBG} 
        onPress={() => { this.onReset() }}>


        <View style={{ alignItems: 'center', marginTop: Dimensions.get('window').height/250 }}>
          <Icon name='ios-refresh' size={Dimensions.get('window').height/35} color="#656767" />
        </View>
      </TouchableOpacity>
    )
}


componentDidMount = () => {
  // this.setState({ buttonType: this.props.buttonType })
}


componentWillUnmount () {

    // clearInterval(this.interval) 
}
 

  handleTimer = () => {
    if ( this.props.buttonToggle === true) {
      this.props.increment()
    } else if (this.props.buttonToggle === false) {
      this.props.reset()
    }
  }

  handleCPR = () => {
    this.props.incrementCPR()
  }

  handleEpi = () => {
    this.props.incrementEpi()
  }

  handleShock = () => {
    this.props.incrementShock()
  }

  zeroMinute = () => {
    if (this.props.minute < 10) {
      return <Text>0</Text>
    }
  }

  zeroSecond = () => {
    if (this.props.second < 10) {
      return <Text>0</Text>
    }
  }

  
  shouldTurnButtonToRed = () => {
    if (this.props.minute >= 2 ) {
      return true
    }
  }
  
  isLessThan2Minutes = () => {
    if (this.props.minute < 2) {
      return true
    }
  }

  iconColor = () => {
    if (this.props.minute < 2) {
      return '#656767' 
    } else {
      return 'white'
    }
  }
  


  render () {
    // console.log('this.props', this.props)
    return (
      <View style={styles.container}>
        <View style={{ alignContent: 'center'}}>

      
              <View style={{ flexDirection: 'row', alignItems: 'center'}}>

          
                          <View style={{
                            marginRight: 10,                            
                            // backgroundColor: "pink", 
                          }}>
                            <TouchableOpacity
                                          style={styles.customBtnBG} 
                                          onPress={this.handleCPR}
                            >
                                          <Text style={styles.counterText}>
                                            <Text>CPR</Text>
                                            <Text style={{fontWeight: '500'}}>  {this.props.CPR}</Text>
                                          </Text>
                            </TouchableOpacity>
                          </View>




                          <View style={{
                            // width: Dimensions.get('window').width/5, 
                            marginRight: 10,
                            // alignItems: 'center',
                            // backgroundColor: "yellow", 
                          }}>
                            <TouchableOpacity
                                          style={styles.customBtnShock} 
                                          onPress={this.handleShock}
                            >
                           
                                <View style={{alignItems: 'center'}}>
                                    <View style={{flexDirection: 'row'}}>
                                          <Image
                                            source={require('../../../../assets/shock.png')}
                                            style={{width: Dimensions.get('window').width/15, height: Dimensions.get('window').height/28, marginRight: 10}}
                                          />
                                          <Text style={styles.customBtnText}>{this.props.shock}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                          </View>


                          <View style={{ 
                            marginRight: 10,
                            // backgroundColor: "gray", 
                          }}>
                            <TouchableOpacity
                                          style={styles.customBtnBG} 
                                          onPress={this.handleEpi}
                                    >
                                      <Text style={styles.counterText}>
                                            <Text>EPI</Text>
                                            <Text style={{fontWeight: '500'}}>  {this.props.epi}</Text>
                                      </Text>
                            </TouchableOpacity>
                          </View>





                          <View style={{}}> 
                               
            

                                    <TouchableOpacity
                                          style={ this.shouldTurnButtonToRed() ? styles.customBtnTimerRed : styles.customBtnTimer }
                                          onPress={this.handleTimer}
                                    >
                                      <View style={{
                                        alignItems: 'center',     
                                        flexDirection: 'row',
                                      }}>
                                            <View style={{
                                              width: '70%', 
                                              flexDirection: 'row',
                                              marginTop: 0.5,
                                              // backgroundColor: 'yellow',
                                            }}>
                                                    <View style={{
                                                      width: '50%', 
                                                      alignItems: 'center',
                                                      // backgroundColor: 'gray'
                                                    }}>
                                                      {/* <Text style={styles.timerTextBlack}>{this.zeroMinute()}{this.props.minute}</Text> */}
                                                      <Text style={this.isLessThan2Minutes() ? styles.timerTextBlack : styles.timerTextWhite}>{this.zeroMinute()}{this.props.minute}</Text>
                                                    </View>

                                                    <View style={{
                                                      width: '5%', 
                                                      alignItems: 'center',
                                                      // backgroundColor: 'yellow'
                                                    }}>
                                                      {/* <Text style={styles.timerTextBlack}>:</Text> */}
                                                      <Text style={this.isLessThan2Minutes() ? styles.timerTextBlack : styles.timerTextWhite}>:</Text>
                                                    </View>

                                                    <View style={{
                                                      width: '50%', 
                                                      alignItems: 'center',
                                                      // backgroundColor: 'pink'
                                                    }}>
                                                      {/* <Text style={styles.timerTextBlack }>{this.zeroSecond()}{this.props.second}</Text> */}
                                                      <Text style={this.isLessThan2Minutes() ? styles.timerTextBlack : styles.timerTextWhite}>{this.zeroSecond()}{this.props.second}</Text>
                                                    </View>

                                            </View>

                                          <View style={{
                                            alignItems: 'center',
                                            width: '30%', 
                                            marginTop: Dimensions.get('window').height/200,
                                            // backgroundColor: 'orange'
                                          }}>
                                            {/* <Icon name={this.props.icon} size={Dimensions.get('window').height/37} color='black' /> */}
                                            <Icon name={this.props.icon} size={Dimensions.get('window').height/37} color={this.iconColor()} />
                                          </View>
                                      </View>
                                    </TouchableOpacity>
                             

            
                                      
                              

                    </View>
            </View>
        </View>
      </View>
    )
  } 
}


  



let second = 1
let increment


// thunks
const startTimer = (someFunc) => {
  return (dispatch) => {
      second = 1
      if (second === 1) {
        setTimeout(() => {
                dispatch({ type: 'START_TIMER', second: second++, buttonTrue: false, icon: 'ios-refresh' })
        }, 1);
      } 

    
      increment = setInterval( () => dispatch({ type: 'START_TIMER', buttonTrue: false, increment: increment, icon: 'ios-refresh' }), 1000)
  }
}

const resetTimer = () => {
  return (dispatch) => {
    dispatch({ type: 'RESET_TIMER', increment: increment, second: 0, buttonFalse: true, icon: 'ios-play' })
  }
}



const mapStateToProps = (state) => {
  return {
    buttonToggle: state.timerReducer.buttonToggle,
    second: state.timerReducer.second,
    minute: state.timerReducer.minute,
    icon: state.timerReducer.icon,

    CPR: state.CPRshockEpiReducer.CPR,
    epi: state.CPRshockEpiReducer.epi,
    shock: state.CPRshockEpiReducer.shock
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(startTimer()),

    reset: () => dispatch(resetTimer()),
    incrementCPR: () => dispatch({ type: 'INCREMENT_CPR' }),
    incrementEpi: () => dispatch({ type: 'INCREMENT_EPI' }),
    incrementShock: () => dispatch({ type: 'INCREMENT_SHOCK' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)







const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: Dimensions.get('window').height/110,
    paddingTop: Dimensions.get('window').height/110,
    backgroundColor: '#f5f5f5',
  },
 

  customBtnBG: {
    backgroundColor: 'white',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width/5,
    height: Dimensions.get('window').height/25,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset : { width: 1, height: 1},
  },
  customBtnShock: {
    backgroundColor: 'white',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width/5.5,
    height: Dimensions.get('window').height/25,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset : { width: 1, height: 1},
  },
  customBtnTimer: {
    backgroundColor: 'white',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width/3.5,
    height: Dimensions.get('window').height/25,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset : { width: 1, height: 1},
  },
  customBtnTimerRed: {
    backgroundColor: '#D14124',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width/3.5,
    height: Dimensions.get('window').height/25,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset : { width: 1, height: 1},
  },

  customBtnText: {
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: Dimensions.get('window').height/200,
    fontSize: Dimensions.get('window').height/45,
  },
  counterText: {
    color: 'black',
    fontWeight: '300',
    textAlign: 'center',
    marginTop: Dimensions.get('window').height/200,
    fontSize: Dimensions.get('window').height/45,
  },


  timerTextBlack: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: Dimensions.get('window').height/45,
  },

  timerTextWhite: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: Dimensions.get('window').height/45,
  },

})








// import React from 'react'
// import { Dimensions, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons' 




// export default class Timer extends React.Component {
   
//   state = {
//     minute: 0,
//     secondBefore: 0,
//     second: 0,
//     fastSecond: true, 
//     secondBeforeVisible: true,
//     icon: 'ios-play',
//   }


//   onStart = () => {
//     if (this.state.minute === 0 && this.state.second === 0 ) {
//             this.setState({ second: 1 })

//             this.interval = setInterval(() => {
//               this.setState({ second: this.state.second + 1 })
            
//               if (this.state.second > 9) {
//                 this.setState({ secondBeforeVisible: false })
//               } 
            
//               // if minute is 0 and second is 60, increase minute by 1 and set second to 0
//               if (this.state.minute === 0 && this.state.second === 59 + 1) {
//                 this.setState({ secondBeforeVisible: true })
//                 this.setState({ minute: this.state.minute + 1 })
//                 this.setState({ second: 0 })
//               }
            
//               // if minute is 1 and second is 60, increase minute by 1, and set second to 0
//               if (this.state.minute === 1 && this.state.second === 59 + 1) {
//                 this.setState({ secondBeforeVisible: true })
//                 this.setState({ minute: this.state.minute + 1 })
//                 this.setState({ second: 0 })
//               }
            
//               // if timer reaches 2 minutes, keep it at 2 minutes 
//               if (this.state.minute === 2 && this.state.second === 0) {
//                 clearInterval(this.interval)
//               }  
//             }, 1000)
//     } else {

//       if (this.state.minute !== 2 && this.state.second !== 0) {
//             this.interval = setInterval(() => {
//               this.setState({ second: this.state.second + 1 })
            
//               if (this.state.second > 9) {
//                 this.setState({ secondBeforeVisible: false })
//               } 
            
//               // if minute is 0 and second is 60, increase minute by 1 and set second to 0
//               if (this.state.minute === 0 && this.state.second === 59 + 1) {
//                 this.setState({ secondBeforeVisible: true })
//                 this.setState({ minute: this.state.minute + 1 })
//                 this.setState({ second: 0 })
//               }
            
//               // if minute is 1 and second is 60, increase minute by 1, and set second to 0
//               if (this.state.minute === 1 && this.state.second === 59 + 1) {
//                 this.setState({ secondBeforeVisible: true })
//                 this.setState({ minute: this.state.minute + 1 })
//                 this.setState({ second: 0 })
//               }
            
//               // if timer reaches 2 minutes, keep it at 2 minutes 
//               if (this.state.minute === 2 && this.state.second === 0) {
//                 clearInterval(this.interval)
//               }  
//             }, 1000)
//       }

//     }
//   }



//   onReset = () => {
//     clearInterval(this.interval)
//     this.setState({ icon: 'ios-play' })
//     this.setState({ minute: 0 })
//     this.setState({ secondBeforeVisible: true })
//     this.setState({ second: 0 })
//   }


//   onPress = () => {
//       if ( this.state.icon === 'ios-play') {
//         this.setState({ icon: 'ios-pause' })
//         this.onStart()
  
//       } else if (this.state.icon === 'ios-pause') {
//        if (this.state.minute !== 2 && this.state.second !== 0) {
//          this.setState({ icon: 'ios-play' })
//         } 
//         this.onPause()
//       }
//     }

//   onPause = () => {
//     clearInterval(this.interval)
//   }


//   renderButton = () => {

//       if (this.state.icon === 'ios-play') {
//         return (
//           <TouchableOpacity
//           style={styles.customBtnBG} 
//           onPress={() => { this.onPress() }}>

//               <View style={{ alignItems: 'center' }}>
//                 <Icon name={this.state.icon} size={Dimensions.get('window').height/29} color="#656767" />
//               </View>

//           <Text style={styles.customBtnText}>{this.state.buttonText}</Text>
//         </TouchableOpacity>
//         )
//       } else {
//         return (
//           <TouchableOpacity
//           style={styles.customBtnBGPause} 
//           onPress={() => { this.onPress() }}>

//               <View style={{ alignItems: 'center' }}>
//                 <Icon name={this.state.icon} size={Dimensions.get('window').height/29} color="#656767" />
//               </View>

//           <Text style={styles.customBtnText}>{this.state.buttonText}</Text>
//         </TouchableOpacity>
//         )
//       }
//   }

//   renderResetButton = () => {
//     return (
//       <TouchableOpacity
//         style={styles.customBtnBG} 
//         onPress={() => { this.onReset() }}>


//         <View style={{ alignItems: 'center', marginTop: Dimensions.get('window').height/250 }}>
//           <Icon name='ios-refresh' size={Dimensions.get('window').height/35} color="#656767" />
//         </View>
//       </TouchableOpacity>
//     )
// }







 


//   render () {
//     return (
//       <View style={styles.container}>


//               <View style={{ flexDirection: 'row',}}>

//                 <View style={{
//                   width: '25%', 
//                   alignItems: 'center',
//                   // backgroundColor: "pink", 
//                 }}>
//                   <View>{this.renderResetButton()}</View>
//                 </View>

//                 <View style={{ 
//                   width: '30%', 
//                   alignItems: 'center', 
//                   justifyContent: 'center', 
//                   // backgroundColor: 'green', 
//                 }}> 
//                     <View style={{ flexDirection: 'row', }}>

//                       <View style={{
//                         flexDirection: 'column', 
//                         width: '35%',  
//                         alignItems: 'center', 
//                         // backgroundColor: 'gray'
//                       }}>
//                             <Text style={styles.timeText}>0{this.state.minute}</Text>
//                       </View>

//                       <View style={{
//                         flexDirection: 'column', 
//                         width: '5%', 
//                         alignItems: 'center',
//                         // backgroundColor: 'pink', 
//                       }}>
//                             <Text style={styles.timeText}>:</Text>
//                       </View>



                     
                      



                            
//                       <View style={{
//                         flexDirection: 'column',  
//                         width: '35%', 
//                         alignItems: 'center', 
//                         // backgroundColor: 'gray', 
//                       }}>
//                         <View style={{flexDirection: 'row'}}>
//                               { this.state.secondBeforeVisible
//                               ?
//                               <Text style={styles.timeText}>{this.state.secondBefore}</Text>
//                               :
//                               null
//                               }
//                               <Text style={styles.timeText}>{this.state.second}</Text>  
//                         </View>
//                       </View>


//                     </View>
//                 </View>
                


//                 <View style={{
//                   width: '25%', 
//                   alignItems: 'center',
//                   // backgroundColor: "pink", 
//                 }}>
//                     {this.renderButton()}
//                 </View>

//               </View>


//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     paddingBottom: Dimensions.get('window').height/110,
//     paddingTop: Dimensions.get('window').height/110,
//     backgroundColor: 'white',
//   },
//   customBtnText: {
//     color: 'white',
//     fontWeight: '600',
//     textAlign: 'center',
//     marginTop: Dimensions.get('window').height/250,
//     fontSize: Dimensions.get('window').height/40,
//   },

//   customBtnBG: {
//     backgroundColor: '#D3DBE2',
//     paddingHorizontal: 1,
//     paddingVertical: 1,
//     borderRadius: 30,
//     width: Dimensions.get('window').width/5,
//     height: Dimensions.get('window').height/25,
//   },
//   customBtnBGPause: {
//     borderWidth: 1, 
//     backgroundColor: '#D3DBE2',
//     borderColor: '#D3DBE2',
//     paddingHorizontal: 1,
//     paddingVertical: 1,
//     borderRadius: 30,
//     width: Dimensions.get('window').width/5,
//     height: Dimensions.get('window').height/25,
//   },

//   timeText: {
//     color: 'black',
//     fontWeight: '500',
//     fontSize: Dimensions.get('window').height/37,
//   }
// })




