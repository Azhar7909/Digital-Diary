import React, { Component } from 'react'
import { Text, View,ImageBackground } from 'react-native'
import styles from './css';

export default class AboutPage extends Component {
    render() {
        return (
            <View>
                <ImageBackground  style={styles.image} resizeMode="stretch" source={require('./image/mycurve.png')}>
                <Text style={styles.textHeader}>
                    Wellcome To Digital Diary
                </Text>
                <Text style={styles.textDescription}>
                    Developed by Eng. Muhammad Azhar Hussain Zafar
                </Text>
                <Text style={styles.textDescription}>
                    muhammadazharhussain54@gmail.com
                </Text>
              </ImageBackground>
              <View style={{alignItems:"center"}}>
                    <Text style={styles.detailTextHeader}>
                        DEGREE:
                    </Text>
                    <Text style={styles.detailTextDescription}>
                       BS( SOFTWARE ENGINEERING)
                    </Text>
                    <Text style={styles.detailTextHeader}>
                        SUPERVISER:
                    </Text>
                    <Text style={styles.detailTextDescription}>
                        SIR AKMAL REHAN
                    </Text>
                    <Text style={styles.detailTextHeader}>
                        ADVISER: 
                    </Text>
                    <Text style={styles.detailTextDescription}>
                        DR.AZAM MALIK
                    </Text>
                    <Text style={styles.detailTextHeader}>
                        GROUP MEMBER:
                    </Text>
                    <Text style={styles.detailTextDescription}>
                        MUHAMMAD AZHAR HUSSAIN ZAFAR 2016-AG-7909
                    </Text>
                    <Text style={styles.detailTextDescription}>
                        MUHAMMAD RAMZAN 2016-AG-7966
                    </Text>
                    <Text style={styles.detailTextDescription}>
                        MUHAMMAD ISHAQ 2016-AG-7955
                    </Text>
                    <Text style={{fontSize:11,color:"grey",marginTop:30}}>
                        UNIVERSITY OF AGRICULTURE FAISALABAD 
                    </Text>
              </View>
            </View>
        )
    }
}
