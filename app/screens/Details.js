import { StyleSheet, Text, View, Image, Dimensions, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useMovieDetails } from '../hooks/useMovieDetails'
import MovieDetails from '../components/MovieDetails'
const screenHeight=Dimensions.get('screen').height
import {Icon } from "@rneui/themed";

export default function Details({navigation, route}) {
    const movie=route.params
    const uri=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const {isLoading,cast,movieFull}=useMovieDetails(movie.id)
    return (
        <ScrollView >
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{uri}}
                        style={styles.posterImage}
                    />
                </View>

            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>

            { isLoading ? <ActivityIndicator size={35} color='grey'/> 
                        : <MovieDetails movieFull={movieFull} cast={cast}/>
            }

            
                        
            <Icon 
                type="material-community"
                name="arrow-left"
                color="white"
                size={80}
                //containerStyle={{marginTop:-3, marginRight:0}}
                style={styles.backButtom}
            />
            
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    imageContainer:{
        width:'100%',
        height:screenHeight*0.7,
    },
    backButtom:{
        zIndex:999,
        elevation:9,
        marginLeft:0
    },
    posterImage:{
        flex:1,
    },
    imageBorder:{
        flex:1,
        overflow:'hidden',
        borderBottomEndRadius:50,
        borderBottomStartRadius:50,
        
    },
    marginContainer:{
        marginHorizontal:20,
        marginTop:20
    },
    subTitle:{
        fontSize:18,
        opacity:0.7
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    }
})