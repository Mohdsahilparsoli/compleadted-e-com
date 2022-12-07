import { useFilter } from "../Contextapi/Filter"

const Filtersection = () => {
    const {filters,inputvalue, clearfilter, all_products} = useFilter()
 const {text,categorymain,compnymain,minprice,maxprice,price}=filters;
 console.log("compnymain",price)
 const getuniwuevalue=(data,trbute)=>{
     const maindata = data.map((value)=>{
      return value[trbute]
     })
    //  if(trbute==="colors"){
    //   maindata=maindata.flat();
    //  }
   
     return ["All", ...new Set(maindata)]
 }
const category = getuniwuevalue(all_products,"category");
const brand = getuniwuevalue(all_products,"company");
const color = getuniwuevalue(all_products,"colors");
// const price = getuniwuevalue(all_products,"price");
// console.log(category) 
// console.log(brand) 
// console.log(color) 
// console.log(price)  
 return (
<>
<form action="#">
    <input type="text" name="text" autoComplete="off" onChange={inputvalue} value={text} placeholder="Search product ...." />
</form>


<div className="cat">
<h3>Category filter</h3>

  {
    category.map((value)=>{
      return <button name="categorymain" className={categorymain==value?"active":""} onClick={inputvalue} value={value}>{value}</button>
    })
  }

</div>

<div className="company">
  <h3>Company filter</h3>
    {
      brand.map((value)=>{
        return <button name="compnymain" className={compnymain==value?"active":""} value={value} onClick={inputvalue}>{value}</button>
      })
    }
  </div>
  <div className="price">
    <h3> price filter</h3>
    <p>{price}</p>
    <input type="range" name="price" value={price} min={minprice} max={maxprice} onChange={inputvalue} />
  </div>

  <div className="clearfileter">
    <h3>Clear filter</h3>
    <button onClick={clearfilter}>clear filter</button>
  </div>
</>



  )
}

export default Filtersection