import Chat from "./chat";
import {useEffect, useState} from "react";

const Main = () => {
    const [userName, setUserName] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [allMessages, setAllMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');


    useEffect(() => {
        const currentUserFromStorage = sessionStorage.getItem('currentUserData')
        setCurrentUser(JSON.parse(currentUserFromStorage));
        const allMessagesFromStorage = localStorage.getItem('allMessages')
        setAllMessages(JSON.parse(allMessagesFromStorage))
        window.addEventListener('storage', (event) => {
            if (event.storageArea !== localStorage && event.storageArea !== sessionStorage ) return;

            if (event.key === 'allMessages') {
                setAllMessages(JSON.parse(event.newValue));
            }

        });

    }, [])
    const createCurrentUser = () => {
        if (userName) {
            const allUsersFromLocal = JSON.parse(localStorage.getItem('allUsersData'));
            const currentUserFound = allUsersFromLocal ? allUsersFromLocal.find((user => user.name === userName)) : null
            const tempAllUsers = allUsersFromLocal || [];
            let tempCurrentUser;

            if (currentUserFound) {
                tempCurrentUser = currentUserFound
            } else {
                tempCurrentUser = {
                    name: userName,
                    color: getRandomColor()

                }
                tempAllUsers.push(tempCurrentUser);
            }
            window.sessionStorage.setItem("currentUserData", JSON.stringify(tempCurrentUser));
            window.localStorage.setItem("allUsersData", JSON.stringify(tempAllUsers));
        }

    }

    const getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    const sendMessage = () => {
        const newMessage = {
            user: currentUser,
            text: newMessage
        }
        const allMessagesFromLocal = JSON.parse(localStorage.getItem('allMessages'));
        const tempAllMessages =  allMessagesFromLocal || [];

        tempAllMessages.push(newMessage);
        setAllMessages(tempAllMessages);
        setNewMessage('');
        window.localStorage.setItem("allMessages", JSON.stringify(tempAllMessages));
    }


    return(
        <div>
            <h1>Simple Web Chat</h1>

            <div>
                {!currentUser && <div>
                    <label htmlFor="">Enter your username</label>
                    <input className="form-control my-1" onChange={(event) => setUserName(event.target.value)}  type="text"/>
                    <button className="btn btn-primary w-100 my-2" onClick={createCurrentUser} >Login</button>

                </div>}
                {currentUser && <>
                    {allMessages && <div>
                        {allMessages.map((message, index) =>
                            <div key={index}>
                                <p style={{color: message.user.color}}>{message.user.name === currentUser.name ? 'Me' : message.user.name} : {message.text}</p>
                            </div>
                        )}

                    </div>}
                    <div>
                        <textarea onChange={(event) => setNewMessage(event.target.value)}/>
                        <button className="btn btn-primary" onClick={sendMessage}>Send</button>
                    </div>
                </>}

                    </div>

            <Chat/>
        </div>)
}
export default Main;
