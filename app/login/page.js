"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

function page() {
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status]);

  console.log(status, data);

  const router = useRouter();

  if (status === "loading") {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div onClick={() => signIn("google")}>Sign up with Google</div>
      <div>Sign up with Github</div>
      <div>Sign up with Facebook</div>
    </div>
  );
}

export default page;
