
const Appreducer = (state,action) => {
switch(action.type){
    case "dataloading":
        return {
            ...state,
            apiloading:true

        }
       case "loaddata":
        const fdata = action.payload.filter((value)=>{
            return value.featured===true;
        })
        return{
            ...state,
            apidata:action.payload,
            apidataf:fdata,
            apiloading:false
        } 
       case "apieeors":
        return {
            ...state,
        apieeror:true,

        } 
        case "singalproductloading":
            return {
                ...state,
                singalproductloading:true
            }
        case "data-load-singal":
            return {
                ...state,
                singalproductloading:false,
                singalproduct:action.payload

            }    
            case "singalproducerror":
                return {
                    ...state,
                    apieeror:true,

                }
        case "related-product":
            const cat = action.payload;
            const relatedproductget = state.apidata.filter((value)=>{
                return value.category==cat;
            })

            return {
                ...state,
                relatedproductdata:relatedproductget
            }        
    default:
        return state
}
}

export default Appreducer