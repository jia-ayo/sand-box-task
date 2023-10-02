import React, { useState, useCallback, ChangeEvent } from "react";
import { signIn } from "next-auth/react";
import Input from "../ui/Input";
import toast from "react-hot-toast";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState<string>("");
  const [bio, setbio] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: currentUser } = useCurrentUser();

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    let file = event.target.files![0];

    reader.onloadend = () => {
      setProfileImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.post("api/edit", {
        name,
        username,
        bio,
        profileImage,
      });

      toast.success("profile edited.");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong. ");
    } finally {
      setIsLoading(false);
    }
  }, [username, name, profileImage, bio]);

  return (
    <>
      <div className="px-6  md:px-20 p-6">
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
          name="Description"
          title="Description"
          placeholder="About you"
          onChange={(e) => setbio(e.target.value)}
          type="text"
          value={bio}
          disabled={isLoading}
        />
        <input
          type="file"
          accept=".png, .jpg"
          onChange={(e) => onImageChange(e)}
        />
        <div className="my-4">
          <button
            onClick={onSubmit}
            className="  rounded-[12px] bg-[#201950] w-full py-[19px] text-[#FFFFFF] leading-tight focus:outline-none px-[18px] focus:shadow-outline"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
