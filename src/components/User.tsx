import { useState, useEffect } from "react";
 
type UserProps = {
    name: string;
}
 
const User= ({name}: UserProps) => {
    const [count, setCount] =  useState<number>(0);

    useEffect(() => {
        // API CALL
        const timer = setInterval(() => {
            console.log("namaste react op");
        }, 1000);
        console.log("useEffect");

        // this is the unmounting phase of useEffect 
        return () => {
            clearInterval(timer);
            console.log("useEffect Return");
        };
    }, []);

    console.log("render");

    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <button
            onClick={() => {setCount(count + 1);
            }}
            >Count Updater</button>
            <h2>Count: {count}</h2>
            <h3>Location: New delhi</h3>
            <h4>Contact info : @chopra_shreya03</h4>
        </div>
    );
};

export default User;