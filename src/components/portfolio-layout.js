import { Outlet } from "react-router";

import PortfolioNavigation from "./navigation/portfolio-navigation";

function PortfolioLayout() {
  return (
    <div className="portfolio-layout-container">
      <PortfolioNavigation />
      
      <Outlet />
    </div>
  );
}

export default PortfolioLayout;