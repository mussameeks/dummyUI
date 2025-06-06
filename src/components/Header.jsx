import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white shadow mb-4 py-3 px-4 flex justify-between items-center">
      <div className="text-lg font-bold text-gray-800">
        Twijistats
      </div>
      <div className="flex items-center gap-3">
        <span className="text-gray-700 hover:bg-gray-100 rounded-full px-3 py-1 cursor-pointer transition">More</span>
        <Link
          to="/signin"
          className="ml-2 bg-blue-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-600 transition"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}