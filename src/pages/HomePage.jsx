import Welcome from "../ui/Welcome";
import Trending from "../features/home/Trending";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";

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
      <Welcome />
      <Trending />
    </>
  );
}
