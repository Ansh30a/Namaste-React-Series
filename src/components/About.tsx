import User from "./User";
import UserClass from "./UserClass";
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const About  = () => {
    const {loggedInUser, setUserName} = useContext(UserContext)
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <User name={"Shreya Chopra (function)"} />
            <label className="p-2">UserName :</label>
            <input 
            className="border border-black  p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}/>
            <UserClass/>
        </div>
    );
};


/*
React tries to batch up the task because manipulating DOM is really very expensive
- Parent Constrcutor
- Parent render
      - First Constructor
      - First Render

      - Second Constuctor
      - second Render

    <DOM UPDATED- IN A SINGLE BATCH>
    - Child 1 component did mount
    - Child 2 component did mount

- Parent component did mount

*/

export default About;