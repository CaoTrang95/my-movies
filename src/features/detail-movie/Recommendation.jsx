import { useSelector } from "react-redux";
import styled from "styled-components";
import { FaRegCalendarAlt, FaHeart, FaBookmark } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
const StyledRecommend = styled.div`
  width: 100%;
  border-top: 0.1rem solid #d7d7d7;
  margin-top: 3rem;
  padding-top: 2rem;
  .list-recommend {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    gap: 2rem;
    padding-bottom: 1.4rem;
  }
  .recommend-card {
    /* background-color: #fafafa;
    box-shadow: 0 1px 2px rgba(145, 6, 191, 0.3), 0 1px 3px rgba(0, 0, 0, 0.15);
    border-radius: 0.8rem; */
    position: relative;
  }
  // khi hover thi doi mau recommend card, ban dau de hidden
  .recommend-card:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /* background-color: rgba(49, 238, 235, 0.16); */
    border-radius: 0.8rem;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    transition: 0.15s all ease;
  }
  // khi hover thi visible doi mau card
  .recommend-card:hover::after {
    opacity: 1;
    visibility: visible;
    z-index: 5;
  }
  //anh se la cha relative
  .image-wrapper {
    position: relative;
    width: 25rem;
    min-width: 25rem;
    height: 14rem;
    min-height: 14rem;
    border-radius: 0.8rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 0.6rem;
  }
  .recommend-footer {
    width: 100%;
    border-radius: 0 0 0.8rem 0.8rem;
    padding: 0.6rem 1rem;
    border-top: 0.5px solid #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    z-index: 6;
    bottom: 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.15);
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: saturate(180%) blur(50px);
    background-color: rgba(255, 255, 255, 0.27);
    //nếu không cần đổ bóng thì chỉ đơn giản chọn màu trong suốt một chút
    /* background-color: rgba(255, 255, 255, 0.9); */
    transition: 0.15s all ease;
    .footer-left {
      display: flex;
      gap: 0.8rem;
    }
    .footer-right {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      .icons-top {
        display: flex;
        gap: 0.4rem;
      }
    }
  }
  //khi hover vao recommend-card thi hien thi recommend-footer
  .recommend-card:hover .recommend-footer {
    opacity: 1;
    visibility: visible;
  }
  //khi hover vao recommend-card thi co them background phu len recommend-footer, lam cho recommend-footer toi mau hon
  .recommend-card:hover .recommend-footer:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.39);
    z-index: -1;
  }
  //khi hover vao recommend-card thi co translateY(-100%)
  /* tạo hiệu ứng hắt màu background lên trên phía ảnh bắt đầu từ recommend-footer (ban đầu nó sẽ có màu này ở recommend-footer) */
  .recommend-card:hover .recommend-footer:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.12));
    transform: translateY(-100%);
  }
  //tạo phân cách
  .footer-left span:last-child {
    position: relative;
  }
  .footer-left span:last-child::after {
    content: "";
    position: absolute;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.16);
    height: 1.4rem;
    left: -0.4rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;
export default function Recommendation() {
  const recommendations = useSelector(
    (state) => state.detailMovie.recommendations
  );
  const movieName = useSelector((state) => state.detailMovie.movie.title);
  return (
    <StyledRecommend>
      <h3>Recommendations</h3>
      <div className="list-recommend scroll">
        {recommendations &&
          recommendations.map((item) => (
            <div className="recommend-card" key={item.id}>
              <div className="image-wrapper">
                <img
                  loading="lazy"
                  src={`https://media.themoviedb.org/t/p/w250_and_h141_face${item.backdrop_path}`}
                  srcSet={`https://media.themoviedb.org/t/p/w250_and_h141_face${item.backdrop_path} 1x, 
                 https://media.themoviedb.org/t/p/w500_and_h282_face${item.backdrop_path} 2x`}
                  alt={item.title}
                ></img>
                <div className="recommend-footer">
                  <div className="footer-left">
                    <span>
                      <FaRegCalendarAlt />
                    </span>
                    <span> {item.release_date}</span>
                  </div>
                  <div className="footer-right">
                    <div className="icons-top">
                      <FaHeart />
                      <IoStar />
                    </div>
                    <FaBookmark />
                  </div>
                </div>
              </div>
              <div className="info">
                <span>{item.title}</span>
                <span>
                  {item.vote_average * 10 !== 0
                    ? Math.ceil(item.vote_average * 10) + "%"
                    : "NR"}
                </span>
              </div>
            </div>
          ))}
      </div>
      {recommendations.length === 0 && (
        <p>
          We don't have enough data to suggest any movies based on
          <span> {movieName}</span>. You can help by rating movies you've seen.
        </p>
      )}
    </StyledRecommend>
  );
}
