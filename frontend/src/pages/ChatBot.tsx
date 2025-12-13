import chatBotProfile from "../assets/chat-bot-profile.png";

import { useEffect, useState } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SendHorizonal } from "lucide-react";

import { sendMessageToChatBot } from "../api/chatBotComms";

interface User_Message {
  sender: string;
  content: string;
  timestamp: Date;
}

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");

  const [msgLoading, setmsgLoading] = useState(false);
  const [userMessages, setUserMessages] = useState<User_Message[]>([]);

  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      setUserMessages(JSON.parse(storedMessages));
    }
  }, []);

  useGSAP(() => {
    gsap.to("#chatButton", {
      y: -50,
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  });

  const handleChatButtonClick = () => {
    let tl1 = gsap.timeline();

    tl1
      .to("#chatButton", {
        duration: 0.5,
        opacity: 0,
        // y: -100,
        ease: "back.in",
      })
      .fromTo(
        "#chatDialog",
        {
          opacity: 0,
          x: 100,
          display: "none",
        },
        {
          duration: 0.8,
          opacity: 1,
          x: 0,
          display: "block",
          ease: "back.out",
        },
        "0.8"
      );
  };

  const chatDialogCloseClick = () => {
    let tl2 = gsap.timeline();

    tl2
      .to("#chatDialog", {
        duration: 0.6,
        opacity: 0,
        display: "none",
        x: 100,
        ease: "back.in",
      })
      .to(
        "#chatButton",
        {
          duration: 0.5,
          opacity: 1,
          // y: 0,
          ease: "back.out",
        },
        "0.8"
      );
  };

  const sendMessage = async (message: string) => {
    setUserMessage("");

    setUserMessages((prevMessages) => [
      ...prevMessages,
      { sender: "User", content: message, timestamp: new Date() },
    ]);

    try {
      setmsgLoading(true);

      const responseMessage = await sendMessageToChatBot(message);

      setUserMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Bot Adi", content: responseMessage, timestamp: new Date() },
      ]);
    } catch (error) {
      console.error("Error sending message to chatbot API:", error);
    } finally {
      setmsgLoading(false);

      localStorage.setItem("chatMessages", JSON.stringify(userMessages));
    }
  };

  const chatButtonClass =
    "w-22 h-22 md:w-25 md:h-25 z-20 border border-gray-300 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:shadow-gray-500 transition duration-300";

  const chatDialogClass =
    "hidden w-70 h-80 md:w-110 bg-white border border-gray-300 rounded-lg shadow-lg shadow-gray-400";

  return (
    <div className="fixed bottom-4 right-4 z-20">
      <img
        id="chatButton"
        src={chatBotProfile}
        className={chatButtonClass}
        onClick={handleChatButtonClick}
        alt="Bot Adi"
      />

      <div id="chatDialog" className={chatDialogClass}>
        <div className="flex flex-col space-y-2 p-4 h-full">
          <div className="flex items-center justify-between">
            <h1 className="text-sm md:text-lg font-signature">
              Hey👋!! It's me, Aditya!
            </h1>
            <button
              className="text-gray-500 hover:text-gray-800 transition duration-300 text-xl mb-2"
              onClick={chatDialogCloseClick}
              title="Close"
            >
              &times;
            </button>
          </div>

          <div className="flex-5">
            <div className="overflow-y-auto h-45 p-2">
              {userMessages.length === 0 && (
                <>
                  <div className="text-gray-500 text-sm italic">
                    No messages yet.
                  </div>
                  <div className="text-gray-500 text-sm italic">
                    Type a message to start the chat.
                  </div>
                  <div className="text-gray-500 text-sm italic">
                    I'm here to help!
                  </div>
                </>
              )}
              {userMessages.length > 0 &&
                userMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={
                      msg.sender === "User"
                        ? "flex justify-end"
                        : "flex justify-start"
                    }
                  >
                    <div
                      className={
                        msg.sender === "User"
                          ? "w-auto mb-4 p-2 rounded-lg bg-gray-200 text-black"
                          : "w-auto mb-4 p-2 rounded-lg bg-gray-500 text-white"
                      }
                    >
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                ))}
              {msgLoading && (
                <div className="flex justify-start">
                  <div className="w-auto mb-4 p-2 rounded-lg bg-gray-500 text-white">
                    <p className="text-sm italic">Aditya is typing...</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-1 flex-row gap-1">
            <input
              type="text"
              className={
                "w-full p-2 border border-gray-300 rounded-lg " +
                (msgLoading ? "opacity-60 cursor-not-allowed" : "")
              }
              disabled={msgLoading}
              aria-disabled={msgLoading}
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && userMessage.trim() !== "") {
                  sendMessage(userMessage);
                }
              }}
            />
            <button
              className={
                "bg-black p-2 rounded-lg transition duration-300 " +
                (msgLoading
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-gray-700")
              }
              title="Send"
              onClick={() => {
                if (msgLoading) return;
                if (userMessage.trim() !== "") {
                  sendMessage(userMessage);
                }
              }}
              disabled={msgLoading || userMessage.trim() === ""}
            >
              <SendHorizonal className="h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
