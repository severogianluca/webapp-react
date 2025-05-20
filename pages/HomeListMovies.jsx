import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "../component/MovieCard";
import GlobalContext from "../context/globalContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function HomeListMovies() {

    const [movies, setMoovies] = useState([])
    const { setIsLoading } = useContext(GlobalContext)




    function getList() {

        setIsLoading(true)
        axios
            .get("http://localhost:4000/movies")
            .then((response) => setMoovies(response.data))
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false))

    }

    useEffect(getList, [setIsLoading])

    return (
        <>
            <div className="gradient-bg">
                <div className="container ">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="text-white pt-5">Lista dei film</h1>
                        <Link to={`/addNewMovie`} type="button" className="btn gradient-add-btn mt-4">Add film</Link>
                    </div>

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