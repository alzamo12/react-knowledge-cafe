import PropTypes from 'prop-types';
import { MdOutlineBookmarks } from "react-icons/md";


const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
    const { title, cover, author, author_img,
        posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex '>
                    <img className='w-14' src={author_img} alt='i am sorry' />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleBookMark(blog)}
                        className='ml-2 text-2xl'>               
                             <MdOutlineBookmarks></MdOutlineBookmarks>   
                        </button>
                </div>
            </div>
            <h1 className='text-4xl'>{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button className='text-purple-600 font-bold underline' onClick={()=>handleMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleMarkAsRead: PropTypes.func ,
    handleBookMark: PropTypes.func.isRequired
};


export default Blog;