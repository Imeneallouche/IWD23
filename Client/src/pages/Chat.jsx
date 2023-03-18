import SideBar from "../components/Chat/SideBar";
import ChatBot from "../components/Chat/ChatBot";

const Chat = () => {
  return (
    <main className="bg-[EDF0F9] h-screen w-full overflow-y-hidden">
      <SideBar />
      <ChatBot />
    </main>
  );
}


export default Chat