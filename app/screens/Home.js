import { ActivityIndicator, StyleSheet, Text, View, Dimensions, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/useMovies'
import Carousel, { Pagination } from 'react-native-snap-carousel-v4'

import MoviePoster from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HorizontalSlider from '../components/HorizontalSlider'
import GradientBackground from '../components/GradientBackground'
const { width : windowWidth }=Dimensions.get('window')

export default function Home() {

  const {nowPlaying,popular,topRated,upcoming, isLoading, peliculasPopulares}=useMovies()
  const {top}=useSafeAreaInsets()
  if(isLoading){
    return(
      <ActivityIndicator color="red"/>
    )
  }
  return (
    <GradientBackground>
      <ScrollView>
          <View style={{marginTop:top+20 }}>
            <View style={{height:440}}>
              <Carousel
                data={nowPlaying}
                renderItem={({item})=><MoviePoster movie={item} />}
                sliderWidth={windowWidth}
                itemWidth={300}
              />
            </View>
            <HorizontalSlider title={'En cines'} peliculasEnCine={nowPlaying}/>
            <HorizontalSlider title={'Populares'} peliculasEnCine={popular}/>

          </View>
      </ScrollView>
    </GradientBackground>
  )
}

const styles = StyleSheet.create({})