import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoadingSkeleton from "../../ui/LoadingSkeleton";
import Menus from "../../ui/Menus";
import { FaList } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { GoBookmarkFill } from "react-icons/go";
import { IoMdStar } from "react-icons/io";

export const CardWrapper = styled.div`
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
  a {
    /* display: block; */
    width: 100%;
    height: 100%;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
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
    row-gap: 4px;
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
  const navigate = useNavigate();
  return (
    <>
      {!movie.original_title && !movie.name && (
        <CardWrapper className="CardWrapper">
          <div className="wrapper-image ">
            <LoadingSkeleton />
          </div>
        </CardWrapper>
      )}

      {(movie.original_title ?? movie.name) && (
        <CardWrapper className="CardWrapper">
          <div className="wrapper-image image">
            <Link>
              <img
                loading="lazy"
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={movie?.original_title ?? movie.name}
              />
            </Link>
            {/* <div className="options icon-more"></div> */}
            <Menus.Toggle id={movie.id} />
            <Menus.List id={movie.id}>
              <Menus.Button icon={<FaList />} onclick={() => navigate("/")}>
                Add to list
              </Menus.Button>
              <Menus.Button icon={<MdFavorite />}>Favorite</Menus.Button>
              <Menus.Button icon={<GoBookmarkFill />}>Watchlist</Menus.Button>
              <Menus.Button icon={<IoMdStar />}>Your rating</Menus.Button>
            </Menus.List>
          </div>
          <div className="content">
            <div className="consensus"></div>
            <h2 className="dot-text">
              <Link>{movie?.original_title ?? movie.name}</Link>
            </h2>
            <p>{movie?.release_date ?? movie?.first_air_date}</p>
          </div>
        </CardWrapper>
      )}
    </>
  );
}
