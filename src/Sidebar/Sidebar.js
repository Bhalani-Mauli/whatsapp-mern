import { DonutLargeOutlined } from '@material-ui/icons';
import React from 'react';
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadUZ39RoUtDTV9INEo1Nkn3Ls3XfKfFMTJw&usqp=CAU" />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeOutlined />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
