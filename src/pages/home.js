import { useContext } from "react";

import { UserContext } from "../components/store/user-context";

function HomePage() {
    const userCtx = useContext(UserContext);
    return (
        <div>
            <h1>Home Page</h1>
            <hr />
            <p>Welcome {userCtx.user?.username}</p>
        </div>
    );
}

export default HomePage;