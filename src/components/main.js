import Chat from "./chat";
import {useEffect, useState} from "react";

const Main = () => {
    const [userName, setUserName] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);


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

                }
                tempAllUsers.push(tempCurrentUser);
            }
            window.sessionStorage.setItem("currentUserData", JSON.stringify(tempCurrentUser));
            window.localStorage.setItem("allUsersData", JSON.stringify(tempAllUsers));
        }

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
            </div>

            <Chat/>
        </div>)
}
export default Main;
