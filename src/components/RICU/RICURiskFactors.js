import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 

export default class RICURiskFactors extends React.Component {
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


  state = {
    data: [
      'Prior difficult intubation',
      'BMI > 40',
      'Cervical spine injury or fixation',
      'Airway edema (burn, stridor, angioedema)',
      'Airway bleeding (trauma, tumor)',
      'History of head/neck tumor',
      'Prior neck radiation',
      'Prior or current tracheostomy',
      'Known inability to open mouth (e.g. trismus)'
    ]
  }



  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>RICU</Text>
          <Divider style={styles.divider} />
        </View>
      

        <View style={styles.middle}>
          <View style={styles.middleOne}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: Dimensions.get('window').height/31 }}>Difficult airway risk factors?</Text>
          </View>



          <View style={styles.middleTwo}>
            {this.state.data.map((item) => (
              <View key={item} style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text style={styles.bulletPointText}>{item}</Text>
                </View>
              </View>        
            ))} 
          </View>
        </View>



        <View style={styles.bottom}>
          <View style={{ marginRight: 20}}>
            <TouchableOpacity
              style={styles.customBtnBG} 
              onPress={() => this.props.navigation.navigate('RICUTwo')}>
              <Text style={styles.customBtnText}>Yes</Text>
            </TouchableOpacity>
          </View>
        
          <View>
            <TouchableOpacity
              style={styles.customBtnBG} 
              onPress={() => this.props.navigation.navigate('RICUThree')}>
              <Text style={styles.customBtnText}>No</Text>
            </TouchableOpacity>  
          </View>
        </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '65%',
    alignItems: 'center',
    // backgroundColor: 'pink'
  },
          middleOne: {
            height: '7%',
            // backgroundColor: 'green'
          },
          middleTwo: {
            height: '95%',
            paddingTop: Dimensions.get('window').height/60,
            // backgroundColor: 'purple'
          },
  bottom: {
    height: '25%',
    marginTop: Dimensions.get('window').height/40,
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: 'gray',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
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
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    // marginTop: Dimensions.get('window').height/100,
    fontSize: Dimensions.get('window').height/32,
  },
  textBold: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: Dimensions.get('window').height/100,
    fontSize: Dimensions.get('window').height/32,
  },
  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/47,
  },
  customBtnBG: {
    backgroundColor: "#69c8a1",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 8,
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').height/12,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginRight: Dimensions.get('window').width/70,
    marginLeft: Dimensions.get('window').width/10,
    marginTop: Dimensions.get('window').height/90,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    fontWeight: '300',
    marginLeft: Dimensions.get('window').height/150,
    fontSize: Dimensions.get('window').height/34.5,
  },
})