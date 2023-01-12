import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // setting setTimeout is for demo only to see the pending status of get request
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    console.log(res);
                    if(!res.ok){
                        throw Error('could not fetch!');
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                }).catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000);
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title="Blog list" />}

        </div>
    );
}

export default Home;