import React from 'react'
import { useRef } from 'react'
import axios from 'axios'

const Sellerform = () => {

    let refName = useRef('')
    let refDesc = useRef('')
    let refPrice = useRef('')
    const submitHandler = async(event) =>{
        event.preventDefault()
        const formData = {
            name:refName.current.value,
            description:refDesc.current.value,
            price:refPrice.current.value
        }
        refName.current.value=''
        refDesc.current.value=''
        refPrice.current.value=''

        try{
            axios.post('https://shoes-55acc-default-rtdb.firebaseio.com/stockdata.json',formData);
    
        }
        catch(error){
            alert('Authentication Failed')
        }

    }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor='name'> Name</label>
        <input id='name' name='name' ref={refName}/>
        <label htmlFor='desc'>Description</label>
        <input id='desc' name='desc' ref={refDesc}/>
        <label htmlFor='name'>Price</label>
        <input id='price' name='price' ref={refPrice}/>
        <button type='submit'>Add Shoes</button>
      </form>
      <br/>
    </div>
  )
}

export default Sellerform
