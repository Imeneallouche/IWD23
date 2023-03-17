import chat from '../../assets/imgs/chat.svg'
import doctor from '../../assets/imgs/doctor.svg'
import track from '../../assets/imgs/track.svg'
import mental from '../../assets/imgs/mental.svg'
import king from '../../assets/imgs/king.svg'

const Benefits = () => {
  return (
    <section className="bg-[#202135] py-2">
      <div className="w-[90%] mx-auto text-center py-14">
        <h1 className="text-[#5A5C81] text-2xl">BENEFITS</h1>
        <h2 className="text-3xl text-white py-7 capitalize md:text-4xl">
          Improve your well being in weeks
        </h2>
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-x-[200px] py-5 gap-y-10">
          <div>
            <img
              className="mx-auto max-w-[100%] py-10 md:py-2"
              src={chat}
              alt="doctor"
            />
            <h3 className="text-white text-xl font-bold py-2 md:py-4 ">
              Chatbot Therapy
            </h3>
            <p className="text-white text-lg md:w-[50%] md:mx-auto">
              mindfulness techniques, and motivational interviewing
            </p>
          </div>
          <div className="py-5">
            <img
              className="mx-auto max-w-[100%] py-10"
              src={mental}
              alt="doctor"
            />
            <h3 className="text-white text-lg font-bold py-2 md:py-4">
              Customized mental health plans
            </h3>

            <p className="text-white text-lg">
              provide customized mental health plans
            </p>
          </div>
          <div className="py-5">
            <img
              className="mx-auto max-w-[100%] py-10"
              src={track}
              alt="doctor"
            />
            <h3 className="text-white text-xl font-bold py-2 md:py-4">
              Progress Tracking
            </h3>

            <p className="text-white text-lg md:w-[80%] mx-auto">
              tracking symptoms, setting goals, and monitoring progress
            </p>
          </div>
          <div className="py-5">
            <div className="flex items-center gap-x-5 justify-center">
              <img src={king} alt="king" />
              <h3 className="text-xl font-bold text-[#FFD700]">Premuim</h3>
            </div>
            <img
              className="mx-auto max-w-[100%] pt-5 pb-10"
              src={doctor}
              alt="doctor"
            />
            <h3 className="text-white text-xl font-bold py-2 md:py-4">
              Connection to licensed therapists
            </h3>

            <p className="text-white text-xl md:w-[80%] md:mx-auto">
              connects users with licensed therapists for more in-depth
              counseling sessions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits