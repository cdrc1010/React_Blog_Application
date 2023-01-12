// we can desctructure the props objects direct in parameters
// it is the same with line 4,5 and 6
const Bloglist = ({ blogs, title, handleDelete }) => {
    // const Bloglist = (props) => {
    //     const blogs = props.blogs;
    //     const title = props.title;

    return (
        <div>
            <div className="blog-list">
                <h2>{title}</h2>
                {blogs.map((blog) =>
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                        <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                    </div>
                )}
            </div>
        </div>
    )

}

export default Bloglist;