import { Link } from "react-router-dom";
import styled from "styled-components";

const TabWrapper = styled.section`
  width: 100%;
  display: flex;
`;
const TabContent = styled.div``;
const TabHeader = styled.div`
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
    top: 0;
    left: 0;
    min-width: ${(props) => props.$length * 120}px;
  }
  h3 {
    font-size: 1em;
    padding: 4px 20px;
    z-index: 1;
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
  .translate-to-left {
    transform: translateX(${(props) => props.$tabIndex * 100}%) translateX(-1px);
  }
`;
export default function Tab({
  dark,
  title,
  tabs,
  activeTab,
  tabIndex,
  onTabClick,
}) {
  return (
    <TabWrapper className="TabWrapper">
      <TabContent className="TabContent">
        <TabHeader $dark={dark} $length={tabs?.length} $tabIndex={tabIndex}>
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
                tabs && activeTab !== tabs[0]?.id ? "translate-to-left" : ""
              }`}
            ></div>
          </div>
        </TabHeader>
      </TabContent>
    </TabWrapper>
  );
}
