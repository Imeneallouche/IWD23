import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="text-center md:text-left py-6 md:grid md:grid-cols-4  md:w-[90%] md:mx-auto md:justify-center">
        <h2 className="text-black text-2xl font-bold">MindScape</h2>
        <div className="py-7">
          <h3 className="text-black text-xl ">About</h3>
          <h3 className="text-black text-xl py-4">Services</h3>
          <h3 className="text-black text-xl ">Testmonials</h3>
          <h3 className="text-black text-xl py-4">Contacts</h3>
        </div>
        <div>
          <h3 className="text-black text-xl py-4">Sign up</h3>
          <h3 className="text-black text-xl ">Log in</h3>
          <h3 className="text-black text-xl py-4">Therapists</h3>
        </div>
        <div>
          <h3 className="text-lg capitalize font-bold">
            Subscribe to Our news letter
          </h3>
          <div className=" text-center ">
            <input
              className="w-[300px] h-[50px]  rounded-md px-5 border-2 border-solid border-gray-500 mx-[12px] "
              type="email"
              placeholder="Please Enter Your Email"
            />
            <div className='max:sm:w-[90%] max-sm:mx-[45%] py-4 '>
              <button className="bg-[#5665FB] py-4 px-5 rounded-md text-white font-bold text-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center">Copyright reserved © Cod3 R4ider$ IWD’23</h1>
    </footer>
  );
}

export default Footer