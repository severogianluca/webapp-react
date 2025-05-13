import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function DetailsMovies() {
    //utilizzo per estrapolare l'id al click della card
    const { id } = useParams()

    const [movie, setMovie] = useState([])

    function getMovie() {
        axios
            .get("http://localhost:4000/movies/" + id)
            .then((response) => setMovie(response.data))
            .catch((err) => console.error(err));

    }
    console.log(movie)
    useEffect(getMovie, [id])

    return (
        <>
            <div>
                {movie ?
                    <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={movie.imagePath} class="img-fluid rounded-start" alt={movie.title} />
                            </div>
                            <div class="col-md-8">
                                <div className="d-flex card-body">
                                    <div >
                                        <h5 class="card-title">Title: {movie.title}</h5>
                                        <p class="card-text">{movie.director}</p>
                                        <p class="card-text">{movie.genre}</p>
                                        <p class="card-text">{movie.release_year}</p>
                                        <p class="card-text">{movie.abstract}</p>
                                    </div>

                                    <p class="card-text">{movie.average_vote}</p>
                                </div>
                            </div>
                        </div>
                    </div> : <div>Caricamento</div>}
            </div>

        </>
    )
}

export default DetailsMovies;