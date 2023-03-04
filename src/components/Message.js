
import {useEffect, useState} from 'react'

function Message({ size }) {

  const [newSize, setSize] = useState()

  useEffect(()=>{

    let cname
    console.log('PictureDisplay size', size);
    if(size==='s'){cname='small'}
    if(size==='m'){cname='medium'}
    if(size==='l'){cname='large'}
    if(size==='xl'){cname='xlarge'}
    setSize(cname)

  },[size])

  return (
    <div className={`message ${newSize}`}>
      (Oh my! Your bird is naked!)
    </div>
  );
};

export default Message;