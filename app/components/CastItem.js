import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function CastItem({actor}) {
    const uri=`https://image.tmdb.org/t/p/w500${actor.profile_path}`

  return (
    <View style={styles.container}>
        {
            actor.profile_path && ( <Image
                source={{uri}}
                style={{width:50, height:50, borderRadius:10}}
            />)
        }
        
        <View style={{marginLeft:10,marginTop:0}}>
            <Text style={{ fontSize:18, fontWeight:'bold' }}>{actor.name}</Text>
            <Text style={{ fontSize:16, opacity:0.7 }}>{actor.character}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        backgroundColor:'white',
        borderRadius:10,
        marginRight:10,
        paddingRight:10,
        height:50,
    }
})