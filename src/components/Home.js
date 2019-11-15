import React, {Fragment} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, SafeAreaView, Dimensions } from "react-native";
import { ThemeProvider, Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

// iphone 11 height 896
// iphone 11 width 414

export default class InpatientConditions extends React.Component {
    static navigationOptions = ({ navigation }) => {
      let headerLeft = (  
        <Button 
          icon={
            <View style={{ marginLeft: 5 }}>
              <Icon name="ios-arrow-back" size={34} color="white" />
            </View>
          }
          onPress={() => navigation.goBack()}
          type='clear'
        />
      )
      headerTitle = (
        <View style={{ marginBottom: 7}}>
          <Text style={{ fontSize: Dimensions.get('window').height/45, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>MGH Stat</Text>
        </View>
      )
      let headerRight = (
        <Button 
          icon={
            <View style={{ marginRight: 5 }}>
              <Icon name="md-home" size={32} color="white" />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />
      )
      return {
        headerTitle,
        headerStyle: {backgroundColor: '#709CD0'},      
      }
    }

  
  
    render() { 
      return (  
        <SafeAreaView style={{ justifyContent: 'center' }}>

          <View style={{ alignItems: 'center', marginTop: 15 }}>
            <Text style={styles.title}>Inpatient Emergencies</Text>

            
            <SafeAreaView style={{ marginTop: 10 }}>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('Stroke1')}>
                  <Text style={styles.customBtnText}>CVA</Text>
                </TouchableOpacity>
            </SafeAreaView>
  
            <View style={{ marginTop: 10}}>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('Pert')}>
                  <Text style={styles.customBtnText}>PE</Text>
                </TouchableOpacity>
            </View>
          
            <View style={{ marginTop: 10}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('RICU')}>
                <Text style={styles.customBtnText}>RICU (Airway)</Text>
              </TouchableOpacity>
            </View>
          
            <View style={{ marginTop: 10}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('STEMI')}>
                <Text style={styles.customBtnText}>STEMI</Text>
              </TouchableOpacity>
            </View>
         
        
  



            <View style={{ alignItems: 'center', marginTop: 30, }}>
              <Text style={styles.title}>ACLS</Text>
              <View style={{ marginTop: 10}}>
                  <TouchableOpacity
                    style={styles.customBtnBG} 
                    onPress={() => this.props.navigation.navigate('CardiacArrest')}>
                    <Text style={styles.customBtnText}>Cardiac Arrest</Text>
                  </TouchableOpacity>
              </View>
  
              <View style={{ marginTop: 10}}>
                  <TouchableOpacity
                    style={styles.customBtnBG} 
                    onPress={() => this.props.navigation.navigate('Bradycardia')}>
                    <Text style={styles.customBtnText}>Bradycardia</Text>
                  </TouchableOpacity>
              </View>

              <View style={{ marginTop: 10}}>
                  <TouchableOpacity
                    style={styles.customBtnBG} 
                    onPress={() => this.props.navigation.navigate('Tachycardia')}>
                    <Text style={styles.customBtnText}>Tachycardia</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
  
        </SafeAreaView>
      )
    }
  }
  
  const styles = StyleSheet.create({
    title: {
      fontWeight: '500',
      fontSize: Dimensions.get('window').height/34, 
    },
    customBtnText: {
      fontWeight: '600',
      color: "#fff",
      textAlign: 'center',
      textAlignVertical: "center",
      fontSize: Dimensions.get('window').height/40,
      marginTop: Dimensions.get('window').height/35
    },
    customBtnBG: {
      backgroundColor: "#69c8a1",
      shadowOpacity: .15, 
      paddingHorizontal: 1,
      paddingVertical: 1,
      borderRadius: 8,
      width: Dimensions.get('window').width/1.13,
      height: Dimensions.get('window').height/11.25,
    }
  });