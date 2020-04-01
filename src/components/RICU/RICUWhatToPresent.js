import React from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
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
      ['One-Liner:', 'Major cardiac, pulm, ENT'],
      ['Last Echo:', 'EF, RV function, RVSP, valves'],
      ['Prior Intubations:', '"Chart reviews" -> "Anesthesia," leave open'],
      ['Code Status'],
      ['Gas Exchange:', 'Last ABG'],
      ['Allergies'],
      ['Access'],
      ['NPO Status:', 'Last meal, major GI issues'],
      ['Status:', 'Functional status & weight[kg]']
    ],
  }

  whatToPresent () {
    return this.state.data.map((item) => 
      item[1] ? (
          <View key={item[0]} style={{ marginRight: Dimensions.get('window').width/19, marginLeft: Dimensions.get('window').width/19 }}>
              <Text>
                <Text style={styles.bulletPoint}>{`\u2022 `}</Text>
                <Text style={{ 
                  fontWeight: '500',
                  fontSize: Dimensions.get('window').height/37, 
                  }}>
                  {item[0]}
                </Text>
              </Text>

              <Text style={{ 
                fontWeight: '300', 
                fontSize: Dimensions.get('window').height/38, 
                marginBottom: Dimensions.get('window').height/70, 
                marginLeft: Dimensions.get('window').width/28 
                }}>
                {item[1]}
              </Text>
          </View>

      ) : (

      <Text style={{ marginLeft: Dimensions.get('window').width/19, marginBottom: Dimensions.get('window').height/70 }}>
        <Text style={styles.bulletPoint}>{`\u2022 `}</Text>
        <Text style={{ 
          fontWeight: '500', 
          fontSize: Dimensions.get('window').height/33.7, 
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
          {/* <Divider style={styles.divider} /> */}

          <View style={{alignItems: 'center', paddingTop: Dimensions.get('window').height/100, }}>
              <View style={{ flexDirection: 'row'}}>
                <View style={{marginRight: Dimensions.get('window').width/30}}>
                  <View style={styles.circleNotFilledIn}></View>
                </View>
                <View style={{marginRight: Dimensions.get('window').width/30}}>
                  <View style={styles.circleNotFilledIn}></View>
                </View>
                <View>
                  <View style={styles.circleFilledIn}></View>
                </View>
              </View>
            </View>

        </View>

        <View style={styles.bottom}>
          <Text style={styles.header}>What To Present:</Text>
            {this.whatToPresent()}
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  circleFilledIn: {
    width: 12,
    height: 12,
    borderRadius: 100/2,
    backgroundColor: '#6c9ea1'
  },
  circleNotFilledIn: {
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
    height: '10%',
    // backgroundColor: 'gray'
  },
  bottom: {
    height: '90%',
    paddingTop: Dimensions.get('window').height/35,
    // backgroundColor: 'yellow',
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
    fontSize: Dimensions.get('window').height/36,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
})