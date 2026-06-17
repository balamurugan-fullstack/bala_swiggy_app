import { useState } from "react";


const User = (props) => {
    const {name, location} = props;
    const [count] = useState(0);
    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h3>@bala2023dev</h3>
        </div>
    )
}

export default User;