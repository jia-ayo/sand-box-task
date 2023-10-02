import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import ProfileCard from "@/components/profile/ProfileCard";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

export default function Profile() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth");
    },
  });
  const { data: currentUser } = useCurrentUser();

  if (status !== "authenticated") return null;

  const handleEditClick = () => {
    router.push("/profile/edit");
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className="bg-gray-700 text-white rounded-md p-2 px-6 text-lg m-2"
          onClick={handleEditClick}
        >
          Edit Profile
        </button>
        <button
          className="bg-gray-700 text-white rounded-md p-2 px-6 text-lg m-2"
          onClick={() => signOut()}
        >
          Log Out
        </button>
      </div>

      <ProfileCard
        name={currentUser?.name}
        username={currentUser?.username}
        profileImage={currentUser?.profileImage}
        description={currentUser?.bio}
      />
    </div>
  );
}
