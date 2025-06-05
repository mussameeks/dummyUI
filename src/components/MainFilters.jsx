import React from "react";

export default function MainFilters({ activeTab, setActiveTab }) {
  // Available tabs
  const tabs = ["all", "favorites", "live", "finished", "upcoming"];
  const tabNames = {
    all: "All",
    favorites: "Favorites",
    live: "Live",
    finished: "Finished",
    upcoming: "Upcoming",
  };

  return (
    <div className="flex gap-2 mt-4 mb-4 justify-center">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={\`px-4 py-2 rounded-full font-semibold transition \${activeTab === tab
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"}\`}
          onClick={() => setActiveTab(tab)}
        >
          {tabNames[tab]}
        </button>
      ))}
    </div>
  );
}