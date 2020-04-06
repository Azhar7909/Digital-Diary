import React, { Component } from 'react'
import { Text, View,ImageBackground,Button } from 'react-native'
import styles from '../css';
export default class HomePage extends Component  {
  render(){
    return (
      <View>
        <ImageBackground resizeMode="stretch" style={styles.image} source={require('../image/mycurve.png')}>
          <Text style={styles.textHeader}>
            WELLCOME TO DIGITAL LIBARARY
          </Text>
        </ImageBackground>
        <View style={{margin:100,marginTop:200}}>
          <View>
            <Button  title="CLICK TO LOGIN" color="#f86262"  />
          </View>
          <View style={{marginTop:10}}>
            <Button  title="CLICK TO LOGIN" color="#f86262"  />
          </View>
        </View>
        
      </View>
    )
  }
}




