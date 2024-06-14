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
import { useSelector } from "react-redux";
export const MenuMovie = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 4.6rem;
  background-color: white;
  margin-top: 6.4rem;
  ul {
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    list-style-type: none;
    gap: 4.8rem;
  }
  li {
    cursor: pointer;
  }
  li a {
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    margin-right: 0;
  }
`;
export const OtherContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  .content-wrapper {
    flex-direction: row;
  }
`;

export default function DetailMovie() {
  const isLoading = useSelector((state) => state.detailMovie.isLoading);

  return (
    <>
      <MenuMovie className="MenuMovie">
        {!isLoading && (
          <ul>
            <MyToolTip
              name="Overview"
              list={tooltipOverview}
              showIcon={true}
              selected={true}
            />
            <MyToolTip
              name="Media"
              list={tooltipMedia}
              showIcon={true}
              showNumber={true}
            />
            <MyToolTip name="Fandom" list={tooltipFandom} showIcon={true} />
            <MyToolTip name="Share" list={tooltipShare} showIcon={true} />
          </ul>
        )}
      </MenuMovie>
      <DetailInfoMovie />
      <OtherContentWrapper>
        <div className="content-wrapper detail-movie">
          {!isLoading && <TopBilledCast />}
          {!isLoading && <RightColumnInfo />}
        </div>
      </OtherContentWrapper>
    </>
  );
}
