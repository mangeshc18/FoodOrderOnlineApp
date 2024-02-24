import { createContext } from "react";

const userContext = createContext({
    loggedInUser: "default user",
    userImage: <img src="https://onlinepngtools.com/images/examples-onlinepngtools/man-on-the-mountain-edge-avatar.png"/>

});

export default userContext;