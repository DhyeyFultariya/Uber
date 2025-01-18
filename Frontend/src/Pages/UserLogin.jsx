import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password,
    });
   
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
            Login as User
          </button>
        </form>
        <p className="text-center">
          New to Uber?{" "}
          <Link to={"/singup"} className="text-[#026ae9]">
            Create new account
          </Link>
        </p>
      </div>
      <div>
        <Link to={'/captain-login'} className="bg-[#38c11f] text-white flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Login as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
