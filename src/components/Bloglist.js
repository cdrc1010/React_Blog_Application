// we can desctructure the props objects direct in parameters
// it is the same with line 4,5 and 6
import { Link } from "react-router-dom";
const Bloglist = ({ blogs, title }) => {
    // const Bloglist = (props) => {
    //     const blogs = props.blogs;
    //     const title = props.title;

    return (
        <div>
            <div className="blog-list">
                <h2>{title}</h2>
                {blogs.map((blog) =>
                    <div className="blog-preview" key={blog.id}>
                        <Link to = {`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written by: {blog.author}</p>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )

}

export default Bloglist;