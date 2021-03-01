const Bloglist = ({ blogs, title, delFn }) => {

  return ( 
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map(blog => {
        return (
        <div key = {blog.id} className="blog-preview">
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick = {() => delFn(blog.id)}>delete blog</button>
        </div>
        );
      })}
    </div>
   );
}
 
export default Bloglist;