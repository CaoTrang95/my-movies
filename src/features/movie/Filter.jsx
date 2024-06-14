import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import styled from "styled-components";
import ShowMe from "./ShowMe";
import ReleaseDates from "./ReleaseDates";
import Genres from "./Genres";

const StyledFilter = styled.div`
  margin-top: 1.2rem;
  && h2 {
    font-size: 1.8rem;
  }
`;
export default function Filter() {
  const [isExpandFilters, setIsExpandFilters] = useState(true);
  const mediaScreen = window.matchMedia("(max-width: 44em)");
  function changState(x) {
    if (x.matches) {
      // If media query matches
      setIsExpandFilters(false);
    } else {
      setIsExpandFilters(true);
    }
  }
  useEffect(() => {
    changState(mediaScreen);
    mediaScreen.addEventListener("change", function () {
      changState(mediaScreen);
    });
  }, []);
  return (
    <StyledFilter className="form-field">
      <div
        className="sort-filter-card"
        onClick={() => {
          setIsExpandFilters((prev) => !prev);
        }}
      >
        <h2>Filter</h2>
        {isExpandFilters ? <FaChevronDown /> : <FaChevronRight />}
      </div>
      {isExpandFilters && <ShowMe />}
      {isExpandFilters && <ReleaseDates />}
      {isExpandFilters && <Genres />}
    </StyledFilter>
  );
}
