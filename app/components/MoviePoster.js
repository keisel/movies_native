import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function MoviePoster({movie, height=420,width=300}) {
    const uri=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const navigation=useNavigation()
  return (
    <TouchableOpacity onPress={ ()=> navigation.navigate('Details',movie)} 
        activeOpacity={0.5} 
        style={{width, height,marginHorizontal:8}} 
    >
        <View style={styles.imageContainer}>
            <Image
                source={{uri}}
                style={styles.image}
            />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:18,
        
    },
    imageContainer:{
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }


})