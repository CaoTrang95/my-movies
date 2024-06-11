import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMovieDetailAsync } from "./youtubeFrameSlice";
import LoadingBarProgress from "../../../ui/progress-bar/LoadingBarProgress";
import { setProgressBar } from "../../../ui/progress-bar/progressBarSlice";

const YoutubeWrapper = styled.div`
  min-width: 9rem;
  min-height: 5rem;
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
            src={
              videoTrailerUrl ||
              `//www.youtube.com/embed/${keyMovie}?autoplay=1&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=en&amp;modestbranding=1&amp;fs=1&amp;autohide=1`
            }
            title={videoTrailerUrl}
            allowFullScreen=""
          ></iframe>
        </div>
      </YoutubeWrapper>
    </>
  );
}
<iframe
  type="text/html"
  style="background-color: #000;"
  width="959"
  height="539"
  src="//www.youtube.com/embed/hRFY_Fesa9Q?autoplay=1&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=en&amp;modestbranding=1&amp;fs=1&amp;autohide=1"
  frameborder="0"
  allowfullscreen=""
></iframe>;
