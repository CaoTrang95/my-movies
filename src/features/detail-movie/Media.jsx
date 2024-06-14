import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowAltCircleRight, FaPlay } from "react-icons/fa";
import Modal from "../../ui/Modal";
import YoutubeFrame from "../home/youtube-frame/YoutubeFrame";
export const MediaMenu = styled.div`
  width: 100%;
  border-top: 0.1rem solid #d7d7d7;
  margin-top: 3rem;
  display: flex;
  gap: 3rem;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 0.8rem;
  position: relative;
  && h3,
  && h4 {
    margin: 0;
  }
  a {
    color: var(--tmbLightBlue);
    font-weight: 600;
    font-size: 1.4rem;
  }
  .active {
    /* box-shadow: 0px -0.3rem 0px 0px #000 inset; */
    border-bottom: 0.4rem solid #000000;
  }
  ul {
    list-style-type: none;
    display: flex;
    /* align-items: center; */
    gap: 2rem;
  }
  li {
    font-size: 1.8rem;
    font-weight: 600;
    padding: 0.8rem 0;
    display: inline-block;
    box-sizing: border-box;
  }
  .number {
    opacity: 0.6;
    font-weight: 600;
  }
`;
export const Content = styled.div`
  width: 100%;
  .list-contents {
    overflow-x: scroll;
    overflow-y: hidden;
    border-radius: 0.8rem;
    display: flex;
  }
  .backdrop {
    width: 50rem;
    min-width: 50rem;
    height: 30rem;
    min-height: 30rem;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1);
    background-size: 20%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .popular {
    height: 30rem;
    min-height: 30rem;
    img {
      object-fit: cover;
    }
  }
  .poster {
    min-width: 20rem;
    width: 20rem;
    min-height: 30rem;
    height: 30rem;
    display: flex;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .view-more {
    margin-left: 1rem;
    margin-right: 1.8rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      font-size: 1.8rem;
      white-space: nowrap;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
    }
  }
`;
const VideoImage = styled.div`
  background-image: url(${(props) => props.$videoImage});
  background-position: center;
  background-size: 100%;
  color: #fff;
  font-size: 1.2em;
  width: 50rem;
  min-width: 50rem;
  height: 30rem;
  min-height: 30rem;
  box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  .play-background {
    width: 6.8rem;
    height: 6.8rem;
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
          {id === "video" && videos.length > 6 && (
            <li>
              <Link>View All {viewAll}</Link>
            </li>
          )}
          {id === "poster" && posters.length > 6 && (
            <li>
              {" "}
              <Link>View All {viewAll}</Link>
            </li>
          )}
          {id === "backdrop" && backdrops.length > 6 && (
            <li>
              <Link>View All {viewAll}</Link>
            </li>
          )}
        </ul>
      </MediaMenu>
      <Content>
        <div className="list-contents scroll">
          {(id === "video" || id === "popular") &&
            videosShow &&
            videosShow.map((item) => (
              <Modal key={item.key}>
                <Modal.Open opens="show-video" moveId={item.key}>
                  <VideoImage
                    className="video"
                    $videoImage={`https://i.ytimg.com/vi/${item.key}/hqdefault.jpg`}
                  >
                    <div className="play-background">
                      <FaPlay></FaPlay>
                    </div>
                  </VideoImage>
                </Modal.Open>
                <Modal.Window name="show-video" movieName={item.title}>
                  <YoutubeFrame keyMovie={item.key} />
                </Modal.Window>
              </Modal>
            ))}
          {(id === "backdrop" || id === "popular") &&
            backdropsShow &&
            backdropsShow.map((item) => (
              <div className="backdrop" key={item.file_path}>
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
              <div className="poster" key={item.file_path}>
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
