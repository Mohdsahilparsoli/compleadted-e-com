import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "../ContextReducers/Appreducer"
const Appcontext = createContext()
const initialvalue = {
    apiloading:false,
    apidata:[],
    apidataf:[],
    relatedproductdata:[],
    singalproductloading:false,
    singalproduct:{},
    apieeror:false,

}
const API = "https://api.pujakaitem.com/api/products";

const Appprovider = ({children}) => {
const[state,dispatch] = useReducer(reducer,initialvalue)

const apifetchdata=async(url)=>{
dispatch({type:"dataloading"})
try{
    const res = await axios.get(url);
    const result = await res.data;
dispatch({type:"loaddata",payload:result})
}catch{
    dispatch({type:"apieeors"})
}
}

// get singalproduct
const getsingalproduct = async(url)=>{
    dispatch({type:"singalproductloading"})
try{
    const res =await axios.get(url)
    const result = await res.data
dispatch({type:"data-load-singal",payload:result})
}catch{
    dispatch({type:"singalproducerror"})
}
}

// realted product 
const relatedproduct = (cat)=>{
   dispatch({type:"related-product",payload:cat})
}
useEffect(()=>{
    apifetchdata(API)
},[])
return <Appcontext.Provider value={{ ...state , getsingalproduct,relatedproduct }}>
{children}
</Appcontext.Provider>
}

const useDb = ()=>{
    return useContext(Appcontext)
}

export { Appprovider,Appcontext,useDb}