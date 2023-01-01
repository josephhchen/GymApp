import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style = {styles.container} behavior = "padding">
      <View style = {styles.inputContainer}>
        <TextInput
            placeholder = "Email"
            value = { }
            onChangeText = {text => }
            style = {styles.input}
        />
        <TextInput
            placeholder = "Password"
            value = { }
            onChangeText = {text => }
            style = {styles.input}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

  /* KeyboardAvoidingView makes sure the keyboard doesnt cover the login UI */

export default LoginScreen

const styles = StyleSheet.create({})