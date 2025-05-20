import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FormReviews from "../component/FormReviews";


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
            <div className="gradient-bg">
                <div className="container pad-top">
                    {movie ?
                        <div className="card mb-3 " >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={movie.imagePath} className="img-fluid rounded-start w-50" alt={movie.title} />
                                </div>
                                <div className="col-md-8">
                                    <div className=" card-body  d-flex justify-content-between">
                                        <div >
                                            <h5 className="card-title">Title: {movie.title}</h5>
                                            <p className="card-text">Diretto da: {movie.director}</p>
                                            <p className="card-text">Genere: {movie.genre}</p>
                                            <p className="card-text">Anno: {movie.release_year}</p>
                                            <p className="card-text">Descrizione: {movie.abstract}</p>
                                            <Link to={'/'} className="btn gradient-add-btn mt-3">Indietro</Link>
                                        </div>

                                        <p className="card-text">Media voto: {movie.average_vote}</p>
                                    </div>
                                </div>
                            </div>
                        </div> : <div>Caricamento</div>}
                </div>

                <div className="container">
                    {movie && movie.reviews ?
                        movie.reviews.map(element => (
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Nome: {element.name}</h5>
                                    <p className="card-text">Recensione: {element.text}</p>
                                    <p className="card-text">Voto: {element.vote}</p>
                                </div>
                            </div>
                        )) : <div>Caricamento</div>}
                </div>

            <div>
                <FormReviews id={id} reload={getMovie}/>
            </div>
            
            </div>




        </>
    )
}

export default DetailsMovies;