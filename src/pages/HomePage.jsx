import Welcome from "../features/home/Welcome";
import Trending from "../features/home/Trending";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Popular from "../features/home/Popular";
const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  margin-top: 64px;
  &::after {
    opacity: 0.3;
    width: 100vw;
    height: 100vh;
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    background-image: url("https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1_white-ff84c271cc8c93e00aa0264a425434c329089bdfc6a392987332b5f32903f75c.svg");
    background-position: 50% calc(50% - 200px);
    background-repeat: no-repeat;
    background-size: 20%;
    z-index: -1;
  }
`;

export default function HomePage() {
  const { progressBar } = useSelector((state) => state.homepage);
  return (
    <>
      <LoadingBar
        color="#01b4e4"
        progress={progressBar}
        shadow={true}
        height={4}
        transitionTime={400}
      />
      <Main className="Main">
        <Welcome />
        <Trending />
        <Popular />
      </Main>
    </>
  );
}
