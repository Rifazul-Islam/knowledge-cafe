
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'

import Header from './components/Header/Header'

function App() {
 
const [bookMarks, setBookMarks] = useState([]);

const handlerToBookMarks = (blog)=>{
    const newBookMarks = [...bookMarks,blog]
    setBookMarks(newBookMarks)
}


  return (
    <>
     
   <Header/>
      
     <div className="md:flex mx-20">
     <Blogs handlerToBookMarks={handlerToBookMarks}/>
     <BookMarks bookMarks={bookMarks}  />
    </div> 
     
    </>
  )
}

export default App
