import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 mt-12 py-4 text-sm">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center px-4 gap-2">
        {/* Left */}
        <div className="text-gray-700 sm:mb-0 mb-1">Rwanda</div>
        {/* Center */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#" className="text-gray-700 hover:underline">About</a>
          <a href="#" className="text-gray-700 hover:underline">Advertising</a>
          <a href="#" className="text-gray-700 hover:underline">Business</a>
          <a href="#" className="text-gray-700 hover:underline">How Search works</a>
        </div>
        {/* Right */}
        <div className="flex gap-4 flex-wrap">
          <a href="#" className="text-gray-700 hover:underline">Privacy</a>
          <a href="#" className="text-gray-700 hover:underline">Terms</a>
          <a href="#" className="text-gray-700 hover:underline">Settings</a>
        </div>
      </div>
    </footer>
  );
}