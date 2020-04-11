import React from 'react'
import { Image, TouchableHighlight, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class InpatientConditions extends React.Component {
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

    return {
      headerLeft,
      headerTitle,
      headerBackground: (
        <LinearGradient
            colors={['#23A7C2', '#2D7C93',]}
            style={{ flex: 1 }}
        />
      ),
    }
  }


//   render() { 
//     return (  
//         <View>
//           <View style={{
//             backgroundColor: 'white', 
//             marginTop: Dimensions.get('window').height/20, 
//             marginBottom: Dimensions.get('window').height/50,
//             marginLeft: Dimensions.get('window').width/30, 
//             marginRight: Dimensions.get('window').width/30,
//             paddingBottom: Dimensions.get('window').height/60,
//             shadowOpacity: .5
//           }}>
            
//                 <View style={{
//                   backgroundColor: '#0f55bc',  
//                   paddingLeft: Dimensions.get('window').width/50,
//                   paddingTop: Dimensions.get('window').height/100, 
//                   paddingBottom: Dimensions.get('window').height/100,
//                   alignItems: 'center',}}>
//                   <Text style={{color: 'white', fontSize: Dimensions.get('window').height/35, fontWeight: '500'}}>Inpatient Emergencies</Text>
//                 </View>

//                  <View style={{alignItems: 'center'}}>
//                       <View style={{ 
//                         alignItems: 'center', 
//                         marginBottom: Dimensions.get('window').height/80,
//                       }}>
//                       </View>

//                       <View style={{flexDirection: 'row', marginBottom: Dimensions.get('window').height/140,}}>

//                                 <View style={{
//                                   flexDirection: 'column', 
//                                   marginRight: Dimensions.get('window').width/30 
//                                 }}>
//                                   <TouchableOpacity
//                                     style={styles.customBtnBG2} 
//                                       onPress={() => this.props.navigation.navigate('Stroke1')
//                                     }>
//                                     <Text style={styles.customBtnText2}>Stroke</Text>
//                                   </TouchableOpacity>
//                                 </View>
                        
//                                 <View style={{flexDirection: 'column'}}>
//                                   <TouchableOpacity
//                                     style={styles.customBtnBG2} 
//                                     onPress={() => this.props.navigation.navigate('Pert')}>
//                                     <Text style={styles.customBtnText2}>PE</Text>
//                                   </TouchableOpacity>
//                                 </View>
//                       </View>


//                     <View style={{flexDirection: 'row'}}>
//                                     <View style={{
//                                       flexDirection: 'column', 
//                                       marginRight: Dimensions.get('window').width/30, 
//                                       marginTop: Dimensions.get('window').height/150 }}>
//                                       <TouchableOpacity
//                                         underlayColor='#69c8a1'
//                                         style={styles.customBtnBG2} 
//                                         onPress={() => this.props.navigation.navigate('RICU')}>
//                                         <Text style={styles.customBtnText2}>RICU (Airway)</Text>
//                                       </TouchableOpacity>
//                                     </View>

//                                     <View style={{
//                                       flexDirection: 'column', 
//                                       marginTop: Dimensions.get('window').height/150}}>
//                                       <TouchableOpacity
//                                         style={styles.customBtnBG2} 
//                                         onPress={() => this.props.navigation.navigate('STEMI')}>
//                                         <Text style={styles.customBtnText2}>STEMI</Text>
//                                       </TouchableOpacity>
//                                     </View>
//                     </View>
//                  </View>
//           </View>

                

//           <View style={{
//             backgroundColor: 'white', 
//             marginTop: Dimensions.get('window').height/30, 
//             marginLeft: Dimensions.get('window').width/30, 
//             marginRight: Dimensions.get('window').width/30,
//             paddingBottom: Dimensions.get('window').height/60,
//             shadowOpacity: .5}}>
            
//                 <View style={{
//                   paddingLeft: Dimensions.get('window').width/50,
//                   backgroundColor: '#256A96',
//                   paddingTop: Dimensions.get('window').height/100, 
//                   paddingBottom: Dimensions.get('window').height/100,
//                   alignItems: 'center',}}>
//                   <Text style={{ color: 'white', fontSize: Dimensions.get('window').height/37, fontWeight: '500'}}>ACLS</Text>
//                 </View>

//                 <View style={{ 
//                   alignItems: 'center', 
//                   marginBottom: Dimensions.get('window').height/80,
//                 }}>
//                 </View>


//                 <View style={{alignItems: 'center', }}>
//                     <View style={{flexDirection: 'row', }}>
//                                         <View style={{
//                                           flexDirection: 'column', 
//                                           marginRight: Dimensions.get('window').width/30, 
//                                           marginBottom: Dimensions.get('window').height/150}}>
//                                           <TouchableOpacity
//                                             underlayColor='#69c8a1'
//                                             style={styles.customBtnBG3} 
//                                             onPress={() => this.props.navigation.navigate('CardiacArrest')}>
//                                             <Text style={styles.customBtnText2}>Cardiac Arrest</Text>
//                                           </TouchableOpacity>
//                                         </View>

//                                         <View style={{flexDirection: 'column'}}>
//                                           <TouchableOpacity
//                                             style={styles.customBtnBG3} 
//                                             onPress={() => this.props.navigation.navigate('Bradycardia')}>
//                                             <Text style={styles.customBtnText2}>Bradycardia</Text>
//                                           </TouchableOpacity>
//                                         </View>
//                     </View>
//                 </View>


//                 <View style={{
//                   marginTop: Dimensions.get('window').height/140,
//                   flexDirection: 'column', 
//                   marginLeft: Dimensions.get('window').width/28, 
//                   }}>
//                   <TouchableOpacity
//                     underlayColor='#69c8a1'
//                     style={styles.customBtnBG3} 
//                     onPress={() => this.props.navigation.navigate('Tachycardia')}>
//                     <Text style={styles.customBtnText2}>Tachycardia</Text>
//                   </TouchableOpacity>
//                 </View>
//         </View>

                 

//             <View style={{marginTop: Dimensions.get('window').height/40, alignItems: 'center'}}>
//               <Image
//                 source={require('../../assets/mgh-htl-stacked.png')}
//                 style={{
//                   marginRight: Dimensions.get('window').width/35, 
//                   width: Dimensions.get('window').width/1.4, 
//                   height: Dimensions.get('window').height/10 }}
//               />
//             </View>
//           </View>

//     )
//   }
// }
  
// const styles = StyleSheet.create({
//   textColored: {
//     color: 'red'
//   },
//   textNormal: {
//     color: 'black'
//   },
//   container: {
//     backgroundColor: '#FEFEFE',
//     // backgroundColor: 'pink'
//   },
//   bottom2: {
//     height: '15%',
//     alignItems: 'center', 
//     marginTop: Dimensions.get('window').height/20, 
//     backgroundColor: '#69c8a1',
//     // backgroundColor: 'pink'
//   },


//   title: {
//     fontWeight: '600',
//     color: '#333333',
//     fontSize: Dimensions.get('window').height/35, 
//   },
//   button: {
//     marginTop: Dimensions.get('window').height/100
//   },
//   customBtnText2: {
//     fontWeight: '500',
//     textAlign: 'center',
//     textAlignVertical: "center",
//     // color: '#676666',
//     fontSize: Dimensions.get('window').height/40,
//     marginTop: Dimensions.get('window').height/28
//   },
//   customBtnBG2: {
//     paddingHorizontal: 1,
//     paddingVertical: 1,
//     shadowOpacity: .1, 
//     borderWidth: 2,
//     borderColor: '#0f55bc',
//     // backgroundColor: '#676666',
//     borderRadius: 4, 
//     width: Dimensions.get('window').width/2.4,
//     height: Dimensions.get('window').height/9,
//   },
//   customBtnBG3: {
//     paddingHorizontal: 1,
//     paddingVertical: 1,
//     shadowOpacity: .1, 
//     borderWidth: 2,
//     borderColor: '#256A96',
//     // backgroundColor: '#256A96',
//     borderRadius: 4, 
//     width: Dimensions.get('window').width/2.4,
//     height: Dimensions.get('window').height/9,
//   }
// })






// render() { 
//   return (  
//       <View>
//         <View style={{
//           backgroundColor: '#0F526B', 
//           marginTop: Dimensions.get('window').height/20, 
//           marginBottom: Dimensions.get('window').height/50,
//           marginLeft: Dimensions.get('window').width/30, 
//           marginRight: Dimensions.get('window').width/30,
//           // paddingBottom: Dimensions.get('window').height/60,
//           paddingBottom: Dimensions.get('window').height/60,
//           shadowOpacity: .5
//         }}>
          
//               <View style={{
//                 // backgroundColor: '#0F526B',  
//                 paddingLeft: Dimensions.get('window').width/50,
//                 paddingTop: Dimensions.get('window').height/100, 
//                 paddingBottom: Dimensions.get('window').height/100,
//                 alignItems: 'center',}}>
//                 <Text style={{color: 'white', fontSize: Dimensions.get('window').height/35, fontWeight: '500'}}>Inpatient Emergencies</Text>
//               </View>

//                <View style={{
//                  backgroundColor: '#E7EAEA', 
//                  alignItems: 'center'
//                 }}>
//                     <View style={{ 
//                       alignItems: 'center', 
//                       paddingBottom: Dimensions.get('window').height/80,
//                     }}>
//                     </View>


//                     <View style={{flexDirection: 'row', paddingBottom: Dimensions.get('window').height/140,}}>
//                               <View style={{
//                                 flexDirection: 'column', 
//                                 marginRight: Dimensions.get('window').width/30 
//                               }}>
//                                 <TouchableOpacity
//                                   style={styles.customBtnBG2} 
//                                     onPress={() => this.props.navigation.navigate('Stroke1')
//                                   }>
//                                   <Text style={styles.customBtnText2}>Stroke</Text>
//                                 </TouchableOpacity>
//                               </View>
                      
//                               <View style={{flexDirection: 'column'}}>
//                                 <TouchableOpacity
//                                   style={styles.customBtnBG2} 
//                                   onPress={() => this.props.navigation.navigate('Pert')}>
//                                   <Text style={styles.customBtnText2}>PE</Text>
//                                 </TouchableOpacity>
//                               </View>
//                     </View>


//                   <View style={{flexDirection: 'row'}}>
//                                   <View style={{
//                                     flexDirection: 'column', 
//                                     marginRight: Dimensions.get('window').width/30, 
//                                     marginTop: Dimensions.get('window').height/150 }}>
//                                     <TouchableOpacity
//                                       underlayColor='#69c8a1'
//                                       style={styles.customBtnBG2} 
//                                       onPress={() => this.props.navigation.navigate('RICU')}>
//                                       <Text style={styles.customBtnText2}>RICU (Airway)</Text>
//                                     </TouchableOpacity>
//                                   </View>

//                                   <View style={{
//                                     flexDirection: 'column', 
//                                     marginTop: Dimensions.get('window').height/150
//                                     }}>
//                                     <TouchableOpacity
//                                       style={styles.customBtnBG2} 
//                                       onPress={() => this.props.navigation.navigate('STEMI')}>
//                                       <Text style={styles.customBtnText2}>STEMI</Text>
//                                     </TouchableOpacity>
//                                   </View>
//                   </View>
//                </View>
//         </View>

              


//         <View style={{
//           backgroundColor: 'white', 
//           marginTop: Dimensions.get('window').height/30, 
//           marginLeft: Dimensions.get('window').width/30, 
//           marginRight: Dimensions.get('window').width/30,
//           paddingBottom: Dimensions.get('window').height/60,
//           shadowOpacity: .5}}>
          
//               <View style={{
//                 backgroundColor: '#256A96',
//                 paddingLeft: Dimensions.get('window').width/50,
//                 paddingTop: Dimensions.get('window').height/100, 
//                 paddingBottom: Dimensions.get('window').height/100,
//                 alignItems: 'center',}}>
//                 <Text style={{ color: 'white', fontSize: Dimensions.get('window').height/37, fontWeight: '500'}}>ACLS</Text>
//               </View>

//               <View style={{ 
//                 alignItems: 'center', 
//                 marginBottom: Dimensions.get('window').height/80,
//               }}>
//               </View>


//               <View style={{alignItems: 'center', }}>
//                   <View style={{flexDirection: 'row', }}>
//                                       <View style={{
//                                         flexDirection: 'column', 
//                                         marginRight: Dimensions.get('window').width/30, 
//                                         marginBottom: Dimensions.get('window').height/150}}>
//                                         <TouchableOpacity
//                                           underlayColor='#69c8a1'
//                                           style={styles.customBtnBG3} 
//                                           onPress={() => this.props.navigation.navigate('CardiacArrest')}>
//                                           <Text style={styles.customBtnText2}>Cardiac Arrest</Text>
//                                         </TouchableOpacity>
//                                       </View>

//                                       <View style={{flexDirection: 'column'}}>
//                                         <TouchableOpacity
//                                           style={styles.customBtnBG3} 
//                                           onPress={() => this.props.navigation.navigate('Bradycardia')}>
//                                           <Text style={styles.customBtnText2}>Bradycardia</Text>
//                                         </TouchableOpacity>
//                                       </View>
//                   </View>
//               </View>


//               <View style={{
//                 marginTop: Dimensions.get('window').height/140,
//                 flexDirection: 'column', 
//                 marginLeft: Dimensions.get('window').width/28, 
//                 }}>
//                 <TouchableOpacity
//                   underlayColor='#69c8a1'
//                   style={styles.customBtnBG3} 
//                   onPress={() => this.props.navigation.navigate('Tachycardia')}>
//                   <Text style={styles.customBtnText2}>Tachycardia</Text>
//                 </TouchableOpacity>
//               </View>
//       </View>

              
//           <View style={{marginTop: Dimensions.get('window').height/40, alignItems: 'center'}}>
//             <Image
//               source={require('../../assets/mgh-htl-stacked.png')}
//               style={{
//                 marginRight: Dimensions.get('window').width/35, 
//                 width: Dimensions.get('window').width/1.4, 
//                 height: Dimensions.get('window').height/10 }}
//             />
//           </View>

//         </View>

//   )
// }
// }

// const styles = StyleSheet.create({
// title: {
//   fontWeight: '600',
//   color: '#333333',
//   fontSize: Dimensions.get('window').height/35, 
// },
// button: {
//   marginTop: Dimensions.get('window').height/100
// },
// customBtnText2: {
//   fontWeight: '500',
//   textAlign: 'center',
//   textAlignVertical: "center",
//   // color: 'white',
//   color: '#303333',
//   fontSize: Dimensions.get('window').height/40,
//   marginTop: Dimensions.get('window').height/28
// },
// customBtnBG2: {
//   paddingHorizontal: 1,
//   paddingVertical: 1,
//   shadowOpacity: .1, 
//   borderColor: '#6AA1B5',
//   // borderWidth: 2,
//   // backgroundColor: '#6AA1B5',
//   backgroundColor: 'white',
//   borderRadius: 4, 
//   width: Dimensions.get('window').width/2.4,
//   height: Dimensions.get('window').height/9,
// },
// customBtnBG3: {
//   paddingHorizontal: 1,
//   paddingVertical: 1,
//   shadowOpacity: .1, 
//   borderWidth: 2,
//   borderColor: '#549EC9',
//   // backgroundColor: '#839CA5',
//   // backgroundColor: '#256A96',
//   borderRadius: 4, 
//   width: Dimensions.get('window').width/2.4,
//   height: Dimensions.get('window').height/9,
// }
// })















// #3 new design with both inpatient emergencies and acls
render() {  
  return (  
      <View style={{flex: 1}}>

        <View style={styles.top}>
        <View style={{
          backgroundColor: '#0F526B', 
          marginTop: Dimensions.get('window').height/25, 
          marginLeft: Dimensions.get('window').width/30, 
          marginRight: Dimensions.get('window').width/30,
          paddingTop: Dimensions.get('window').height/80, 
          paddingBottom: Dimensions.get('window').height/80,
          shadowOpacity: .5,
          alignItems: 'center',
        }}>
          <Text style={{color: 'white', fontSize: Dimensions.get('window').height/35, fontWeight: '500'}}>Inpatient Emergencies</Text>
        </View>




        <View style={{
          backgroundColor: '#E7EAEA', 
          alignItems: 'center',
          marginLeft: Dimensions.get('window').width/30,  
          marginRight: Dimensions.get('window').width/30,
          paddingBottom: Dimensions.get('window').height/75,
        }}>
            <View style={{ 
              paddingBottom: Dimensions.get('window').height/80,
            }}>
            </View>


              <View style={{flexDirection: 'row', paddingBottom: Dimensions.get('window').height/140,}}>
                        <View style={{
                          flexDirection: 'column', 
                          marginRight: Dimensions.get('window').width/30 
                        }}>
                          <TouchableOpacity
                            style={styles.customBtnBG2} 
                              onPress={() => this.props.navigation.navigate('Stroke1')
                            }>
                            <Text style={styles.customBtnText2}>CVA (Stroke)</Text>
                          </TouchableOpacity>
                        </View>
                
                        <View style={{flexDirection: 'column'}}>
                          <TouchableOpacity
                            style={styles.customBtnBG2} 
                            onPress={() => this.props.navigation.navigate('Pert')}>
                            <Text style={styles.customBtnText2}>PE</Text>
                          </TouchableOpacity>
                        </View>
              </View>


              <View style={{flexDirection: 'row'}}>
                              <View style={{
                                flexDirection: 'column', 
                                marginRight: Dimensions.get('window').width/30, 
                                marginTop: Dimensions.get('window').height/150 }}>
                                <TouchableOpacity
                                  underlayColor='#69c8a1'
                                  style={styles.customBtnBG2} 
                                  onPress={() => this.props.navigation.navigate('RICU')}>
                                  <Text style={styles.customBtnText2}>RICU (Airway)</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{
                                flexDirection: 'column', 
                                marginTop: Dimensions.get('window').height/150
                                }}>
                                <TouchableOpacity
                                  style={styles.customBtnBG2} 
                                  onPress={() => this.props.navigation.navigate('STEMI')}>
                                  <Text style={styles.customBtnText2}>STEMI</Text>
                                </TouchableOpacity>
                              </View>
              </View>
            </View>
       

            
        <View style={{
          backgroundColor: '#256A96', 
          marginTop: Dimensions.get('window').height/25, 
          marginLeft: Dimensions.get('window').width/30, 
          marginRight: Dimensions.get('window').width/30,
          paddingTop: Dimensions.get('window').height/80, 
          paddingBottom: Dimensions.get('window').height/80,
          shadowOpacity: .5,
          alignItems: 'center',
        }}>
          <Text style={{color: 'white', fontSize: Dimensions.get('window').height/35, fontWeight: '500'}}>ACLS</Text>
        </View>

        <View style={{
          backgroundColor: '#EBEBEB', 
          alignItems: 'center',
          marginLeft: Dimensions.get('window').width/30,  
          marginRight: Dimensions.get('window').width/30,
          paddingBottom: Dimensions.get('window').height/75,
        }}>
            <View style={{ 
              paddingBottom: Dimensions.get('window').height/80,
            }}>
            </View>
            
            
            <View style={{alignItems: 'center', }}>
              <View style={{flexDirection: 'row', }}>
                <View style={{
                  flexDirection: 'column', 
                  marginRight: Dimensions.get('window').width/30, 
                  marginBottom: Dimensions.get('window').height/150}}>
                  <TouchableOpacity
                    style={styles.customBtnBG2} 
                    onPress={() => this.props.navigation.navigate('CardiacArrestCOVID')}>
                    <Text style={styles.customBtnCovidFirstLine}>Cardiac Arrest</Text>
                    <Text style={styles.customBtnCovidSecondLine}>COVID-19</Text>
                  </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'column'}}>
                <TouchableOpacity
                    underlayColor='#69c8a1'
                    style={styles.customBtnBG2} 
                    onPress={() => this.props.navigation.navigate('CardiacArrest')}>
                    <Text style={styles.customBtnText2}>Cardiac Arrest</Text>
                  </TouchableOpacity>
                </View>   
              </View>

              <View style={{flexDirection: 'row', }}>
                <View style={{
                  flexDirection: 'column', 
                  marginTop: Dimensions.get('window').height/150,
                  marginRight: Dimensions.get('window').width/30, 
                  marginBottom: Dimensions.get('window').height/150}}>
                  <TouchableOpacity
                    underlayColor='#69c8a1'
                    style={styles.customBtnBG2} 
                    onPress={() => this.props.navigation.navigate('Tachycardia')}>
                    <Text style={styles.customBtnText2}>Tachycardia</Text>
                  </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'column', marginTop: Dimensions.get('window').height/150}}>
                  <TouchableOpacity
                    style={styles.customBtnBG2} 
                    onPress={() => this.props.navigation.navigate('Bradycardia')}>
                    <Text style={styles.customBtnText2}>Bradycardia</Text>
                  </TouchableOpacity>
                </View> 
              </View>


                <View style={{flexDirection: 'row', }}>
                  <View style={{flexDirection: 'column', marginTop: Dimensions.get('window').height/150}}>
                    <TouchableOpacity
                      style={styles.customBtnBG2} 
                      onPress={() => this.props.navigation.navigate('PostCardiacArrestCare')}>
                      <Text style={styles.customBtnText3}>Post Cardiac</Text>
                      <Text style={styles.customBtnText32}>Arrest Care</Text>
                    </TouchableOpacity>
                  </View>     
              </View>
          </View>
        </View>
        </View>

        

        <View style={styles.bottom}>
            <View style={{ 
                flexDirection: 'row', 
                marginTop: Dimensions.get('window').height/45, 
                alignItems: 'center'
            }}>
              
              <Image
                source={require('../../assets/mgh-htl-stacked.png')}
                style={{
                  // marginRight: Dimensions.get('window').width/35,
                  // width: 200,
                  // height: 90,
                  width: Dimensions.get('window').width/1.6, 
                  height: Dimensions.get('window').height/8 
                }}
              />
            </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  top: {
    height: '81%',
    // backgroundColor: 'pink',
  },
 bottom: {
   height: '19%',
   alignItems: 'center',
  //  justifyContent: 'center',
  //  backgroundColor: 'gray',
  },
title: {
  fontWeight: '600',
  color: '#333333',
  fontSize: Dimensions.get('window').height/35, 
},
button: {
  marginTop: Dimensions.get('window').height/100
},
customBtnCovidFirstLine: {
  fontWeight: '500',
  textAlign: 'center', 
  textAlignVertical: "center",
  color: '#303333',
  fontSize: Dimensions.get('window').height/40,
  marginTop: Dimensions.get('window').height/60
},
customBtnCovidSecondLine: {
  fontWeight: '500',
  textAlign: 'center', 
  textAlignVertical: "center",
  color: 'red',
  fontWeight: 'bold',
  fontSize: Dimensions.get('window').height/40,
},
customBtnText2: {
  fontWeight: '500',
  textAlign: 'center', 
  textAlignVertical: "center",
  color: '#303333',
  fontSize: Dimensions.get('window').height/40,
  marginTop: Dimensions.get('window').height/34
},
customBtnText3: {
  fontWeight: '500',
  textAlign: 'center',
  textAlignVertical: "center",
  color: '#303333',
  fontSize: Dimensions.get('window').height/40,
  marginTop: Dimensions.get('window').height/60
},
customBtnText32: {
  fontWeight: '500',
  textAlign: 'center',
  textAlignVertical: "center",
  color: '#303333',
  fontSize: Dimensions.get('window').height/40,
},
customBtnBG2: {
  paddingHorizontal: 1,
  paddingVertical: 1,
  shadowOpacity: .1, 
  backgroundColor: 'white',
  borderRadius: 4, 
  width: Dimensions.get('window').width/2.4,
  height: Dimensions.get('window').height/11,
},
})
















// // #4 new (my design) design with only ACLS content
// render() { 
//   return (  
//       <View>
            


//         <View style={{
//           backgroundColor: '#256A96', 
//           marginTop: Dimensions.get('window').height/25, 
//           marginLeft: Dimensions.get('window').width/30, 
//           marginRight: Dimensions.get('window').width/30,
//           paddingBottom: Dimensions.get('window').height/60,
//           shadowOpacity: .5
//         }}>
//            <View style={{
//                 paddingTop: Dimensions.get('window').height/100, 
//                 alignItems: 'center',
//             }}>
//                 <Text style={{color: 'white', fontSize: Dimensions.get('window').height/35, fontWeight: '500'}}>ACLS</Text>
//             </View>
//         </View>

//         <View style={{
//           // backgroundColor: '#E7EAEA', 
//           backgroundColor: '#EBEBEB', 
//           alignItems: 'center',
//           marginLeft: Dimensions.get('window').width/30,  
//           marginRight: Dimensions.get('window').width/30,
//           paddingBottom: Dimensions.get('window').height/75,
//         }}>
//             <View style={{ 
//               paddingBottom: Dimensions.get('window').height/80,
//             }}>
//             </View>
            
            
//             <View style={{alignItems: 'center', }}>
//               <View style={{flexDirection: 'row', }}>
//                 <View style={{
//                   flexDirection: 'column', 
//                   marginRight: Dimensions.get('window').width/30, 
//                   marginBottom: Dimensions.get('window').height/150}}>
//                   <TouchableOpacity
//                     underlayColor='#69c8a1'
//                     style={styles.customBtnBG3} 
//                     onPress={() => this.props.navigation.navigate('CardiacArrest')}>
//                     <Text style={styles.customBtnText2}>Cardiac Arrest</Text>
//                   </TouchableOpacity>
//                 </View>

//                 <View style={{flexDirection: 'column'}}>
//                   <TouchableOpacity
//                     style={styles.customBtnBG3} 
//                     onPress={() => this.props.navigation.navigate('Bradycardia')}>
//                     <Text style={styles.customBtnText2}>Bradycardia</Text>
//                   </TouchableOpacity>
//                 </View>     
//               </View>





//               <View style={{flexDirection: 'row', }}>
//                 <View style={{
//                   flexDirection: 'column', 
//                   marginRight: Dimensions.get('window').width/30, 
//                   marginBottom: Dimensions.get('window').height/150}}>
//                   <TouchableOpacity
//                     underlayColor='#69c8a1'
//                     style={styles.customBtnBG3} 
//                     onPress={() => this.props.navigation.navigate('Tachycardia')}>
//                     <Text style={styles.customBtnText2}>Tachycardia</Text>
//                   </TouchableOpacity>
//                 </View>

//                 <View style={{flexDirection: 'column'}}>
//                   <TouchableOpacity
//                     style={styles.customBtnBG3} 
//                     onPress={() => this.props.navigation.navigate('PostCardiacArrestCare')}>
//                     <Text style={styles.customBtnTextLine1}>Post Cardiac</Text>
//                     <Text style={styles.customBtnTextLine2}>Arrest Care</Text>
//                   </TouchableOpacity>
//                 </View>     
//               </View>

              
        
            
//               {/* <View style={{
//                   marginTop: Dimensions.get('window').height/140,
//                   flexDirection: 'column', 
//                   marginLeft: Dimensions.get('window').width/28, 
//                   }}>
//                   <TouchableOpacity
//                     underlayColor='#69c8a1'
//                     style={styles.customBtnBG3} 
//                     onPress={() => this.props.navigation.navigate('Tachycardia')}>
//                     <Text style={styles.customBtnText2}>Tachycardia</Text>
//                   </TouchableOpacity>
//               </View> */}

              

//           </View>
//         </View>

//         <View style={{marginTop: Dimensions.get('window').height/40, alignItems: 'center'}}>
//           <Image
//             source={require('../../assets/mgh-htl-stacked.png')}
//             style={{
//               marginRight: Dimensions.get('window').width/35, 
//               width: Dimensions.get('window').width/1.4, 
//               height: Dimensions.get('window').height/10 }}
//           />
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
// title: {
//   fontWeight: '600',
//   color: '#333333',
//   fontSize: Dimensions.get('window').height/35, 
// },
// button: {
//   marginTop: Dimensions.get('window').height/100
// },
// customBtnText2: {
//   fontWeight: '500',
//   textAlign: 'center',
//   textAlignVertical: "center",
//   // color: 'white',
//   color: '#303333',
//   fontSize: Dimensions.get('window').height/40,
//   marginTop: Dimensions.get('window').height/28
// },
// customBtnTextLine1: {
//   fontWeight: '500',
//   textAlign: 'center',
//   textAlignVertical: "center",
//   color: '#303333',
//   fontSize: Dimensions.get('window').height/40,
//   marginTop: Dimensions.get('window').height/40
// },
// customBtnTextLine2: {
//   fontWeight: '500',
//   textAlign: 'center',
//   textAlignVertical: "center",
//   color: '#303333',
//   fontSize: Dimensions.get('window').height/40,
// },
// customBtnBG2: {
//   paddingHorizontal: 1,
//   paddingVertical: 1,
//   shadowOpacity: .1, 
//   borderColor: '#6AA1B5',
//   // borderWidth: 2,
//   // backgroundColor: '#6AA1B5',
//   backgroundColor: 'white',
//   borderRadius: 4, 
//   width: Dimensions.get('window').width/2.4,
//   height: Dimensions.get('window').height/9,
// },
// customBtnBG3: {
//   paddingHorizontal: 1,
//   paddingVertical: 1,
//   shadowOpacity: .1, 
//   backgroundColor: 'white',
//   borderRadius: 4, 
//   width: Dimensions.get('window').width/2.4,
//   height: Dimensions.get('window').height/9,
// }
// })










// // #5 new design (alyssa's design) with only ACLS content
// render() { 
//   return (  
//       <View>

//         <View style={styles.top}>
//             <View style={{ alignItems: 'center'}}>
//               <Image
//                 source={require('../../assets/aha3.png')}
//                 style={{
//                   marginRight: Dimensions.get('window').width/35, 
//                   width: Dimensions.get('window').width/1.4, 
//                   height: Dimensions.get('window').height/10 }}
//               />
//             </View>
//         </View>


            

//         <View style={styles.middle}>

//         <LinearGradient 
//             // colors={['#D4801C', '#AD3839', ]}  
//             colors={['#256A96', '#118994', ]}  
//             start={{x: 0, y: 0}}
//             end={{x: 1, y: 0}} 
//             style={styles.linearGradient}>
//           <Text style={styles.buttonText}>
//             ACLS
//           </Text>
//         </LinearGradient>

//               {/* <View style={{
//                 backgroundColor: '#256A96', 
//                 backgroundColor: '#EC3C3E', 
//                 // marginTop: Dimensions.get('window').height/25, 
//                 marginLeft: Dimensions.get('window').width/30, 
//                 marginRight: Dimensions.get('window').width/30,
//                 paddingBottom: Dimensions.get('window').height/60,
//                 shadowOpacity: .5
//               }}> */}
//                 {/* <View style={{
//                       paddingTop: Dimensions.get('window').height/100, 
//                       alignItems: 'center',
//                   }}> */}

                    
//                       {/* <Text style={{color: 'white', fontSize: Dimensions.get('window').height/35, fontWeight: '500'}}>ACLS</Text> */}
//                   {/* </View> */}
//               {/* </View> */}

//               <View style={{
//                 // backgroundColor: '#E7EAEA', 
//                 backgroundColor: '#EBEBEB', 
//                 alignItems: 'center',
//                 marginLeft: Dimensions.get('window').width/30,  
//                 marginRight: Dimensions.get('window').width/30,
//                 paddingBottom: Dimensions.get('window').height/75,
//               }}>
//                   <View style={{ 
//                     paddingBottom: Dimensions.get('window').height/80,
//                   }}>
//                   </View>
                  
                  
//                   <View style={{alignItems: 'center', }}>
//                     <View style={{flexDirection: 'row', }}>
//                       <View style={{
//                         flexDirection: 'column', 
//                         marginRight: Dimensions.get('window').width/30, 
//                         marginBottom: Dimensions.get('window').height/150}}>
//                         <TouchableOpacity
//                           underlayColor='#69c8a1'
//                           style={styles.customBtnBG3} 
//                           onPress={() => this.props.navigation.navigate('CardiacArrest')}>
//                           <Text style={styles.customBtnText2}>Cardiac Arrest</Text>
//                         </TouchableOpacity>
//                       </View>

//                       <View style={{flexDirection: 'column'}}>
//                         <TouchableOpacity
//                           style={styles.customBtnBG3} 
//                           onPress={() => this.props.navigation.navigate('Bradycardia')}>
//                           <Text style={styles.customBtnText2}>Bradycardia</Text>
//                         </TouchableOpacity>
//                       </View>     
//                     </View>





//                     <View style={{flexDirection: 'row', }}>
//                       <View style={{
//                         flexDirection: 'column', 
//                         marginRight: Dimensions.get('window').width/30, 
//                         marginBottom: Dimensions.get('window').height/150}}>
//                         <TouchableOpacity
//                           underlayColor='#69c8a1'
//                           style={styles.customBtnBG3} 
//                           onPress={() => this.props.navigation.navigate('Tachycardia')}>
//                           <Text style={styles.customBtnText2}>Tachycardia</Text>
//                         </TouchableOpacity>
//                       </View>

//                       <View style={{flexDirection: 'column'}}>
//                         <TouchableOpacity
//                           style={styles.customBtnBG3} 
//                           onPress={() => this.props.navigation.navigate('PostCardiacArrestCare')}>
//                           <Text style={styles.customBtnTextLine1}>Post Cardiac</Text>
//                           <Text style={styles.customBtnTextLine2}>Arrest Care</Text>
//                         </TouchableOpacity>
//                       </View>     
//                     </View>

                    
              
                  
//                     {/* <View style={{
//                         marginTop: Dimensions.get('window').height/140,
//                         flexDirection: 'column', 
//                         marginLeft: Dimensions.get('window').width/28, 
//                         }}>
//                         <TouchableOpacity
//                           underlayColor='#69c8a1'
//                           style={styles.customBtnBG3} 
//                           onPress={() => this.props.navigation.navigate('Tachycardia')}>
//                           <Text style={styles.customBtnText2}>Tachycardia</Text>
//                         </TouchableOpacity>
//                     </View> */}

                    

//                 </View>
//               </View>
//         </View>





//         <View style={styles.bottom}>
//             <View style={{marginTop: Dimensions.get('window').height/40, alignItems: 'center'}}>
//               <Image
//                 source={require('../../assets/mgh-htl-stacked.png')}
//                 style={{
//                   marginRight: Dimensions.get('window').width/35, 
//                   width: Dimensions.get('window').width/1.4, 
//                   height: Dimensions.get('window').height/10 }}
//               />
//             </View>
//         </View>

       
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   linearGradient: {
//       // backgroundColor: '#256A96', 
//       // backgroundColor: '#EC3C3E', 
//       // backgroundColor: '#EC3C3E', 
//       // marginTop: Dimensions.get('window').height/25, 
//       marginLeft: Dimensions.get('window').width/30, 
//       marginRight: Dimensions.get('window').width/30,
//       paddingBottom: Dimensions.get('window').height/60,
//       shadowOpacity: .5
//   },
//   buttonText: {
//     fontSize: Dimensions.get('window').height/35,
//     fontFamily: 'Gill Sans',
//     textAlign: 'center',
//     marginTop: Dimensions.get('window').height/55,
//     color: '#ffffff',
//     backgroundColor: 'transparent',
//   },
// top: {
//   height: '25%',
//   justifyContent: 'center',
//   // backgroundColor: 'yellow'
// },
// middle: {
//   height: '50%',
//   justifyContent: 'center',
//   // backgroundColor: 'pink'
// },
// bottom: {
//   height: '25%',
//   paddingTop: Dimensions.get('window').height/30,
//   // backgroundColor: 'gray'
// },

// title: {
//   fontWeight: '600',
//   color: '#333333',
//   fontSize: Dimensions.get('window').height/35, 
// },
// button: {
//   marginTop: Dimensions.get('window').height/100
// },
// customBtnText2: {
//   fontWeight: '500',
//   textAlign: 'center',
//   textAlignVertical: "center",
//   // color: 'white',
//   color: '#303333',
//   fontSize: Dimensions.get('window').height/40,
//   marginTop: Dimensions.get('window').height/28
// },
// customBtnTextLine1: {
//   fontWeight: '500',
//   textAlign: 'center',
//   textAlignVertical: "center",
//   color: '#303333',
//   fontSize: Dimensions.get('window').height/40,
//   marginTop: Dimensions.get('window').height/40
// },
// customBtnTextLine2: {
//   fontWeight: '500',
//   textAlign: 'center',
//   textAlignVertical: "center",
//   color: '#303333',
//   fontSize: Dimensions.get('window').height/40,
// },
// customBtnBG2: {
//   paddingHorizontal: 1,
//   paddingVertical: 1,
//   shadowOpacity: .1, 
//   borderColor: '#6AA1B5',
//   // borderWidth: 2,
//   // backgroundColor: '#6AA1B5',
//   backgroundColor: 'white',
//   borderRadius: 4, 
//   width: Dimensions.get('window').width/2.4,
//   height: Dimensions.get('window').height/9,
// },
// customBtnBG3: {
//   paddingHorizontal: 1,
//   paddingVertical: 1,
//   shadowOpacity: .1, 
//   backgroundColor: 'white',
//   borderRadius: 4, 
//   width: Dimensions.get('window').width/2.4,
//   height: Dimensions.get('window').height/9,
// }
// })


// #6 new design (version2) with only ACLS content with 4 top to bottom, not side by side
// render() { 
//   return (  
//       <View>

//         <View style={styles.top}>
//             <View style={{ alignItems: 'center'}}>
//               <Image
//                 source={require('../../assets/aha3.png')}
//                 style={{
//                   marginRight: Dimensions.get('window').width/35, 
//                   width: Dimensions.get('window').width/1.6, 
//                   height: Dimensions.get('window').height/6.5 }}
//               />
//             </View>
//         </View>


                                                                                                                                                                                                                                                                                                                                                                                                                                                               

//         <View style={styles.middle}>

//         <LinearGradient 
//             colors={['#256A96', '#118994', ]}  
//             start={{x: 0, y: 0}}
//             end={{x: 1, y: 0}} 
//             style={styles.linearGradient}>
//           <Text style={styles.buttonText}>
//             Adult Cardiac Life Support
//           </Text>
//         </LinearGradient>

            

//               <View style={{
//                 // backgroundColor: '#E7EAEA', 
//                 backgroundColor: '#EBEBEB', 
//                 alignItems: 'center',
//                 marginLeft: Dimensions.get('window').width/30,  
//                 marginRight: Dimensions.get('window').width/30,
//                 paddingTop: Dimensions.get('window').height/55,
//                 paddingBottom: Dimensions.get('window').height/30,
//               }}>
//                   <View style={{ 
//                     paddingBottom: Dimensions.get('window').height/80,
//                   }}>
//                   </View>
                  
                  
//                 <View style={{alignItems: 'center', }}>
                   
//                   <View>
//                         <TouchableOpacity
//                           underlayColor='#69c8a1'
//                           style={styles.customBtnBG3} 
//                           onPress={() => this.props.navigation.navigate('CardiacArrest')}>
//                           <Text style={styles.customBtnText2}>Cardiac Arrest</Text>
//                         </TouchableOpacity>
//                   </View>
               

//                <View style={{marginTop: Dimensions.get('window').height/75,}}>

//                         <TouchableOpacity
//                           style={styles.customBtnBG3} 
//                           onPress={() => this.props.navigation.navigate('Bradycardia')}>
//                           <Text style={styles.customBtnText2}>Bradycardia</Text>
//                         </TouchableOpacity>
//                </View>
                       
                    




//                       <View style={{marginTop: Dimensions.get('window').height/75,}}>
//                         <TouchableOpacity
//                           underlayColor='#69c8a1'
//                           style={styles.customBtnBG3} 
//                           onPress={() => this.props.navigation.navigate('Tachycardia')}>
//                           <Text style={styles.customBtnText2}>Tachycardia</Text>
//                         </TouchableOpacity>
//                         </View>
                 

//               <View style={{marginTop: Dimensions.get('window').height/75,}}>
//                         <TouchableOpacity
//                           style={styles.customBtnBG3} 
//                           onPress={() => this.props.navigation.navigate('PostCardiacArrestCare')}>
//                           <Text style={styles.customBtnTextLine1}>Post Cardiac</Text>
//                           <Text style={styles.customBtnTextLine2}>Arrest Care</Text>
//                         </TouchableOpacity>
//                   </View>
                       
                
//                 </View>
//               </View>
//         </View>





//         <View style={styles.bottom}>
//             <View style={{ alignItems: 'center'}}>
//               <Image
//                 source={require('../../assets/mgh-htl-stacked.png')}
//                 style={{
//                   marginRight: Dimensions.get('window').width/35, 
//                   width: Dimensions.get('window').width/1.4, 
//                   height: Dimensions.get('window').height/10 }}
//               />
//             </View>
//         </View>

       
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   linearGradient: {
//       marginLeft: Dimensions.get('window').width/30, 
//       marginRight: Dimensions.get('window').width/30,
//       paddingBottom: Dimensions.get('window').height/60,
//       shadowOpacity: .5
//   },
//   buttonText: {
//     fontSize: Dimensions.get('window').height/35,
//     fontFamily: 'Gill Sans',
//     textAlign: 'center',
//     marginTop: Dimensions.get('window').height/55,
//     color: '#ffffff',
//     backgroundColor: 'transparent',
//   },
// top: {
//   height: '17%',
//   justifyContent: 'center',
//   // backgroundColor: 'yellow'
// },
// middle: {
//   height: '66%',
//   justifyContent: 'center',
//   // backgroundColor: 'pink'
// },
// bottom: {
//   height: '17%',
//   paddingTop: Dimensions.get('window').height/100,
//   // backgroundColor: 'gray'
// },

// title: {
//   fontWeight: '600',
//   color: '#333333',
//   fontSize: Dimensions.get('window').height/35, 
// },
// button: {
//   marginTop: Dimensions.get('window').height/100
// },
// customBtnText2: {
//   fontWeight: '500',
//   textAlign: 'center',
//   textAlignVertical: "center",
//   // color: 'white',
//   color: '#303333',
//   fontSize: Dimensions.get('window').height/40,
//   marginTop: Dimensions.get('window').height/28
// },
// customBtnTextLine1: {
//   fontWeight: '500',
//   textAlign: 'center',
//   textAlignVertical: "center",
//   color: '#303333',
//   fontSize: Dimensions.get('window').height/40,
//   marginTop: Dimensions.get('window').height/55
// },
// customBtnTextLine2: {
//   fontWeight: '500',
//   textAlign: 'center',
//   textAlignVertical: "center",
//   color: '#303333',
//   fontSize: Dimensions.get('window').height/40,
// },
// customBtnBG2: {
//   paddingHorizontal: 1,
//   paddingVertical: 1,
//   shadowOpacity: .1, 
//   borderColor: '#6AA1B5',
//   // borderWidth: 2,
//   // backgroundColor: '#6AA1B5',
//   backgroundColor: 'white',
//   borderRadius: 4, 
//   width: Dimensions.get('window').width/2.4,
//   height: Dimensions.get('window').height/9,
// },
// customBtnBG3: {
//   paddingHorizontal: 1,
//   paddingVertical: 1,
//   shadowOpacity: .1, 
//   backgroundColor: 'white',
//   borderRadius: 4, 
//   width: Dimensions.get('window').width/1.16,
//   height: Dimensions.get('window').height/10,
// }
// })