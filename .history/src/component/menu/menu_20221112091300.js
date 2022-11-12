import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/menu.css'

export const Menu = () =>{

    const [ open , setOpen] = useState(false)

    const handleMenu = () =>{
        setOpen(!open)
    }

    return(
        <div>
            <div>
                <div>
                    <button onClick={handleMenu}>Click</button>
                </div>
                { open ?  
                <h2>Hola</h2>
                :
                <h2></h2>
                }
            </div>
        </div>
    )
}