import React, { useState, useRef } from 'react'
import Film from './Film';

export default function FilmList() {
    const [filmer, setFilmer] = useState([]);

    const inputRef = useRef()
    const ratingRef = useRef()

    function addMovie() {
        const newId = filmer.length > 0 ? filmer[filmer.length - 1].id + 1 : 1;

        if (document.getElementById("title").value && document.getElementById("grade").value > "0") {
            setFilmer([...filmer, {
            id: newId,
            title: inputRef.current.value,
            rating: ratingRef.current.value
        }]); } else {
            alert("Vänligen fyll i båda fälten")
        }

        inputRef.current.value = "";
        ratingRef.current.value = "";
    }

    function deleteMovie(id) {
        setFilmer(filmer.filter((item) => item.id !== id));
    }

    function sortAbc() {
        setFilmer([...filmer].sort((a,b) => {
            return a.title >= b.title ? 1 : -1
        }));
    };

    function sortNumbers() {
        setFilmer([...filmer].sort((a,b) => {
            return a.rating >= b.rating ? 1 : -1
        }));
    };

    return (
        <div>
            <form action="#" id="new-movie-form">
                <fieldset>
                    <legend>Lägg till en film</legend>
                    <div class="form-group">
                        <label for="title">Titel:</label>
                        <input type="text" class="form-control" id="title" placeholder="Titel här..." ref={inputRef}/>
                    </div>

                    <div class="form-group">
                        <label for="grade">Betyg:</label>
                        <select id="grade" class="form-control" ref={ratingRef}>
                            <option value="" selected>Välj betyg här...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div class="form-group mt-2">
                        <button id="save-movie" class="btn btn-success" onClick={addMovie}>
                            Spara film
                        </button>
                    </div>
                </fieldset>
            </form>
            <h2>Mina filmer</h2>
            <ul id="movie-list">
                { filmer.map(film => <Film key={film.id} item={film} deleteMovie={deleteMovie}/>) }
            </ul>
            <button id="order-alphabetic" class="btn btn-primary" onClick={sortAbc}>
                Alfabetisk ordning
            </button>
            <button id="order-grade" class="btn btn-primary" onClick={sortNumbers}>
                Betygsordning
            </button>
        </div>
    )
}