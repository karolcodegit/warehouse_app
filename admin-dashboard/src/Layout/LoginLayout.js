import React from "react";

const LoginLayout = ({children}) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-full max-w-9xl mx-auto bg-slate-200 h-full ">
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
