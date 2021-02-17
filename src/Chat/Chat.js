import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import "./Chat.css";
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Dance Room</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat_headerInfo">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p>
                    <span className="chat_name">Mauli</span>
                    This is a message
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>
        </div>
    )
}

export default Chat;
