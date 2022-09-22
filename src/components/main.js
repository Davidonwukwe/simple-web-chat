import React, {useEffect, useState} from 'react';
import Chat from "./chat";
import {Container} from "../utils/styles";
import {ChatContext} from "../contexts/ChatContext";

const Main = () => {
    const [userName, setUserName] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [allMessages, setAllMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const currentUserFromStorage = sessionStorage.getItem('currentUserData')
        const allMessagesFromStorage = localStorage.getItem('allMessages')
        setCurrentUser(JSON.parse(currentUserFromStorage));
        setAllMessages(JSON.parse(allMessagesFromStorage))
        window.addEventListener('storage', (event) => {
            if (event.storageArea !== localStorage && event.storageArea !== sessionStorage ) return;

            if (event.key === 'allMessages') {
                setAllMessages(JSON.parse(event.newValue));
            }

        });
    }, [])


    const sendMessage = () => {
        const messageData = {
            user: currentUser,
            text: newMessage
        }
        const allMessagesFromLocal = JSON.parse(localStorage.getItem('allMessages'));
        const tempAllMessages =  allMessagesFromLocal || [];

        tempAllMessages.push(messageData);
        setAllMessages(tempAllMessages);
        setNewMessage('');
        window.localStorage.setItem("allMessages", JSON.stringify(tempAllMessages));
    }
    const getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    const addNewUser = () => {
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
            setCurrentUser(tempCurrentUser)
            setAllMessages(JSON.parse(localStorage.getItem('allMessages')));
            setNewMessage('');
        }

    }


    return (
        <Container>
            <ChatContext.Provider value={{newMessage, currentUser, setUserName, addNewUser, allMessages, setNewMessage, sendMessage}}>
                <Chat/>
            </ChatContext.Provider>
        </Container>

    );
}

export default Main;
