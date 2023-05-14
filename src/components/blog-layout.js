import { Outlet } from "react-router";

import MainNavigation from "./navigation/main-navigation";

function BlogLayout() {

    return (
        <div>
            <MainNavigation />
            <Outlet />
        </div>
    );
}

export default BlogLayout;