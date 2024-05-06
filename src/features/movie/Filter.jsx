import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import styled from "styled-components";
import ShowMe from "./ShowMe";
import ReleaseDates from "./ReleaseDates";

const StyledFilter = styled.div`
  margin-top: 12px;
  && h2 {
    font-size: 1.1em;
  }
`;
export default function Filter() {
  const [isExpandFilters, setIsExpandFilters] = useState(true);
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
    </StyledFilter>
  );
}
