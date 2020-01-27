import React from 'react'
import { Image, TouchableHighlight, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default class InpatientConditions extends React.Component {
  static navigationOptions = ({ navigation }) => {
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
      <Button 
        icon={
          <View style={{ marginRight: Dimensions.get('window').width/75 }}>
            <Icon name="ios-information-circle-outline" size={Dimensions.get('window').height/29} color="white" />
          </View>
        }
        onPress={ () => navigation.navigate('DevelopmentTeam') }
        type='clear'
      />
    )
    
    return {
      headerTitle,
      headerRight,    
      headerStyle: {backgroundColor: '#709CD0'},  
    }
  }


  render() { 
    return (  
        <View style={{}}>

     
          <View style={{
            backgroundColor: 'white', 
            marginTop: Dimensions.get('window').height/60, 
            marginLeft: Dimensions.get('window').width/45, 
            marginRight: Dimensions.get('window').width/45,
            marginBottom: Dimensions.get('window').height/50,
            paddingBottom: Dimensions.get('window').height/60,
            shadowOpacity: .5}}>
            
                <View style={{
                  paddingLeft: Dimensions.get('window').width/50,
                  backgroundColor: '#27C694', 
                  paddingTop: Dimensions.get('window').height/50, 
                  paddingBottom: Dimensions.get('window').height/50,
                  alignItems: 'center',}}>
                  <Text style={{color: 'white', fontSize: Dimensions.get('window').height/33, fontWeight: '500'}}>Inpatient Emergencies</Text>
                </View>

                 <View style={{alignItems: 'center'}}>
                      <View style={{ 
                        alignItems: 'center', 
                        marginBottom: Dimensions.get('window').height/80,
                      }}>
                      </View>

                      <View style={{flexDirection: 'row', marginBottom: Dimensions.get('window').height/140,}}>

                                <View style={{
                                  flexDirection: 'column', 
                                  marginRight: Dimensions.get('window').width/30 
                                  // marginBottom: 
                                }}>
                                  <TouchableOpacity
                                    style={styles.customBtnBG2} 
                                      onPress={() => this.props.navigation.navigate('Stroke1')
                                    }>
                                    <Text style={styles.customBtnText2}>Stroke</Text>
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
                                      marginTop: Dimensions.get('window').height/150}}>
                                      <TouchableOpacity
                                        style={styles.customBtnBG2} 
                                        onPress={() => this.props.navigation.navigate('STEMI')}>
                                        <Text style={styles.customBtnText2}>STEMI</Text>
                                      </TouchableOpacity>
                                    </View>
                    </View>
                 </View>
          </View>

                







          <View style={{
            backgroundColor: 'white', 
            marginTop: Dimensions.get('window').height/60, 
            marginLeft: Dimensions.get('window').width/45, 
            marginRight: Dimensions.get('window').width/45,
            paddingBottom: Dimensions.get('window').height/60,
            shadowOpacity: .5}}>
            
                <View style={{
                  paddingLeft: Dimensions.get('window').width/50,
                  backgroundColor: '#6FABDE',
                  paddingTop: Dimensions.get('window').height/50, 
                  paddingBottom: Dimensions.get('window').height/50,
                  alignItems: 'center',}}>
                  <Text style={{ color: 'white', fontSize: Dimensions.get('window').height/36, fontWeight: '500'}}>ACLS</Text>
                </View>

                <View style={{ 
                  alignItems: 'center', 
                  marginBottom: Dimensions.get('window').height/80,
                }}>
                </View>


                <View style={{alignItems: 'center', }}>
                    <View style={{flexDirection: 'row', }}>
                                        <View style={{
                                          flexDirection: 'column', 
                                          marginRight: Dimensions.get('window').width/30, 
                                          marginBottom: Dimensions.get('window').height/150}}>
                                          <TouchableOpacity
                                            underlayColor='#69c8a1'
                                            style={styles.customBtnBG3} 
                                            onPress={() => this.props.navigation.navigate('CardiacArrest')}>
                                            <Text style={styles.customBtnText2}>Cardiac Arrest</Text>
                                          </TouchableOpacity>
                                        </View>

                                        <View style={{flexDirection: 'column'}}>
                                          <TouchableOpacity
                                            style={styles.customBtnBG3} 
                                            onPress={() => this.props.navigation.navigate('Bradycardia')}>
                                            <Text style={styles.customBtnText2}>Bradycardia</Text>
                                          </TouchableOpacity>
                                        </View>
                    </View>
                </View>


                <View style={{
                  marginTop: Dimensions.get('window').height/140,
                  flexDirection: 'column', 
                  marginLeft: Dimensions.get('window').width/22, 
                  }}>
                  <TouchableOpacity
                    underlayColor='#69c8a1'
                    style={styles.customBtnBG3} 
                    onPress={() => this.props.navigation.navigate('Tachycardia')}>
                    <Text style={styles.customBtnText2}>Tachycardia</Text>
                  </TouchableOpacity>
                </View>
        </View>

                 










            <View style={{marginTop: Dimensions.get('window').height/30, alignItems: 'center'}}>
              <Image
                source={require('../../assets/mgh-htl-stacked.png')}
                style={{
                  marginRight: Dimensions.get('window').width/35, 
                  width: Dimensions.get('window').width/1.4, 
                  height: Dimensions.get('window').height/10 }}
              />
            </View>




            </View>

    )
  }
}
  
const styles = StyleSheet.create({
  textColored: {
    color: 'red'
  },
  textNormal: {
    color: 'black'
  },
  container: {
    backgroundColor: '#FEFEFE',
    // backgroundColor: 'pink'
  },
  top2: {
    height: '85%',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  bottom2: {
    height: '15%',
    alignItems: 'center', 
    marginTop: Dimensions.get('window').height/20, 
    backgroundColor: '#69c8a1',
    // backgroundColor: 'pink'
  },


  title: {
    fontWeight: '600',
    color: '#333333',
    fontSize: Dimensions.get('window').height/35, 
  },
  button: {
    marginTop: Dimensions.get('window').height/100
  },
  customBtnText2: {
    fontWeight: '500',
    color: '#4B4D4B',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/28
  },
  customBtnBG2: {
    paddingHorizontal: 1,
    paddingVertical: 1,
    shadowOpacity: .1, 
    borderWidth: 2,
    borderColor: '#69c8a1',
    borderRadius: 4, 
    width: Dimensions.get('window').width/2.4,
    height: Dimensions.get('window').height/9,
  },
  customBtnBG3: {
    paddingHorizontal: 1,
    paddingVertical: 1,
    shadowOpacity: .1, 
    borderWidth: 2,
    borderColor: '#6FABDE',
    borderRadius: 4, 
    width: Dimensions.get('window').width/2.4,
    height: Dimensions.get('window').height/9,
    
  }
  // customBtnText: {
  //   fontWeight: '600',
  //   color: "#fff",
  //   textAlign: 'center',
  //   textAlignVertical: "center",
  //   fontSize: Dimensions.get('window').height/35,
  //   marginTop: Dimensions.get('window').height/40
  // },
  // customBtnBG: {
  //   backgroundColor: "#69c8a1",
  //   paddingHorizontal: 1,
  //   paddingVertical: 1,
  //   borderRadius: 4,
  //   shadowOpacity: .15, 
  //   width: Dimensions.get('window').width/1.06,
  //   height: Dimensions.get('window').height/11,
  // }
})



{/* <View style={styles.top}>

          <Text style={styles.title}>INPATIENT EMERGENCIES</Text>
          <SafeAreaView style={styles.button}>
            <TouchableOpacity
              style={styles.customBtnBG} 
              onPress={() => this.props.navigation.navigate('Stroke1')}>
              <Text style={styles.customBtnText}>Stroke</Text>
            </TouchableOpacity>
          </SafeAreaView>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.customBtnBG} 
              onPress={() => this.props.navigation.navigate('Pert')}>
              <Text style={styles.customBtnText}>PE</Text>
            </TouchableOpacity>
          </View>
        
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.customBtnBG} 
              onPress={() => this.props.navigation.navigate('RICUPatent')}>
              <Text style={styles.customBtnText}>RICU (Airway)</Text>
            </TouchableOpacity>
          </View>
        
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.customBtnBG} 
              onPress={() => this.props.navigation.navigate('STEMI')}>
              <Text style={styles.customBtnText}>STEMI</Text>
            </TouchableOpacity>
          </View>
        </View>


          <View style={styles.bottom}>
            <Text style={styles.title}>ACLS</Text>
            <View style={{marginTop: Dimensions.get('window').height/100,}}>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('CardiacArrest')}>
                  <Text style={styles.customBtnText}>Cardiac Arrest</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('Bradycardia')}>
                <Text style={styles.customBtnText}>Bradycardia</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('Tachycardia')}>
                <Text style={styles.customBtnText}>Tachycardia</Text>
              </TouchableOpacity>
            </View>
          </View> */}














      //     <SafeAreaView style={styles.container}>
      //   <View style={{alignItems: 'center', }}>
      //     <View style={{
      //       // shadowOffset:{  width: 0,  height: 1,  },
      //       // shadowColor: 'black',
      //       // shadowOpacity: .25,

      //       // backgroundColor: 'white', 
      //       // marginTop: Dimensions.get('window').height/40,
      //       // paddingBottom: Dimensions.get('window').height/40,
      //       // paddingRight: Dimensions.get('window').width/40,
      //       // paddingLeft: Dimensions.get('window').width/40
      //     }}>
      //             <View style={{ 
      //               backgroundColor: 'pink', 
      //               alignItems: 'center', 
      //               marginTop: Dimensions.get('window').height/40, 
      //               marginBottom: Dimensions.get('window').height/30,
      //             }}>
      //               <Text style={{fontWeight: '500', fontSize: Dimensions.get('window').height/30 }}>Inpatient Emergencies</Text>
      //             </View>

      //             <View style={{flexDirection: 'row', marginBottom: Dimensions.get('window').height/30,}}>

      //               <View style={{flexDirection: 'column', marginRight: Dimensions.get('window').width/25 }}>
      //                 <TouchableOpacity
      //                   style={styles.customBtnBG2} 
      //                     onPress={() => this.props.navigation.navigate('Stroke1')
      //                   }>
      //                   <Text style={styles.customBtnText2}>Stroke</Text>
      //                 </TouchableOpacity>
      //               </View>
                    
      //               <View style={{flexDirection: 'column'}}>
      //                 <TouchableOpacity
      //                   style={styles.customBtnBG2} 
      //                   onPress={() => this.props.navigation.navigate('Pert')}>
      //                   <Text style={styles.customBtnText2}>PE</Text>
      //                 </TouchableOpacity>
      //               </View>
      //             </View>


      //             <View style={{flexDirection: 'row', }}>
      //               <View style={{flexDirection: 'column', marginRight: Dimensions.get('window').width/25 }}>
      //                 <TouchableHighlight
      //                   underlayColor='#69c8a1'
      //                   style={styles.customBtnBG2} 
      //                   onPress={() => this.props.navigation.navigate('RICU')}>
      //                   <Text style={styles.customBtnText2}>RICU (Airway)</Text>
      //                 </TouchableHighlight>
      //               </View>

      //               <View style={{flexDirection: 'column'}}>
      //                 <TouchableOpacity
      //                   style={styles.customBtnBG2} 
      //                   onPress={() => this.props.navigation.navigate('STEMI')}>
      //                   <Text style={styles.customBtnText2}>STEMI</Text>
      //                 </TouchableOpacity>
      //               </View>
      //             </View>
      //     </View>







      //       <View style={{marginTop: Dimensions.get('window').height/20, marginBottom: Dimensions.get('window').height/30}}>
      //         <Text style={{fontWeight: '500', fontSize: Dimensions.get('window').height/30 }}>ACLS</Text>
      //       </View>

      //       <View style={{flexDirection: 'row', }}>
      //         <View style={{flexDirection: 'column', marginRight: Dimensions.get('window').width/25 }}>
      //           <TouchableHighlight
      //             underlayColor='#69c8a1'
      //             style={styles.customBtnBG2} 
      //             onPress={() => this.props.navigation.navigate('CardiacArrest')}>
      //             <Text style={styles.customBtnText2}>Cardiac Arrest</Text>
      //           </TouchableHighlight>
      //         </View>

      //         <View style={{flexDirection: 'column'}}>
      //           <TouchableOpacity
      //             style={styles.customBtnBG2} 
      //             onPress={() => this.props.navigation.navigate('Bradycardia')}>
      //             <Text style={styles.customBtnText2}>Bradycardia</Text>
      //           </TouchableOpacity>
      //         </View>
      //       </View>


      //   </View>




      //     <View style={{marginTop: Dimensions.get('window').height/30, flexDirection: 'column', marginLeft: Dimensions.get('window').width/22 }}>
      //       <TouchableHighlight
      //         underlayColor='#69c8a1'
      //         style={styles.customBtnBG2} 
      //         onPress={() => this.props.navigation.navigate('Tachycardia')}>
      //         <Text style={styles.customBtnText2}>Tachycardia</Text>
      //       </TouchableHighlight>
      //     </View>



      //     <View style={{marginTop: Dimensions.get('window').height/30, alignItems: 'center'}}>
      //       <Image
      //         source={require('../../assets/mgh-htl-stacked.png')}
      //         style={{
      //           marginRight: Dimensions.get('window').width/35, 
      //           width: Dimensions.get('window').width/1.4, 
      //           height: Dimensions.get('window').height/10 }}
      //       />
      //   </View>
        
      // </SafeAreaView>