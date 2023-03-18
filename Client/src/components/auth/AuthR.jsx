import { Link } from "react-router-dom";
import { useState } from "react";
import { required } from 'react-admin'

const AuthR = () => {
  const  [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [therapies, setTherapies] = useState(false)
  const [patient, setPatient] = useState(false);


  const onSumbit = () => {
    e.preventDefault
  }
  const signUp = () => {
    let item = [username, password, therapies, patient];
    console.log(item);
  }
  return (
    <div className="w-[90%] mx-auto text-center py-[120px] md:py-[90px] ">
      <div className=" md:w-[80%] md:mx-auto">
        <div className="">
          <h1 className="text-white font-bold text-3xl md:text-4xl">
            MindScape
          </h1>
          <h2 className="text-[#A8A6A6] py-2 md:text-xl">
            Welcome! Please enter your details.
          </h2>
        </div>
        <div className="py-[30px] md:py-[40px]">
          <input
            className=""
            name="therapist"
            type="radio"
            id="therapist"
            value={therapies}
            onChange={(e) => setTherapies(e.target.value)}
            validate={[required()]}
          />
          <label
            className="myLabel px-4 py-2 text-xl text-white font-bold"
            htmlFor="#therapist"
          >
            Therapist
          </label>
          <input
            className=""
            type="radio"
            id="need_help"
            name="therapist"
            onChange={(e) => setPatient(e.target.value)}
            value={patient}
            validate={[required()]}
          />
          <label
            className="myLabel px-4 py-2 text-xl text-white font-bold"
            htmlFor="#need_help"
          >
            need help
          </label>
        </div>
        <form className="md:py-[40px]">
          <input
            className="w-[90%]  h-[50px] md:h-[48px] rounded-md px-4"
            type="text"
            placeholder="Enter Your Username"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            validate={[required()]}
          />
          <input
            className="w-[90%]  h-[50px] md:h-[48px] rounded-md px-4 my-9"
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            validate={[required()]}
          />
          <Link to="/login">
            <button
              className="md:my-[40px] px-20 md:px-32 py-2 rounded-md bg-[#7A86FF] text-lg text-white"
              type="submit"
              onClick={signUp}
            >
              Sign Up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AuthR;
