import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { CaptainDataContext } from "../Context/CaptainContext.jsx";

const CaptainLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {  captain, setCaptain } = React.useContext(CaptainDataContext);

    const navigate = useNavigate();
  
    const submitHandler = async (e) => {
      e.preventDefault();
  
      const captain = {
        email: email,
        password: password,
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

      if(response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', response.data.token);

        navigate('/captain-home');
        
      }
     
      setEmail('');
      setPassword('');
    }

  return (
    <div className="p-7 flex flex-col justify-between h-screen ">
      <div>
        <img
          src="/uber-logo.png"
          alt=""
          className="w-28 ml-[-20px] mt-[-20px] mb-10"
        />
        <form onSubmit={ (e) => submitHandler(e) }>
          <h3 className="text-lg font-medium mb-2">What's your Email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="enter your Email"
          />
          <h3 className="text-lg font-medium mb-2">Enter your Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="password"
            placeholder="enter your Password"
          />
          <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login as Captain
          </button>
        </form>
        <p className="text-center">
          New to Uber?{" "}
          <Link to={"/captain-signup"} className="text-[#026ae9]">
            Create new account
          </Link>
        </p>
      </div>
      <div>
        <Link to={'/login'} className="bg-[#38c11f] text-white flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Login as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin