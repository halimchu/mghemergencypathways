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
        <View>

     
          <View style={{
            backgroundColor: 'white', 
            marginTop: Dimensions.get('window').height/20, 
            marginBottom: Dimensions.get('window').height/50,
            marginLeft: Dimensions.get('window').width/30, 
            marginRight: Dimensions.get('window').width/30,
            paddingBottom: Dimensions.get('window').height/60,
            shadowOpacity: .5
          }}>
            
                <View style={{
                  // backgroundColor: '#676666',  
                  backgroundColor: '#0f55bc',  
                  paddingLeft: Dimensions.get('window').width/50,
                  paddingTop: Dimensions.get('window').height/100, 
                  paddingBottom: Dimensions.get('window').height/100,
                  alignItems: 'center',}}>
                  <Text style={{color: 'white', fontSize: Dimensions.get('window').height/35, fontWeight: '500'}}>Inpatient Emergencies</Text>
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
            marginTop: Dimensions.get('window').height/30, 
            marginLeft: Dimensions.get('window').width/30, 
            marginRight: Dimensions.get('window').width/30,
            paddingBottom: Dimensions.get('window').height/60,
            shadowOpacity: .5}}>
            
                <View style={{
                  paddingLeft: Dimensions.get('window').width/50,
                  backgroundColor: '#256A96',
                  // backgroundColor: '#6FABDE',
                  paddingTop: Dimensions.get('window').height/100, 
                  paddingBottom: Dimensions.get('window').height/100,
                  alignItems: 'center',}}>
                  <Text style={{ color: 'white', fontSize: Dimensions.get('window').height/37, fontWeight: '500'}}>ACLS</Text>
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
                  marginLeft: Dimensions.get('window').width/28, 
                  }}>
                  <TouchableOpacity
                    underlayColor='#69c8a1'
                    style={styles.customBtnBG3} 
                    onPress={() => this.props.navigation.navigate('Tachycardia')}>
                    <Text style={styles.customBtnText2}>Tachycardia</Text>
                  </TouchableOpacity>
                </View>
        </View>

                 










            <View style={{marginTop: Dimensions.get('window').height/40, alignItems: 'center'}}>
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
    textAlign: 'center',
    textAlignVertical: "center",
    // color: '#676666',
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/28
  },
  customBtnBG2: {
    paddingHorizontal: 1,
    paddingVertical: 1,
    shadowOpacity: .1, 
    borderWidth: 2,
    borderColor: '#0f55bc',
    // backgroundColor: '#676666',
    borderRadius: 4, 
    width: Dimensions.get('window').width/2.4,
    height: Dimensions.get('window').height/9,
  },
  customBtnBG3: {
    paddingHorizontal: 1,
    paddingVertical: 1,
    shadowOpacity: .1, 
    borderWidth: 2,
    borderColor: '#256A96',
    // backgroundColor: '#256A96',
    borderRadius: 4, 
    width: Dimensions.get('window').width/2.4,
    height: Dimensions.get('window').height/9,
  }
})