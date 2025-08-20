// "use client";

// import React from "react";
// import Logo from "../../../assets/Logo.png";
// import Image from "next/image";

// // Reuse the Chat type for consistency
// interface Chat {
//   role: "user" | "model";
//   text: string;
// }

// interface ChatMessageProps {
//   chat: Chat;
// }

// const ChatMessage: React.FC<ChatMessageProps> = ({ chat }) => {
//   return (
//     <div className={`message ${chat.role === "model" ? "bot" : "user"}-message`}>
//       {chat.role === "model" && (
//         <div className="logo-image">
//           <Image
//             src={Logo}
//             alt="Daftar Route"
//             className="phone-image"
            
//           />
//         </div>
//       )}
//       <p className="message-text">{chat.text}</p>
//     </div>
//   );
// };

// export default ChatMessage;

import React from "react";
 import Logo from "../../../public//assets/chatbot/message.png";
import Image from "next/image";

// Reuse the Chat type for consistency
interface Chat {
  role: "user" | "model";
  text: string;
}

interface ChatMessageProps {
  chat: Chat;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ chat }) => {
  return (
    <div className={`message ${chat.role === "model" ? "bot" : "user"}-message`}>
      {chat.role === "model" && (
        <div className="logo-image">
          <Image src={Logo} alt="Daftar Route" className="phone-image" style={{ width: "35px", height: "35px", filter: "invert(100)", display: "flex", alignItems: "center", justifyContent: "center" }} />
        </div>
      )}
      <p className="message-text">{chat.text}</p>
    </div>
  );
};

export default ChatMessage;
