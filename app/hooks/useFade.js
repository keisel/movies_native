import React, {useRef} from 'react'
import { StyleSheet, Text, View,Animated } from 'react-native'

export default function useFade() {
    
    const opacity=useRef(new Animated.Value(0)).current;
    const fadeIn=()=>{
        Animated.timing(
            opacity,
            {
                toValue:1,
                duration:1000,
                useNativeDriver:true
            }

        ).start();
    }

    const fadeOut=()=>{
        Animated.timing(
            opacity,
            {
                toValue:0,
                duration:1000,
                useNativeDriver:true
            }

        ).start();
    }

    return{fadeIn,fadeOut,opacity}
}

const styles = StyleSheet.create({})