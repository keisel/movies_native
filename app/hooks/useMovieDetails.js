import { useState,useEffect } from "react"
import movieDB from "../api/movieDB"

export const useMovieDetails=(movieId)=>{
    const [state,setState]=useState({isLoading:true,movieFull:undefined, cast:[]})
    const getMovieDetails= async()=>{
        const movieDetailsPromise=await movieDB.get(`/${movieId}`)
        const castPromise=await movieDB.get(`/${movieId}/credits`)

        const [movieDetailsResp,castPromiseResp] = await Promise.all([movieDetailsPromise,castPromise])
        
        setState({
            isLoading:false,
            movieFull:movieDetailsResp.data,
            cast:castPromiseResp.data.cast
        })
    }

    useEffect(() => {
      getMovieDetails()
    }, [])
    return{...state}
    
}