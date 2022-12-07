
const Cartreducer = (state,action) => {
if(action.type==="add-to-cart"){
let{id,product,amount,setcolor}=action.payload
const existingproduct = state.cart.find((curentelemnt)=>{
    return curentelemnt.id===id+setcolor;
})
if(existingproduct){
    const updatedproduct = state.cart.map((curenvalue)=>{
        if(curenvalue.id===id+setcolor){
            let newamount = curenvalue.amount+amount;
            if(newamount>=curenvalue.max){
                newamount=curenvalue.max
            }
            return{
                ...curenvalue,
                amount:newamount
            }
        } else{
            return curenvalue;
        }
    })

    return{
        ...state,
        cart:updatedproduct
    };
} else{

    const updateddata = {
        id:id+setcolor,
        name:product.name,
        price:product.price,
        amount,
        setcolor,
        image:product.image[0].url,
        max:product.stock
    }
    return{
        ...state,
        cart:[...state.cart,updateddata]
    }

}

}



if(action.type==="increment-data"){
    const updatedproduct = state.cart.map((curentelemnt)=>{
        if(curentelemnt.id===action.payload){
            let newamount = curentelemnt.amount+1;
            if(newamount>=curentelemnt.max){
                newamount=curentelemnt.max
            }
            return{
                ...curentelemnt,
                amount:newamount
            }
        } else{
            return curentelemnt
        }
    })
    return {...state,cart:updatedproduct}
}

if(action.type==="decrement-data"){
    const updatedproduct = state.cart.map((curentelemnt)=>{
        if(curentelemnt.id===action.payload){
            let newamount = curentelemnt.amount-1;
            if(newamount<=1){
                newamount=1
            }
            return{
                ...curentelemnt,
                amount:newamount
            }
        } else{
            return curentelemnt
        }
    })
    return {...state,cart:updatedproduct}
}




if(action.type==="remove-data"){
const delteddata = state.cart.filter((curentelement)=>{
    return curentelement.id !== action.payload
})
return{
    ...state,
    cart:delteddata
}
}

if(action.type==="emptycart"){
    return{
        ...state,
        cart:[]
    }
}


if(action.type==="total-cart-price"){
const totalamount = state.cart.reduce((acum,value)=>{
return value.amount+acum
},0)

const tottalprice = state.cart.reduce((total,value)=>{
    return value.price+total
},0)

 return {
     ...state,
     total_item:totalamount,
     total_price:tottalprice
 }
}


return state
}

export default Cartreducer