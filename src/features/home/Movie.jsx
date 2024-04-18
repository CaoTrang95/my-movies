import { Link } from "react-router-dom";
import styled from "styled-components";
import LoadingSkeleton from "../../ui/LoadingSkeleton";

const CardWrapper = styled.div`
  width: 150px;
  min-width: 150px;
  height: 291px;

  .wrapper-image {
    width: 100%;
    min-height: calc(150px * 1.5);
    height: calc(150px * 1.5);
    position: relative;
    top: 0;
    left: 0;
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
