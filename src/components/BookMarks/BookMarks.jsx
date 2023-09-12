import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookMarks}) => {
return (
<div className="md:w-1/3 bg-gray-300 ml-3">
     <h2 className="text-2xl font-bold text-center pt-2"> BookMarked : {bookMarks.length} </h2>                                     

   {bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark> )}
</div>
);
};

BookMarks.propTypes = {
 bookMarks: PropTypes.array
}
export default BookMarks;