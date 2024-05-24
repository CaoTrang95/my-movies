import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getListGenresAsync } from "./genresSlice";
import { setWithGenres } from "./searchSlice";

const StyledGenres = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e3e3e3;
  padding: 14px 16px 16px;
  h3 {
    width: 100%;
    font-size: 1em;
    font-weight: 300;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
  }
  li {
    display: inline-flex;
    border: 1px solid #9e9e9e;
    border-radius: 14px;
    padding: 4px 12px;
    font-size: 0.9em;
    margin-right: 6px;
    margin-top: 8px;
  }
  .checked,
  li:hover {
    background-color: var(--tmbLightBlue);
    color: #fff;
    border-color: var(--tmbLightBlue);
  }
`;
export default function Genres() {
  const listGenres = useSelector((state) => state.genres.listGenres);
  const withGenres = useSelector(
    (state) => state.search.paramsSearch.withGenres
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListGenresAsync());
  }, []);

  function onCheckedHandler(id) {
    dispatch(setWithGenres({ id: id }));
  }
  return (
    <StyledGenres>
      <h3>Genres</h3>
      <ul className="list-genres">
        {listGenres?.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              onCheckedHandler(item.id);
            }}
            className={withGenres.includes(item.id) ? "checked" : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </StyledGenres>
  );
}
