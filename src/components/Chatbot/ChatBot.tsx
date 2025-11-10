"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Chat.style.css";
import ChatForm from "./ChatForm";
import Logo from "../../../public//assets/chatbot/message.png";
import ChatMessage from "./ChatMessage";
import Image from "next/image";
// icon imports
import messageIcon from "../../../public//assets/chatbot/message.png"
import closeIcon from "../../../public//assets/chatbot/close.png"
import downArrowIcon from "../../../public//assets/chatbot/down-arrow.png"

import ConcernForm from "./ConcernForm";
// // Define the structure for each chat message
// interface Chat {
//   role: "user" | "model";
//   text: string;
// }


// const ChatBot: React.FC = () => {
//   const [chatHistory, setChatHistory] = useState<Chat[]>([]);
//   const [showChatbot, setShowChatbot] = useState<boolean>(false);
//   const chatBodyRef = useRef<HTMLDivElement | null>(null);

//   const generateBotResponse = async (history: Chat[]) => {
//     const updateHistory = (text: string) => {
//       setChatHistory((prev) => [
//         ...prev.filter((msg) => msg.text !== "Thinking...."),
//         { role: "model", text },
//       ]);
//     };

//     const formattedHistory = history.map(({ role, text }) => ({
//       role,
//       parts: [{ text }],
//     }));

//     const requestOptions: RequestInit = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ contents: formattedHistory }),
//     };

//     try {
//       const response = await fetch(
//         process.env.VITE_API_KEY as string,
//         requestOptions
//       );
//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error?.message || "Something went wrong!");
//       }

//       const apiResponseText = data.candidates[0].content.parts[0].text
//         .replace(/\*\*(.*?)\*\*/g, "$1")
//         .trim();

//       updateHistory(apiResponseText);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     if (chatBodyRef.current) {
//       chatBodyRef.current.scrollTo({
//         top: chatBodyRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }, [chatHistory]);

//   return (
//     <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
//       <button
//         id="chatbot-toggler"
//         onClick={() => setShowChatbot((prev) => !prev)}
//       >
//         <span><Image src={messageIcon} alt="chat icon" style={{width:"25px",height:"25px" , filter:"invert(100)",display:"flex", alignItems:"center" , justifyContent:"center"}}/></span>
//         <span><Image src={closeIcon} alt="chat icon" style={{width:"35px",height:"35px" , filter:"invert(100)",display:"flex", alignItems:"center" , justifyContent:"center"}}/></span>
//       </button>

//       <div className="chatbot-popup">
//         {/* Chatbot Header */}
//         <div className="chat-header">
//           <div className="header-info">
//             <div className="logo-image">
//               <Image src={Logo} alt="Daftar Route" className="phone-image" />
//             </div>
//             <h2 className="logo-text">Hi there!!</h2>
//           </div>
//           <button onClick={() => setShowChatbot((prev) => !prev)} style={{display:"flex", justifyContent:"center", alignItems:"center"}}><Image src={downArrowIcon} alt="chat icon" style={{width:"25px",height:"25px" , filter:"invert(100)",display:"flex", alignItems:"center" , justifyContent:"center"}}/></button>
//         </div>

//         {/* Chat Body */}
//         <div ref={chatBodyRef} className="chat-body">
//           <div className="message bot-message">
//             <div className="logo-image">
//               <Image src={Logo} alt="Daftar Route" className="phone-image" />
//             </div>
//             <p className="message-text">HI there</p>
//           </div>

//           {/* Render Chat History */}
//           {chatHistory.map((chat, index) => (
//             <ChatMessage key={index} chat={chat} />
//           ))}
//         </div>

//         {/* Chatbot Footer */}
//         <div className="chat-footer">
//           <ChatForm
//             chatHistory={chatHistory}
//             setChatHistory={setChatHistory}
//             generateBotResponse={generateBotResponse}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatBot;


// Define the structure for each chat message
interface Chat {
  role: "user" | "model";
  text: string;
}

// Bot options
const botOptions = [
  { name: "Terms and Conditions", type: "link", url: "https://example.com/terms" },
  { name: "Privacy Policy", type: "link", url: "https://example.com/privacy" },
  { name: "Refund Policy", type: "link", url: "https://example.com/refund" },
  { name: "Support", type: "support", phone: "+91-9876543210" },
  { name: "Register", type: "register" },
];

// Exit keywords
const exitKeywords = ["thanks", "thank you", "ok", "okay", "no", "nope", "nah"];

const ChatBot: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);
  const [showChatbot, setShowChatbot] = useState<boolean>(false);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  // for concern
  const [showConcernForm, setShowConcernForm] = useState(false);
  const [concernData, setConcernData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  // For registration flow
  const [registerStep, setRegisterStep] = useState<number | null>(null);
  const [registerData, setRegisterData] = useState<{ address?: string; office?: string; days?: string; months?: string }>({});


  useEffect(() => {
  if (registerStep === null && Object.keys(registerData).length > 0) {
    console.log("Registration completed:", registerData);
  }
}, [registerStep, registerData]);

  const askForConcerns = () => {
  setChatHistory(prev => [
    ...prev.filter(msg => msg.text !== "Thinking...."),
    { role: "model", text: "Do you have any other concerns?" }
  ]);
};

const botReply = (message: string) => {
  return `${message} You can fill out this form if you have any other concern.`;
};

  // Main bot brain
  const generateBotResponse = async (history: Chat[]) => {
    const lastMessage = history[history.length - 1].text.trim().toLowerCase();

    // ✅ Exit flow
    // if (exitKeywords.includes(lastMessage)) {
    //   setChatHistory(prev => [
    //     ...prev.filter(msg => msg.text !== "Thinking...."),
    //     { role: "model", text: "Thanks for contacting Daftar Route. Have a nice day! 🌟" }
    //   ]);
    //   return;
    // }
    if (exitKeywords.includes(lastMessage)) {
        setChatHistory(prev => [
    ...prev.filter(msg => msg.text !== "Thinking...."),
    { role: "model", text: "Thanks for contacting Daftar Route. Have a nice day! 🌟" }
  ]);

  // askForConcerns();
  return;
}


    if (lastMessage === "yes" || lastMessage.includes("concern")) {
      setShowConcernForm(true);
      setChatHistory(prev => [
        ...prev.filter(msg => msg.text !== "Thinking...."),
        { role: "model", text: "Please fill out the concern form below:" }
      ]);
      return;
    }

    if (lastMessage === "no") {
  setChatHistory(prev => [
    ...prev.filter(msg => msg.text !== "Thinking...."),
    { role: "model", text: "Thanks for contacting Daftar Route. Have a nice day! 🌟" }
  ]);
  return;
}


    // ✅ Registration flow
    if (registerStep !== null) {
      handleRegisterFlow(lastMessage);
      return;
    }

    // ✅ Check bot options
    const foundOption = botOptions.find(opt =>
      lastMessage.includes(opt.name.toLowerCase().split(" ")[0])
    );

    if (foundOption) {
      if (foundOption.type === "link") {
        setChatHistory(prev => [
          ...prev.filter(msg => msg.text !== "Thinking...."),
          { role: "model", text: `Here’s the link: ${foundOption.url}` }
        ]);
        askForConcerns();
      } else if (foundOption.type === "support") {
        setChatHistory(prev => [
          ...prev.filter(msg => msg.text !== "Thinking...."),
          { role: "model", text: `Please contact us at ${foundOption.phone}` }
        ]);
        askForConcerns();
      } else if (foundOption.type === "register") {
        setRegisterStep(0);
        setChatHistory(prev => [
          ...prev.filter(msg => msg.text !== "Thinking...."),
          { role: "model", text: "Please provide your Home Address:" }
        ]);
        askForConcerns();
      }
      return;
    }

    // fallback
    setChatHistory(prev => [
      ...prev.filter(msg => msg.text !== "Thinking...."),
      { role: "model", text: botReply("Sorry, I didn’t understand. Please choose one of the options.") }
    ]);
     setShowConcernForm(true);
  };

  // Registration step-by-step handling
  const handleRegisterFlow = (message: string) => {
    if (registerStep === 0) {
      setRegisterData(prev => ({ ...prev, address: message }));
      setRegisterStep(1);
      setChatHistory(prev => [...prev, { role: "model", text: "Please provide your Office Address:" }]);
    }
    else if (registerStep === 1) {
      setRegisterData(prev => ({ ...prev, office: message }));
      setRegisterStep(2);
      setChatHistory(prev => [...prev, { role: "model", text: "Number of working days per week (5 or 6):" }]);
    }
    else if (registerStep === 2) {
      if (message !== "5" && message !== "6") {
        setChatHistory(prev => [...prev, { role: "model", text: "❌ Please enter only 5 or 6 working days." }]);
        return;
      }
      setRegisterData(prev => ({ ...prev, days: message }));
      setRegisterStep(3);
      setChatHistory(prev => [...prev, { role: "model", text: "For how many months? (1, 3, 6):" }]);
    }
    else if (registerStep === 3) {
      if (!["1", "3", "6"].includes(message)) {
        setChatHistory(prev => [...prev, { role: "model", text: "❌ Please enter only 1, 3, or 6 months." }]);
        return;
      }
      setRegisterData(prev => ({ ...prev, months: message }));
      setRegisterStep(null);
      setChatHistory(prev => [
        ...prev,
        { role: "model", text: "✅ Registration completed successfully!" },
        // { role: "model", text: "Do you have any other concerns?" }
      ]);
      askForConcerns();
    }
  };

  
  // Auto-scroll on new message
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      <button id="chatbot-toggler" onClick={() => setShowChatbot(prev => !prev)}>
        <span><Image src={messageIcon} alt="chat icon" style={{ width: "25px", height: "25px", filter: "invert(100)", display: "flex", alignItems: "center", justifyContent: "center" }} /></span>
        <span><Image src={closeIcon} alt="chat icon" style={{ width: "35px", height: "35px", filter: "invert(100)", display: "flex", alignItems: "center", justifyContent: "center" }} /></span>
      </button>

      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <div className="logo-image">
              <Image src={Logo} alt="Daftar Route" className="phone-image" style={{ width: "35px", height: "35px", filter: "invert(100)", display: "flex", alignItems: "center", justifyContent: "center" }} />
            </div>
            <h2 className="logo-text">Hi there!!</h2>
          </div>
          <button onClick={() => setShowChatbot(prev => !prev)}>
            <Image src={downArrowIcon} alt="chat icon" style={{ width: "25px", height: "25px", filter: "invert(100)", display: "flex", alignItems: "center", justifyContent: "center" }} />
          </button>
        </div>

        {/* Chat Body */}
        <div ref={chatBodyRef} className="chat-body">
          {/* Initial greeting with options */}
          <div className="message bot-message">
            <div className="logo-image">
              <Image src={Logo} alt="Daftar Route" className="phone-image" style={{ width: "35px", height: "35px", filter: "invert(100)", display: "flex", alignItems: "center", justifyContent: "center" }} />
            </div>
            <div className="message-text">
              <p>Hi there! Please choose an option:</p>
              {botOptions.map((item, i) => (
                <p key={i} style={{ color: "#37ac48", textDecoration: "underline", cursor: "pointer" }}>
                  {item.name}
                </p>
              ))}
            </div>
          </div>

          {/* Render Chat History */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />


          ))}

          {/* Concern Form */}


          {showConcernForm && (
            <ConcernForm
              concernData={concernData}
              setConcernData={setConcernData}
              onSubmit={() => {
                console.log("Submitted Concern Data:", concernData);
                setChatHistory(prev => [
                  ...prev,
                  { role: "model", text: "✅ Thank you! We have received your concern and will contact you shortly." }
                ]);
                setShowConcernForm(false);
              }}
            />
          )}

        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
