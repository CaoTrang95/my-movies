import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LoadingSkeleton from "../../../ui/LoadingSkeleton";
import Modal from "../../../ui/Modal";
import YoutubeFrame from "../youtube-frame/YoutubeFrame";
import Menus from "../../../ui/Menus";
import { FaList } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { GoBookmarkFill } from "react-icons/go";
import { IoMdStar } from "react-icons/io";

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
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  background-color: #dbdbdb;
  box-shadow: inset 0 0 1px 1px #000;
  &:hover .play-icon {
    transform: scale(1.3);
  }
  &:hover {
    box-shadow: inset 0 0 1px 1px #000;
    transform: scale(1.05);
  }
  img {
    object-fit: cover;
    border-radius: 8px;
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

  .play-icon {
    width: 1em;
    min-width: 1em;
    min-height: 1em;
    height: 1em;
    background-image: url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-175-play-806cb05551791b8dedd7f8d38fd3bd806e2d397fcfeaa00a5cc9129f0819fd07.svg");
    background-repeat: no-repeat;
    filter: invert(1);
    transition: all 0.2s ease-in-out;
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
  const navigate = useNavigate();
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
            <div className="play-wrapper">
              <Modal>
                <Modal.Open opens="show-video" moveId={movie.id}>
                  <span className="play-icon"></span>
                </Modal.Open>
                <Modal.Window name="show-video" movieName={movie.title}>
                  <YoutubeFrame id={movie.id} />
                </Modal.Window>
              </Modal>
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
