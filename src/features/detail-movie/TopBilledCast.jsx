import { useSelector } from "react-redux";
import styled from "styled-components";
import Cast from "./Cast";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Social from "./Review";
import Media from "./Media";
import Recommendation from "./Recommendation";
const TopBilledCastWrapper = styled.div`
  width: calc(100vw - 8rem - 26.8rem);
  max-width: calc(var(--maxPrimaryPageWidth) - 8rem - 26.8rem);
  padding-right: 3rem;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  h3 {
    font-weight: 600;
    font-size: 1.4em;
    margin-bottom: 2rem;
  }
  h4 {
    color: #000;
    margin-top: 3rem;
    font-size: 1.8rem;
    cursor: pointer;
  }
  h4:hover {
    color: rgba(0, 0, 0, 0.5);
  }
  .list-casts {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
  }
  .scroll::after {
    transition: linear 0.3s;
    opacity: 1;
    content: "";
    width: 6rem;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0,
      #fff 100%
    );
    will-change: opacity;
    pointer-events: none;
  }
  .view-more {
    margin-left: 1rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem 0 1rem;
    a {
      white-space: nowrap;
      font-weight: 700;
      color: #000;
    }
  }
`;
export default function TopBilledCast() {
  const casts = useSelector((state) => state.detailMovie.casts);
  const castsShow = casts.slice(0, 9);
  return (
    <TopBilledCastWrapper>
      <h3>Top Billed Cast</h3>
      <div className="list-casts scroll">
        {castsShow.map((cast) => (
          <Cast key={cast.id} cast={cast} />
        ))}
        {casts.length > 10 && (
          <div className="view-more">
            <p>
              <Link>
                View More <FaArrowRight />
              </Link>
            </p>
          </div>
        )}
      </div>
      <Link to={"/"}>
        <h4>Full Cast & Crew</h4>
      </Link>
      <Social />
      <Media />
      <Recommendation />
    </TopBilledCastWrapper>
  );
}
