import React, { useState, useCallback, ChangeEvent, useEffect } from "react";

import { signIn } from "next-auth/react";
import Input from "../ui/Input";
import toast from "react-hot-toast";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import ImageUpload from "../ImageUpload";

const EditProfile = () => {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState<string>("");
  const [bio, setbio] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: currentUser } = useCurrentUser();
    const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
    
     useEffect(() => {
       setProfileImage(currentUser?.profileImage);
         setUsername(currentUser?.username);
         setName(currentUser?.name);
       setbio(currentUser?.bio);
     }, [
       currentUser?.profileImage,
       currentUser?.name,
       currentUser?.username,
       currentUser?.bio,
     ]);

  
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.patch("/api/edit", {
        name,
        username,
        bio,
        profileImage,
      });
      mutateFetchedUser();

      toast.success("Updated");
      router.push("/profile");
    } catch (error) {
      toast.error("someting went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [bio, name, username, profileImage, mutateFetchedUser, router]);

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
        <ImageUpload
          value={profileImage}
          disabled={isLoading}
          onChange={(image) => setProfileImage(image)}
          label="Upload Profile Image"
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
