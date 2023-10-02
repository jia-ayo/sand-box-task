import ListProfile from "@/components/profile/ListProfile";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth");
    },
  });

  if (status !== "authenticated") return null;
  return (
    <>
      <div>
        <ListProfile />
      </div>
    </>
  );
}
