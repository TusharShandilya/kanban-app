import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="app">
      <header>head</header>
      <main>{children}</main>
      <footer>foot</footer>
    </div>
  );
};

export default Layout;
