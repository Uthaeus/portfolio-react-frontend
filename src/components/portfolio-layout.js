import { Outlet } from "react-router";

import MainNavigation from "./navigation/main-navigation";

function PortfolioLayout() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PortfolioLayout;