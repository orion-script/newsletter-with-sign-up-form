import React from 'react'
import Succ from "../assets/icon-success.svg"
import { useNavigate } from "react-router-dom";

function Success() {
    const navigate = useNavigate();

    const HandleClick = () => {
        navigate("/")
        console.log("Dissmissed")
    }
  return (
    <div className="bg-white text-[#222741] md:w-2/5 h-screen md:h-[30rem] md:m-auto md:rounded-xl flex flex-col justify-between">
      <div className="w-10/12 m-auto mt-20 md:mt-8">
        <img src={Succ} alt="success icon" className='w-20 h-20' />

        <h2 className='font-extrabold text-5xl mt-8'>Thanks for subscribing!</h2>

        <p className='mt-6'>A confirmation mail has been sent to <span className='font-bold'>example@gmail.com</span>. Please open it and click button to confirm your subscription.</p>
      </div>

      <button onClick={HandleClick} type="submit" className="bg-[#232742] text-white h-10 rounded-lg w-4/5 m-auto ">Dissmiss message</button>
    </div>
  )
}

export default Success