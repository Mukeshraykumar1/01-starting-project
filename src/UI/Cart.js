import classes from './Card.module.css';

const Cart = props => {
    return <div className={classes.card}>{props.Children}</div>

}

export default Cart;