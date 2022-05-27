import CardItem from '../Card/Card';
import {Grid} from '@mui/material'
import { useState, useEffect } from 'react';

const CardList = ({title}) => {
    const [products, setProducts] = useState ([])
    const productos = [
        {
            title:'Arctic Monkeys',
            price:100,
            size:'6cm',
            image:'ArticMonkeysLogo.jpg',
            stock: 30,
            id: 1,
        },
        {
            title:'GTA V',
            price:1200,
            size:'6cm',
            image:'GTA V.jpg',
            stock: 30,
            id: 2,
        },
        {
            title:'Pizza Planeta',
            price:1500,
            size:'6cm',
            image:'PizzaPlaneta.jpg',
            stock: 30,
            id: 3,
        },
    ]

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
    }

    useEffect( () => {

        getProducts()
        .then( (response) => {
            setProducts(response)
        })
    }, [])
    
    return(
        <>
        <h2>Los más comprados</h2>
        <Grid container className='general-container'>
            {
                products.map( (producto) => {
                    const {title, price, size, image, id, stock} = producto
                    return(
                        <Grid item md={3} key={id}>
                            <CardItem title={title} price={price} size={size} image={image} stock={stock} />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>
    )
}

export default CardList