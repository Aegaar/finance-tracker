import Link from "next/link";
import React, { useEffect, useState } from "react";

function Message({ timeout, text, link }) {
  const [visible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout]);

  return visible ? (
    <div>
      <p className="text-green-600">{text} added successfully</p>
      <Link href={link} className="font-bold target:shadow-lg">
        See recently added {text.toLowerCase()}s{" "}
      </Link>
    </div>
  ) : null;
}

export default Message;
