import axios from "axios";
import { useState } from "react";



function FormNewMovie() {
    //use state con valori di default
    const [formDataMovie, setFormDataMovie] = useState({
        title: '',
        director: '',
        release_year: '',
        image: null,
        abstract: ''
    });


    function handleFormData(e) {
        const value = e.target.value;

        setFormDataMovie((formDataMovie) => ({
            ...formDataMovie, [e.target.name]: value
        }))
    };



    function sendForm(e) {
        e.preventDefault()
        axios.post(`http://localhost:4000/movies`, formDataMovie)
            .then((response) => {
                console.log(response.data)
                alert("Form inserito con successo")
            })
            .catch((error) => {
                console.error(error)
                alert("Errore durante l'invio del form")
            })
        //  reload()
    }

    return (

        <>




            <div className="d-flex justify-content-center align-items-center gradient-bg" style={{ height: "100vh" }}>

                <div
                    className="border rounded p-4 shadow-sm gradient-add-btn"
                    style={{ width: "500px", height: "550px", overflowY: "auto" }}
                >
                <form onSubmit={sendForm} >
                    <div className="mb-3">
                        <h5 >Inserisci un nuovo film 🎬</h5>
                        <label htmlFor="name" className="form-label text-white">Titolo del film</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={formDataMovie.title}
                            placeholder="Inserisci il nuovo film"
                            onChange={handleFormData}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="text" className="form-label text-white">Diretto da?</label>
                        <input
                            type="text"
                            className="form-control"
                            id="director"
                            name="director"
                            value={formDataMovie.director}
                            placeholder="Inserisci il regista"
                            onChange={handleFormData}

                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="text" className="form-label text-white">Anno di rilascio</label>
                        <input
                            className="form-control"
                            id="release_year"
                            name="release_year"
                            value={formDataMovie.release_year}
                            placeholder="Scrivi l'anno di rilascio"
                            onChange={handleFormData}
                        ></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="text" className="form-label text-white">Descrizione del film</label>
                        <textarea
                            className="form-control"
                            id="abstract"
                            name="abstract"
                            value={formDataMovie.abstract}
                            placeholder="Scrivi la descrizione del film"
                            onChange={handleFormData}
                        ></textarea>
                    </div>

                    <div className="input-group mb-3">
                        <label htmlFor="inputGropuFile01" className="input-group-text">Carica</label>
                        <input
                            className="form-control"
                            type="file"
                            name="image"
                            placeholder="File"
                            onChange={handleFormData}
                        ></input>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn gradient-nav w-25 ">Invia</button>
                    </div>

                </form>
                </div>
            </div>
        </>
    )
}

export default FormNewMovie