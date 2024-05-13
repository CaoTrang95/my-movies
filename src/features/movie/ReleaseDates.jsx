import { useState } from "react";
import styled from "styled-components";
import check from "../../assets/images/check.svg";
import Dropdown from "../../ui/Dropdown";
import { optionsSortList } from "../../mock-datas/optionsList";
const StyledReleaseDates = styled.div`
  width: 100%;
  padding: 14px 16px 16px;
  border-top: 1px solid #e3e3e3;
  h3 {
    width: 100%;
    font-size: 1em;
    font-weight: 300;
    margin-bottom: 10px;
  }
  .check-form {
    width: 100%;
    gap: 6px;
    display: flex;
    align-items: center;
  }
  input[type="radio"],
  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    -webkit-appearance: none;
    appearance: none;
    border-width: 1px;
    border-radius: 0.25rem;
    border-style: solid;
    border-color: #adb5bd;
    position: relative;
  }
  input[type="date"] {
    padding: 6px;
    border-color: #ced4da;
    border-width: 1px;
    border-radius: 5px;
    border-style: solid;
    margin-top: 5px;
  }
  input:checked {
    border-color: var(--tmbLightBlue);
    color: #fff;
    background-color: var(--tmbLightBlue);
  }
  input:checked::before {
    width: 1rem;
    height: 1rem;
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
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .from-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #a4a4a4;
    p {
      width: 100px;
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
  const [sortValue, setSortValue] = useState("rating-asc");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("2024-11-12");
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
    setFromDate(e.target.value);
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
              {" "}
              <Dropdown.DropdownToggle id="show-countries"></Dropdown.DropdownToggle>{" "}
              <Dropdown.DropList id="show-countries"></Dropdown.DropList>{" "}
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
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
      </ListCheckbox>
    </StyledReleaseDates>
  );
}
