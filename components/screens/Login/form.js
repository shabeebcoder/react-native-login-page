import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native'

export default class Form extends Component {

    render(){
        return(
            <KeyboardAvoidingView style={styles.formContainer}>
              <View style={styles.formContent}>
                  <TextInput 
                    placeholder="Username"
                    style={styles.textInput}
                  />
                  <TextInput 
                    placeholder="Password"
                    style={styles.textInput}
                  />
                  <TouchableOpacity style={styles.loginButton}>
                      <Text style={styles.loginText}>Login</Text>
                  </TouchableOpacity>
              </View>
              
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    formContainer : {
       
        flexDirection: 'column',
        justifyContent: 'center',
        
        backgroundColor:'pink'
    },
    formContent: {
        backgroundColor:'white',
        height:200,
        width:500,
        justifyContent:'center',
        alignItems:'center',
        
    },
    textInput : {
        borderWidth:1.0,
        width:350,
        height:40,
        borderRadius:25,
        padding:10,
        marginTop:10,
        borderColor:'#E1DFE4'
    },
    loginButton : {
        backgroundColor: '#00CB63',
        height:40,
        marginTop:10,
        width:300,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        color:'white'
    },
    loginText : {
        color:'white'
    }
    
})