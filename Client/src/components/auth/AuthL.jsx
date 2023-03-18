import { Link } from "react-router-dom";
const AuthR = () => {
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
        <form className="md:py-[40px]">
          <input
            className="w-[90%]  h-[50px] md:h-[48px] rounded-md px-4"
            type="text"
            placeholder="Enter Your Username"
          />
          <input
            className="w-[90%]  h-[50px] md:h-[48px] rounded-md px-4 my-9"
            type="password"
            placeholder="Enter Your Password"
          />
          <div className="flex items-center justify-between w-[90%] mx-auto">
            <div>
              <input className="" type="checkbox" />
              <label className="px-5 text-white text-[12px]" htmlFor="">
                Remember me
              </label>
            </div>
            <h3 className="text-[#B8A8D7] font-bold md:text-lg">
              Forgot password
            </h3>
          </div>
          <div className="my-[70px]">
            <Link to="/chat">
              <button
                className="px-20 md:px-32 py-2 rounded-md bg-[#7A86FF] text-lg text-white "
                type="submit"
              >
                Log in
              </button>
            </Link>
            <h4 className="text-[#D9CECE] text-lg py-4">
              Don't have an account,
              <Link to="/register">
                <span className="text-[#7A86FF]">Sign Up</span>
              </Link>
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthR;
