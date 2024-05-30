import styled from "styled-components";
import MyToolTip from "../ui/Tooltip";
import DetailInfoMovie from "../features/detail-movie/DetailInfoMovie";
import {
  tooltipFandom,
  tooltipMedia,
  tooltipOverview,
  tooltipShare,
} from "../mock-datas/optionsList";
import TopBilledCast from "../features/detail-movie/TopBilledCast";
import RightColumnInfo from "../features/detail-movie/RightColumnInfo";
const MenuMovie = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 46px;
  background-color: white;
  margin-top: 64px;
  ul {
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    list-style-type: none;
  }
  li {
    cursor: pointer;
    margin-right: 48px;
  }
  li a {
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    margin-right: 0;
  }
`;
const OtherContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  .content-wrapper {
    flex-direction: row;
  }
`;

export default function DetailMovie() {
  return (
    <>
      <MenuMovie className="MenuMovie">
        <ul>
          <MyToolTip name="Overview" list={tooltipOverview} showIcon={true} />
          <MyToolTip
            name="Media"
            list={tooltipMedia}
            showIcon={true}
            showNumber={true}
          />
          <MyToolTip name="Fandom" list={tooltipFandom} showIcon={true} />
          <MyToolTip name="Share" list={tooltipShare} showIcon={true} />
        </ul>
      </MenuMovie>
      <DetailInfoMovie />
      <OtherContentWrapper>
        <div className="content-wrapper">
          <TopBilledCast />
          <RightColumnInfo />
        </div>
      </OtherContentWrapper>
      ;
    </>
  );
}
