import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class ReversibleCausesPostCardiac extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center'}}>

                <View style={{flexDirection: 'row',}}>
                  <View style={{flexDirection: 'column'}}>
                                <View style={styles.flexDirection}>
                                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                  <Text style={styles.bold}>H</Text>
                                  <Text style={styles.regular}>ypovolemia</Text>
                                </View>

                                <View style={{flexDirection: 'row'}}>
                                  <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                  <Text style={styles.subRegular}>IV fluid boluses</Text>
                                </View>

                                <View style={{flexDirection: 'row'}}>
                                  <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                  <Text style={styles.subRegular}>Vasopressors</Text>
                                </View>

                                <View style={styles.flexDirection}>
                                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.bold}>H</Text>
                                    <Text style={styles.regular}>ypoxia</Text>
                                </View>

                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.subRegular}>Bag-valve-mask</Text>
                                </View> 

                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.subRegular}>Intubation</Text>
                                </View>

                                <View style={styles.flexDirection}>
                                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                  <Text style={styles.bold}>H</Text>
                                  <Text style={styles.regular}>ydrogen ions</Text>
                                </View>
                                <View style={styles.titleBottom}>
                                  <Text style={styles.regular}>(acidosis)</Text>
                                </View>  
                                <View style={{flexDirection: 'row'}}>
                                  <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                  <Text style={styles.subRegular}>Sodium bicarbonate</Text>
                                </View>        

                                <View style={styles.flexDirection}>
                                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.bold}>H</Text>
                                    <Text style={styles.regular}>ypokalemia/</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/55.5,}}>
                                    <Text style={styles.bold}>H</Text>
                                    <Text style={styles.regular}>yperkalemia</Text>
                                </View>

                                  <View style={{flexDirection: 'row'}}>
                                      <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                      <Text style={styles.subRegular}>Hypokalemia:</Text>
                                  </View>
                                  <View style={styles.subBulletPointSecondLine}>
                                    <Text style={styles.subRegular}>Potassium chloride</Text>
                                  </View>
                              

                                  <View style={{flexDirection: 'row'}}>
                                      <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                      <Text style={styles.subRegular}>Hyperkalemia:</Text>
                                  </View>

                                  <View style={styles.subBulletPointSecondLine}>
                                    <Text style={styles.subRegular}>Calcium gluconate</Text>
                                  </View>


                                  
                                  <View style={styles.flexDirection}>
                                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.bold}>H</Text>
                                    <Text style={styles.regular}>ypothermia</Text>
                                  </View>

                                  <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.subRegular}>Warm NS IVF</Text>
                                  </View>
                                  
                  </View>






                  <View style={{flexDirection: 'column', marginLeft: Dimensions.get('window').width/20}}>
                                <View style={styles.flexDirection}>
                                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.bold}>T</Text>
                                    <Text style={styles.regular}>ension pneumothorax</Text>
                                </View>
 

                                  <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.subRegular}>Needle & tube</Text>
                                  </View>
                                  <View style={styles.subBulletPointSecondLine}>
                                    <Text style={styles.subRegular}>thoracostomy</Text>
                                  </View>



                                  <View style={styles.flexDirection}>
                                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.bold}>T</Text>
                                    <Text style={styles.regular}>amponade</Text>
                                  </View>

                                  <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.subRegular}>Bedside ECHO</Text>
                                  </View>
                                  <View style={styles.subBulletPointSecondLine}>
                                    <Text style={styles.subRegular}>at pulse check</Text>
                                  </View>

                                  <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.subRegular}>Pericardiocentesis</Text>
                                  </View>

                                  <View style={styles.flexDirection}>
                                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.bold}>T</Text>
                                    <Text style={styles.regular}>oxins</Text>
                                  </View>



                                  <View style={styles.flexDirection}>
                                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.bold}>T</Text>
                                    <Text style={styles.regular}>hrombosis:</Text>
                                  </View>
                                  <View style={styles.titleBottom}>
                                    <Text style={styles.regular}>Pulmonary embolism</Text>
                                  </View>


                                  <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.subRegular}>tPA</Text>
                                  </View>


                                  <View style={styles.flexDirection}>
                                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.bold}>T</Text>
                                    <Text style={styles.regular}>hrombosis:</Text>
                                  </View>
                                  <View style={styles.titleBottom}>
                                    <Text style={styles.regular}>Myocardial infarction</Text>
                                  </View>

                                  <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.subRegular}>tPA</Text>
                                  </View>


                                 
                              


                                



                  </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bulletPoint: {
    fontSize: Dimensions.get('window').height/52,
  },
  subBulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/80,
    marginTop: Dimensions.get('window').height/300,
    marginLeft: Dimensions.get('window').width/40,
    marginRight: Dimensions.get('window').width/150,
    color: '#0031C0',
  },
  bold: {
    fontWeight: '800',
    fontSize: Dimensions.get('window').height/50,
  }, 
  regular: {
    fontWeight: '400',
    fontSize: Dimensions.get('window').height/50,
  },
  subRegular: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/50,
    color: '#0031C0',
  },
  titleBottom: {
    marginLeft: Dimensions.get('window').width/45
  },
  subBulletPointSecondLine: {
    marginLeft: Dimensions.get('window').width/22,
  },
  sub: {
    fontWeight: '400',
    color: '#0031C0',
    fontSize: Dimensions.get('window').height/95,
  },
  flexDirection: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/120,
  }
})


