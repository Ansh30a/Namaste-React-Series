import User from "./User";
import UserClass from "./UserClass";


const About  = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <User name={"Shreya Chopra (function)"} />

            <UserClass name={"First"} location={"Dehradun (class)"}/>
            <UserClass name={"Second"} location={"US"}/>
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

- Child 1 component did mount
- Child 2 component did mount
- Parent component did mount

*/

export default About;