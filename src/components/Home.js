import React, {Fragment} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, SafeAreaView, Dimensions } from "react-native";
import { ThemeProvider, Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

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
        <View style={{ marginBottom: 10}}>
          <Text style={{ fontSize: Dimensions.get('window').height/45, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>MGH EM Pathways</Text>
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
        // headerLeft, 
        // headerRight,
        headerTitle,
        headerStyle: {backgroundColor: '#709CD0'},      
      }
    }
  
  
    render() { 
      return (  
        <View>
  
  
          <View style={{ alignItems: 'center', marginTop: 15 }}>
            <Text style={{ fontSize: Dimensions.get('window').height/34.5,  }}>Inpatient Medicine</Text>
            <SafeAreaView style={{ marginTop: 10 }}>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('Stroke1')}>
                  <Text style={styles.customBtnText}>CVA</Text>
                </TouchableOpacity>
            </SafeAreaView>
  
            <SafeAreaView style={{ marginTop: 10}}>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('Pert')}>
                  <Text style={styles.customBtnText}>PE</Text>
                </TouchableOpacity>
            </SafeAreaView>
          
            <SafeAreaView style={{ marginTop: 10}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('RICU')}>
                <Text style={styles.customBtnText}>RICU (Airway)</Text>
              </TouchableOpacity>
            </SafeAreaView>
          
            <SafeAreaView style={{ marginTop: 10}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('STEMI1')}>
                <Text style={styles.customBtnText}>STEMI</Text>
              </TouchableOpacity>
            </SafeAreaView>
         
            <SafeAreaView style={{ marginTop: 10}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('Acls')}>
                <Text style={styles.customBtnText}>ACLS</Text>
              </TouchableOpacity>
            </SafeAreaView>
  
            <View style={{ alignItems: 'center', marginTop: 30, }}>
              <Text style={{ fontSize: Dimensions.get('window').height/34.5, }}>Emergency Department</Text>
  
              <SafeAreaView style={{ marginTop: 10}}>
                  <TouchableOpacity
                    style={styles.customBtnBG} 
                    onPress={() => this.props.navigation.navigate('InpatientConditions')}>
                    <Text style={styles.customBtnText}>MGH</Text>
                  </TouchableOpacity>
              </SafeAreaView>
  
              <SafeAreaView style={{ marginTop: 10}}>
                  <TouchableOpacity
                    style={styles.customBtnBG} 
                    onPress={() => this.props.navigation.navigate('InpatientConditions')}>
                    <Text style={styles.customBtnText}>BWH</Text>
                  </TouchableOpacity>
              </SafeAreaView>
            </View>
          </View>
  
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    title: {
  
    },
  
    customBtnText: {
      fontSize: 20,
      fontWeight: '600',
      color: "#fff",
      textAlign: 'center',
      textAlignVertical: "center",
      margin: 13
    },
  
    /* Here, style the background of your button */
    customBtnBG: {
      backgroundColor: "#69c8a1",
      shadowOpacity: .15, 
      paddingHorizontal: 1,
      paddingVertical: 1,
      // borderRadius: 8,
      width: 330,
      height: 60,
    }
  });