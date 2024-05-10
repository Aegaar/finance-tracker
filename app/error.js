"use client";

export default function ErrorComponent({ error, reset }) {
  return (
    <div className="flex items-center justify-center mt-10 flex-col">
      <h2 className="text-blue-500 font-bold text-2xl">
        Something went wrong!
      </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
