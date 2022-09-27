import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CastItem from './CastItem'

export default function MovieDetails({movieFull, cast}) {
  return (
    <View style={{marginHorizontal:20}}>
        <View style={{flexDirection:'row'}}>
            <Text>{movieFull.vote_average}</Text>
            <Text style={{marginLeft:5}}>
                - {movieFull.genres.map(g=>g.name).join(',')}
            </Text>
        </View>
        <Text style={{fontSize:23,marginTop:10, fontWeight:'bold'}}>
            Historia
        </Text>
        <Text style={{fontSize:16}}>{movieFull.overview}</Text>
        <View style={{marginTop:10,marginBottom:100}}>
            <Text style={{fontSize:23, fontWeight:'bold'}}>Actores</Text>
            <FlatList
                data={cast}
                renderItem={({item})=><CastItem actor={item}  />}
                keyExtractor={(item)=>item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginTop:10, height:70}}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})