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
          <View style={{flexDirection: 'column', marginLeft: Dimensions.get('window').width/8.25}}>
            <Text style={styles.text}>50-100 J</Text>
          </View>
        </View>

 
 
        <View style={{flexDirection: 'row', marginBottom: Dimensions.get('window').height/80, }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.type}>Narrow irregular:</Text>
          </View>
          <View style={{flexDirection: 'column', flexGrow: 1, flex: 1, width: 0,}}>

              <Text style={{
                fontSize: Dimensions.get('window').height/50, 
                marginLeft: Dimensions.get('window').width/10.3,
                marginRight: Dimensions.get('window').width/80,
                }}>120-200 J biphasic or 200 J monophasic</Text>
        
          </View>
        </View>



        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.type}>Wide regular:</Text>
          </View>
          <View style={{flexDirection: 'column', marginLeft: Dimensions.get('window').width/6}}>
            <Text style={styles.text}>100 J</Text>
          </View>
        </View>



        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.type}>Wide irregular:</Text>
          </View>
          <View style={{flexDirection: 'column', flexGrow: 1, flex: 1, width: 0,}}>
            <View style={{marginLeft: Dimensions.get('window').width/7}}>
              <Text style={styles.text}>defibrillation dose
              </Text>
            </View>

            <View style={{marginLeft: Dimensions.get('window').width/7}}>
              <Text style={styles.text}>
                <Text>(</Text>
                <Text style={{fontStyle: 'italic'}}>not</Text>
                <Text> synchronized)</Text>
              </Text>
            </View>
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
    fontSize: Dimensions.get('window').height/50,
  },
  text: {
    fontSize: Dimensions.get('window').height/50,
  }
})


