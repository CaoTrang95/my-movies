import styled from "styled-components";

export const WrapperLeaderBoard = styled.li`
  display: flex;
  width: 50%;
  padding-right: 2rem;
  .avatar {
    width: 5.6rem;
    min-width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    background-color: #${(props) => props.$randomColor};
    margin-right: 1rem;
    overflow: hidden;
  }
  .name-avatar {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    color: #fff;
    text-transform: uppercase;
  }
  && img {
    width: 100%;
    height: 100%;
  }
  .data {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .meter {
    display: flex;
    align-items: center;
    height: 0.8rem;
    margin-top: 0.6rem;
    width: 100%;
  }
  .board-bar {
    height: 100%;
    margin-right: 1rem;
    border-radius: 0.8rem;
  }
  .all {
    width: ${(props) => props.$allPercent}%;
    background: linear-gradient(
      to right,
      var(--tmdbLighterGreen) 0%,
      var(--tmdbLightGreen) 100%
    );
  }
  .this-week {
    width: ${(props) => props.$weekPercent}%;
    background: linear-gradient(
      to right,
      var(--tmdbLogoOrange) 0%,
      var(--tmdbLogoRed) 100%
    );
  }
`;
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

export default function LeaderBoardItem({ board, maxLeader, maxThisWeek }) {
  const allPercent = (board.all / maxLeader) * 100;
  const lastAllPercent = allPercent < 10 ? 10 : allPercent;
  const weekPercent = (board.thisWeek / maxThisWeek) * 100;
  const lastWeekPercent = weekPercent < 10 ? 10 : weekPercent;
  const colorAvatar = randomColor();

  return (
    <WrapperLeaderBoard
      $allPercent={lastAllPercent}
      $weekPercent={lastWeekPercent}
      $randomColor={colorAvatar}
    >
      <div className="avatar">
        {!board.avatar && <span className="name-avatar">{board.name[0]}</span>}
        {board.avatar && <img src={board.avatar} alt="avatar"></img>}
      </div>
      <div className="data">
        <h3>{board.name}</h3>
        <div className="meter">
          <div className="board-bar all"></div>
          <h4>{numberWithCommas(board.all)}</h4>
        </div>
        <div className="meter">
          <div className="board-bar this-week"></div>
          <h4>{numberWithCommas(board.thisWeek)}</h4>
        </div>
      </div>
    </WrapperLeaderBoard>
  );
}
