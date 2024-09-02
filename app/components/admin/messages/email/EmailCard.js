"use client";
import { useDarkMode } from "@/app/hooks/useDarkMode";

const EmailCard = ({ email, messages }) => {
  const { isDarkMode } = useDarkMode();

  if (!email || !Array.isArray(messages)) {
    return <div className='text-gray-700 flex justify-center items-center'>No hay datos disponibles</div>;
  }

  return (
    <div className={`py-2 border-2 flex flex-col justify-center items-start px-8 rounded-2xl shadow-md w-full bg-gray-700 text-white ${isDarkMode ? "border-orange-600" : "border-blue-600"}`}>
      <h2 className={`text-lg font-semibold ${isDarkMode ? "text-orange-600" : "text-blue-600"}`}>{email}:</h2>
      <ul className="w-full text-left">
        {messages.map((message, index) => (
            <li key={index} className='flex flex-col'>
              <p className='text-md'>{message.text}</p>
              <small className='text-sm text-gray-400'>{new Date(message.timestamp).toLocaleString()}</small>
            </li>
        ))}
      </ul>
    </div>
  );
}; export default EmailCard;
