import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class SynchronizedCardioversion extends React.Component {

  render() {
    return (
       
      <View style={{ marginTop: Dimensions.get('window').height/80, marginBottom: Dimensions.get('window').height/80, }}>  


        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.type}>Narrow regular:</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{
              fontSize: Dimensions.get('window').height/45, 
              marginLeft: Dimensions.get('window').width/8}}>50-100 J</Text>
          </View>
        </View>



        <View style={{flexDirection: 'row', marginBottom: Dimensions.get('window').height/80, }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.type}>Narrow irregular:</Text>
          </View>
          <View style={{flexDirection: 'column', flexGrow: 1, flex: 1, width: 0,}}>
            <Text style={{
              fontSize: Dimensions.get('window').height/45, 
              marginLeft: Dimensions.get('window').width/10.3}}>120-200 J biphasic or 200 J monophasic</Text>
          </View>
        </View>



        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.type}>Wide regular:</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{
              fontSize: Dimensions.get('window').height/45, 
              marginLeft: Dimensions.get('window').width/5.75}}>100 J</Text>
          </View>
        </View>



        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.type}>Wide irregular:</Text>
          </View>
          <View style={{flexDirection: 'column', flexGrow: 1, flex: 1, width: 0,}}>
            <Text style={{
              fontSize: Dimensions.get('window').height/45, 
              marginLeft: Dimensions.get('window').width/7}}>defibrillation dose
            </Text>
            <Text style={{
              fontSize: Dimensions.get('window').height/45, 
              marginLeft: Dimensions.get('window').width/7}}>
              <Text>(</Text>
              <Text style={{fontStyle: 'italic'}}>not</Text>
              <Text> synchronized)</Text>
            </Text>
          </View>
        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  type: {
    marginBottom: Dimensions.get('window').height/80, 
    marginLeft: Dimensions.get('window').height/45, 
    fontSize: Dimensions.get('window').height/45,
  },
  dose: {

  }
})


