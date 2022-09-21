import React, {useEffect, useState} from "react";

const Chat = ({currentMessage, currentUser, setUserName, createCurrentUser, allMessages, setCurrentMessage, sendMessage}) => {

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
                                <p className="mb-0 fw-bold">Live chat</p>
                                <i className="fas fa-times"/>
                            </div>
                            <div className="chat-body card-body">
                                {!currentUserData && <div>
                                    <label htmlFor="">Enter your username</label>
                                    <input className="form-control my-1" onChange={(event) => setCurrentUserName(event.target.value)}  type="text"/>
                                    <button className="btn btn-primary w-100 my-2" onClick={setCurrentUser} >Login</button>

                                </div>}
                                {currentUserData && <>
                                    {allMessages && <>
                                        {allMessages.map((message, index) =>
                                            <div key={index}>
                                                {(message.user.name === currentUserData?.name) ?
                                                    <div className="d-flex flex-row justify-content-end mb-4">
                                                        <div>
                                                            <div className="p-3 me-3"
                                                                 style={{borderRadius: '15px', backgroundColor: 'rgba(57, 192, 237,.2)'}}>
                                                                <p className="text-start small mb-0">{message.text}</p>
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
                                                            </div>
                                                        </div>

                                                    </div> }

                                            </div>
                                        )}

                                    </>}
                                </>}






                            </div>
                            {currentUserData && <div className="row p-3 mb-2 justify-content-between g-2 w-100">
                                <div className="col-9">
                                           <textarea value={currentMessage}
                                                     onChange={(event) => setCurrentMessage(event.target.value)}
                                                     placeholder="Type your message" className="form-control"
                                                     id="textAreaExample" rows="1"/>
                                </div>
                                <div className="col-3">
                                    <button onClick={sendMessage} disabled={!currentMessage}
                                            className="btn btn-primary">Send
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
