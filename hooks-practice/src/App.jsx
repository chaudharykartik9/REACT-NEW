import React, { useState } from 'react'


const App = () => {
  const [num , setNum] = useState(0);

  return (
    <>
    <div className='number'>number : {num}</div>
    <button className='increase' onClick={()=>{setNum(num+1)}}>increase + 1 </button>
    <button  lassName='decrease' onClick={()=>{setNum(num-1)}}>decrease - 1 </button>
    </>
   
  )
}

export default App