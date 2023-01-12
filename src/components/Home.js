import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
const Home = () => {
const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
//FOR DEMO ONLY
// throw new Error("error");
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title="Blog list" />}

        </div>
    );
}

export default Home;