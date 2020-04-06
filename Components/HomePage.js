import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {  View,ImageBackground,TextInput, ScrollView } from 'react-native';
import MyHeader from './myHeader';
import styles from './css';
import CardsData from './cardsData';





export default class HomePage extends Component {
  render() {
    return (
        <ScrollView>
            {/* ############ HEADER, IMAGEBACGROUND & TEXTINPUT ############## */}
            <View>
              <MyHeader />
              <ImageBackground  style={styles.image} resizeMode="stretch" source={require('./image/mycurve.png')}>
                <TextInput placeholder="CLICK HERE TO SEARCH"  style={styles.textInput}/>
              </ImageBackground>
            </View>
          <CardsData />
          
        </ScrollView>

      
    );
  }
}

