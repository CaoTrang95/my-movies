import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMovieDetailAsync } from "./youtubeFrameSlice";
import LoadingBarProgress from "../../../ui/progress-bar/LoadingBarProgress";
import { setProgressBar } from "../../../ui/progress-bar/progressBarSlice";

const YoutubeWrapper = styled.div`
  min-width: 90px;
  min-height: 50px;
  width: 100%;
  background-color: hsl(0, 6.25%, 12.549019607843137%);
  z-index: 105;
  opacity: 1;
  flex: 1;
  .video-popup {
    overflow: hidden !important;
    box-sizing: border-box !important;
    width: 100%;
    height: 100%;
  }
  iframe {
    border: none;
    width: 100%;
    height: 100%;
  }
`;
export default function YoutubeFrame({ id, keyMovie }) {
  const { videoTrailerUrl } = useSelector((state) => state.youtubeFrame);

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) dispatch(getMovieDetailAsync({ id: id }));
  }, [videoTrailerUrl]);
  return (
    <>
      <LoadingBarProgress
        color="#01b4e4"
        height={4}
        onLoadFinished={() => setProgressBar(0)}
      />
      <YoutubeWrapper className="YoutubeWrapper">
        <div className="video-popup">
          <iframe
            type="text/html"
            src={videoTrailerUrl || `//www.youtube.com/embed/${keyMovie}`}
            title={videoTrailerUrl}
            allowFullScreen=""
          ></iframe>
        </div>
      </YoutubeWrapper>
    </>
  );
}
