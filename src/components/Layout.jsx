import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Background from "./Background";
import { trackPageView } from "./Analytics";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    const pageName = location.pathname === '/' ? 'Home' : location.pathname.slice(1);
    trackPageView(pageName);
  }, [location]);

  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout; 