import * as React from 'react';
import { StyleSheet,Text,View } from "react-native";
import { Appbar } from 'react-native-paper';


export default class MyComponent extends React.Component {
  _goBack = () => console.log('Went back');

  _handleSearch = () => console.log('Searching');

  _handleMore = () => console.log('Shown more');

  render() {
    return (
      <View>
            <Appbar.Header style={Styles.container}>
                <Text style={Styles.textcolor}>
                    Digital Diary
                </Text>
            </Appbar.Header>
      </View>
    );
  }
}

var Styles=StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f9f9f9",
    },
    textcolor:{
        color:"#f86262",
        fontSize:22,  
              
    }
})