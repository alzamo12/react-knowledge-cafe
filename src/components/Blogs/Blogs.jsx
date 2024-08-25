import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookMark}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])


    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    handleBookMark={handleBookMark}
                    key={blog.id} 
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookMark: PropTypes.func.isRequired
}

export default Blogs;