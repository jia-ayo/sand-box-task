import Login from "@/components/Authen/Login";
import Register from "@/components/Authen/Register";
import React, { useState } from "react";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex justify-center items-center m-auto flex-col">
        {showLogin ? <Login /> : <Register />}
        <div className="flex gap-8 flex-row">
          <div
            onClick={() => setShowLogin(true)}
            className="underline cursor-pointer"
          >
            Login
          </div>
          <div
            onClick={() => setShowLogin(false)}
            className="underline cursor-pointer"
          >
            Register
          </div>
        </div>
      </div>
    </div>
  );
}
