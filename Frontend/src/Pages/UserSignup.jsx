import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserDataContext } from "../Context/UserContext.jsx";


const UserSignup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserDataContext);


  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if(response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);

      navigate('/home')
    }


    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');

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
        <h3 className="text-lg font-medium mb-2">What's your Name</h3>
        <div className="flex justify-between gap-2">
          <input
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

        </div>


        <h3 className="text-lg font-medium mb-2">What's your Email</h3>
        <input  
          className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          required
          type="email"
          placeholder="enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3 className="text-lg font-medium mb-2">Enter your Password</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          required
          type="password"
          placeholder="enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign up as User
        </button>
      </form>
      <p className="text-center">
      Have an account?{" "}
        <Link to={"/login"} className="text-[#026ae9]">
          Login here
        </Link>
      </p>
    </div>
    <div>
      <Link to={'/captain-signup'} className="bg-[#38c11f] text-white flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
      Sign up as Captain
      </Link>
    </div>
  </div>
  )
}

export default UserSignup