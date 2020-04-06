import React, { Component } from 'react'
import { Text, View,ImageBackground,Button,ScrollView } from 'react-native'
import { TextInput } from 'react-native-paper';

import styles from '../css';

export default class Signup extends Component {

   constructor(props){
       super(props);
       this. state = {
        name:'',
        work:'',
        cell:'',
        email: '',
        password:'',
        confirmPssword:''
      };
   }

   checkToValidate=()=>{
    const {name,work,cell,email,password,confirmPssword} = this.state;
    if(name==""){
        alert("Please write name")
        return false
    }else if(work==""){
        alert("Please write work")
        return false
    
    }else if(cell==""){
        alert("Please write cell#")
        return false
    
    }else if(email==""){
        alert("Please write email")
        return false
    }else if(password==""){
        alert("Please write password")
        return false
    }else if(password!=confirmPssword){
        alert("Password not match")
        return false
    }
    return true
}

callApi=()=>{
    if (this.checkToValidate()) {
        alert("Account Create Succesfully")
    }
}

    render() {
        return (
            <ScrollView>
                <View style={{padding:60,}}>
                    <ImageBackground resizeMode="stretch" style={styles.image} source={require('../image/mycurve.png')}>
                        <Text style={styles.textHeader}>
                        Create Account
                        </Text>
                    </ImageBackground>
                    <View style={{marginTop:30}}>
                        <TextInput
                            label='Name'
                            value={this.state.name}
                            onChangeText={name => this.setState({ name:name })}
                        />
                        <TextInput
                            label='Work'
                            value={this.state.work}
                            onChangeText={work => this.setState({ work:work })}
                        />

                        <TextInput
                            label='Cell#'
                            value={this.state.cell}
                            onChangeText={cell => this.setState({ cell:cell })}
                        />
                        <TextInput
                            label='Email'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email:email })}
                        />

                        <TextInput
                            label='Password'
                            value={this.state.password}
                            onChangeText={password => this.setState({ password:password })}
                            secureTextEntry={true}
                        />
                        <TextInput
                            label='Confirm Password'
                            value={this.state.confirmPssword}
                            onChangeText={confirmPssword => this.setState({ confirmPssword:confirmPssword })}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{marginTop:30}}>
                        <Button  onPress={this.callApi} title="CREATE" color="#f86262"  />              
                    </View>
                    <Button 
                        title="I have already account"
                        onPress={()=>this.props.navigation.navigate('Login')}
                    />
                </View>
            </ScrollView>
        )
    }
}
