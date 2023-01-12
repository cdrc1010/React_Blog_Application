import { useState } from "react";
import './stylesheets/practice.css';

const Count = () => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({
        name: '',
        age: '',
        school: ''
    });
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    // const handleName = () => {
    //     // setUser({
    //     //     name:'Cedric Gurimbao',
    //     //     age: 22,
    //     //     school: 'Bachelor of Science in Computer Science'
    //     // })
    //     // OR
    //     setUser((prev) => {
    //         return { ...prev, name: 'Cyreal', age: 17, school: 'HUMMS' }
    //     })
    // }

    const handleSubmit = () => {
        return document.getElementById('test').innerHTML = `Hi I am ${user.name}, ${user.age}, from ${user.school}`;
    }

    return (
        <div>
            <div className="useState-numbers">
                <div>Count {count}</div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>

            <div className="useState-objects">
                <input type="text" value={user.name} placeholder="Full Name" onChange={(e) => setUser({ ...user, name: e.target.value })} required />
                <input type="number" value={user.age} placeholder="Age" onChange={(e) => setUser({ ...user, age: e.target.value })} required />
                <input type="text" value={user.school} placeholder="School/University" onChange={(e) => setUser({ ...user, school: e.target.value })} required />
                <p id="test"></p>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Count;