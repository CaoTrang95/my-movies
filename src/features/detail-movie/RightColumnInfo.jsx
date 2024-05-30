import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import styled from "styled-components";
const RightColumnInfoStyled = styled.div`
  min-width: 260px;
  width: 260px;
  display: flex;
  flex-direction: column;
  row-gap: 20px; /* height: 500px; */
  .info-item {
    display: flex;
    flex-direction: column;
    font-size: 1em;
    row-gap: 4px;
    p {
      font-weight: 600;
    }
    span {
      font-size: 1em;
    }
  }
  .section-keyword {
    margin-top: 10px;
    .keyword {
      padding: 4px 10px;
      background-color: rgba(0, 0, 0, 0.1);
      border: 1px solid #d7d7d7;
      border-radius: 4px;
    }
    h4 {
      margin-bottom: 10px;
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    row-gap: 5px;
    column-gap: 5px;
  }
  li {
    font-size: 0.9em;
    white-space: nowrap;
    font-weight: 400;
  }
`;
const External = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  height: 24px;
  margin-bottom: 10px;
  .homepage {
    border-left: 1px solid #d7d7d7;
    padding-left: 8px;
  }
`;
function numberWithCommas(x) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default function RightColumnInfo() {
  const movie = useSelector((state) => state.detailMovie.movie);
  const keywords = useSelector((state) => state.detailMovie.keywords);
  return (
    <RightColumnInfoStyled>
      <External>
        <div className="tooltip">
          <span className="tooltiptext top">Visit Facebook</span>
          <FaFacebook size={"24px"} />
        </div>
        <div className="tooltip">
          <span className="tooltiptext top">Visit Twitter</span>
          <FaTwitter size={"24px"} />
        </div>
        <div className="tooltip">
          <span className="tooltiptext top">Visit Instagram</span>
          <FaInstagram size={"24px"} />
        </div>
        <div className="tooltip homepage">
          <span className="tooltiptext top">Visit Homepage</span>
          <IoHomeOutline size={"24px"} />
        </div>
      </External>
      <div className="info-item">
        <p>Status</p>
        <span>{movie.status}</span>
      </div>
      <div className="info-item">
        <p>Original Language</p>
        <span>{movie.originalLanguage}</span>
      </div>
      <div className="info-item">
        <p>Budget</p>
        <span>${numberWithCommas(movie.budget)}.00</span>
      </div>
      <div className="info-item">
        <p>Revenue</p>
        <span>${numberWithCommas(movie.revenue)}.00</span>
      </div>
      <div className="section-keyword">
        <h4>Keywords</h4>
        <ul>
          {keywords?.map((item) => (
            <li className="keyword" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </RightColumnInfoStyled>
  );
}
