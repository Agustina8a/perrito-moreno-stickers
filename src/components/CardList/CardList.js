import CardItem from '../Card/Card';
import {Grid} from '@mui/material'

const CardList = () => {
    return(
        <>
        <h2>Los más comprados</h2>
        <Grid container className='general-container'>
            <Grid item md={3}>
                <CardItem title={"Arctic Monkeys"} price={100} size={"6 cm"} image={"ArticMonkeysLogo.jpg"} />
            </Grid>
            <Grid item md={3}>
                <CardItem title={"GTA V"} price={100} size={"6 cm"} image={"GTA V.jpg"} />
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Pizza Planeta"} price={100} size={"6 cm"} image={"PizzaPlaneta.jpg"} />
            </Grid>
        </Grid>
        </>
    )
}

export default CardList