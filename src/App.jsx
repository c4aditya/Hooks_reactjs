import { useState } from "react"

function App() {
let [num , setNum]=useState(0)
function decrementHandler(){
  num = num-1
  setNum(num)

}

function incrementHandler(){
  num = num+1
  setNum(num)
}



  return (
    <>
   <h1>This is all about Hooks </h1>
   <button onClick={decrementHandler}>-</button>
   <p>{num}</p>
   <button onClick={incrementHandler}>
    +
   </button>
   
    </>
  )
}

export default App
