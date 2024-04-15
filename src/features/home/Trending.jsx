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
  h2 {
    margin-right: 20px;
    font-weight: 600;
    font-size: 1.5em;
    color: ${(props) => (props.$dark ? "#000" : "#fff")};
  }
  .selector {
    display: flex;
    align-items: center;
    border: 1px solid ${(props) => (props.$dark ? "#032541" : "#1ed5a9")};
    border-radius: 30px;
    position: relative;
    min-width: ${(props) => props.$length * 120}px;
  }
  h3 {
    font-size: 1em;
    padding: 4px 20px;
  }
  .anchor-tab {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  .selector h3 a {
    transition: -webkit-text-fill-color 0.5s;
    color: ${(props) => (props.$dark ? "#032541" : "#fff")};
    font-weight: 600;
  }
  .selected h3 a {
    background: linear-gradient(to right, #c0fecf 0, #1ed5a9 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: ${(props) =>
      props.$dark ? "transparent" : "#032541"};
    color: ${(props) => (props.$dark ? "transparent" : "#032541")};
  }
  .background {
    z-index: -1;
    background: ${(props) =>
      props.$dark
        ? "#032541"
        : "linear-gradient(to right, #c0fecf 0, #1ed5a9 100%)"};
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px;
    height: 100%;
    width: calc(${(props) => 100 / props.$length}% + 1px);
    transition: 0.5s all ease;
    transform: translateX(-1px);
  }
  .translate-to-lef {
    transform: translateX(${(props) => props.$index * 100}%) translateX(-1px);
  }
`;
export default function Trending({ dark, title, tabs, activeTab, onTabClick }) {
  return (
    <TrendingWrapper className="TrendingWrapper">
      <TrendingContent className="TrendingContent content-wrapper">
        <TrendingHeader $dark={dark} $length={tabs?.length} $index={activeTab}>
          <h2>{title}</h2>
          <div className="selector">
            {tabs?.map((tab) => {
              return (
                <div
                  key={tab.id}
                  className={`anchor-tab ${
                    tab.id === activeTab ? "selected" : ""
                  }`}
                  onClick={() => onTabClick(tab.id)}
                >
                  <h3>
                    <Link>{tab.title}</Link>
                  </h3>
                </div>
              );
            })}
            <div
              className={`background ${
                tabs && activeTab !== tabs[0]?.id ? "translate-to-lef" : ""
              }`}
            ></div>
          </div>
        </TrendingHeader>
      </TrendingContent>
    </TrendingWrapper>
  );
}
