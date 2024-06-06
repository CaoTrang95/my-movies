import { useSelector } from "react-redux";
import styled from "styled-components";
const StyledRecommend = styled.div`
  width: 100%;
  height: 300px;
  border-top: 1px solid #d7d7d7;
  margin-top: 30px;
  padding-top: 20px;
  .list-recommend {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    gap: 20px;
  }
  .recomend-wrapper {
    width: 250px;
    min-width: 250px;
    height: 140px;
    min-height: 140px;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 6px;
  }
  .recommend:hover {
  }
`;
export default function Recommendation() {
  const recommendations = useSelector(
    (state) => state.detailMovie.recommendations
  );
  return (
    <StyledRecommend>
      <h3>Recommendations</h3>
      <div className="list-recommend scroll">
        {recommendations &&
          recommendations.map((item) => (
            <div className="recommend" key={item.id}>
              <div className="recomend-wrapper">
                <img
                  loading="lazy"
                  src={`https://media.themoviedb.org/t/p/w250_and_h141_face${item.backdrop_path}`}
                  srcSet={`https://media.themoviedb.org/t/p/w250_and_h141_face${item.backdrop_path} 1x, 
                 https://media.themoviedb.org/t/p/w500_and_h282_face${item.backdrop_path} 2x`}
                  alt={item.original_title}
                ></img>
              </div>
              <div className="info">
                <span>{item.original_title}</span>
                <span>
                  {item.vote_average * 10 !== 0
                    ? Math.ceil(item.vote_average * 10) + "%"
                    : "NR"}
                </span>
              </div>
            </div>
          ))}
      </div>
    </StyledRecommend>
  );
}
