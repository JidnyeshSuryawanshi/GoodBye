import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-700 border-solid rounded-full"></div>
        <div className="absolute top-0 w-16 h-16 border-4 border-purple-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-lg text-gray-300 animate-pulse">Loading...</p>
    </div>
  );
}