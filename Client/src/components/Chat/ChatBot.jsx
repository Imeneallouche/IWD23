import Message from "./Message";
import profile from "../../assets/imgs/profile.png";
import send from "../../assets/imgs/send.png";

const ChatBot = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto bg-[#EDF0F9] h-[86%] my-[15px] rounded-md py-10 px-2">
        <div className="w-full">
          <Message
            side="left"
            message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <Message side="right" message="loreeem ffffffff " />
          <Message side="right" message="Lorem Ipsum is simply dummy text " />
          <Message
            side="left"
            message="Lorem Ipsum is simply dummy text of the printing "
          />
          <Message
            side="left"
            message="Lorem Ipsum is simply dummy text of the printing  "
          />
          <Message side="right" message="Lorem Ipsum is simply dummy text" />
        </div>
        <div className="flex items-center gap-x-4 md:my-[160px] justify-center">
          <input
            className="my-2 h-[40px] rounded-md px-5 w-[90%]"
            type="text"
            placeholder="Message"
          />
          <img className="w-[25px]" src={send} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
