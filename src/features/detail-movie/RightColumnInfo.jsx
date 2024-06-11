import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import styled from "styled-components";
const RightColumnInfoStyled = styled.div`
  min-width: 26rem;
  width: 26rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem; /* height: 50rem; */
  .info-item {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    row-gap: 0.4rem;
    p {
      font-weight: 600;
    }
    span {
      font-size: 1.6rem;
    }
  }
  .section-keyword {
    margin-top: 1rem;
    .keyword {
      padding: 0.4rem 1rem;
      background-color: rgba(0, 0, 0, 0.1);
      border: 0.1rem solid #d7d7d7;
      border-radius: 0.4rem;
    }
    h4 {
      margin-bottom: 1rem;
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    row-gap: 0.5rem;
    column-gap: 0.5rem;
  }
  li {
    font-size: 1.4rem;
    white-space: nowrap;
    font-weight: 400;
  }
`;
const External = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;
  height: 2.4rem;
  margin-bottom: 1rem;
  .homepage {
    border-left: 0.1rem solid #d7d7d7;
    padding-left: 0.8rem;
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
          <FaFacebook size={"2.4rem"} />
        </div>
        <div className="tooltip">
          <span className="tooltiptext top">Visit Twitter</span>
          <FaTwitter size={"2.4rem"} />
        </div>
        <div className="tooltip">
          <span className="tooltiptext top">Visit Instagram</span>
          <FaInstagram size={"2.4rem"} />
        </div>
        <div className="tooltip homepage">
          <span className="tooltiptext top">Visit Homepage</span>
          <IoHomeOutline size={"2.4rem"} />
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
