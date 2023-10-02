import React, { useState, useCallback } from "react";
import { signIn } from "next-auth/react";
import Input from "../ui/Input";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      // @ts-ignore
      setIsLoading(true);

      await signIn("credentials", {
        email,
        password,
      });
      toast.success("loged in");
       router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong. ");
    } finally {
      setIsLoading(false);
    }
  }, [email, password, router]);
    return (
      <> <div>
      <Input
        name="email"
        title="Email"
        placeholder="Email address"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        name="password"
        title="password"
        placeholder="Full name"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        value={password}
        disabled={isLoading}
      />
      <div className="mb-4">
        <button
          onClick={onSubmit}
          className="rounded-[12px] bg-[#201950] w-full py-[19px] text-[#FFFFFF] leading-tight focus:outline-none px-[18px] focus:shadow-outline"
        >
          Login
        </button>
      </div>
    </div>
      </>
   
  );
};

export default Login;
