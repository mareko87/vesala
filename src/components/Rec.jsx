import React from 'react'

export default function Rec(props) {
    return (
        <div className='row mt-2'>
            {props.rec.split('').map(element => {
                if (props.iskorisceno.includes(element)) {
                    return element + ' ';
                }
                return '_ '
            })}
        </div>
    )
}
