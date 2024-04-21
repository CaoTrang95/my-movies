import styled from "styled-components";
import Tab from "../../ui/Tab";
import { useDispatch, useSelector } from "react-redux";
import {
  getListMoviesTrailersAsync,
  setImageBackground,
  setTabTrailers,
} from "../../redux/homePageSlice";
import { useEffect, useState } from "react";
import MovieVideo from "./MovieVideo";
import ListMovies from "./ListMovies";

const TrailersWrapper = styled.div`
  width: 100%;
  height: 354px;
  display: flex;
  justify-content: center;
`;
const TrailersContent = styled.div`
  width: 100%;
  max-width: var(--max-width);
  height: 100%;
  justify-content: center;
  background-image: url(${(props) => props.$bg});
  background-position: center center;
  background-size: cover;
  color: #fff;
  transition: all 0.5s;
  .image-background {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.75) 0%,
      rgba(3, 37, 65, 0.75) 100%
    );
    padding: 30px 0 20px 0;
  }
`;
const popularTabs = [
  { id: "on-tv", title: "On TV" },
  { id: "in-theaters", title: "In Theaters" },
];
export default function LatestTrailers() {
  const {
    listMoviesTrailers,
    cardTrailersVisibility,
    tabTrailers,
    imageBackground,
  } = useSelector((state) => state.homepage);

  //   const [imageBackground, setImageBackground] = useState("");
  const dispatch = useDispatch();

  function handleOnclickTab(newTab) {
    dispatch(setTabTrailers(newTab));
  }
  function onSetImageBackground(image) {
    dispatch(
      setImageBackground(
        "https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces" + image
      )
    );
  }
  useEffect(() => {
    dispatch(getListMoviesTrailersAsync({ tabTrailers: tabTrailers }));
  }, [dispatch, tabTrailers]);
  const tabIndex = popularTabs.findIndex((tab) => tab.id === tabTrailers);
  return (
    <TrailersWrapper className="TrailersWrapper">
      <TrailersContent className="TrailersContent" $bg={imageBackground}>
        <div className="image-background">
          <Tab
            title="Latest Trailers"
            tabs={popularTabs}
            onTabClick={(id) => handleOnclickTab(id)}
            activeTab={tabTrailers}
            tabIndex={tabIndex}
          />
          <ListMovies
            cardVisibility={cardTrailersVisibility}
            listMovies={listMoviesTrailers}
            render={(movie) => (
              <MovieVideo
                onSetImageBackground={onSetImageBackground}
                key={movie.id}
                movie={movie}
              />
            )}
          />
        </div>
      </TrailersContent>
    </TrailersWrapper>
  );
}
