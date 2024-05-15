import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getListMoviesSearchAsync } from "./searchSlice";

const StyledSearch = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: ${(props) =>
    props.$enableSearch ? "rgba(1, 180, 228, 1)" : "rgba(228, 228, 228, 0.7)"};
  color: ${(props) => (props.$enableSearch ? "#fff" : "rgba(0, 0, 0, 0.5)")};
  font-size: 1.2em;
  font-weight: 600;
  margin-top: 20px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function Search() {
  const dispatch = useDispatch();
  function onClickSearchHandler() {
    dispatch(getListMoviesSearchAsync({ page: 1 }));
    console.log("Search");
  }
  const { enableSearch } = useSelector((state) => state.search);
  return (
    <StyledSearch $enableSearch={enableSearch} onClick={onClickSearchHandler}>
      Search
    </StyledSearch>
  );
}
