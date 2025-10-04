import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initJQueryFunctions } from "../js/script";

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize jQuery functions after route change
    const timer = setTimeout(() => {
      initJQueryFunctions();
    }, 10);

    return () => clearTimeout(timer);
  }, [location]);

  return <>{children}</>;
};

export default Layout;
