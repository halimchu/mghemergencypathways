import React from 'react'
import { TouchableOpacity, Dimensions, View, Text, StyleSheet } from 'react-native'

export default class Component extends React.Component {
  render() {
    return (
      <View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.customBtnBG} onPress={() => {
            this.props.toggle()
          }}>
            <Text style={styles.customBtnText}>{this.props.buttonTitle}</Text>
          </TouchableOpacity>
        </View>

        {!this.props.hidden ? this.props.component : null}
        {!this.props.hidden ? this.props.goToNextComponent() : null}
      </View>
    ) 
  }
}


const styles = StyleSheet.create({
  customBtnText: {
    fontWeight: '600',
    // color: "#fff",
    color: '#303333',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/53,
    marginTop: Dimensions.get('window').height/80,
  },
  customBtnBG: {
    borderWidth: 1,
    borderColor: 'white',
    // backgroundColor: "#69c8a1",
    backgroundColor: '#DBE2E8',
    // backgroundColor: '#256A96',
    width: Dimensions.get('window').width/1.02,
    height: Dimensions.get('window').height/20,
  },
})