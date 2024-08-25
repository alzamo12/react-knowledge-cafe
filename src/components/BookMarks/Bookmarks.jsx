import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, readingTime}) => {
    return(
        <div className='md:w-1/3'>
            <div>
                <h1>Spent time on reading {readingTime}</h1>
            </div>
            <div className=" bg-gray-300 h-auto">
            <h1 className="text-4xl">BookMarks : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark) =>  <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired,
    readingTime: PropTypes.number
}

export default Bookmarks;