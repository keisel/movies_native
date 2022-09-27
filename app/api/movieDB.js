import axios from "axios";

const movieDB= axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'82c414f54517d69af393d27a4e4c8355',
        language:'es-ES'
    }
});

export default movieDB