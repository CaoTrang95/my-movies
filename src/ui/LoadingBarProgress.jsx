import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
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
  }
  .hidden-bar {
    opacity: 0;
  }
`;
export default function LoadingBarProgress({
  color,
  progress,
  height,
  onLoadFinished,
}) {
  const progressRef = useRef();
  const dispatch = useDispatch();
  const [showbar, setShowBar] = useState(true);
  useEffect(() => {
    async function reset() {
      if (progress === 100) {
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
  }, [progress]);
  return (
    <MyProgress
      className="MyProgress"
      $color={color}
      $progress={progress}
      $height={height}
    >
      <div
        ref={progressRef}
        className={` ${showbar ? "show-bar" : "hidden-bar"}`}
      ></div>
    </MyProgress>
  );
}
