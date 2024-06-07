import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowAltCircleRight, FaPlay } from "react-icons/fa";
const MediaMenu = styled.div`
  width: 100%;
  border-top: 1px solid #d7d7d7;
  margin-top: 30px;
  display: flex;
  gap: 30px;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 8px;
  position: relative;
  && h3,
  && h4 {
    margin: 0;
  }
  a {
    color: var(--tmbLightBlue);
    font-weight: 600;
    font-size: 0.9em;
    position: absolute;
    right: 20px;
  }
  .active {
    /* box-shadow: 0px -3px 0px 0px #000 inset; */
    border-bottom: 4px solid #000000;
  }
  ul {
    list-style-type: none;
    display: flex;
    /* align-items: center; */
    gap: 20px;
  }
  li {
    font-size: 1.1em;
    font-weight: 600;
    padding: 8px 0;
    display: inline-block;
    box-sizing: border-box;
  }
  .number {
    opacity: 0.6;
    font-weight: 600;
  }
`;
const Content = styled.div`
  width: 100%;
  .list-contents {
    overflow-x: scroll;
    overflow-y: hidden;
    border-radius: 8px;
    display: flex;
  }
  .backdrop {
    width: 500px;
    min-width: 500px;
    height: 300px;
    min-height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-size: 20%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .popular {
    height: 300px;
    min-height: 300px;
    img {
      object-fit: cover;
    }
  }
  .poster {
    min-width: 200px;
    width: 200px;
    min-height: 300px;
    height: 300px;
    display: flex;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .view-more {
    margin-left: 10px;
    margin-right: 18px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      font-size: 1.1em;
      white-space: nowrap;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }
  }
`;
const VideoImage = styled.div`
  background-image: url(${(props) => props.$videoImage});
  background-position: center;
  background-size: 100%;
  color: #fff;
  font-size: 1.2em;
  width: 500px;
  min-width: 500px;
  height: 300px;
  min-height: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  .play-background {
    width: 67px;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
  }
`;
export default function Media() {
  const [id, setId] = useState("popular");
  const backdrops = useSelector((state) => state.detailMovie.backdrops);
  const posters = useSelector((state) => state.detailMovie.posters);
  const videos = useSelector((state) => state.detailMovie.videos);
  const backdropsShow =
    id === "popular" ? backdrops.slice(0, 1) : backdrops.slice(0, 6);
  const postersShow =
    id === "popular" ? posters.slice(0, 1) : posters.slice(0, 6);
  const videosShow = id === "popular" ? videos.slice(0, 1) : videos.slice(0, 6);
  const medias = [
    { id: "popular", name: "Most Popular" },
    { id: "video", name: "Videos", number: videos.length },
    { id: "backdrop", name: "Backdrops", number: backdrops.length },
    { id: "poster", name: "Posters", number: posters.length },
  ];
  const viewAll = medias.find((item) => item.id === id).name;
  function onClickHandler(id) {
    setId(id);
  }
  return (
    <>
      <MediaMenu>
        <h3>Media</h3>
        <ul>
          {medias.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className={`${id === item.id ? "active" : ""}`}
              onClick={() => onClickHandler(item.id)}
            >
              {item.name}
              {item.number && <span className="number"> {item.number}</span>}
            </li>
          ))}
        </ul>
        {id === "video" && videos.length > 6 && <Link>View All {viewAll}</Link>}
        {id === "poster" && posters.length > 6 && (
          <Link>View All {viewAll}</Link>
        )}
        {id === "backdrop" && backdrops.length > 6 && (
          <Link>View All {viewAll}</Link>
        )}
      </MediaMenu>
      <Content>
        <div className="list-contents scroll">
          {(id === "video" || id === "popular") &&
            videosShow &&
            videosShow.map((item) => (
              <VideoImage
                key={item.key}
                className="video"
                $videoImage={`https://i.ytimg.com/vi/${item.key}/hqdefault.jpg`}
              >
                <div className="play-background">
                  <FaPlay></FaPlay>
                </div>
              </VideoImage>
            ))}
          {(id === "backdrop" || id === "popular") &&
            backdropsShow &&
            backdropsShow.map((item) => (
              <div className="backdrop">
                <img
                  src={`https://media.themoviedb.org/t/p/w533_and_h300_bestv2${item.file_path}`}
                  srcSet={`https://media.themoviedb.org/t/p/w533_and_h300_bestv2${item.file_path} 1x, 
                https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${item.file_path} 2x`}
                  alt="backdrop"
                ></img>
              </div>
            ))}
          {(id === "poster" || id === "popular") &&
            postersShow &&
            postersShow.map((item) => (
              <div className="poster">
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.file_path}`}
                  srcSet={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.file_path} 1x, 
                  https://media.themoviedb.org/t/p/w440_and_h660_face${item.file_path} 2x`}
                  alt="poster"
                ></img>
              </div>
            ))}
          <div className="view-more">
            <Link>
              <span> View More</span> <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
      </Content>
    </>
  );
}
