import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white shadow mb-4 py-3 px-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <span>More</span>
        <Link to="/signin" className="ml-2 text-blue-500 hover:underline font-semibold">Sign In</Link>
      </div>
      {/* ...any other header content, such as logo or navigation */}
    </header>
  );
}