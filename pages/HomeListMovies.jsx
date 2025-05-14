import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "../component/MovieCard";

function HomeListMovies() {

    const [movies, setMoovies] = useState([])

    function getList() {
        axios
            .get("http://localhost:4000/movies")
            .then((response) => setMoovies(response.data))
            .catch((err) => console.error(err));

    }

    useEffect(getList, [])
    return (
        <>
            <div className="gradient-bg">
                <div className="container ">
                    <h1 className="text-white">Lista dei film</h1>
                    <h2 className="text-white">Titoli</h2>
                    <div className="row">
                        {movies.map((movie) => (
                            <div className="col-md-4 mb-4" key={movie.id}>
                                <MovieCard movie={movie} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>

    )
}

export default HomeListMovies