import React, {useState} from 'react'
import Data from './Data'
import List from './List'

function App() {
  const [people, setPeople] =useState(Data)
  
  const funct=()=>{
   setPeople([])
  }
  return(
    <div className='container'>
      <h2>Today's List of Birthdays</h2>
      <h4>{people.length} birthdays today</h4>
      <List people={people}/>
      <button className='btn' onClick={()=> funct()}>Clear All</button>

    </div>
  )
 
}

export default App;
