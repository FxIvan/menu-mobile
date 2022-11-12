import React from 'react'
import { Link } from 'react-router-dom'
import '../css/menu.css'

export const Menu = () =>{

    return(
        <div>
            <div>
                { open ?  <h2>Hola</h2>:<h2>Chau</h2>}
            </div>
        </div>
    )
}