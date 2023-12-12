
import Searchbar from './components/searchBar'
import './App.css'
import SearchImages from './components/Api';
import ImageList from './components/imageList'
import { useState } from 'react';

function App() {
 
const [images,setImages] =useState([]);

  const handleSubmit= async (term) =>{
  
  const result = await SearchImages(term)
  setImages(result)
  }
  return (
  <div className='App'>
     <Searchbar search={handleSubmit}/>   
     <ImageList imgPlaceholder={images}/>
  </div>
  )
}

export default App
