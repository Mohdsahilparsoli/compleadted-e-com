import React, { useState } from 'react'

const Singaproductimg = ({imgs = [{url:""}]}) => {
  const [setimg,updatedimg]=useState(imgs[0])
  return (
<>
<div className="mainimg">
    <img src={setimg.url} alt="" />
</div>

<div className='myimgs'>
    {
        imgs.map((value)=>{
            return <img src={value.url} alt="productimgs" onClick={()=>{ updatedimg(value)}} />
        })
    }
</div>

</>
  )
}

export default Singaproductimg