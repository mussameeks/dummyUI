import React from "react";
import { logout, getUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = getUser();

  const stats = [
    { label: "Favorites", value: 12 },
    { label: "Tracked Matches", value: 34 },
    { label: "Upcoming", value: 5 },
    { label: "Reviews", value: 7 },
  ];

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={handleLogout}
          className="text-blue-500 underline font-semibold mb-4 mr-8 mt-4"
        >
          Sign Out
        </button>
      </div>
      <div className="max-w-3xl mx-auto mt-8 px-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="mb-4 text-gray-700">Welcome, {user?.email}!</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white shadow rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-semibold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}