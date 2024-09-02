"use client";
import { useDarkMode } from "@/app/hooks/useDarkMode";
import SvgImage from "../../SvgImage";
import Link from "next/link";

const MessageCard = ({ email, messages }) => {

  const { isDarkMode } = useDarkMode();

  if (!email || !Array.isArray(messages)) {
    return <div className='text-gray-700 flex justify-center items-center'>No hay datos disponibles</div>;
  }

  const recentMessages = messages.slice(0, 1);

  function encodeEmail(email) {
    return email.replace(/@/g, "%40");
  }

  const newEmail = encodeEmail(email)

  return (
    <div className={`p-2 border-2 flex justify-between items-center gap-8 px-8 rounded-2xl shadow-md w-full bg-gray-700 text-white ${isDarkMode ? "border-orange-600" : "border-blue-600"}`}>
      <div className="text-left">
      <h2 className={`text-lg font-semibold ${isDarkMode ? "text-orange-600" : "text-blue-600"}`}>{email}:</h2>
      <ul>
        {recentMessages.map((message, index) => (
          <li key={index} className='flex flex-col'>
            <p className='text-md'>{message.text}</p>
            <small className='text-sm text-gray-400'>{new Date(message.timestamp).toLocaleString()}</small>
          </li>
        ))}
      </ul>
      </div>
      <Link href={`/pages/admin/messages/${newEmail}`}>
        <SvgImage src={"/plus-svgrepo-com.svg"}/>
      </Link>
    </div>
  );
}; export default MessageCard;
