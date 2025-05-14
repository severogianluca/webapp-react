import axios from "axios";
import { useState } from "react";


function FormReviews({id, reload}) {
    const [formData, setFormData] = useState({
        name: '',
        text: '',
        vote: 1
    });


    function handleFormData(e) {
        const value = e.target.value;
    
    setFormData((formData) => ({
        // value conterra il valore o del checkbox o del form
        ...formData, [e.target.name]: value
    }))};

    function sendForm(e) {
        e.preventDefault()
        axios.post(`http://localhost:4000/movies/${id}/reviews`, formData)
            .then((response) => {
                console.log(response.data)
                alert("Form inserito con successo")
            })
            .catch((error) => {
                console.error(error)
                alert("Errore durante l'invio del form")
            })
            reload()
    }

    return (
        <>
            <div className="border rounded p-4 shadow-sm container mt-5 ">
                
                

                <form onSubmit={sendForm}>
                    <div className="mb-3">
                        <h5 className="text-white">Ricordati che la tua opinione conta!</h5>
                        <label htmlFor="name" className="form-label text-white">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            placeholder="Inserisci il tuo nome"
                            onChange={handleFormData}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="text" className="form-label text-white">Inserisci una recensione</label>
                        <textarea
                            type="text"
                            className="form-control"
                            id="text"
                            name="text"
                            value={formData.text}
                            placeholder="Inserisci la tua recensione"
                            onChange={handleFormData}
                            
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="vote" className="form-label text-white">Lascia un voto</label>
                        <input
                            className="form-control"
                            id="vote"
                            name="vote"
                            value={formData.vote}
                            placeholder="Lascia un voto"
                            onChange={handleFormData}
                            rows="2"
                        ></input>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary w-25 ">Invia</button>
                    </div>
                    
                </form>
            </div>
        </>
    )
}


export default FormReviews