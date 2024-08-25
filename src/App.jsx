import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookMarks] = useState([]);

  const handleBookMark = book => {
    const newBookMarks = [...bookmarks, book];
    setBookMarks(newBookMarks)
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto gap-10'>
        <Blogs handleBookMark={handleBookMark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>

    </>
  )
}

export default App
