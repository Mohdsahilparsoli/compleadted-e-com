import React from 'react'
import { useEffect } from 'react'
import { useReducer,createContext,useContext } from 'react'
import reducer from "../ContextReducers/Cartreducer"
const Cartdata = createContext()
// get loactimen

const getloacldata = ()=>{
    const getdata = localStorage.getItem("sahilcart")
    if(getdata===[]){
        return []
    }else{
        return JSON.parse(getdata)
    }
}

const initialvalue={
    cart:getloacldata(),
    total_item:"",
    total_price:"",
    shipingtotal:5000
}
const Cartcontext = ({children}) => {
const[state,dispatch]=useReducer(reducer,initialvalue)


    // get cart data 
    const getcartdata = (product,amount, id, setcolor)=>{
        dispatch({type:"add-to-cart",payload:{id,product,amount,setcolor}})
     }


     // remove cart data 
     const remove = (id)=>{
dispatch({type:"remove-data",payload:id})
     }

// emptry cart 

const emptycart = ()=>{
 dispatch({type:"emptycart"})
}
     // set loact item
     const increment =(id)=>{
       
         dispatch({type:"increment-data",payload:id})
    
    }
     const decrement =(id)=>{
     dispatch({type:"decrement-data",payload:id})
     }

useEffect(()=>{
    dispatch({type:"total-cart-price"})
    localStorage.setItem("sahilcart",JSON.stringify(state.cart))
},[state.cart])


return <Cartdata.Provider value={{...state, getcartdata,remove,decrement,increment, emptycart}} >{children}</Cartdata.Provider>
}

const useCart = ()=>{
    return useContext(Cartdata)
}
export  {Cartcontext, useCart}