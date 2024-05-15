import React, { useEffect, useState } from 'react'

export default function App() {

  // let eded = 0
  let [eded,setEded] = useState(0)

  return (
    <div>
      <h1>{eded}</h1>
      <button onClick={()=>{
        setEded(eded+1)
       
      }}>Artir</button>
      <button onClick={()=>{
        setEded(eded-1)
       
      }}>Azalt</button>
      
    </div>
  )
}
