import styled from "styled-components";
import Dropdown from "../../ui/Dropdown";
const SortByExpandWrapper = styled.div`
  &.sort-expand {
    border-top: 0.1rem solid #e3e3e3;
    width: 100%;
    padding: 1.4rem 1.6rem 1.6rem;
    position: relative;
    h3 {
      width: 100%;
      font-size: 1.6rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }
  }
`;
export default function SortByExpand({
  optionsSortList,
  sortValue,
  onSetSortValue,
}) {
  return (
    <SortByExpandWrapper className="sort-expand">
      <h3> Sort Results By</h3>
      <Dropdown
        options={optionsSortList}
        sortValue={sortValue}
        onClickDropItem={onSetSortValue}
      >
        <Dropdown.DropdownToggle id="show-sort"></Dropdown.DropdownToggle>
        <Dropdown.DropList id="show-sort"></Dropdown.DropList>
      </Dropdown>
    </SortByExpandWrapper>
  );
}
