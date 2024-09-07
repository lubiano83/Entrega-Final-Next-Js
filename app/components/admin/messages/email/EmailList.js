import React from 'react';
import EmailCard from './EmailCard';

const EmailList = async ({ email }) => {

  const baseURL = process.env.NEXT_PUBLIC_FIREBASE_API_URL;

  try {
    function decodeEmail(encodedEmail) {
      return encodedEmail.replace(/%40/g, "@");
    }
  
    const newEmail = decodeEmail(email)
    console.log(email);
    
    const items = await fetch(`${baseURL}/contact/${newEmail}`, {cache: "no-store"}).then(res => res.json());
    
    const itemsArray = Array.isArray(items) ? items : [items];
  
    return (
      <div className='w-full h-full'>
        {
          itemsArray.map(item => (
            <EmailCard key={item.email} {...item} />
          ))
        }
      </div>
    )
  } catch (error) {
    console.log(error.message);
  }
}; export default EmailList;