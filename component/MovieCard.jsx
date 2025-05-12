import { Link } from "react-router-dom";

function MovieCard({ data }) {
    const { id, title, director, genre, release_year, abstract, media_voti, imagePath } = data;

    return (
        <>
            <div class="card" style={{width: "18rem"}}>
                <img src={imagePath} class="card-img-top" alt={title}/>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{director}</p>
                        <p class="card-text">{genre}</p>
                        <p class="card-text">{release_year}</p>
                        <p class="card-text">{abstract}</p>
                        <p class="card-text">{media_voti}</p>

                        <Link to={`/${id}`} class="btn btn-primary">Dettagli film</Link>
                    </div>
            </div>
        </>
    )
}

export default MovieCard;