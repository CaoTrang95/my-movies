import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getListGenresAsync } from "./genresSlice";
import { setWithGenres } from "./searchSlice";

const StyledGenres = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.1rem solid #e3e3e3;
  padding: 1.4rem 1.6rem 1.6rem;
  h3 {
    width: 100%;
    font-size: 1.6rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
  }
  li {
    display: inline-flex;
    border: 0.1rem solid #9e9e9e;
    border-radius: 1.4rem;
    padding: 0.4rem 1.2rem;
    font-size: 1.4rem;
    margin-right: 0.6rem;
    margin-top: 0.8rem;
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
