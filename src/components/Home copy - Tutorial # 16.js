import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
const Home = () => {

    // let name = 'Mario';

    //1.) const [name, setName] = useState('mario');
    //1.) const [age, setAge] = useState(32);
    
    const [blogs, setBlogs] = useState([
        {title: 'My First React App', body: 'lorem ipsum...', author: 'cdrc', id:1 },
        {title: 'Second', body: 'lorem ipsum...', author: 'Test', id:2 },
        {title: 'Third', body: 'lorem ipsum...', author: 'cdrc', id:3 },
    ]);

    const [name, setName] = useState('Test');
    // const clickHandler = (e) => {
    //     // console.log("Hello", e);
    //     //1.) setName('Cedric');
    //     //1.)  setAge(22);
    // }

    // const clickAgain = (name, e) => {
    //     console.log("Hello " + name, e.target);
    // }

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    //use Effect dependencies the second argument which is the ,[]
    useEffect(() => {
        console.log('use effect ran');
    },[name]);

    return (
        <div className="home">
            {/* <h2>Home</h2> */}
            {/* <p>{name} is {age} yrs old</p> */}
            {/* <button onClick={clickHandler}>Click Me</button> */}

            {/* sample only */}
            {/* <button onClick={(e) => clickAgain('Cdrc', e)}>Click Me</button> */}

            <Bloglist blogs = {blogs} title="Blog list" handleDelete = {handleDelete}/>
            <button onClick={() => setName('Cedric')}>Change Name</button>
            <p>{name}</p>
            {/* Displaying Specific Data  */}
            {/* <Bloglist blogs = {blogs.filter((blog)=> blog.author === 'cdrc')} title="Cdrc list"/> */}
        </div>
    );
}

export default Home;