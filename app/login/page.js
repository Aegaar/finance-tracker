"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const { data, status } = useSession();
  const router = useRouter();

  // TODO FIND A ANOTHER WAY TO REPAIR A PATH REVALIDATE

  if (status === "loading") {
    return <div>loading...</div>;
  }

  // useEffect(() => {
  // if (status === "authenticated") {
  //   router.push("/");
  // }
  // }, [status, router]);

  // console.log(status, data);

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (status === "authenticated") {
  //   router.push("/")
  // }

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
