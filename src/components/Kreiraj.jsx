import React, { useState } from 'react'

export default function Kreiraj(props) {
    const [rec, setRec] = useState('');
    const [prikazi, setPrikazi] = useState(false);
    return (
        <div className='container'>
            <div className='row mt-2'>
                <div className='col-4'>
                    <h2>Spisak pojmova</h2>

                    <button onClick={(e) => {
                        setPrikazi(prev => !prev)
                    }} className='btn btn-primary'>{prikazi ? 'Sakrij' : 'Prikazi sve reci'}</button>

                    {
                        prikazi && props.reci.length > 0 && (
                            <ul>
                                {props.reci.map((element, index) => {
                                    return (
                                        <li key={index}>
                                            {element}
                                        </li>
                                    )
                                })}
                            </ul>
                        )
                    }

                </div>
                <div className='col-8'>
                    <form >
                        <label>Rec</label>
                        <input type="text" className='form-control' value={rec} onChange={(e) => {
                            const value = e.target.value;

                            setRec(value);
                        }} />
                        <button className='btn btn-primary form-control mt-2' onClick={(e) => {
                            e.preventDefault();
                            if (rec.trim().length < 3) {
                                alert('Rec mora imati minimalno 3 slova');
                                return;
                            }
                            props.kreiraj(rec);
                        }}>Kreiraj</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
