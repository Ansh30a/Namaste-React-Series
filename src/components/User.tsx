import { useState } from "react";
 
type UserProps = {
    name: string;
}
 

const User= ({name}: UserProps) => {
    const [count, setCount] =  useState<number>(0);
    // const [count2] =  useState<any>(0);

    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <button
            onClick={() => {
                setCount(count + 1);
            }}
            >Count Updater</button>
            <h2>Count: {count}</h2>
            {/* <h2>Count: {count2}</h2> */}
            <h3>Location: New delhi</h3>
            <h4>Contact info : @chopra_shreya03</h4>
        </div>
    );
};

export default User;