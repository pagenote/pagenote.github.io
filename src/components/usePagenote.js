import React, { useState, useEffect } from 'react';

function Pagenote() {
  const [pagenote,setPagenote] = useState({
    version:'',
    browser:'',
  })
  useEffect(() => {
    // function handleStatusChange(status) {
    //   setIsOnline(status.isOnline);
    // }
    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // return () => {
    //   ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    // };
    const version = document.documentElement.dataset.version;
    pagenote.version = version;
    setPagenote({
      version
    })
  },[]);

  return pagenote
}

export default Pagenote;
