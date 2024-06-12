import { useState } from "react";
import styled from "styled-components";
import check from "../../assets/images/check.svg";
import Dropdown from "../../ui/Dropdown";
import { optionsSortList } from "../../mock-datas/optionsList";
import { useDispatch, useSelector } from "react-redux";
import { setFromDate, setToDate } from "./searchSlice";
const StyledReleaseDates = styled.div`
  width: 100%;
  padding: 1.4rem 1.6rem 1.6rem;
  border-top: 0.1rem solid #e3e3e3;
  h3 {
    width: 100%;
    font-size: 1.6rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }
  .check-form {
    width: 100%;
    gap: 0.6rem;
    display: flex;
    align-items: center;
  }
  input[type="radio"],
  input[type="checkbox"] {
    width: 1.6rem;
    height: 1.6rem;
    -webkit-appearance: none;
    appearance: none;
    border-width: 0.1rem;
    border-radius: 0.25rem;
    border-style: solid;
    border-color: #adb5bd;
    position: relative;
  }
  input[type="date"] {
    padding: 0.6rem;
    border-color: #ced4da;
    border-width: 0.1rem;
    border-radius: 0.5rem;
    border-style: solid;
    margin-top: 0.5rem;
  }
  input:checked {
    border-color: var(--tmbLightBlue);
    color: #fff;
    background-color: var(--tmbLightBlue);
  }
  input:checked::before {
    width: 1.6rem;
    height: 1.6rem;
    font-size: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    content: "";
    background-size: 50%;
    background-position: 50%;
    background-repeat: no-repeat;
    transform: scale(1) translate(-50%, -50%);
    background-image: url(${check});
  }
  .countries {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  .from-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #a4a4a4;
    p {
      width: 10rem;
    }
  }
`;
const ListCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const releaseDates = [
  // { id: 0, label: "Search all releases?" },
  // { id: 1, label: "Search all countries?" },
  { id: 2, label: "Theatrical (limited)" },
  { id: 3, label: "Theatrical" },
  { id: 4, label: "Premiere" },
  { id: 5, label: "Digital" },
  { id: 6, label: "Physical" },
  { id: 7, label: "TV" },
];
export default function ReleaseDates() {
  const [isSearchAllReleases, setIsSearchAllReleases] = useState(true);
  const [isSearchAllCountries, setIsSearchAllCountries] = useState(true);
  const [listCheckBox, setListCheckBox] = useState([2, 3, 4, 5, 6, 7]);
  const [sortValue, setSortValue] = useState("original_title.asc");
  const fromDate = useSelector((state) => state.search.paramsSearch.fromDate);
  const toDate = useSelector((state) => state.search.paramsSearch.toDate);
  const dispatch = useDispatch();
  function onChangeHandler(id) {
    setListCheckBox((prev) => {
      const isChecked = listCheckBox.includes(id);
      if (isChecked) {
        //uncheck
        return prev?.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  }
  function onFromDateHandler(e) {
    dispatch(setFromDate(e.target.value));
  }
  return (
    <StyledReleaseDates>
      <h3>Release Dates</h3>
      <ListCheckbox>
        <div className="check-form">
          <input
            id="all-releases"
            type="checkbox"
            value="all-releases"
            checked={isSearchAllReleases}
            onChange={() => setIsSearchAllReleases((prev) => !prev)}
          />
          <label htmlFor="all-releases">Search all releases?</label>
        </div>
        {!isSearchAllReleases && (
          <div className="check-form">
            <input
              id="all-countries"
              type="checkbox"
              value="all-countries"
              checked={isSearchAllCountries}
              onChange={() => setIsSearchAllCountries((prev) => !prev)}
            />
            <label htmlFor="all-countries">Search all countries?</label>
          </div>
        )}
        {!isSearchAllCountries && !isSearchAllReleases && (
          <div className="countries">
            <Dropdown
              options={optionsSortList}
              sortValue={sortValue}
              onClickDropItem={setSortValue}
            >
              <Dropdown.DropdownToggle id="show-countries"></Dropdown.DropdownToggle>
              <Dropdown.DropList id="show-countries"></Dropdown.DropList>
            </Dropdown>
          </div>
        )}
        {!isSearchAllReleases &&
          releaseDates.map((item) => (
            <div className="check-form" key={item.id}>
              <input
                id={item.id}
                type="checkbox"
                value={item.id}
                checked={listCheckBox?.includes(item.id)}
                onChange={() => onChangeHandler(item.id)}
              />
              <label htmlFor={item.id}>{item.label}</label>
            </div>
          ))}
        <div className="from-date">
          <label htmlFor="from-date">from</label>
          <input
            type="date"
            id="from-date"
            value={fromDate}
            onChange={onFromDateHandler}
          />
        </div>
        <div className="from-date">
          <label htmlFor="to-date">to</label>
          <input
            type="date"
            id="to-date"
            value={toDate}
            onChange={(e) => dispatch(setToDate(e.target.value))}
          />
        </div>
      </ListCheckbox>
    </StyledReleaseDates>
  );
}
