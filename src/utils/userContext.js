import { createContext } from "react";

const UserContext = createContext( {
    loggedInUser : "Default User",
    darkMode : false,
});

export default UserContext;