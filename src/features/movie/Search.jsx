import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getListMoviesSearchAsync, setClickedLoadMore } from "./searchSlice";
import { useCallback, useRef, useState } from "react";

const StyledSearch = styled.div`
  background-color: ${(props) =>
    props.$enableSearch ? "rgba(1, 180, 228, 1)" : "rgba(228, 228, 228, 0.7)"};
  color: ${(props) => (props.$enableSearch ? "#fff" : "rgba(0, 0, 0, 0.5)")};
  font-size: 1.2em;
  font-weight: 600;
  margin-top: 20px;
  width: 100%;
  border-radius: 20px;
`;
const StyledShortSearch = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledLongSearch = styled.div`
  width: 100vw;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(1, 180, 228, 1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function Search() {
  const dispatch = useDispatch();
  const [searchExpand, setSearchExpand] = useState(true);
  function onClickSearchHandler() {
    dispatch(setClickedLoadMore(false));
    dispatch(getListMoviesSearchAsync({ page: 1 }));
  }
  const enableSearch = useSelector((state) => state.search.enableSearch);
  const observer = useRef(null);
  const searchEle = useCallback((node) => {
    if (!node) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSearchExpand(false);
      } else {
        setSearchExpand(true);
      }
    });
    if (node) observer.current.observe(node);
  }, []);
  return (
    <>
      <StyledSearch $enableSearch={enableSearch} onClick={onClickSearchHandler}>
        <StyledShortSearch ref={searchEle}>
          <span>Search</span>
        </StyledShortSearch>
      </StyledSearch>

      {searchExpand && enableSearch && (
        <StyledSearch onClick={onClickSearchHandler}>
          <StyledLongSearch>
            <span>Search</span>
          </StyledLongSearch>
        </StyledSearch>
      )}
    </>
  );
}
