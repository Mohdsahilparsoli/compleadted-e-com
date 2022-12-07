import Header from "../Components/Header"
import Productcart from "../Components/Productcart"
import { useDb } from "../Contextapi/Appprovider"
import gif from "./gif.gif"



const Home = () => {
const { apidataf, apiloading} = useDb()
if(apiloading){
  return <>
  <Header/>
  <div className="mainloading">
   
  <img src={gif} alt="loading" />
</div> 
  
  </>
}
    return (
<>
<Header/>
<div className="fproducts">
  <div className="fheading"> <h1> Featured products</h1></div>
  <div className="mainf">
  <Productcart data={apidataf}/>

  </div>
</div>


</>
  )
}

export default Home