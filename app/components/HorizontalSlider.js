import { StyleSheet, Text, View,FlatList } from 'react-native'
import MoviePoster from './MoviePoster'
import React from 'react'

export default function HorizontalSlider({peliculasEnCine,title}) {
  return (
    <View style={{ height: title ? 250 : 210}}>
       {title && <Text style={{fontSize:30,fontWeight:'bold', marginLeft:10}}>{title}</Text>} 
        <FlatList
            data={peliculasEnCine}
            renderItem={({item})=><MoviePoster movie={item} height={200} width={140} />}
            keyExtractor={(item)=>item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

const styles = StyleSheet.create({})