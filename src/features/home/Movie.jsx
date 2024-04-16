import { Link } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 150px;
  min-width: 150px;
  border-radius: 8px;
  height: 291px;

  .image {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 100%;
    min-height: calc(150px * 1.5);
    height: calc(150px * 1.5);
    background: #dbdbdb;
    overflow: hidden;
  }
  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
  }
  .glyphicons_v2 {
    position: relative;
    top: 0;
    left: 0;
    line-height: inherit;
    background-position: center center;
    background-repeat: no-repeat;
    color: inherit;
    box-sizing: border-box;
  }
  .glyphicons_v2.picture.grey {
    background-image: url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg");
  }
  .no_image_holder {
    width: 100%;
    height: 100%;
    background-color: #dbdbdb;
    background-size: 50%;
    box-sizing: border-box;
    border-radius: 8px;
    border: 0;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
export default function Movie({ movie }) {
  console.log(movie);
  return (
    <CardWrapper className="CardWrapper">
      <div className="image">
        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
          {/* <Link>
            <img
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
              alt={movie?.original_title}
            />
          </Link> */}
        </div>
      </div>
    </CardWrapper>
  );
}
