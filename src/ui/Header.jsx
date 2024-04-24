import styled from "styled-components";
import { Link } from "react-router-dom";
import MyToolTip from "./Tooltip";
import { FaPlus } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 100%;
  background-color: rgba(3, 37, 65, 1);
  font-weight: 600;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  transition: top 0.2s linear;
`;
const NavWrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  max-width: var(--max-width);
`;
const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  a {
    display: flex;
    align-items: center;
    width: 154px;
    margin-right: 30px;
    height: 20px;
  }
  ul {
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    color: white;
    list-style-type: none;
  }
  li {
    cursor: pointer;
    margin-right: 24px;
  }
  li a {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    margin-right: 0;
  }
`;
const BoxVisible = styled.li`
  font-weight: 600;
  width: 28px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
  border-radius: 3px;
  padding: 3px 5px;
  font-size: 0.9rem;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const tooltipMovies = [
  { link: "/", content: "Popular" },
  { link: "/", content: "Now Playing" },
  { link: "/", content: "Upcoming" },
  { link: "/", content: "Top Rated" },
];
const tooltipTvShows = [
  { link: "/", content: "Popular" },
  { link: "/", content: "Airing Today" },
  { link: "/", content: "On TV" },
  { link: "/", content: "Top Rated" },
];
const tooltipPeople = [{ link: "/", content: "Popular People" }];
const tooltipMore = [
  { link: "/", content: "Discussions" },
  { link: "/", content: "Leaderboard" },
  { link: "/", content: "Support" },
  { link: "/", content: "API" },
];
export default function Header() {
  useEffect(() => {
    document.addEventListener("scroll", () => handleScroll());
    return () => {
      document.removeEventListener("scroll", () => handleScroll());
    };
  }, []);
  const [isNavbarDown, setIsNavbarDown] = useState(true);
  let lastScrollTop = 0;
  var delta = 10;
  var navbarHeight = 64;
  const handleScroll = () => {
    var scrollTop = window.scrollY;
    // Make sure scroll more than delta
    if (Math.abs(lastScrollTop - scrollTop) <= delta) {
      return;
    } else {
      if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
        // Scroll Down: hidden navbar
        setIsNavbarDown(false);
      } else {
        // Scroll Up: show navbar
        if (scrollTop + window.innerHeight < document.body.scrollHeight) {
          setIsNavbarDown(true);
        }
      }
    }
    lastScrollTop = scrollTop;
  };
  return (
    <>
      <StyledHeader className={`StyledHeader ${isNavbarDown ? "" : "nav-up"}`}>
        <NavWrapper className="NavWrapper">
          <NavItem className="NavItem">
            <Link to="/">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="logo"
              ></img>
            </Link>
            <ul>
              <MyToolTip name="Movies" list={tooltipMovies} />
              <MyToolTip name="TV Shows" list={tooltipTvShows} />
              <MyToolTip name="People" list={tooltipPeople} />
              <MyToolTip name="More" list={tooltipMore} />
            </ul>
          </NavItem>
          <NavItem className="NavItem">
            <ul>
              <li>
                <FaPlus />
              </li>
              <BoxVisible className="BoxVisible">EN</BoxVisible>
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <Link>Join TMDB</Link>
              </li>
              <li>
                <IoSearchSharp color="#0aacf1" size={24} />
              </li>
            </ul>
          </NavItem>
        </NavWrapper>
      </StyledHeader>
    </>
  );
}
