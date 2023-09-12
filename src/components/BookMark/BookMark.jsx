
import PropTypes from 'prop-types'
const BookMark = ({bookMark}) => {
  const {title} = bookMark
  return (
    <div className='bg-slate-100  rounded mt-4 mx-4 p-4'>
   <h1 className='text-2xl  text-center'>{title} </h1>    

    </div>
  )
}

BookMark.propTypes = {
  bookMark:PropTypes.object            
}

export default BookMark