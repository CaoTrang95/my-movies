import { createContext } from "react";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledList = styled.ul`
  min-height: 100px;
  width: 45%;
  background-color: gray;
  box-shadow: black;
`;
const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;

  &:hover {
    background-color: green;
  }
`;

const MenusContext = createContext();

export function Menus({ children }) {
  return { children };
}
