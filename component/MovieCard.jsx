import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    const { id, title, director, genre, release_year, abstract, average_vote, imagePath } = movie;

    return (
        <>
            <div className="card " style={{width: "18rem"}}>
                <img src={imagePath} className="card-img-top w-50 mx-auto mt-3" alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text small">{director}</p>
                        <p className="card-text small">{genre}</p>
                        <p className="card-text small">{release_year}</p>
                        <p className="card-text small">{abstract}</p>
                        <p className="card-text small"><strong>Media voto: {average_vote}</strong></p>

                        <Link to={`/${id}`} className="btn btn-primary w-100">Dettagli film</Link>
                    </div>
            </div>
        </>
    )
}

export default MovieCard;