import React, { useState, useCallback } from "react";
import { signIn } from "next-auth/react";
import Input from "../ui/Input";
import toast from "react-hot-toast";
import axios from "axios";
import { Router, useRouter } from "next/router";
const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      // @ts-ignore
      setIsLoading(true);

      await axios.post("api/register", {
        email,
        username,
        name,
        password,
      });

      toast.success("Account created.");

      signIn("credentials", {
        email,
        password,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong. ");
    } finally {
      setIsLoading(false);
    }
  }, [email, password, username, name, router]);
  return (
    <>
      <div>
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
          name="name"
          title="name"
          placeholder="Full name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          disabled={isLoading}
        />
        <Input
          name="username"
          title="username"
          placeholder="Your username"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          value={username}
          disabled={isLoading}
        />
        <Input
          name="password"
          title="password"
          placeholder="password"
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
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
