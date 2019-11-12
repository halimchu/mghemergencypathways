import React, {Fragment} from "react";
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class RICUNextSteps extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = (  
      <Button 
        icon={
          <View style={{ marginLeft: 9 }}>
            <Icon name="ios-arrow-back" size={34} color="white" />
          </View>
        }
        onPress={() => navigation.goBack()}
        type='clear'
      />
    )

    headerTitle = (
      <View style={{ marginBottom: 7}}>
        <Text style={{ fontSize: Dimensions.get('window').height/45, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>MGH EM Pathways</Text>
      </View>
    )
      
    let headerRight = (
      <Button 
        icon={
          <View style={{ marginRight: Dimensions.get('window').width/75 }}>
            <Icon name="md-home" size={32} color="white" />
          </View>
        }
        onPress={() => navigation.navigate('Home')}
        type='clear'
      />
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
      ['One-Liner:', 'major cardiac, pulm, ENT'],
      ['Last Echo:', 'EF, RV function, RVSP, valves'],
      ['Prior Intubations:', '"chart reviews" -> "anesthesia," leave open'],
      ['Code Status'],
      ['Gas Exchange:', 'last ABG'],
      ['Allergies'],
      ['Access'],
      ['NPO Status:', 'last meal, major GI issues'],
      ['Status:', 'functional status & weight[kg]']
    ],
  }

  whatToPresent () {
    return this.state.data.map((item) =>  
      item[1] ? (
          <View key={item[0]} style={{ marginLeft: Dimensions.get('window').width/19 }}>
              <Text>
                <Text style={styles.bulletPoint}>{`\u2022 `}</Text>
                <Text style={{ 
                  fontWeight: '500',
                  fontSize: Dimensions.get('window').height/33.7, 
                  }}>
                  {item[0]}
                </Text>
              </Text>

              <Text style={{ 
                fontWeight: '300', 
                fontSize: Dimensions.get('window').height/36, 
                marginBottom: Dimensions.get('window').height/70, 
                marginLeft: Dimensions.get('window').width/25 
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
          <Divider style={{ backgroundColor: '#CDCDCD', marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 1.5 }} />
        </View>

        <View style={styles.bottom}>
          <Text style={styles.header}>What to present?</Text>
            {this.whatToPresent()}
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
    height: '10%',
    // backgroundColor: 'gray'
  },
  bottom: {
    height: '90%',
    // backgroundColor: 'yellow',
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: Dimensions.get('window').height/89,
    fontSize: Dimensions.get('window').height/32.5,
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Dimensions.get('window').height/58,
    fontSize: Dimensions.get('window').height/32.5,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
})