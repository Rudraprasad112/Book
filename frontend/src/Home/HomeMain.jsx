import React, { useState } from "react";
import httpStatus from "http-status";
import axios from "axios"
import {useNavigate} from 'react-router-dom'
//import DashbordMain from "../Dashbord/DashbordMain";
function HomeMain() {
  const  navigate = useNavigate();
  const[userName,Setusername] = useState("");
  const [mail, SetMail] = useState("");
  const [password, Setpassword] = useState("");
  const [message,Setmaeesge] = useState("");
  const [error,Seterror] = useState("");
  const [from, Setfrom] = useState(true); 

  const HandleSubmit = async (e) => {
    e.preventDefault();

    
    if(from){

      const logintoServer = async (e) => {

        let res = await axios.post("http://localhost:801/main/login", {
              mailid: mail,
              password: password
          })
          console.log(res.data);

           
          
          if(res.data == "OK"){
            navigate("/dashbord")
           Setmaeesge("login sucessfull")
            
          }else{
            Seterror("Enter valid mail id and password")
          }
          
      }
      logintoServer()

    }else{
      const register = async () => {
       let res =  await axios.post("http://localhost:801/main/register", {
            username: userName,
            mailid: mail,
            password: password
        })
        console.log(res.message);
        
    }
    register();
    }
    SetMail("");
    Setpassword("");
  };

  const HandleLogin = (e) => {

    e.preventDefault();

    Setfrom(true);

  }
  const HandleRegister = (e) => {

    e.preventDefault();
    Setfrom(false);


  }
  return (
    <div className="main  flex flex-col h-screen justify-center items-center">
      <form
        className="signpage   p-14 md:w-80 h-3/5 gap-10  border-2 border-black-400 shadow-2xl shadow-gray-200 rounded-xl"
        onSubmit={HandleSubmit}
      >
        <div className="w-12/12  py-2 sm:py-3 flex justify-around mt-5">
          <button
            className="px-2    hover:text-orange-500 "
            onClick={HandleLogin}
          >
            Login
          </button>
          <h1>|</h1>
          <button
            className="px-2   hover:text-orange-500"
            onClick={HandleRegister}
          >
            Register
          </button>
        </div>
        {from ? (
          <div className="flex flex-col justify-center gap-y-5 mt-5 ">
            <input
              type="mail"
              placeholder="Enter Your Mailid "
              className="w-full border-solid border-2 border-gray-500 h-8 md:text-sm text-xs px-3 rounded-lg"
              value={mail}
              onChange={(e) => SetMail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full border-solid border-2 border-gray-500 h-8 md:text-sm text-xs  rounded-lg px-1"
              value={password}
              onChange={(e) => Setpassword(e.target.value)}
            />
            <h1 className="text-green-500 text-sm font-thin">
              {message}
              {error}
            </h1>
            <button className="bg-orange-400 rounded-lg text-white py-3">
              {from ? "Login" : "Register"}
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center gap-y-5 mt-5 ">
            <input
              type="text"
              placeholder="Enter Your username "
              className="w-full border-solid border-2 border-gray-500 h-8 md:text-sm text-xs px-3 rounded-lg"
              value={userName}
              onChange={(e) => Setusername(e.target.value)}
            />
            <input
              type="mail"
              placeholder="Enter Your mailid "
              className="w-full border-solid border-2 border-gray-500 h-8 md:text-sm text-xs px-3 rounded-lg"
              value={mail}
              onChange={(e) => SetMail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full border-solid border-2 border-gray-500 h-8 md:text-sm text-xs  rounded-lg px-1"
              value={password}
              onChange={(e) => Setpassword(e.target.value)}
            />
            <h1 className="text-green-500 text-sm font-thin">{message}</h1>
            <button className="bg-orange-400 rounded-lg text-white py-3"type="submit">
              {from ? "Login" : "Register"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default HomeMain;
