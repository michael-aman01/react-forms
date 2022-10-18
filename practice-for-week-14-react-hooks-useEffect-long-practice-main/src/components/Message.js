import { useEffect, useState } from 'react'

function Message({ size, featherCount }) {


  useEffect(() => {
   
    //let messageTag = document.getElementById(`message ${size}`)
    console.log('Message', size);

  }, [size])

  return (
    <div className={`message ${size}`}>
      Your turkey have {featherCount} feathers
    </div>
  );
};

export default Message;