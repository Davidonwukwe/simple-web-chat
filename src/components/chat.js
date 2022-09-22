import React, {useEffect, useState, useContext} from "react";
import {ChatContext} from "../contexts/ChatContext";

const Chat = () => {
    const { newMessage, currentUser, setUserName, addNewUser, allMessages, setNewMessage, sendMessage} = useContext(ChatContext);
    const chatPerPage = 25;
    const [next, setNext] = useState(chatPerPage)
    useEffect(() => {
        const objDiv = document.querySelector(".chat-body");
        objDiv.scrollTop = objDiv.scrollHeight;
    }, [allMessages])
    const handleLoadMore = () => {
        const addedPageCount = (allMessages.length - next) < chatPerPage ? allMessages.length - next : chatPerPage;
        setNext(next + addedPageCount);
    }
    const getTime = (date) => {
        return new Date(date).toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute:'2-digit'
        });
    }

    return (
        <section style={{backgroundColor: '#eee', height: '100vh' }}>
            <div className="container py-2">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-4">

                        <div className="card" id="chat1" style={{borderRadius: '15px'}}>
                            <div
                                className="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
                                style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}>
                                <i className="fas fa-angle-left"/>
                                <p className="mb-0 fw-bold">My Web chat</p>
                                <i className="fas fa-times"/>
                            </div>
                            <div className="chat-body card-body">
                                {!currentUser && <div>
                                    <label htmlFor="">Enter your username</label>
                                    <input className="form-control my-1" onChange={(event) => setUserName(event.target.value)} type="text"/>
                                    <button className="btn btn-primary border-0 light-blue-bg w-100 my-2" onClick={addNewUser} >Enter</button>

                                </div>}
                                {(currentUser && allMessages) && <>
                                        {next < allMessages?.length && <p><a className="mb-2 load-more  btn-primary" onClick={handleLoadMore}>Load more</a></p>}
                                        {allMessages.slice(allMessages.length - next).map((message, index) =>
                                            <div key={index}>
                                                {(message.user.name === currentUser?.name) ?
                                                    <div className="d-flex flex-row justify-content-end mb-4">
                                                        <div>
                                                            <div className="p-3 me-3"
                                                                 style={{borderRadius: '15px', backgroundColor: 'rgba(57, 192, 237,.2)'}}>
                                                                <p className="text-start small mb-0">{message.text}</p>
                                                                { message.date &&
                                                                    <p className="m-0 small text-end message-time">{getTime(message.date)}</p>}
                                                            </div>
                                                        </div>

                                                        <img
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                                            alt="avatar 1" style={{width: '45px', height: '100%'}}/>
                                                    </div> :


                                                    <div className="d-flex flex-row justify-content-start mb-4">
                                                        <img
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                            alt="avatar 1" style={{width: '45px', height: '100%'}}/>
                                                        <div className="d-flex align-items-center">
                                                            <div className="p-2 ms-3 border"
                                                                 style={{borderRadius: '10px', backgroundColor: '#fbfbfb'}}>
                                                                <p style={{color: message.user.color}} className="m-0 small text-start">{message.user.name}</p>
                                                                <p className="text-start small mb-0">{message.text}</p>
                                                                { message.date &&
                                                                    <p className="m-0 small text-end message-time">{getTime(message.date)}</p>}
                                                            </div>
                                                        </div>

                                                    </div> }

                                            </div>
                                        )}
                                </>}

                            </div>
                            {currentUser && <div className="row p-3 mb-2 justify-content-between g-2 w-100">
                                <div className="col-9">
                                           <textarea value={newMessage}
                                                     onChange={(event) => setNewMessage(event.target.value)}
                                                     placeholder="Type your message" className="form-control"
                                                     id="textArea" rows="1"/>
                                </div>
                                <div className="col-3">
                                    <button onClick={sendMessage} disabled={!newMessage}
                                            className="btn btn-primary border-0 light-blue-bg">Send
                                    </button>
                                </div>

                            </div>}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )

}
export default Chat;
