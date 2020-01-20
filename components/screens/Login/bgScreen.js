import React, { Component } from 'react'
import { Image, View } from 'react-native'

export default class BgScreen extends Component {

    render(){
        return (
            <View>
                {this.props.children}
            </View>
        )
    }
}