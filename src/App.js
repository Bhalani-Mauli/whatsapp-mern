import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat/Chat';
import Sidebar from './Sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then(Response => {
      setMessages(Response.data)
    });
  },[])

  useEffect(() => {
    const pusher = new Pusher('e531c08d3296ecd29807', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app_body">
      <Sidebar />
      <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
