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
            <div
                className="border rounded p-4 shadow-sm bg-light"
                style={{ width: "500px", height: "450px", overflowY: "auto" }}
            >
                <form onSubmit={sendForm}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nome</label>
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
                        <label htmlFor="text" className="form-label">Inserisci una recensione</label>
                        <input
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
                        <label htmlFor="vote" className="form-label">Lascia un voto</label>
                        <textarea
                            className="form-control"
                            id="vote"
                            name="vote"
                            value={formData.vote}
                            placeholder="Lascia un voto"
                            onChange={handleFormData}
                            rows="2"
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Invia</button>
                </form>
            </div>
        </>
    )
}


export default FormReviews