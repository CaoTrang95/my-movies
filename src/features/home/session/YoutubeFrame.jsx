import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMovieTrailerUrlAsync } from "./youtubeFrameSlice";
import LoadingBar from "react-top-loading-bar";

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
export default function YoutubeFrame({ id }) {
  const { videoTrailerUrl, progressBar } = useSelector(
    (state) => state.youtubeFrame
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieTrailerUrlAsync({ id: id }));
  }, [videoTrailerUrl]);
  return (
    <>
      <LoadingBar
        color="#01b4e4"
        progress={progressBar}
        shadow={true}
        height={4}
        transitionTime={400}
      />
      <YoutubeWrapper className="YoutubeWrapper">
        <div className="video-popup">
          {videoTrailerUrl && (
            <iframe
              type="text/html"
              src={videoTrailerUrl}
              title={videoTrailerUrl}
            ></iframe>
          )}
        </div>
      </YoutubeWrapper>
    </>
  );
}
