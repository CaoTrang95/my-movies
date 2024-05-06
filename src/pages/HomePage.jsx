import Welcome from "../features/home/Welcome";
import Trending from "../features/home/trending/Trending";
import styled from "styled-components";
import LatestTrailers from "../features/home/latest-trailers/LatestTrailers";
import LeaderBoard from "../features/home/leaderboard/LeaderBoard";
import Popular from "../features/home/popular/Popular";
import LoadingBarProgress from "../ui/progress-bar/LoadingBarProgress";
import { setProgressBar } from "../ui/progress-bar/progressBarSlice";
const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  margin-top: 64px;
`;

export default function HomePage() {
  return (
    <>
      <LoadingBarProgress
        color="#01b4e4"
        height={4}
        onLoadFinished={() => setProgressBar(0)}
      />
      <Main className="Main">
        <Welcome />
        <Trending />
        <LatestTrailers />
        <Popular />
        <LeaderBoard />
      </Main>
    </>
  );
}
