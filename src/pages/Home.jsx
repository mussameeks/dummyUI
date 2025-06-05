import { useState } from "react";
import Header from "../components/Header";
import SportTabs from "../components/SportTabs";
import MainFilters from "../components/MainFilters";
import MatchList from "../components/MatchList";

export default function Home() {
  // Just a single state for all/favorites/live/finished/upcoming
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <Header />
      <SportTabs />
      <MainFilters activeTab={activeTab} setActiveTab={setActiveTab} />
      <MatchList activeTab={activeTab} />
    </>
  );
}