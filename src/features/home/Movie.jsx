import { Link } from "react-router-dom";
import styled from "styled-components";
import LoadingSkeleton from "../../ui/LoadingSkeleton";

const CardWrapper = styled.div`
  width: 150px;
  min-width: 150px;
  position: relative;
  top: 0;
  left: 0;
  .wrapper-image {
    width: 100%;
    min-height: calc(150px * 1.5);
    height: calc(150px * 1.5);
  }
  .image {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    background-color: #dbdbdb;
  }
  img {
    width: 100%;
    height: 100%;
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
  .content {
    width: 100%;
    padding: 26px 10px 12px;
    position: relative;
    white-space: normal;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    padding-bottom: 0;
  }
  h2 {
    font-size: 1em;
    margin: 0;
    width: 100%;
    word-wrap: normal;
    overflow-wrap: break-word;
  }
  a {
    font-weight: 700;
    color: #000;
  }
  a:hover {
    color: rgba(1, 180, 228, 1);
  }
  p {
    font-size: 1em;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.6);
  }
`;
export default function Movie({ movie }) {
  return (
    <CardWrapper className="CardWrapper">
      <div className="wrapper-image image">
        <Link>
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={movie?.original_title}
          />
        </Link>
        <div className="options icon-more"></div>
      </div>
      <div className="content">
        <div className="consensus"></div>
        <h2>
          <Link>{movie?.original_title}</Link>
        </h2>
        <p>{movie?.release_date}</p>
      </div>
    </CardWrapper>
  );
}
const Loading = () => {
  return (
    <CardWrapper className="CardWrapper">
      <div className="wrapper-image ">
        <LoadingSkeleton />
      </div>
    </CardWrapper>
  );
};
Movie.Loading = Loading;
