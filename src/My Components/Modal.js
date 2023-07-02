import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const Modal = () => {
    const [showCart, setShowCart] = useState(false);
    const [cartitems, setCartItems] = useState('');

    useEffect(()=>{
        cartHandler()
    },[])

    const cartHandler = async() => {
        setShowCart(!showCart)

        try{
            const resolve = await axios.get('https://shoes-55acc-default-rtdb.firebaseio.com/cartdata.json');
            const data = resolve.data
            setCartItems(data)
        }
        catch(error){
            alert('Autentication Failed')
        }
    }
    let loadedCart = [];
    for(let key in cartitems){
        loadedCart.push({
            id:key,
            name:cartitems[key].name,
            desc:cartitems[key].description,
            quantity:cartitems[key].quantity,
            price:cartitems[key].price
        })
    }

    let cartQuantity = loadedCart.reduce((initial,everyElement)=>{
        return (initial+everyElement.quantity)
    },0)

  return (
    <div>
      <button onClick={cartHandler}>{!showCart?'Show Cart':'Hide Cart'}<span>{cartQuantity}</span></button>
      {showCart && <ul>{loadedCart.map(i=><li key={i.id}>{`${i.name} ${i.desc} - x${i.quantity} - Rs.${i.price}`}</li>)}</ul>}
    </div>
  )
}

export default Modal
