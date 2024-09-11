import React, {useState} from 'react'

function App() {
  const [color ,setColor] = useState("orange");
  return (
    <div className='w-full h-screen  flex justify-center  relative ' style={{backgroundColor: color}}>       
      <div className='flex rounded-full  bottom-12  absolute p-3 justify-center px-2 bg-white shadow-lg  gap-3 py-2'>  
        <button className=" bg-red-600 rounded-full text-white px-4 py-1 cursor-pointer  hover:bg-red-500"   
        onClick={()=>{setColor("red")}}>red</button>
        <button className=" bg-green-600 rounded-full text-white px-4 py-1 cursor-pointer  hover:bg-green-500" 
        onClick={()=>{setColor("green")}}>Green</button>
        <button className=" bg-yellow-400 rounded-full text-white px-4 py-1 cursor-pointer  hover:bg-yellow-500" 
        onClick={()=>{setColor("yellow")}}>Yellow</button>
        <button className=" bg-pink-600 rounded-full text-white px-4 py-1 cursor-pointer hover:bg-pink-400" 
        onClick={()=>setColor("pink")}>Pink</button>
      </div>
    </div>
  )
}

export default App;