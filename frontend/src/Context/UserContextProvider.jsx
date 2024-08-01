import { useState } from "react"
import userContext from "./userContext"


const UserContextProvider = ({children}) =>{
    const [user,setUser] = useState('')
    const [loggedIn,setLoggedIn] = useState(false)
    const [userData,setUserData] = useState([])

    return(
        <userContext.Provider value={{user,setUser,loggedIn,setLoggedIn,userData,setUserData}}>
        {children}
        </userContext.Provider>
    )
}

export default UserContextProvider