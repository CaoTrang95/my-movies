import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const MyProgress = styled.div`
  width: 100%;
  background-color: transparent;
  height: ${(props) => props.$height}px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 500000;
  .show-bar {
    opacity: 1;
    transition: all 400ms ease 0s;
    width: ${(props) => props.$progress}%;
    height: 100%;
    background-color: ${(props) => props.$color};
    box-shadow: rgb(1, 180, 228) 0px 0px 2px, rgb(1, 180, 228) 0px 0px 2px;
  }
  .hidden-bar {
    opacity: 0;
  }
`;
export default function LoadingBarProgress({ color, height, onLoadFinished }) {
  const { progressBar } = useSelector((state) => state.progressBar);
  const dispatch = useDispatch();
  const [showbar, setShowBar] = useState(true);
  useEffect(() => {
    async function reset() {
      if (progressBar === 100) {
        // 400ms to show progress bar
        await new Promise((r) => setTimeout(r, 400));
        // 200ms to hidden progress bar
        setShowBar(false);
        await new Promise((r) => setTimeout(r, 200));
        // then show bar and set width = 0%
        dispatch(onLoadFinished());
        setShowBar(true);
      }
    }
    reset();
  }, [progressBar]);
  return (
    <MyProgress
      className="MyProgress"
      $color={color}
      $progress={progressBar}
      $height={height}
    >
      <div className={` ${showbar ? "show-bar" : "hidden-bar"}`}></div>
    </MyProgress>
  );
}
