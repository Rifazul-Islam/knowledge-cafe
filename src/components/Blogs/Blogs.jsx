
import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { useState } from 'react'
import Blog from '../Blog/Blog';

const Blogs = ({handlerToBookMarks})=> {
const [blogs,setBlogs] = useState([]);

useEffect( ()=>{

const loadData = async() =>{
   const res = await fetch('blogs.json')
   const data = await res.json()
   setBlogs(data)
}
loadData()

},[])
              
  return (
    <div className="md:w-2/3">
     {blogs.map(blog => <Blog key={blog.id} blog={blog} handlerToBookMarks={handlerToBookMarks} ></Blog>)}
    </div>
  )
}

Blogs.propTypes = {
  handlerToBookMarks:PropTypes.func.isRequired            
}

export default Blogs