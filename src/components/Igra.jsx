import React, { useState, useEffect } from 'react'
import Rec from './Rec';
import Slovo from './Slovo';
const slova = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]
export default function Igra(props) {
    const [brojPokusaja, setBrojPokusaja] = useState(5);
    const [index, setIndex] = useState(0);
    const [iskorisceno, setIskorisceno] = useState([]);
    const [kraj, setKraj] = useState(false);
    useEffect(() => {
        const ind = Math.random() * props.reci.length;
        setKraj(false);
        setIndex(Math.floor(ind));
        setBrojPokusaja(5);
        setIskorisceno([]);
    }, [props]);

    const onClick = (slovo) => () => {
        const noviNiz = [...iskorisceno, slovo];
        let flag = true;
        for (const sl of props.reci[index].split('')) {
            if (!noviNiz.includes(sl) && sl !== ' ') {
                flag = false;
                break;
            }
        }
        if (flag) {
            setKraj(true);
        }


        setIskorisceno(prev => {
            return [...prev, slovo];
        })
        if (!props.reci[index].split('').includes(slovo)) {
            setBrojPokusaja(prev => prev - 1)
        }
    }
    if (props.reci.length == 0) {
        return (
            <h1>Kreirajte neku rec</h1>
        )
    }

    if (brojPokusaja === 0) {
        return (
            <div className='container'>
                <h1>Niste uspeli da pogodite pojam</h1>
                <span>Trazeni pojam: {props.reci[index]}</span>
                <button className='btn btn-primary mt-2 ml-5' onClick={() => {
                    setKraj(false);
                    setBrojPokusaja(5);
                    setIskorisceno([]);
                    setIndex(Math.floor(Math.random() * props.reci.length))
                }}>Pokusajte ponovo</button>
            </div>
        )
    }
    return (
        <div className='container'>
            <div className='row mt-2'>
                {kraj ? (

                    <h2>Cestitamo, uspesno ste pogodili rec</h2>

                ) : (
                        <h2>Ostalo pokusaja: {brojPokusaja}</h2>
                    )
                }
                <button className='btn btn-primary mt-2 ml-5' onClick={() => {
                    setKraj(false);
                    setBrojPokusaja(5);
                    setIskorisceno([]);
                    setIndex(Math.floor(Math.random() * props.reci.length))
                }}>Pokusajte ponovo</button>
            </div>

            {
                props.reci[index].split(' ').map(element => {
                    return <Rec iskorisceno={iskorisceno} rec={element} />
                })
            }

            {!kraj && (
                <div className='row mt-2'>
                    {
                        slova.map(element => {
                            return <Slovo onClick={onClick(element)} disabled={iskorisceno.includes(element)} slovo={element} />
                        })
                    }
                </div>
            )}
        </div>
    )
}
