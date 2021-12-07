import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>
            <div className="notes__content">
                <input type="text"
                        placeholder="titulo bointi bro"
                        className="notes__title-input" />
                <textarea placeholder="que pasa hoy"
                        className="notes__textarea"
                        rows="3"
                        >
                </textarea>
            </div>
            <div className="notes__image">
                <img src="https://actualidadaeroespacial.com/wp-content/uploads/2021/07/Tripulacion-de-la-UNITY22-130721-750x536.jpg" 
                    alt="imagen"
                     />
            </div>
        </div>
    )
}
