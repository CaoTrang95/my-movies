import { Link } from "react-router-dom";
import styled from "styled-components";

const TooltipMenu = styled.div`
  transition: 200ms;
  visibility: hidden;
  opacity: 0;
  width: 170px;
  position: absolute;
  top: 45px;
  left: 0px;
  border-radius: 0 0 0.25rem 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  font-weight: 400;
  && ul {
    line-height: 24px;
    display: block;
    background-color: #fff;
    padding: 0.5rem 0;
    border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
  }
  & ul li {
    width: 100%;
    color: #000;
    font-family: sans-serif;
    font-size: 15px;
    padding: 5px 1px;
  }
  & li:hover {
    background-color: #f8f9fa;
    cursor: pointer;
  }
  && a {
    padding: 3px 1.5rem;
    color: #000;
    white-space: nowrap;
  }
`;
const Tooltip = styled.li`
  height: 100%;
  position: relative !important;
  display: flex;
  align-items: center;
  &:hover ${TooltipMenu} {
    transition: 200ms;
    visibility: visible;
    opacity: 1;
    cursor: pointer;
    z-index: 3000;
  }
`;
export default function MyToolTip({ name, list }) {
  return (
    <Tooltip className="Tooltip">
      {name}
      <TooltipMenu className="TooltipMenu">
        <ul>
          {list.map((item) => (
            <li>
              <Link to={item.link}>{item.content}</Link>{" "}
            </li>
          ))}
        </ul>
      </TooltipMenu>
    </Tooltip>
  );
}
