"use client";
import { useDarkMode } from "@/app/hooks/useDarkMode";

const MessageCard = ({ email, messages }) => {

  const { isDarkMode } = useDarkMode();

  if (!email || !Array.isArray(messages)) {
    return <div className='text-gray-700 flex justify-center items-center'>No hay datos disponibles</div>;
  }

  const recentMessages = messages.slice(0, 3);

  return (
    <div className={`p-4 border-2 rounded-2xl shadow-md w-full bg-gray-700 text-white ${isDarkMode ? "border-orange-600" : "border-blue-600"}`}>
      <h2 className={`text-lg font-semibold ${isDarkMode ? "text-orange-600" : "text-blue-600"}`}>{email}</h2>
      <ul>
        {recentMessages.map((message, index) => (
          <li key={index} className='py-2 border-b border-gray-200 flex flex-col'>
            <p className='text-md'>{message.text}</p>
            <small className='text-sm text-gray-400'>{new Date(message.timestamp).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}; export default MessageCard;
