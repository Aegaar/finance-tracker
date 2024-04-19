import React from "react";
import Link from "next/link";

function AuthLinks() {
 

  return (
    <>
      {status === "noauthenticated" ? (
        <div className="sm:flex sm:gap-4">
          <Link
            className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="/login"
          >
            Login
          </Link>
        </div>
      ) : (
        <div className="sm:flex sm:gap-4">
          <Link
            className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="/logout"
          >
            Logout
          </Link>
        </div>
      )}
    </>
  );
}

export default AuthLinks;
