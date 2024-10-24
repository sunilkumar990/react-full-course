import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componants/card'


function App() {
  let myObj = {
    username: "sunil with shivani",
    age: 23
  }

  let newArr =[1, 2, 3,]


  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-2xl'>thi is tailwind text</h1>
      
     <Card  username="sunil kuamr form amroha" someObj={newArr}/>
     <Card username="shivani tyagi from amroha" btnText="she is very butifull girl"/>
     <Card  username="rath me 2 chutiya daru pe ka backchodi kar raha hai"/>

    </>
  )

}

export default App
