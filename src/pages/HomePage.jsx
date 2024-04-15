import Welcome from "../ui/Welcome";
import Trending from "../features/home/Trending";
import { useState } from "react";
const trendingTabs = [
  { id: "0", title: "Today" },
  { id: "1", title: "This Week" },
  { id: "2", title: "Upcoming" },
];
const popularTabs = [
  { id: "0", title: "On TV" },
  { id: "1", title: "In Theaters" },
];
const whatPopularTabs = [{ id: "0", title: "In Theaters" }];

export default function HomePage() {
  const [activeTrendingTab, setActiveTrendingTab] = useState(
    trendingTabs[0].id
  );
  const [activePopularTab, setActivePopularTab] = useState(popularTabs[0].id);
  const [activeWhatPopularTabs, setWhatPopularTabs] = useState(
    whatPopularTabs[0].id
  );

  return (
    <>
      <Welcome />
      <Trending
        dark="true"
        title="Trending"
        tabs={trendingTabs}
        onTabClick={(id) => {
          setActiveTrendingTab(id);
        }}
        activeTab={activeTrendingTab}
      />
      <Trending
        title="Latest Trailers"
        tabs={popularTabs}
        onTabClick={(id) => setActivePopularTab(id)}
        activeTab={activePopularTab}
      />
      <Trending
        dark="true"
        title="What's Popular"
        tabs={whatPopularTabs}
        onTabClick={(id) => setWhatPopularTabs(id)}
        activeTab={activeWhatPopularTabs}
      />
      <Trending />
    </>
  );
}
