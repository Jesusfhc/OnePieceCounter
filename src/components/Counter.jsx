import React from 'react'
import '../style-sheets/Counter.css'

function Contador({count}) {
    return (
        <div className='counter'>
            {count}
        </div>
    )
}

export default Contador;