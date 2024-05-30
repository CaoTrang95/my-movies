import { useEffect } from "react";
import { FaList, FaHeart, FaBookmark, FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovieAsync } from "./detailMovieSlice";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const MovieInfoWrapper = styled.div`
  width: 100%;
  height: 535px;
  background-image: url(${(props) => props.$image});
  background-position: left calc((50vw - 170px) - 340px) top;
  background-size: auto;
  background-repeat: no-repeat;
  .custom_bg {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(
      to right,
      rgba(10.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px),
      rgba(10.5, 31.5, 31.5, 0.84) 50%,
      rgba(10.5, 31.5, 31.5, 0.84) 100%
    );
  }
`;
const MovieInfoContent = styled.div`
  width: var(--maxPrimaryPageWidth);
  padding: 30px 40px;
  display: flex;
  color: #fff;
  .poster-wrapper {
    width: 300px;
    min-width: 300px;
    height: 450px;
    overflow: hidden;
    border-radius: 8px;
    position: relative;
    top: 0;
    left: 0;
  }
  .poster-wrapper:hover > .zoom {
    visibility: visible;
    opacity: 1;
  }
  .zoom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    visibility: hidden;
    opacity: 0;
    transition: linear 0.2s;
    backdrop-filter: blur(20px);
    color: #fff;
    a {
      width: 100%;
      height: 100%;
      font-size: 1.3em;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      gap: 6px;
    }
    .expand {
      min-width: 1em;
      width: 1em;
      min-height: 1em;
      height: 1em;
      background-position: center center;
      background-repeat: no-repeat;
      background-image: url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-216-fullscreen-white-87524788011715a9bd73de86ef577442070ebc9873a7abb2845a6310a7f6174a.svg");
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
  .poster-info {
    padding-left: 40px;
    display: flex;
    flex-direction: column;
  }
  .title {
    margin-bottom: 24px;
    width: 100%;
    h2 {
      font-size: 2rem;
      font-weight: 600;
    }
  }
  .fact {
    display: flex;
    gap: 24px;
  }
  .release-date {
    opacity: 0.8;
    font-weight: 400;
  }
  .time::before,
  .genres::before {
    font-size: 1.1em;
    line-height: 1;
    content: "•";
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0;
    left: -10px;
  }
  .time,
  .genres {
    color: #fff;
    position: relative;
    top: 0;
    left: 0;
    display: inline-flex;
    align-content: center;
    align-items: center;
  }
  .outer-ring {
    width: 68px;
    height: 68px;
    background-color: #081c22;
    border-radius: 50px;
    padding: 4px;
    transform: scale(1);
    transition: transform 0.2s;
  }
  .outer-ring:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .outer-ring .percent {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .outer-ring svg {
    position: relative;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }
  .outer-ring svg circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: ${(props) =>
      props.$percent >= 7
        ? "#204529"
        : props.$percent >= 4
        ? "#423d0f"
        : props.$percent !== 0
        ? "#571435"
        : "#666"};
    stroke-width: 4;
    stroke-linecap: round;
  }
  .outer-ring svg circle:last-of-type {
    stroke-dasharray: 175px;
    stroke-dashoffset: calc(175px - (175px * 73) / 100);
    stroke: ${(props) =>
      props.$percent >= 7
        ? "#21d07a"
        : props.$percent >= 4
        ? "#d2d531"
        : "#db2360"};
  }
  .outer-ring .number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .outer-ring .number h3 {
    font-weight: 200;
    color: #fff;
  }
  .outer-ring .number h3 span {
    font-size: 2rem;
  }
  .outer-ring .title h2 {
    margin: 25px 0 0;
  }
  .rating-text {
    /* position: absolute; */
    color: #fff;
    font-size: 0.6rem;
    font-family: "Consensus" !important;
  }
  .ring-line {
    display: flex;
    align-items: center;
  }
  .user-score {
    font-weight: 700;
    margin-left: 0.25rem;
    line-height: 24px;
  }
  .reactions {
    margin-left: 24px;
    ul {
      list-style: none;
      display: flex;
    }
    li {
      background-color: var(--primaryColor);
      border-radius: 9999px;
      transition-duration: 150ms;
      width: 2.25rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: -0.75rem !important;
      transform: scale(1);
      transition: transform 0.2s;
    }
    li:hover {
      transform: scale(1.25);
    }
    img {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
  .vibes {
    padding: 0.5rem 0.5rem 0.5rem 0.75rem;
    color: #fff;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    background-color: rgba(3, 37, 65, 1);
    border-radius: 9999px;
    margin-left: 12px;
    font-weight: 600;
    transform: scale(1);
    transition: transform 0.2s;
  }
  .vibes:hover {
    transform: scale(1.05);
  }
  .vibe {
    text-underline-offset: 2px;
    text-decoration-thickness: 2px;
    text-decoration-color: #01b4e4;
    text-decoration-line: underline;
    padding-left: 0.25rem;
  }
  .actions {
    ul {
      margin-bottom: 20px;
      margin-top: 20px;
      list-style: none;
      display: flex;
      flex-direction: row;
      gap: 24px;
      color: #fff;
    }
    li {
      background-color: rgba(3, 37, 65, 1);
      border-radius: 50%;
      width: 46px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .play {
      display: flex;
      gap: 6px;
      border: 0;
      background: 0 0;
      width: auto;
      height: auto;
      font-weight: 600;
      will-change: opacity;
      transition: linear 0.1s;
      color: #fff;
    }
    .play a {
      color: #fff;
    }
    .play:hover {
      opacity: 0.6;
    }
  }
  .tagline {
    font-size: 1.1em;
    font-weight: 400;
    font-style: italic;
    opacity: 0.7;
  }
  h3 {
    font-weight: 600;
    font-size: 1.3em;
    margin-top: 10px;
    margin-bottom: 8px;
  }
  .overview {
    line-height: 1.4rem;
    font-size: 0.9em;
  }
  .crews {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    row-gap: 20px;
    margin-top: 20px;
  }
  .crew-item {
    width: 33%;
    flex-basis: 33%;
    display: flex;
    flex-direction: column;
    .crew-name {
      white-space: nowrap;
      font-size: 1em;
      font-weight: 700;
    }
    .crew-job {
      margin-top: 5px;
      font-size: 0.9em;
    }
  }
`;
export default function DetailInfoMovie() {
  const { movieId } = useParams();
  const { isLoading, movie, crews } = useSelector((state) => state.detailMovie);
  const dispatch = useDispatch();
  const percent =
    movie.vote_average * 10 !== 0
      ? Math.ceil(movie.vote_average * 10) + "%"
      : "NR";
  useEffect(() => {
    dispatch(getDetailMovieAsync(movieId));
  }, []);
  return (
    <>
      {!isLoading && (
        <MovieInfoWrapper
          $image={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path}`}
        >
          <div className="custom_bg">
            {!isLoading && (
              <MovieInfoContent $percent={movie.vote_average}>
                <div className="poster-wrapper">
                  <img
                    alt="movie"
                    src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie?.poster_path}`}
                    srcSet={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie?.poster_path} 1x, https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movie?.poster_path} 2x`}
                  />
                  <div className="zoom">
                    <Link>
                      <span className="expand"></span>Expand
                    </Link>
                  </div>
                </div>
                <div className="poster-info">
                  <div className="title">
                    <h2>
                      {movie.original_title}
                      <span className="release-date">
                        {" "}
                        ({movie.release_date?.split("-")[0]})
                      </span>
                    </h2>
                    <div className="fact">
                      <span>{movie.release_date}</span>
                      <span className="genres">
                        {movie?.genres?.map((item) => item.name).join(", ")}
                      </span>
                      <span className="time">
                        {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                      </span>
                    </div>
                  </div>
                  <div className="ring-line">
                    <div className="outer-ring">
                      <div className="percent">
                        <svg>
                          <circle cx="30" cy="30" r="28"></circle>
                          <circle cx="30" cy="30" r="28"></circle>
                        </svg>
                        <div className="number">
                          {/* <span className={`rating-text icon-r70`}></span> */}
                          <h3>{percent}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="user-score">
                      User <br></br>Score
                    </div>
                    <div className="reactions">
                      <ul>
                        <li title="Grinning face">
                          <img
                            alt="smile"
                            src="https://www.themoviedb.org/assets/2/v8/1f600-f53b445a86235a4ef54899ad2f1a936e3ff6d1dcdaafc9ed63d6a6070491c0a1.svg"
                          ></img>
                        </li>
                        <li title="Smiling face with heart eyes">
                          <img
                            alt="heart"
                            src="https://www.themoviedb.org/assets/2/v8/1f60d-f12478ffe50d98da9d6cafbf29ef1777b8d1d2bb123224c978ca9ba4e6e6159b.svg"
                          ></img>
                        </li>
                        <li title="Face exhaling">
                          <img
                            alt="supprice"
                            src="https://www.themoviedb.org/assets/2/v8/1f62e-3e6a508ad2bbd0fdbba61653e9f81b3e4007e140dda8fc6f0e1b24510541ec8c.svg"
                          ></img>
                        </li>
                      </ul>
                    </div>
                    <div className="vibes">
                      What's your <span className="vibe">Vibe</span>?
                    </div>
                  </div>
                  <div className="actions">
                    <ul>
                      <li className="tooltip">
                        <span className="tooltiptext bottom">Add to list</span>
                        <FaList />
                      </li>
                      <li className="tooltip">
                        <span className="tooltiptext bottom">
                          Mark as favorite
                        </span>
                        <FaHeart />
                      </li>
                      <li className="tooltip">
                        <span className="tooltiptext bottom">
                          Add to your watchlist
                        </span>
                        <FaBookmark />
                      </li>
                      <li className="play">
                        <FaPlay />
                        <Link>Play Trailer</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="tagline">{movie.tagline}</div>
                  <h3>Overview</h3>
                  <div className="overview">{movie.overview}</div>
                  <ul className="crews">
                    {crews.map((item) => (
                      <li className="crew-item" key={item.id}>
                        <p className="crew-name">{item.name}</p>
                        <span className="crew-job">{item.job}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MovieInfoContent>
            )}
          </div>
        </MovieInfoWrapper>
      )}
    </>
  );
}
