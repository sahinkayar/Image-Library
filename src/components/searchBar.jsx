import React from 'react'
import { useState } from 'react'
import '../Searchbar.css'
function searchBar({search}) {
  const [valueInput,setValueInput] = useState('')

const handleFormSubmit =  (event) => {
 
  event.preventDefault();
   search(valueInput)
}
const handleChange = (event) => { 
setValueInput(event.target.value)

}

  return (
    <div className='container'>
      <form > 
        <label ><h1>what images are you looking for? </h1></label>
        <input type="text" placeholder='Type what images would you want to see' value={valueInput} onChange={handleChange} />
        <div className='div-item' >Showing Images Of : <span className='span-item' >{valueInput}</span></div>
        <button onClick={handleFormSubmit}>Send</button>
      </form>
    </div>
  )
}

export default searchBar
