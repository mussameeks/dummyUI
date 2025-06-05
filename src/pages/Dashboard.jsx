import React from "react";

export default function Dashboard() {
  const stats = [
    { label: "Favorites", value: 12 },
    { label: "Tracked Matches", value: 34 },
    { label: "Upcoming", value: 5 },
    { label: "Reviews", value: 7 },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
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
  );
}