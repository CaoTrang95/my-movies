import styled from "styled-components";
import LeaderBoardItem from "./LeaderBoardItem";
import { leaderboards } from "../../../mock-datas/leaderBoard";

const LeaderBoarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const LeaderBoardContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: var(--maxPrimaryPageWidth);
  width: 100%;
  padding: 0px var(--padding-left-right) var(--padding-top-bottom)
    var(--padding-left-right);
`;
const LeaderBoardTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  h2 {
    margin-right: 2rem;
  }
  .dot {
    display: inline-block;
    border-radius: 50%;
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 1rem;
  }
  .all {
    background: linear-gradient(
      to right,
      var(--tmdbLighterGreen) 0%,
      var(--tmdbLightGreen) 100%
    );
  }
  .this-week {
    background: linear-gradient(
      to right,
      var(--tmdbLogoOrange) 0%,
      var(--tmdbLogoRed) 100%
    );
  }
  p {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    line-height: 1.5;
  }
`;
const LeaderBoardData = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2rem;
  row-gap: 2rem;
`;

function findLeader(leaderboards, key) {
  const leader_meter = leaderboards.map((board) => board[key]);
  return Math.max(...leader_meter);
}
export default function LeaderBoard() {
  const maxLeader = findLeader(leaderboards, "all");
  const maxThisWeek = findLeader(leaderboards, "thisWeek");
  return (
    <LeaderBoarWrapper>
      <LeaderBoardContent>
        <LeaderBoardTitle>
          <h2>Leaderboard</h2>
          <div>
            <p>
              <span className="dot all"></span>All Time Edits
            </p>
            <p>
              <span className="dot this-week"></span>Edits This Week
            </p>
          </div>
        </LeaderBoardTitle>
        <LeaderBoardData>
          {leaderboards.map((board) => (
            <LeaderBoardItem
              key={board.id}
              board={board}
              maxLeader={maxLeader}
              maxThisWeek={maxThisWeek}
            ></LeaderBoardItem>
          ))}
        </LeaderBoardData>
      </LeaderBoardContent>
    </LeaderBoarWrapper>
  );
}
