import { useState } from "react";
import Header from "../components/Header";
import SportTabs from "../components/SportTabs";
import MainFilters from "../components/MainFilters";
import MatchList from "../components/MatchList";
import Footer from "../components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SportTabs />
      <MainFilters activeTab={activeTab} setActiveTab={setActiveTab} />
      <MatchList activeTab={activeTab} />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}