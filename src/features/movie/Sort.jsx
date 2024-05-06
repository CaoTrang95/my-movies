import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import SortByExpand from "./SortByExpand";
import { optionsSortList } from "../../mock-datas/optionsList";
import styled from "styled-components";
const StyledSort = styled.div`
  && h2 {
    font-size: 1.1em;
  }
`;
export default function Sort() {
  console.log("Sort re-render");
  const [isExpandSort, setIsExpandSort] = useState(true);
  const [sortValue, setSortValue] = useState("rating-asc");
  return (
    <StyledSort className="form-field">
      <div
        className="sort-filter-card"
        onClick={() => {
          setIsExpandSort((prev) => !prev);
        }}
      >
        <h2>Sort</h2>
        {isExpandSort ? <FaChevronDown /> : <FaChevronRight />}
      </div>
      {isExpandSort && (
        <SortByExpand
          optionsSortList={optionsSortList}
          sortValue={sortValue}
          onSetSortValue={setSortValue}
        />
      )}
    </StyledSort>
  );
}
