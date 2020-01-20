import React, { Component } from 'react'
import { View,Text,Image, StyleSheet, Key } from 'react-native'


export default class Logo extends Component {

    render(){
        return(
            <View style={styles.imageContainer}>
             
                <Image  style={styles.image} source={require('../../../assets/logo.png')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent:'center',
        alignItems:'center',
    },
    image : {
        height:300,
        width:300,
        
        
    }
})