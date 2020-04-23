import React from 'react'
import { TouchableOpacity, Dimensions, View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

export default class RICUWhatToPresent extends React.Component {
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
        />
      ),  
    }
  }

  state = { 
    data: [
      ['Code Status'],
      ['One-Liner:', 'major cardiac, pulm, ENT, weight [kg]'],
      ['Vitals and Labs:', 'O2 sat, supplemental O2, HR, BP, K+, Cr'],
      ['Last Echo:', 'EF, RV function, RVSP, valves'],
      ['Prior Intubations:', 'In EPIC "chart review" -> "anesthesia" tab (leave tab open)'],
      ['Allergies'],
      ['Access'],
      ['NPO Status:', 'last meal, major GI issues'],
    ],
  }

  whatToPresent () {
    return this.state.data.map((item) => 

      item[1] 

      ? (
            <View key={item[0]} style={{ 
              flexDirection: 'row', 
              marginRight: Dimensions.get('window').width/19, 
              marginLeft: Dimensions.get('window').width/19,
              marginBottom: Dimensions.get('window').height/70 
            }}>
                  <Text style={styles.bulletPoint}>{`\u2022 `}</Text>
                  <Text>
                    <Text style={{ fontWeight: '500', fontSize: Dimensions.get('window').width/21 }}>{item[0]}</Text>
                    <Text style={{ fontSize: Dimensions.get('window').width/21 }}> {item[1]}</Text>
                  </Text>
                
            </View>

      ) : (

      <Text style={{ 
        marginLeft: Dimensions.get('window').width/19, 
        marginBottom: Dimensions.get('window').height/70 
      }}>
        <Text style={styles.bulletPoint}>{`\u2022 `}</Text>
        <Text style={{ 
          fontWeight: '500', 
          fontSize: Dimensions.get('window').width/21, 
          }}>
          {item[0]}
        </Text>
      </Text>
    ))
  }


  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>RICU</Text>
          <View style={{alignItems: 'center'}}>
              <View style={{ flexDirection: 'row'}}>
                <View style={styles.firstCircle}></View>
                <View style={styles.secondCircle}></View>
                <View style={styles.thirdCircle}></View>
              </View>
          </View>
        </View>

        <View style={styles.middle}>
          <Text style={styles.header}>What To Present to RICU Team:</Text>
          {this.whatToPresent()}
            </View>


            <View style={styles.bottom}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('RICUWhatToPrepare')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
            </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  firstCircle: {
    marginTop: Dimensions.get('window').height/100,
    width: 12,
    height: 12,
    borderRadius: 100/2,
    borderWidth: 1,
    borderColor: '#6c9ea1'
  },
  secondCircle: {
    marginTop: Dimensions.get('window').height/100,
    marginLeft: Dimensions.get('window').width/25,
    marginRight: Dimensions.get('window').width/25,
    width: 12,
    height: 12,
    borderRadius: 100/2,
    backgroundColor: '#6c9ea1',
  },
  thirdCircle: {
    marginTop: Dimensions.get('window').height/100,
    width: 12,
    height: 12,
    borderRadius: 100/2,
    borderWidth: 1,
    borderColor: '#6c9ea1'
  },
  container: {
    flex: 1
  },
  top: {
    height: '15%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '70%',
    // backgroundColor: 'pink'
  },
  bottom: {
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
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
  header: {
    fontWeight: 'bold',
    marginLeft: Dimensions.get('window').width/16,
    marginBottom: Dimensions.get('window').height/58,
    fontSize: Dimensions.get('window').width/20,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/50,
  },
  customBtnText: {
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/47,
  },
  customBtnBG: {
    borderWidth: 5,
    borderColor: '#6c9ea1',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    width: Dimensions.get('window').width/1.17,
    height: Dimensions.get('window').height/10.75,
  },
})