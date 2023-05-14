import { useState, createContext } from "react";

export const UserContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {}
});

function UserContextProvider({children}) {
    const [user, setUser] = useState(null);

    function login(userData) {
        setUser(userData);
    }

    function logout() {
        setUser(null);
    }

    let value = {
        user,
        isAuthorized: !!user,
        login,
        logout
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;