
const Filterproduct = (state,action) => {
switch(action.type){
    case "allproduct-data":
        const pricemain  = action.payload.map((value)=>{
            return value.price;
        })
        let maxprice = Math.max(...pricemain)
        let minprice = Math.min(...pricemain)
      
    return{
      ...state,
      filter_products: [...action.payload],
      all_products: [...action.payload],
      filters:{...state.filters, maxprice, price:maxprice}
        }

    case "sort-values":
            return {
        ...state,
        sorting_value:action.payload,
                }

          
case "sort-data":
let newdata;
const {filter_products,sorting_value} = state;
let tempdata = [...filter_products];
const sortmyvalue = (a,b)=>{
    if(sorting_value==="a-to-z"){
        return a.name.localeCompare(b.name)
    }
 
    if(sorting_value==="z-to-a"){
        return b.name.localeCompare(a.name)
    }
    if(sorting_value==="low-high"){
        return a.price-b.price
    }

    if(sorting_value==="high-low"){
        return b.price-a.price
    }
    
}
newdata = tempdata.sort(sortmyvalue)
return {
        ...state,
        filter_products:newdata
    }
case "inputvaluesupdating":
    const{name,value}=action.payload
    return{
    ...state,
        filters:{
            ...state.filters,
            [name]:value
        }
    }
case "filter-product":
    const{all_products}=state
    let serchproduct = [...all_products];
    const {text,categorymain ,compnymain , price} = state.filters;
    
  if(text){
    serchproduct=serchproduct.filter((curentval)=>{
        return curentval.name.toLowerCase().includes(text)
    })
  }
  if(categorymain!=="All"){
   serchproduct= serchproduct.filter((value)=>{
        return value.category==categorymain
    })
  }
  if(compnymain !=="All"){
    serchproduct = serchproduct.filter((value)=>{
        return value.company==compnymain;
    })
  }
  if(price==0){
    serchproduct = serchproduct.filter((value)=>{
        return value.price == price
    }) 
  }else {
    serchproduct = serchproduct.filter((value)=>{
        return value.price<=price
    })
  }

  
    return{
        ...state,
        filter_products:serchproduct
    }

    case "clear-filter":
        return {
            ...state,
            filters:{
                ...state.filters,
                text:"",
                categorymain:"All",
                compnymain:"All",
                maxprice:0,
                price:state.filters.maxprice,
                minprice:state.filters.maxprice
            
            }
        }
default:
    return state
}
}

export default Filterproduct