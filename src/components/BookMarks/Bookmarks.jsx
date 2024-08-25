import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 h-auto">
            <h1 className="text-4xl">BookMarks : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark) =>  <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired
}

export default Bookmarks;