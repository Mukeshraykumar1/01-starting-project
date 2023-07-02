import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

const Itemlist = () => {
    const [data, setdata] = useState('')

    useEffect(()=>{
        showStock()
    },[])

    const showStock = async()=>{
        try{
            const resolve = await axios.get('https://shoes-55acc-default-rtdb.firebaseio.com/stockdata.json')
            const data = resolve.data
            setdata(data)
        }
        catch(error){
            alert('Authentication Failed')
        }
    }
    let loadedCandies = [];
    for(let key in data){
        loadedCandies.push({
            id:key,
            name:data[key].name,
            desc:data[key].description,
            price:data[key].price
        })
    }

    const addToCarthandler = (name,desc,price) => {
        const cartItems = {
            name:name,
            description:desc,
            price:price,
            quantity:1
        }
        try{
            axios.post('https://shoes-55acc-default-rtdb.firebaseio.com/cartdata.json',cartItems)
        }
        catch(error){
            alert('Authentication Failed')
        }

    }
    const addToCarthandler2 = (name,desc,price) => {
        const cartItems = {
            name:name,
            description:desc,
            price:price,
            quantity:2
        }
        try{
            axios.post('https://shoes-55acc-default-rtdb.firebaseio.com/cartdata.json',cartItems)
        }
        catch(error){
            alert('Authentication Failed')
        }

    }
    const addToCarthandler3 = (name,desc,price) => {
        const cartItems = {
            name:name,
            description:desc,
            price:price,
            quantity:3
        }
        try{
            axios.post('https://shoes-55acc-default-rtdb.firebaseio.com/cartdata.json',cartItems)
        }
        catch(error){
            alert('Authentication Failed')
        }

    }

  return (
    <div>
      <h3>Shoes Available For You...</h3>
      <ul>{loadedCandies.map(i=>
        <li key={i.id}>{`${i.name} - ${i.desc} - ${i.price}`}
        <button onClick={()=>addToCarthandler(i.name,i.desc,i.price)}>Add +1</button>
        <button onClick={()=>addToCarthandler2(i.name,i.desc,i.price)}>Add +2</button>
        <button onClick={()=>addToCarthandler3(i.name,i.desc,i.price)}>Add +3</button></li>)}
      </ul>

      
    </div>
  )
}

export default Itemlist
