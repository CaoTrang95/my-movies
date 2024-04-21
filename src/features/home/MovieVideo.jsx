import styled from "styled-components";
import LoadingSkeleton from "../../ui/LoadingSkeleton";

const MovieVideoWrapper = styled.div`
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  height: auto;
  margin-left: 20px;
  position: relative;
  top: 0;
  left: 0;

  &:first-child {
    margin-left: 40px;
  }
`;
const MovieVideoImage = styled.div`
  width: 100%;
  min-width: 100%;
  height: calc(300px / 1.78);
  /* height: 100%; */
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
  }

  .play-wrapper {
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: calc(300px / 1.78);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4em;
  }
  .options {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 4;
    opacity: 0.6;
  }
  .options:hover {
    opacity: 1;
    filter: brightness(0) saturate(100%) invert(53%) sepia(33%) saturate(3054%)
      hue-rotate(156deg) brightness(98%) contrast(99%);
    cursor: pointer;
  }
  .icon-more {
    background-image: url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg");
    min-width: 1em;
    width: 1em;
    min-height: 1em;
    height: 1em;
    font-size: 1.6em;
  }
  .play-icon {
    width: 1em;
    min-width: 1em;
    min-height: 1em;
    height: 1em;
    background-image: url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-175-play-806cb05551791b8dedd7f8d38fd3bd806e2d397fcfeaa00a5cc9129f0819fd07.svg");
    background-repeat: no-repeat;
    filter: invert(1);
  }
  .image-size {
    background-size: 30%;
  }
`;
const MovieVideoContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  flex-wrap: wrap;
  h2 {
    font-size: 1.2em;
    width: 100%;
    font-weight: 600;
    display: flex;
    justify-content: center;
  }
  h3 {
    font-size: 1em;
    font-weight: 400;
  }
`;
export default function MovieVideo({ movie, onSetImageBackground }) {
  return (
    <>
      {!movie.title && (
        <MovieVideoWrapper className="CardWrapper">
          <MovieVideoImage>
            <LoadingSkeleton className="image-size" />
          </MovieVideoImage>
        </MovieVideoWrapper>
      )}
      {movie.title && (
        <MovieVideoWrapper className="MovieVideoWrapper">
          <MovieVideoImage
            className="MovieVideoImage"
            onMouseEnter={() => onSetImageBackground(movie.backdrop_path)}
          >
            <img
              loading="lazy"
              src={`https://media.themoviedb.org/t/p/w355_and_h200_multi_faces${movie?.backdrop_path}`}
              srcSet={`https://media.themoviedb.org/t/p/w355_and_h200_multi_faces${movie?.backdrop_path} 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces${movie?.backdrop_path} 2x`}
              alt="Video movie"
            ></img>
            <div className="options icon-more"></div>
            <div className="play-wrapper">
              <span className="play-icon"></span>
            </div>
          </MovieVideoImage>
          <MovieVideoContent>
            <h2>{movie.title}</h2>
            <h3>{movie.release_date}</h3>
          </MovieVideoContent>
        </MovieVideoWrapper>
      )}
    </>
  );
}
