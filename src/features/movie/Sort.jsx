import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import SortByExpand from "./SortByExpand";
import { optionsSortList } from "../../mock-datas/optionsList";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setSortValue } from "./searchSlice";
const StyledSort = styled.div`
  && h2 {
    font-size: 1.8rem;
  }
`;
export default function Sort() {
  const [isExpandSort, setIsExpandSort] = useState(true);
  const mediaScreen = window.matchMedia("(max-width: 44em)");
  function changState(x) {
    if (x.matches) {
      // If media query matches
      setIsExpandSort(false);
    } else {
      setIsExpandSort(true);
    }
  }
  useEffect(() => {
    changState(mediaScreen);
    mediaScreen.addEventListener("change", function () {
      changState(mediaScreen);
    });
  }, []);

  const sortValue = useSelector((state) => state.search.paramsSearch.sortValue);
  const dispatch = useDispatch();
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
          onSetSortValue={(sortValue) => dispatch(setSortValue(sortValue))}
        />
      )}
    </StyledSort>
  );
}
