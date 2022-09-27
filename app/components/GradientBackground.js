import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GradientBackground({children}) {
  return (
    <View style={{flex:1,backgroundColor:'#084F6A'}}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({})