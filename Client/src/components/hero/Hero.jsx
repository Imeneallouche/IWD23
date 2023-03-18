const Hero = () => {

  return (
    <section className="heroBg heroBgDesktop overflow-hidden h-screen">
      <div className="w-[90%] md:w-[87%] py-[130px] md:py-[210px] max-sm:text-center text-white mx-auto">
        <div className="md:w-[44%] md:mx-auto">
          <h1 className="text-2xl font-bold md:text-4xl">
            Be Better.Feel Better
          </h1>
          <p className="py-5 w-[91%] mx-auto md:hidden text-[14px]">
            our mission is simple help you feel better, get better and stay
            better we bring together self-care, proffessional support, and
            community access to deliver the best quality mental healthcare for
            your needs
          </p>
          <p className="max-sm:hidden ">
            our mission is simple help you feel better, get better and stay
            better
          </p>
          <p className="max-sm:hidden font-bold py-10 text-[14px] ">
            we bring together self-care, proffessional support, and community
            access to deliver the best quality mental healthcare for your needs
          </p>
          <div className="py-7 md:py-0 md:flex  md:items-center md:gap-x-5 ">
            <button className="bg-[#5665FB] px-4 py-2 rounded-md order-2 md:md:hover:bg-[#3848f7] md:hover:duration-300">
              <a className="font-bold" href="#">
                Try For Free
              </a>
            </button>
            <div className="py-7 md:py-0">
              <button className="px-6 py-2 rounded-md border-2 border-solid border-white order-1 md:hover:bg-white md:hover:text-[#202135] md:hover:transition-all md:hover:duration-300 md:duration-300">
                <a className="font-bold" href="#">
                  Get Started
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero