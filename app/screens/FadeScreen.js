import { Animated, StyleSheet, Text, View,Button } from 'react-native'
import React, {useRef} from 'react'
import useFade, {} from '../hooks/useFade';
export default function FadeScreen() {

    const {fadeIn,fadeOut, opacity}=useFade()
  
    return (
        <View style={{flex:1, backgroundColor:'gray', justifyContent:'center', alignItems:'center'}}>
        <Animated.View
            style={{backgroundColor:'black', width:150, height:150, marginBottom:20,opacity}}
        />
                <Button 
                    title="FadeIn"
                    onPress={fadeIn}
                />

                <Button
                    title="FadeOut"
                    onPress={fadeOut}
                />

        </View>
    )
}

const styles = StyleSheet.create({})