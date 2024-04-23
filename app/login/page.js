"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div>
      <div onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
        Sign up with Google
      </div>
      <div onClick={() => signIn("github", { callbackUrl: "/dashboard" })}>
        Sign up with Github
      </div>
    </div>
  );
}

export default page;
