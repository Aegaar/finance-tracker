import Link from "next/link";
import React, { useEffect, useState } from "react";

function Message({ timeout, text }) {
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
      <p className="text-green-600">{text}</p>
      <Link href="/incomes" className="font-bold target:shadow-lg">See recently added incomes </Link>
    </div>
  ) : null;
}

export default Message;
