import { Link } from "react-router-dom";
import styled from "styled-components";
const CastWrapper = styled.div`
  margin: 10px 4px 10px 10px;
  border: 1px solid rgba(227, 227, 227, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  min-width: 140px;
  width: 140px;
  a {
    min-width: 138px;
    width: 138px;
    height: 175px;
    display: block;
  }
  img {
    width: 100%;
    height: 100%;
  }
  p {
    padding: 0 10px;
    padding-top: 10px;
    font-size: 1em;
    font-weight: 700;
    color: #000;
  }
  .character {
    font-weight: 500;
    font-size: 0.9em;
  }
  .picture-avatar {
    width: 100%;
    height: 100%;
    background-color: #dbdbdb;
    background-size: 50%;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.$gender});
  }
`;
export default function Cast({ cast }) {
  const avatarMale =
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg";
  const avatarFemale =
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg";
  return (
    <CastWrapper $gender={cast.gender === 2 ? avatarMale : avatarFemale}>
      <Link>
        {!cast?.profile_path && <div className="picture-avatar"></div>}
        {cast?.profile_path && (
          <img
            loading="lazy"
            src={`https://media.themoviedb.org/t/p/w138_and_h175_face${cast?.profile_path}`}
            srcSet={`https://media.themoviedb.org/t/p/w138_and_h175_face${cast?.profile_path} 1x, https://media.themoviedb.org/t/p/w276_and_h350_face${cast?.profile_path} 2x`}
            alt={cast?.name}
          ></img>
        )}
      </Link>
      <p>{cast.name}</p>
      <p className="character">{cast.character}</p>
    </CastWrapper>
  );
}
