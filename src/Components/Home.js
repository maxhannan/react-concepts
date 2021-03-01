import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs/')
  return ( 
    <div className="home">
      {/* Displays error message if fetch fails */}
      { error && <div>{error}</div> }
      {/* Displays loading message when waiting for fetch */}
      { isPending && <div>Loading...</div> }
      {/* waits to render until fetch request is complete */}
      { blogs && <Bloglist title = 'My Blogs' blogs = {blogs}/> }
    </div>
   );
}

export default Home;