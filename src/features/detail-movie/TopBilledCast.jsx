import { useSelector } from "react-redux";
import styled from "styled-components";
import Cast from "./Cast";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const TopBilledCastWrapper = styled.div`
  width: calc(100vw - 80px - 268px);
  max-width: calc(var(--maxPrimaryPageWidth) - 80px - 268px);
  padding-right: 30px;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  h3 {
    font-weight: 600;
    font-size: 1.4em;
    margin-bottom: 20px;
  }
  .list-casts {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
  }
  &::after {
    transition: linear 0.3s;
    opacity: 1;
    content: "";
    width: 60px;
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
    margin-left: 10px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    a {
      white-space: nowrap;
      font-weight: 700;
      color: #000;
    }
  }
`;
export default function TopBilledCast() {
  const casts = useSelector((state) => state.detailMovie.casts);
  const isLoading = useSelector((state) => state.detailMovie.isLoading);
  return (
    <TopBilledCastWrapper>
      <h3>Top Billed Cast</h3>
      <div className="list-casts scroll">
        {!isLoading && casts.map((cast) => <Cast key={cast.id} cast={cast} />)}
        <div className="view-more">
          <p>
            <Link>
              View More <FaArrowRight />
            </Link>
          </p>
        </div>
      </div>
    </TopBilledCastWrapper>
  );
}
