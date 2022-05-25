import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Card.css';
import ItemCount from './ItemCount';

const CardItem = ({ image, title, price, size }) => {
    
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./productos/${image}`} />
                    </div>
                    <p>{title}</p>
                    <p>{size}</p>
                    <span>${price}</span>
                    <ItemCount />
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem