"use client";

interface ErrorProps {
  error: Error;
}
export default function Error({ error }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        {error.message || "An unexpected error occurred."}
      </h1>
      <p className="text-lg text-white">Please try again later.</p>
    </div>
  );
}
