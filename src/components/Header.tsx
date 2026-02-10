// This is how we write a 'named import'
import {LOGO_URL} from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState('Login');
  // console.log('header rendered');

  const onlineStatus = useOnlineStatus();

  // vvvv imp interview ques :
  // if no dependency array => useEffect is called on every component render 
  // if dependency array is empty [] => useEffect is called on initial render (just once)
  // if dependency array is {btnNameReact} => called everytime btnNameReact is updated
  
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="flex justify-between bg-orange-100 shadow-lg m-2">
      <div className="logo-container">
         <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online status : {onlineStatus ? "✅" : "🔴"} </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
            </li>
          <li className="px-4">Cart</li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">
            <Link to="/contactUs">Contact Us</Link>
          </li>
          
          <button className="login"
            onClick={() => {
              btnNameReact === "Login"
              ? setbtnNameReact('Logout')
              : setbtnNameReact('Login');
            }}
          >
          {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header;