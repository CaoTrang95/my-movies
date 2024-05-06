import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisHorizontalCircle } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
const Menu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const StyledToggle = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 4;
  opacity: 0.6;
  &:hover {
    opacity: 1;
    filter: brightness(0) saturate(100%) invert(53%) sepia(33%) saturate(3054%)
      hue-rotate(156deg) brightness(98%) contrast(99%);
    cursor: pointer;
  }
  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #fff;
  }
`;
const StyledList = styled.ul`
  position: absolute;
  z-index: 1;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: 0.25rem;
  overflow: hidden;
  right: ${(props) => props.$position.x}px;
  top: ${(props) => props.$position.y}px;
`;
const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 10px 20px;
  font-size: 0.9em;
  transition: all 0.2s;
  display: flex;
  gap: 6px;
  border-bottom: 1px solid rgba(33, 37, 41, 0.15);
  &:hover {
    background-color: var(--tmdbDarkBlue);
    color: #fff;
  }
  & svg {
    transform: translateY(1px);
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();

    // const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: 14,
      y: 36,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisHorizontalCircle />
    </StyledToggle>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return (
    // createPortal(
    <StyledList $position={position} ref={ref}>
      {children}
    </StyledList>
  );
  // document.body
  // );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
