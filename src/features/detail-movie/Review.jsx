import { useSelector } from "react-redux";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const SocialMenu = styled.div`
  width: 100%;
  border-top: 1px solid #d7d7d7;
  padding-top: 30px;
  padding-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  align-self: center;
  gap: 30px;
  && h3,
  && h4 {
    margin: 0;
    padding-bottom: 5px;
  }
  .active {
    border-bottom: 4px solid #000;
  }
`;
const Review = styled.div`
  width: 100%;
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  .grouped {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .avatar {
    width: 45px;
    height: 45px;
    font-size: 1.1em;
    color: white;
    background-color: #${(props) => props.$colorAvatar};
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  && h3 {
    font-size: 1.3em;
    margin: 0;
  }
  .info {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }
  .others {
    display: flex;
    align-items: center;
    .rating {
      padding: 4px 4px;
      background-color: var(--tmdbDarkBlue);
      font-weight: 600;
      color: #fff;
      border-radius: 6px;
      border: 1px solid var(--tmdbDarkBlue);
      font-size: 0.9em;
      margin-right: 8px;
      display: flex;
      gap: 4px;
    }
    .author {
      font-weight: 300;
      font-size: 0.9em;
    }
  }
  .content {
    padding-top: 20px;
    white-space: pre-wrap;
    font-size: 1em;
    p {
      margin-bottom: 16px;
    }
    p a {
      color: #000;
      text-decoration: underline;
    }
  }
`;
function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
export default function Social() {
  const reviews = useSelector((state) => state.detailMovie.reviews);
  const colorAvatar = randomColor();
  const date = new Date(reviews[0]?.created_at);
  const createAt = date.toDateString();
  let contents = reviews[5]?.content.split(/\r\n/);
  contents = contents?.filter((item) => item !== "");
  if (contents?.length > 3) {
    contents = contents.slice(0, 4);
    contents[3] = contents[3].split(" ").slice(0, 3).join(" ");
  }
  return (
    <>
      <SocialMenu>
        <h3>Social</h3>
        <h4 className="active"> Reviews {reviews.length}</h4>
        <h4>Discussions</h4>
      </SocialMenu>
      <Review $colorAvatar={colorAvatar}>
        <div className="grouped">
          <div className="avatar">
            {!reviews[0]?.author_details?.avatar_path && (
              <span>{reviews[0]?.author[0]}</span>
            )}
            {reviews[0]?.author_details?.avatar_path && (
              <img
                loading="lazy"
                src={`https://media.themoviedb.org/t/p/w45_and_h45_face${reviews[0]?.author_details?.avatar_path}`}
                srcset={`https://media.themoviedb.org/t/p/w45_and_h45_face${reviews[0]?.author_details?.avatar_path} 1x, 
               https://media.themoviedb.org/t/p/w90_and_h90_face${reviews[0]?.author_details?.avatar_path} 2x`}
                alt="CinemaSerf"
              ></img>
            )}
          </div>
          <div className="info">
            <h3>A review by {reviews[0]?.author}</h3>
            <div className="others">
              <div className="rating">
                <FaStar /> {reviews[0]?.author_details?.rating * 10}%
              </div>
              <div className="author">
                Written by {reviews[0]?.author} on {createAt}
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          {contents?.map((item, index) => (
            <div key={item}>
              {index !== 3 && <p>{item}</p>}
              {index === 3 && (
                <p>
                  {item}... <Link to="/">read the rest</Link>
                </p>
              )}
            </div>
          ))}
        </div>
      </Review>
      <Link>
        <h4>Read All Reviews</h4>
      </Link>
    </>
  );
}
