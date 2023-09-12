import { FiBookmark } from "react-icons/fi";
import PropTypes from 'prop-types'
const Blog = ({blog, handlerToBookMarks}) => {
const{cover,title,author,author_img,post_date,reading_time,has_tags} = blog  
  return (
<div> 
   <img className='w-full rounded-lg' src={cover} alt="" />
   
 <div className='flex justify-between items-center m-2'>
  <div className='flex items-center justify-center'>
     <img className='w-14 my-2' src={author_img} alt="" />
     <div className='ml-3'>
         <h1 className='font-semibold text-2xl'>{author} </h1>
         <p className='font-semibold text-slate-700'>{post_date} </p>
     </div>
  </div>

<div className="flex items-center">
   <span> {reading_time} min read  </span>
   <button onClick={()=>handlerToBookMarks(blog)} className="ml-2"> <FiBookmark/> </button>
</div>

 </div>



   <h1 className="text-3xl font-bold m-2 ">{title}</h1>
   
   <div className='my-3 text-gray-500'>
      {has_tags.map((has,idx) =><span className='mx-2 text-xl' key={idx}> <a href="#"> #{has} </a> </span>)}
   </div>
   

  <button className='mb-14 text-indigo-600 underline m-2 font-medium'> Mark as read </button>

    </div>


  )
}

Blog.propTypes = {

blog:PropTypes.object,
handlerToBookMarks:PropTypes.func.isRequired

}

export default Blog