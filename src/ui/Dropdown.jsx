import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";
import { createContext, useContext, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

const Select = styled.div`
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #c7cdd5;
  display: flex;
  justify-content: space-between;
`;
const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 8px 20px;
  font-size: 0.9em;
  transition: all 0.2s;
  display: flex;
  gap: 6px;
  &:hover {
    background-color: #f8f9fa;
  }
`;
const StyledDropList = styled.div`
  position: absolute;
  z-index: 1;
  background-color: var(--color-grey-0);
  border: 1px solid #eee;
  box-shadow: var(--shadow-md);
  border-radius: 0.25rem;
  overflow: hidden;
  width: calc(100% - 32px);
  height: 200px;
  padding-bottom: 10px;
  padding-top: 8px;
  .list-content {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  ${StyledButton}.selected {
    background-color: #f8f9fa;
    font-weight: bold;
  }
  ${StyledButton}.selected option {
    font-weight: 700;
  }
  ${StyledButton}.selected:hover {
    background-color: var(--tmbLightBlue);
    color: #fff;
  }
`;

const DropdownContext = createContext();

function Dropdown({ children, options, sortValue, onClickDropItem }) {
  const [openId, setOpenId] = useState("");
  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <DropdownContext.Provider
      value={{ openId, close, open, options, sortValue, onClickDropItem }}
    >
      {children}
    </DropdownContext.Provider>
  );
}
function DropdownToggle({ id }) {
  const { openId, close, open, options, sortValue } =
    useContext(DropdownContext);
  const sortCurrent = options.find((opt) => opt.value === sortValue).label;
  function handleClick(e) {
    e.stopPropagation();
    openId === "" || openId !== id ? open(id) : close();
  }
  return (
    <Select className="Select" onClick={handleClick}>
      <span>{sortCurrent}</span>
      <FaCaretDown />
    </Select>
  );
}

function DropList({ id }) {
  const { openId, close, options } = useContext(DropdownContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return (
    <StyledDropList className="StyledDropList" ref={ref}>
      <div className="list-content">
        {options.map((opt) => (
          <DropButton opt={opt} key={opt.value}>
            {opt.label}
          </DropButton>
        ))}
      </div>
    </StyledDropList>
  );
}
function DropButton({ opt }) {
  const { close, onClickDropItem, sortValue } = useContext(DropdownContext);

  function handleClick() {
    onClickDropItem?.(opt.value);
    close();
  }

  return (
    <StyledButton
      className={`StyledButton ${sortValue === opt.value ? "selected" : ""}`}
      onClick={handleClick}
    >
      <option value={opt.value} key={opt.value}>
        {opt.label}
      </option>
    </StyledButton>
  );
}
Dropdown.DropdownToggle = DropdownToggle;
Dropdown.DropList = DropList;
export default Dropdown;
