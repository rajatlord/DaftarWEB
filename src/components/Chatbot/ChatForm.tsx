  "use client";

  // import { useRef } from "react";
  // import type { FormEvent } from "react";


  // // Reuse the same Chat type as in ChatBot
  // interface Chat {
  //   role: "user" | "model";
  //   text: string;
  // }

  // interface ChatFormProps {
  //   chatHistory: Chat[];
  //   setChatHistory: React.Dispatch<React.SetStateAction<Chat[]>>;
  //   generateBotResponse: (history: Chat[]) => Promise<void>;
  // }

  // const ChatForm: React.FC<ChatFormProps> = ({
  //   chatHistory,
  //   setChatHistory,
  //   generateBotResponse,
  // }) => {
  //   const inputRef = useRef<HTMLInputElement | null>(null);

  //   const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     const userMessage = inputRef.current?.value.trim();
  //     if (!userMessage) return;

  //     console.log(userMessage);

  //     // Clear input after submit
  //     if (inputRef.current) inputRef.current.value = "";

  //     // Add user message to history
  //     setChatHistory((history) => [
  //       ...history,
  //       { role: "user", text: userMessage },
  //     ]);

  //     // Simulate thinking delay
  //     setTimeout(() => {
  //       setChatHistory((history) => [
  //         ...history,
  //         { role: "model", text: "Thinking...." },
  //       ]);

  //       // Generate bot response
  //       generateBotResponse([
  //         ...chatHistory,
  //         { role: "user", text: userMessage },
  //       ]);
  //     }, 600);
  //   };

  //   return (
  //     <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
  //       <input
  //         ref={inputRef}
  //         type="text"
  //         placeholder="Message..."
  //         className="message-input"
  //         required
  //       />
  //       <button type="submit" className="material-symbols-rounded">
  //         ⬆
  //       </button>
  //     </form>
  //   );
  // };

  // export default ChatForm;
  import { useRef } from "react";
  import type { FormEvent } from "react";


  // Reuse the same Chat type as in ChatBot
  interface Chat {
    role: "user" | "model";
    text: string;
  }

  interface ChatFormProps {
    chatHistory: Chat[];
    setChatHistory: React.Dispatch<React.SetStateAction<Chat[]>>;
    generateBotResponse: (history: Chat[]) => Promise<void>;
  }

  const ChatForm: React.FC<ChatFormProps> = ({
    chatHistory,
    setChatHistory,
    generateBotResponse,
  }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const userMessage = inputRef.current?.value.trim();
      if (!userMessage) return;

      console.log(userMessage);

      // Clear input after submit
      if (inputRef.current) inputRef.current.value = "";

      // Add user message to history
      setChatHistory((history) => [
        ...history,
        { role: "user", text: userMessage },
      ]);

      // Simulate thinking delay
      setTimeout(() => {
        setChatHistory((history) => [
          ...history,
          { role: "model", text: "Thinking...." },
        ]);

        // Generate bot response
        generateBotResponse([
          ...chatHistory,
          { role: "user", text: userMessage },
        ]);
      }, 600);
    };

    return (
      <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Message..."
          className="message-input"
          required
        />
        <button type="submit" className="material-symbols-rounded">
          ⬆
        </button>
      </form>
    );
  };

  export default ChatForm;
