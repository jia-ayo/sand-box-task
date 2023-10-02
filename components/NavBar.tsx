import useCurrentUser from "@/hooks/useCurrentUser";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { data: currentUser } = useCurrentUser();
  return (
    <nav className="flex items-center justify-between p-3 px-6 bg-gray-500">
      <Link href="/" className="text-white text-lg font-bold">
        Profile Catalog
      </Link>
      <div className="flex items-center">
        {currentUser && currentUser.profileImage ? (
          <Image
            src={currentUser.profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-4"
          />
        ) : (
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
        )}
        <Link href="/profile" className="text-white text-lg">
          {currentUser?.name}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
