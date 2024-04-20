"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

function page() {
  const { data, status } = useSession();
  const router = useRouter();

  // TODO FIND A ANOTHER WAY TO REPAIR A PATH REVALIDATE 

  if (status === "loading") {
    return <div>loading...</div>;
  }

  // useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
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
      <div onClick={() => signIn("google")}>Sign up with Google</div>
      <div>Sign up with Github</div>
      <div>Sign up with Facebook</div>
    </div>
  );
}

export default page;
