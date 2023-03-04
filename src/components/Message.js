
import {useEffect, useState} from 'react'

function Message({ size }) {

  const [newSize, setSize] = useState()

  useEffect(()=>{
    console.log('Message', size);
  },[size])

  return (
    <div className="message medium">
      (Oh my! Your bird is naked!)
    </div>
  );
};

export default Message;