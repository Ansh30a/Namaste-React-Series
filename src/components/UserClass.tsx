// Older way of writing React code was using class based components.
// CLASS BASED COMPONENTS

import React from "react";

type Props = {};

type userInfo = {
    name: string;
    location: string;
    avatar_url: string
};

type State = {
    userInfo: userInfo | null;
};
 
// Class Based Component -> very important for interview pov
class UserClass extends React.Component<Props, State> {
    constructor(props:Props){
        super(props);

        this.state = {
            userInfo: null,
        };
    }

 // API calls
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shreyachopra03-ux");
    const json = await data.json();

    this.setState({
        userInfo: {
         name: json.name,
         location: json.location,
         avatar_url: json.avatar_url
    },
    });
    console.log(json);
 }

    componentDidUpdate() {
        console.log('component did update')
    }

    componentWillUnmount() {
        console.log('component unmounted');
    }

    render() {
        // console.log("child render")
        const { userInfo } = this.state;

        if (!userInfo) {
         return <h2>Loading...</h2>;
        }

        const { name , location, avatar_url } = userInfo;

        return (
             <div className="user-card">
            <h2>Name: {name}</h2>
            <img src={avatar_url} alt="image" />
            <h3>Location: {location}</h3>
            <h4>Contact info : @chopra_shreya03</h4>
        </div>
        );
    };
};

export default UserClass;