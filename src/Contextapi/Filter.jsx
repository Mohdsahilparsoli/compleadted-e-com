import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "../ContextReducers/Filterproduct"
import { useDb } from "./Appprovider"
const Filtersection = createContext()
const initialvalue={
    filter_products: [],
    all_products: [],
    sorting_value: "lowest",
    filters:{
        text:"",
        categorymain:"All",
        compnymain:"All",
        price:0,
        minprice:0,
        maxprice:0
      
    }
}

const Filter = ({children}) => {
    const {apidata} = useDb()
    const[state,dispatch]=useReducer(reducer,initialvalue)
    


 const inputvalue = (e)=>{
    const {name,value}= e.target;
    dispatch({type:"inputvaluesupdating",payload:{name,value}})
 }



 // sort values
 const sortdata = (e)=>{
  const value=e.target.value;
    dispatch({type:"sort-values",payload:value})
 }

// celar filter 

const clearfilter = ()=>{
  dispatch({type:"clear-filter"})
}


useEffect(()=>{
dispatch({type:"sort-data"})

},[ state.sorting_value])

useEffect(()=>{
    dispatch({type:"filter-product"})
},[state.filters])
 // product view
 useEffect(()=>{
    dispatch({type:"allproduct-data",payload:apidata})
 },[apidata])
 return <Filtersection.Provider value={{ ...state ,inputvalue,clearfilter, sortdata}}>
    {children}
  </Filtersection.Provider>
}

const useFilter = ()=>{
    return useContext(Filtersection)
}
export { Filter,useFilter}