import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);
  
  const [name, setName] = useState('mario')
  
  const handleDelete = (id) => {
    setBlogs(
      blogs.filter(blog => blog.id !== id)
    )
  }
  
  useEffect(()=>{
    console.log('useEffect ran')
    console.log(name)
  },[name]);

  return ( 
    <div className="home">
      <Bloglist title = 'My Blogs' blogs = {blogs} delFn = {handleDelete}/>
      <button onClick = {()=> setName('luigi')}>change name</button>
    </div>
   );
}

export default Home;