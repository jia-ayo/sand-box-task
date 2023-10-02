import Login from "@/components/Authen/Login";
import Register from "@/components/Authen/Register";
import useCurrentUser from "@/hooks/useCurrentUser";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Auth() {
  const router = useRouter();
    const { data: currentUser } = useCurrentUser();
  const [showLogin, setShowLogin] = useState(true);

   useEffect(() => {
     if (currentUser) {
       router.push("/");
     }
   }, [currentUser, router]);

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
