import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'

function App() {


  return (
    <>
      <Header></Header>
      <main className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>

    </>
  )
}

export default App
