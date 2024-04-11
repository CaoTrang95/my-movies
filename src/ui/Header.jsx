import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: rgba(3, 37, 65, 1);
`;
const NavWrapper = styled.div`
  height: 50px;
  padding: 0 40px;
`;
const NavLeft = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    display: block;
    width: 154px;
    margin-right: 30px;
  }
  & ul {
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    color: white;
    gap: 30px;
    list-style-type: none;
  }
  & li {
    cursor: pointer;
  }
`;

const TooltipMenu = styled.div`
  display: none;
  visibility: hidden;
  opacity: 0;
  width: 173.078px;
  height: 138px;
  z-index: 1000;
  position: absolute;
  top: 45px;
  left: 0px;
  border-radius: 0 0 0.25rem 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.15);

  & ul {
    position: absolute;
    line-height: 24px;
    display: block;
    border-color: rgba(0, 0, 0, 0.15);
    color: #212529;
    background-color: #fff;
    width: 100%;
    padding: 0.5rem 0;
    border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
  }
  & li {
    color: #000;
    font-family: sans-serif;
    font-size: 15px;
    width: 100%;
    background: #fff;
  }
  & li:hover {
    background-color: #f8f9fa;
    cursor: pointer;
  }
  & a {
    padding: 3px 1.5rem;
    padding-right: calc(3rem + 16px);
    color: #000;
    white-space: nowrap;
    cursor: pointer;
    text-decoration: none;
  }
`;
const Tooltip = styled.li`
  height: 100%;
  position: relative !important;
  display: flex;
  align-items: center;

  &:hover ${TooltipMenu} {
    visibility: visible;
    display: block;
    opacity: 1;
    cursor: pointer;
    z-index: 3000;
  }
`;

const NavRight = styled.div``;
export default function Header() {
  return (
    <>
      <StyledHeader>
        <NavWrapper>
          <NavLeft>
            <Link to="/">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="logo"
              ></img>
            </Link>
            <ul>
              <Tooltip>
                <span>Movies</span>
                <TooltipMenu>
                  <ul>
                    <li>
                      <Link to="/">Popular</Link>
                    </li>
                    <li>
                      <Link to="/">Now Playing</Link>
                    </li>
                    <li>
                      <Link to="/">Upcoming</Link>
                    </li>
                    <li>
                      <Link to="/">Top Rated</Link>
                    </li>
                  </ul>
                </TooltipMenu>
              </Tooltip>
              <Tooltip>
                <span>TV Shows</span>
                <TooltipMenu>
                  <ul>
                    <li>
                      <Link to="/">Popular</Link>
                    </li>
                    <li>
                      <Link to="/">Airing Today</Link>
                    </li>
                    <li>
                      <Link to="/">On TV</Link>
                    </li>
                    <li>
                      <Link to="/">Top Rated</Link>
                    </li>
                  </ul>
                </TooltipMenu>
              </Tooltip>
              <Tooltip>
                <span>People</span>
                {/* <TooltipMenu>
                  <ul>
                    <li>
                      <Link to="/">Popular People</Link>
                    </li>
                  </ul>
                </TooltipMenu> */}
              </Tooltip>
              <li>More</li>
            </ul>
          </NavLeft>
        </NavWrapper>
        <NavRight></NavRight>
      </StyledHeader>
    </>
  );
}
