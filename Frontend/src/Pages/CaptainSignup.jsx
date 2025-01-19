import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../Context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {

  const navigate = useNavigate();

   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const { captain, setCaptain } = React.useContext(CaptainDataContext);

    const submitHandler = async (e) => {
      e.preventDefault();
  
      const captainData = {
        fullname: {
          firstname: firstName,
          lastname: lastName
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capasity: vehicleCapacity,
          vehicleType: vehicleType
        }
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

      if(response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
  
        navigate('/captain-home');
      }
  
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setVehicleColor('');
      setVehiclePlate('');
      setVehicleCapacity('');
      setVehicleType('');
  
    }
  

  return (
    <div className="p-7 flex flex-col justify-between h-screen ">
    <div>
      <img
        src="/uber-logo.png"
        alt=""
        className="w-28 ml-[-20px] mt-[-20px]"
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

        <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
        <div className="flex gap-4">
          <select
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            required
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="" disabled>Vehicle Type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="moto">Moto</option>
          </select>
          <input
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            required
            type="number"
            placeholder="Vehicle Capacity"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            />
        </div>
        <div className="flex gap-4 mb-7">
            <input
              className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              required
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              />
            <input
              className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              required
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              />
        </div>


        <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign up as Captain
        </button>
      </form>
      <p className="text-center mb-3">
      Have an account?
        <Link to={"/captain-login"} className="text-[#026ae9]">
          Login here
        </Link>
      </p>
    </div>
    <div>
      <Link to={'/singup'} className="bg-[#38c11f] text-white flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
      Sign up as User
      </Link>
    </div>
  </div>
  )
}

export default CaptainSignup