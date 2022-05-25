import * as React from 'react';
import { Button } from '@mui/material';
import './Card.css';
import {useState} from 'react'

const ItemCount = () => {
    const [count, setCount] = useState (1)

    const addCount = () => {
        setCount(count + 1)
    }
    const restCount = () => {
        setCount(count - 1)
    }

    const[stock, setStock] = useState(30)

    return(
        <div className='count-item'>
            <Button onClick={restCount} disabled={count == 1}>-</Button>
            <p>{count}</p>
            <Button onClick={addCount} disabled={count == stock}>+</Button>
            <Button onClick={console.log(count)} variant={'contained'}>Comprar</Button>
        </div>
    )
}

export default ItemCount