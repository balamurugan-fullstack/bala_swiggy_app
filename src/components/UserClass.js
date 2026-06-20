import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        
        console.log("child constructor");

    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/balamurugan-fullstack");
        const json = await data.json();

        console.log(json);
        
    }
    render(){
        const {name, location} = this.props;
        console.log("child render");

        return(
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h3>@bala2023dev</h3>
            </div>
        );
    }
}

export default UserClass;