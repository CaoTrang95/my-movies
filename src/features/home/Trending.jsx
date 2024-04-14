import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TrendingWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const TrendingContent = styled.div``;
const TrendingHeader = styled.div`
  display: flex;
  padding-left: 40px;
  padding-right: 40px;
  h2 {
    margin-right: 20px;
    font-weight: 600;
    font-size: 1.5em;
  }
  .selector {
    display: flex;
    align-items: center;
    border: 1px solid var(--tmdbDarkBlue);
    border-radius: 30px;
  }
  h3 {
    font-size: 1em;
    padding: 4px 20px;
  }
  .anchor {
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .selector h3 a {
    transition: -webkit-text-fill-color 0.5s;
    color: var(--tmdbDarkBlue);
    font-weight: 600;
  }
  .selected h3 a {
    background: linear-gradient(to right, #c0fecf 0, #1ed5a9 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
  .background {
    z-index: -1;
    background: var(--tmdbDarkBlue);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px;
    height: 100%;
    width: 100%;
    transition: left 0.5s;
  }
`;

export default function Trending() {
  const [isToday, setIsToday] = useState(true);
  return (
    <TrendingWrapper className="TrendingWrapper">
      <TrendingContent className="TrendingContent content-wrapper">
        <TrendingHeader>
          <h2>Trending</h2>
          <div className="selector">
            <div className={`anchor ${isToday ? "selected" : ""}`}>
              <h3 onClick={() => setIsToday(true)}>
                <Link>Today</Link>
              </h3>
              <div
                className="background"
                style={{
                  width: isToday ? "81.5859px" : "109.328px",
                  left: isToday ? "0px" : "81.5859px",
                }}
              ></div>
            </div>
            <div className={`anchor ${!isToday ? "selected" : ""}`}>
              <h3 onClick={() => setIsToday(false)}>
                <Link>This week</Link>
              </h3>
            </div>
          </div>
        </TrendingHeader>
      </TrendingContent>
    </TrendingWrapper>
  );
}
