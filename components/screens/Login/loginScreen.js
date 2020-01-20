import React from 'react'
import {Text, Image,KeyboardAvoidingView} from 'react-native'
import BgScreen from './bgScreen'
import Form from './form'
import Logo from './logo'

const LoginScreen = () => {

    return (
        <KeyboardAvoidingView>
            <Logo />
            <Form />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen