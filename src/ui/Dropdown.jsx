import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";
import { createContext, useContext, useRef, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
const Select = styled.div`
  border: none;
  border-radius: 0.5rem;
  background-color: #c7cdd5;
  position: relative;
  .select {
    padding: 0.6rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1.4rem;
  transition: all 0.2s;
  display: flex;
  gap: 0.6rem;
  &:hover {
    background-color: #f8f9fa;
  }
`;
const StyledDropList = styled.div`
  position: absolute;
  bottom: ${(props) =>
    props.$position.bottom === "initial"
      ? props.$position.bottom
      : props.$position.bottom + "px"};
  top: ${(props) =>
    props.$position.top === "initial"
      ? props.$position.top
      : props.$position.top + "px"};
  left: 0;
  z-index: 2001;
  background-color: var(--color-grey-0);
  border: 0.1rem solid #eee;
  box-shadow: var(--shadow-md);
  border-radius: 0.25rem;
  overflow: hidden;
  width: 100%;
  height: 20rem;
  padding-bottom: 1rem;
  padding-top: 0.8rem;
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

const heightOfList = 200;
let topOfSelect,
  bottomOfSelect,
  heightOfSelect = null;
function Dropdown({ children, options, sortValue, onClickDropItem }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState();
  const close = () => setOpenId("");
  const open = setOpenId;
  return (
    <DropdownContext.Provider
      value={{
        openId,
        close,
        open,
        options,
        sortValue,
        onClickDropItem,
        position,
        setPosition,
      }}
    >
      <Select className="Select">{children}</Select>
    </DropdownContext.Provider>
  );
}
function DropdownToggle({ id }) {
  const { openId, close, open, options, sortValue, setPosition } =
    useContext(DropdownContext);
  const sortCurrent = options.find((opt) => opt.value === sortValue)?.label;
  const SelectRef = useRef();
  function handleClick(e) {
    e.stopPropagation();
    const DomSelect = SelectRef.current.getBoundingClientRect();
    topOfSelect = DomSelect.top;
    bottomOfSelect = DomSelect.bottom;
    heightOfSelect = DomSelect.height;
    setPosition({ bottom: "initial", top: heightOfSelect });
    if (
      bottomOfSelect + heightOfList > window.innerHeight &&
      topOfSelect - heightOfList > 0
    ) {
      setPosition({ bottom: heightOfSelect, top: "initial" });
    }
    openId === "" || openId !== id ? open(id) : close();
  }
  return (
    <div className="select" ref={SelectRef} onClick={handleClick}>
      <span>{sortCurrent}</span> <FaCaretDown />
    </div>
  );
}
function DropList({ id }) {
  const { openId, close, options, position } = useContext(DropdownContext);
  const ref = useOutsideClick(close, false);
  if (openId !== id) return null;
  return (
    <StyledDropList className="StyledDropList" ref={ref} $position={position}>
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
