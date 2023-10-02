import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import EditProfile from "@/components/profile/EditProfile";

export default function ProfileEdit() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth");
    },
  });
  const { data: currentUser } = useCurrentUser();

  if (status !== "authenticated") return null;
  return (
    <div>
     <EditProfile/>
    </div>
  );
}
