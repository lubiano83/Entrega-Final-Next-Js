import React from 'react';
import EmailCard from './EmailCard';

const EmailList = async ({ email }) => {

  function decodeEmail(encodedEmail) {
    return encodedEmail.replace(/%40/g, "@");
  }

  const newEmail = decodeEmail(email)
  console.log(email);
  
  const items = await fetch(`http:localhost:3000/api/contact/${newEmail}`, {cache: "no-store"}).then(res => res.json());
  
  const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <div className='w-full'>
      {
        itemsArray.map(item => (
          <EmailCard key={item.email} {...item} />
        ))
      }
    </div>
  )
}; export default EmailList;