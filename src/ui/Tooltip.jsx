import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdArrowDropDown } from "react-icons/md";
import { useRef } from "react";

const TooltipMenu = styled.div`
  transition: 200ms;
  visibility: hidden;
  opacity: 0;
  width: 17rem;
  position: absolute;
  top: 4.5rem;
  left: 0px;
  border-radius: 0 0 0.25rem 0.25rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.15);
  font-weight: 400;
  && ul {
    display: block;
    background-color: #fff;
    padding: 0.5rem 0;
    border-radius: 0.25rem;
  }
  & ul li {
    width: 100%;
    color: #000;
    font-family: sans-serif;
    font-size: 15px;
    padding: 0.5rem 0.1rem;
  }
  & li:hover {
    background-color: #f8f9fa;
    cursor: pointer;
  }
  && a {
    padding: 0.3rem 1.5rem;
    color: #000;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
  }
`;
const Tooltip = styled.li`
  height: 100%;
  gap: 0.6rem;
  position: relative !important;
  display: flex;
  align-items: center;
  border-bottom: ${(props) =>
    props.$selected ? "0.4rem solid var(--tmbLightBlue)" : ""};
  &:hover ${TooltipMenu} {
    transition: 200ms;
    visibility: visible;
    opacity: 1;
    cursor: pointer;
    z-index: 102;
  }
`;
export default function MyToolTip({
  name,
  list,
  showIcon = false,
  showNumber = false,
  selected = false,
}) {
  const TooltipRef = useRef();
  function onClickHandler() {
    if (TooltipRef.current) {
      TooltipRef.current.style.display = "none";

      setTimeout(() => {
        if (TooltipRef.current) TooltipRef.current.style.display = "block";
      }, "1000");
    }
  }
  return (
    <Tooltip className="Tooltip" $selected={selected}>
      {name}
      {showIcon && <MdArrowDropDown size={22} />}
      <TooltipMenu className="TooltipMenu" ref={TooltipRef}>
        <ul>
          {list.map((item, index) => (
            <li key={index} onClick={onClickHandler}>
              <Link to={item.link}>
                <span>{item.content}</span>
                <span>{showNumber && item.number}</span>
              </Link>
            </li>
          ))}
        </ul>
      </TooltipMenu>
    </Tooltip>
  );
}
