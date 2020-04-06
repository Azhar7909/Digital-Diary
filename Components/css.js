import {StyleSheet} from 'react-native';

var styles=StyleSheet.create({

    // HEADER, IMAGEBACGROUND & TEXTINPUT //
    image:{
      width:"100%",
      height:200,
      alignItems:"center",
    },
    textInput:{
      backgroundColor:"white",
      height:50,
      width:350,
      borderRadius:30,
      marginTop:40,
      textAlign:"center"
    },
  
    // ########### Cards #############// 
    mainSection:{
      flex:1,
      flexDirection:"row",
      flexWrap:"wrap",
      marginBottom:10,
      margin:15
    },
    cardStyling:{
      width:150,
      height:150,
      margin:20,
      marginBottom:18,
      backgroundColor:"#f86262",
    },
    cardTile:{
      color:"white",
      fontSize:15,
      textAlign:"center",
      marginTop:-10
    },
    cardDescription:{
      color:"white",
      fontSize:10,
      textAlign:"center",
      marginTop:-10,
      marginBottom:10
    },

    // ############# About Page ######################//
    textHeader:{
      color:"white",
      fontSize:23,
      marginTop:40,
      textTransform: 'capitalize'
    },
    textDescription:{
      fontSize:10,
      color:"white",
      textTransform: 'capitalize'
    },
    detailTextHeader:{
      fontSize:18,
      color:"#f86262",
      marginTop:20
    },
    detailTextDescription:{
      fontSize:11,
      color:"#f86262"
    },

    // ################# Login SignUp ###################//
    loginSignupButton:{
      
    }
  })

  export default styles;