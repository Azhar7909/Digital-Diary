import React, { Component } from 'react'
import { Text, View,ImageBackground,Button,ScrollView, Alert } from 'react-native'
import { TextInput } from 'react-native-paper';

import styles from '../css';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:''
          };
    }

    checkToValidate=()=>{
        const {email,password} = this.state;
        if(email==""){
            alert("Please write email")
            return false
        }else if(password==""){
            alert("Please write password")
            return false
        }
        return true
    }

    callApi=()=>{
        if (this.checkToValidate()) {
            alert("Login succesfully")
            this.props.navigation.navigate('HomePage')
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={{padding:60,}}>
                    <ImageBackground resizeMode="stretch" style={styles.image} source={require('../image/mycurve.png')}>
                        <Text style={styles.textHeader}>
                        Log In
                        </Text>
                    </ImageBackground>
                    <View style={{marginTop:30}}>
                        <TextInput
                            label='Email'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email:email })}
                            // secureTextEntry="email"
                        />
                    </View>
                    <View>
                        <TextInput
                            label='Password'
                            value={this.state.password}
                            onChangeText={password => this.setState({ password:password })}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{marginTop:30}}>
                        <Button onPress={()=> this.callApi()}  title="LOGIN" color="#f86262"  />
                    </View>
                        <Button disabled title="Forgot Password"  />

                        <Button 
                        title="I have already account"
                        onPress={()=>this.props.navigation.navigate('Signup')}
                    />
                </View>
            </ScrollView>
        )
    }
}
