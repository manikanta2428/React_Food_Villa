import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "Dummy Name",
  },
});
UserContext.displayName = "UserContext";
export default UserContext;