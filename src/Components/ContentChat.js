import React from 'react';
import './../css/contentChat.css';
import TextField from '@material-ui/core/TextField';

const ContentChat = () => {

    return (
        <div className="chat-card">
            <h2>Чат пользователей</h2>
            <div className='chat-card-posts'>
                <ChatPost />
                <ChatPost />
                <ChatPost />
                <ChatPost />
                <ChatPost />
                <ChatPost />
                <ChatPost />
                <ChatPost />
                <ChatPost />
                <ChatPost />
            </div>
            <TextField id="outlined-basic" label="Введите сообщение" variant="outlined" style={{ width: '100%', height: '20px' }} />

        </div>
    )
}

const ChatPost = () => {

    return (
        <div className="chat-card-post">
            <div className="chat-card-post-text">
                <div className="chat-card-post-time">15:32</div>
                <div className="chat-card-post-avatar-flex">
                    <div className="chat-card-post-avatar"></div>
                    <div className="chat-card-post-users">
                        Продам коньки 8-929-555-92-22. Звонить с 10.00 до 20.00.
                        В другое время не беспокоить. Не знакомлюсь, идите в жопу.
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ContentChat;
