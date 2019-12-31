import React from 'react'
import { Button, Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import { ThemeProvider } from 'react-native-elements';


export default class CardiacArrest extends React.Component {
   
  state = {
    minute: 2,
    countDownSecond: 0,
    timerNotStarted: true,
    showStartButton: true,
    showResetButton: false
  }

  turnTimerButtonOff = () => {
    this.setState({ timerNotStarted: null })
  }

  onStart = () => {
    // if timer not started yet

    this.setState({ showStartButton: !this.state.showStartButton })
    
    this.turnTimerButtonOff()
    if(this.state.timerNotStarted) {


              // minute
              this.interval = setInterval(() => {
                if (this.state.minute < 0) {
                  this.setState({
                    minute: 0,
                  })
                } else if (this.state.minute > 0) {
                  this.setState({
                    minute: this.state.minute - 1,
                  })
                }
              }, 62000);
              // 62000 is the right number
          
              // minute
              this.interval = setInterval(() => {
                if (this.state.minute === 2) {
                  this.setState({ minute: this.state.minute - 1 })
                } 
                
            
              // second
              if (this.state.minute === 0 && this.state.countDownSecond === 0) {
                this.setState({ countDownSecond: 0 })
              } else if (this.state.countDownSecond > 0) {
                this.setState({ countDownSecond: this.state.countDownSecond - 1 })
              } else if (this.state.minute > -1) {
                  this.setState({ countDownSecond: 59 })
              } 
            }, 1000);

  
    } 
  }



  renderStartButton = () => {
    return (
      this.state.showStartButton ?

        <Button
          title="Start"
          onPress={() => {
            this.onStart()
          }}
        />
      : 
        <Button
          title="Reset"
          onPress={() => {
            this.onStart()
          }}
        />
    )
  }

  renderResetButton = () => {
    return (
      <Button
        title="Reset"
        onPress={() => {
          this.onReset()
        }}
      />
    )
  }

  onReset = () => {
    this.setState({ timerNotStarted: true })
    this.setState({ minute: 2 })
    this.setState({ countDownSecond: 0 })
    clearInterval(this.interval)
  }



 


  render () {
    return (
      <View style={styles.container}>

        <View style={{flexDirection: 'row', marginBottom: Dimensions.get('window').height/80, }}>
            <Text style={styles.secondText}>{this.state.minute}m</Text>
            <Text style={styles.secondText}>{this.state.countDownSecond}s</Text>       
        </View>


        <View style={styles.buttonWrapper}>

          {this.renderStartButton()}
          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  secondText: {
    fontSize: 25,
  }
})