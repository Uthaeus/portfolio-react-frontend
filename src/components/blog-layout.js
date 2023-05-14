import { Outlet } from "react-router";

import MainNavigation from "./navigation/main-navigation";

function BlogLayout() {

    return (
        <div className="blog-layout-container">
            <MainNavigation />
            <Outlet />
        </div>
    );
}

export default BlogLayout;