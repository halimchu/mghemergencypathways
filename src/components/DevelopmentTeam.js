import React from 'react'
import { Image, Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'

export default class DevelopmentTeam extends React.Component {
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
  
  state = {
    data: [
     'Andrew Chu MD, MPH',
     'Halim Chu',
     'Blake Niccum MD',
     'Melvin Joice MD',
     'Joshua Ziperstein MD',
     'Jared Conley MD, PhD, MPH'
    ]
  }

 
  names() {
    return (
      this.state.data.map((item) => (
        <View key={item} style={{ 
          alignItems: 'center',
          marginBottom:  Dimensions.get('window').height/80, 
          // flexDirection: 'row', 
          // marginRight: Dimensions.get('window').width/20, 
          // marginLeft: Dimensions.get('window').width/10 
        }}>
          {/* <Text style={styles.bulletPoint}>{`\u2022`}</Text>   */}
            {/* <Text style={{flex: 1, flexWrap: 'wrap'}}> */}
              <Text style={{ fontWeight: '300', fontSize: Dimensions.get('window').height/38 }}> 
                {item}
              </Text>
            {/* </Text>                                                                                                                                                  */}
        </View>
      ))
    )
  }

  


  render() { 
    return (  
      <SafeAreaView style={styles.container}>

        <View style={styles.top}>
            <Text style={styles.title}>Development Team</Text>
            {/* <Divider style={styles.divider} /> */}
          {this.names()}
        </View>

      
           

  



        <View style={styles.bottom}>

                <View style={{alignItems: 'center', marginTop: Dimensions.get('window').height/10, marginBottom: Dimensions.get('window').height/60}}>
                  {/* <Text style={{
                    fontWeight: 'bold', 
                    fontSize: Dimensions.get('window').height/32.5,
                    color: '#2b2b2b',
                    }}>Innovation Programs</Text> */}
                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: Dimensions.get('window').height/60,}}>
                    <View style={{marginBottom: Dimensions.get('window').height/60}}>
                        <TouchableOpacity
                          style={styles.customBtnBG}
                          onPress={ () => { Linking.openURL('http://healthcaretransformation.org/') }}>
                            <Image style={styles.htlImage} source={require('../../assets/htl-logo.png')} />
                        </TouchableOpacity>
                      </View>


                      <View style={{marginBottom: Dimensions.get('window').height/60}}>
                        <TouchableOpacity
                          style={styles.customBtnBG}
                          onPress={ () => { Linking.openURL('https://www.mghinnovationstudio.com/') }}>
                          <Text style={styles.customBtnTextInnovation}>MGH Innovation Studio</Text>
                        </TouchableOpacity>
                      </View>

                      

                      <View>
                        <TouchableOpacity
                          style={styles.customBtnBG}
                          onPress={ () => { Linking.openURL('http://www.mghlcs.org/') }}>
                            <Image style={styles.lcsImage} source={require('../../assets/mghlcs-chemex-logo.png')} />
                        </TouchableOpacity>
                      </View>
                </View>
        </View>




            

       
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: '40%',
    // justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
  bottom: {
    height: '50%',
    alignItems: 'center', 
    // justifyContent: 'center',
    // backgroundColor: 'gray',
  },


  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/15,
    marginBottom: Dimensions.get('window').height/38,
    fontSize: Dimensions.get('window').height/32.5,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  header: {
    color: 'gray',
    fontWeight: '500',
    color: '#515254',
    marginBottom: Dimensions.get('window').height/70,
    fontSize: Dimensions.get('window').height/32.5,
  },
  headerBottom: {
    textAlign: 'center', 
    fontSize: Dimensions.get('window').height/34.5, 
  },
  bulletPoints: {
    flexDirection: 'row',
    marginRight: 40,
    marginTop: Dimensions.get('window').height/55,
    marginLeft: Dimensions.get('window').height/40,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
    marginRight: Dimensions.get('window').height/275
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/38,
  },





  customBtnBG: {
    borderColor: '#B7B8BA', 
    borderWidth: 0.75, 
    backgroundColor: "white",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center', 
    width: Dimensions.get('window').width/1.55,
    height: Dimensions.get('window').height/13,
  },
  htlImage: {
    width: Dimensions.get('window').width/2.2,
    height: Dimensions.get('window').height/27,
  },
  lcsImage: {
    width: Dimensions.get('window').width/2.9,
    height: Dimensions.get('window').height/16,
  },
  customBtnTextInnovation: {
    fontWeight: '400',
    color: "gray",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/44,
  },
})