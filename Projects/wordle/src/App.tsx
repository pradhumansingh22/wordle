import { useEffect, useState } from 'react'

const API = "https://api.frontendexpert.io/api/fe/wordle-words";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API);
      const words = await response.json();
      
  }
},[])
  return (
    <>
     <div className='text-2xl text-amber-300'>Hello</div>
    </>
  )
}

export default App
